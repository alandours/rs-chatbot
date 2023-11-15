import { Paths } from "@/constants/paths";
import { Message } from "@/types";

import { client, getQueryParams } from "./client";
import { ERRORS, ERROR_MESSAGES } from "@/constants";

type MessagesResponse = {
  messages: Message[];
};

type GetMessagesParams = {
  conversationId?: number;
  agentId?: number;
};

export const getMessages = async ({
  agentId,
  conversationId,
}: GetMessagesParams): Promise<MessagesResponse> => {
  try {
    if (!agentId) {
      return ERROR_MESSAGES;
    }

    const { data } = await client.get(
      `${Paths.messages}?conversation_id=${conversationId}`,
      {
        params: getQueryParams(agentId),
      }
    );
    return data;
  } catch (error) {
    return ERROR_MESSAGES;
  }
};

type MessageResponse = {
  message: Message;
};

type SendMessageParams = {
  conversationId: number;
  content: string;
};

export const sendMessage = async ({
  conversationId,
  content,
}: SendMessageParams): Promise<MessageResponse> => {
  try {
    const { data } = await client.post(Paths.messages, {
      content,
      conversationId,
    });
    return data;
  } catch (error) {
    throw new Error(ERRORS.SEND_MESSAGE);
  }
};
