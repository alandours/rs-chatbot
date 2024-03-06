import axios, { AxiosError } from "axios";

import { Paths } from "@/constants/paths";
import { ERRORS, ERROR_MESSAGES } from "@/constants";
import { Message } from "@/types";

import { client } from "./client";

type MessagesResponse = {
  messages: Message[];
};

export const getMessages = async (
  onUnauthorizedError: (error: AxiosError) => void
): Promise<MessagesResponse | null> => {
  try {
    const { data } = await client.get(`${Paths.messages}`);
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response && axiosError.response.status === 401) {
      onUnauthorizedError(axiosError);
      return null;
    } else {
      return ERROR_MESSAGES;
    }
  }
};

type MessageResponse = {
  message: Message;
};

type SendMessageParams = {
  content: string;
};

export const sendMessage = async ({
  content
}: SendMessageParams): Promise<MessageResponse> => {
  try {
    const { data } = await client.post(Paths.messages, {
      content
    });
    return data;
  } catch (error) {
    let errorMessage = ERRORS.SEND_MESSAGE;

    if (axios.isAxiosError(error) && error.response?.data.errors) {
      const { content } = error.response.data.errors;
      errorMessage = content?.[0] || errorMessage;
    }

    throw new Error(errorMessage);
  }
};
