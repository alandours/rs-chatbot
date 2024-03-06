import { useQuery, useMutation } from "react-query";

import { REFETCH_INTERVAL } from "@/constants";
import { Queries } from "@/constants/enums";
import { SessionResponse, createSession } from "@/services/sessions";
import { getMessages, sendMessage } from "@/services/messages";
import { RecaptchaResponse, verifyRecaptcha } from "@/services/recaptchas";
import { isPendingResponse } from "@/utils/session";

import { queryClient } from "./queryClient";
import { AxiosError } from "axios";

export const useCreateSession = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: SessionResponse) => void;
  onError: (error: Error) => void;
}) => {
  return useMutation(createSession, { onSuccess, onError });
};

export const useCreateRecaptcha = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: RecaptchaResponse) => void;
  onError: (error: Error) => void;
}) => {
  return useMutation(verifyRecaptcha, { onSuccess, onError });
};

interface GetMessageOptions {
  sessionToken?: string;
  onUnauthorizedError: (error: AxiosError) => void;
}

export const useGetMessages = ({
  sessionToken,
  onUnauthorizedError,
}: GetMessageOptions) => {
  const { data, isLoading } = useQuery(
    [Queries.messages],
    () => getMessages(onUnauthorizedError),
    {
      enabled: !!sessionToken,
      refetchInterval: isPendingResponse() && REFETCH_INTERVAL,
      refetchOnWindowFocus: false,
    }
  );

  return {
    messages: data?.messages || [],
    isLoading,
  };
};

export const useSendMessage = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  return useMutation(sendMessage, {
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [Queries.messages],
      });
    },
    onError,
  });
};
