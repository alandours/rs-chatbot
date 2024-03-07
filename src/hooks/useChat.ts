import { useCallback, useContext, useEffect, useState } from "react";

import { ERRORS } from "@/constants";
import { ChatbotContext } from "@/context/ChatbotContext";
import {
  useCreateSession,
  useGetMessages,
  useCreateRecaptcha
} from "@/queries";
import { setSessionTokenHeader } from "@/services/client";
import { Message } from "@/types";
import { createMessage } from "@/utils";
import { getSessionSessionToken } from "@/utils/session";

export const useChat = () => {
  const {
    sessionToken,
    storeSessionToken,
    restoreSession,
    agentWelcomeMessage,
    storeAgentWelcomeMessage,
    setValidRecaptcha,
    captchaToken,
    validRecaptcha
  } = useContext(ChatbotContext);

  const [welcomeMessage, setWelcomeMessage] = useState<Message>();

  const { messages } = useGetMessages({
    sessionToken,
    onUnauthorizedError: () => {
      createSession();
    }
  });

  const {
    mutate: createSession,
    isLoading,
    isError: hasSessionError
  } = useCreateSession({
    onSuccess: async ({ token, agent }) => {
      storeSessionToken(token);
      storeAgentWelcomeMessage(agent.welcomeMessage);
      setSessionTokenHeader(String(token));
    },
    onError: (error: Error) => {
      setWelcomeMessage(createMessage(error.message));
    }
  });

  const { mutate: verifyRecaptcha } = useCreateRecaptcha({
    onSuccess: ({ success }) => {
      setValidRecaptcha(success);

      if (!success) {
        setWelcomeMessage(createMessage(ERRORS.RECAPTCHA_VERIFICATION));
      }
    },
    onError: (error: Error) => {
      setWelcomeMessage(createMessage(error.message));
    }
  });

  useEffect(() => {
    if (captchaToken && sessionToken) {
      verifyRecaptcha({ token: captchaToken });
    }
  }, [captchaToken, verifyRecaptcha, sessionToken]);

  const createChat = useCallback(async () => {
    const sessionSessionToken = getSessionSessionToken();

    if (
      !sessionSessionToken &&
      !sessionToken &&
      !isLoading &&
      !hasSessionError
    ) {
      createSession();
    } else {
      if (sessionSessionToken) {
        restoreSession(sessionSessionToken);
        setSessionTokenHeader(String(sessionSessionToken));
      }
    }

    if (validRecaptcha) {
      setWelcomeMessage(createMessage(String(agentWelcomeMessage)));
    }
  }, [
    sessionToken,
    restoreSession,
    isLoading,
    validRecaptcha,
    createSession,
    agentWelcomeMessage,
    hasSessionError
  ]);

  return { createChat, messages, welcomeMessage };
};
