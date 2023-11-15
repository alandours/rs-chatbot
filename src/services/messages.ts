import { Paths } from "@/constants/paths";
import { Message } from "@/types";
import { createMessage } from "@/utils";

import { client, getQueryParams } from "./client";
import { ERROR_MESSAGE } from "@/constants";

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
      throw new Error();
    }
    
    const { data } = await client.get(
      `${Paths.messages}?conversation_id=${conversationId}`,
      {
        params: getQueryParams(agentId),
      }
    );
    return data;
  } catch (error) {
    return {
      messages: [createMessage(ERROR_MESSAGE)],
    };
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
    throw new Error();
  }
};
