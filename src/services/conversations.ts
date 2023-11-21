import { Paths } from "@/constants/paths";
import { ERRORS } from "@/constants";
import { Conversation } from "@/types";

import { client, getQueryParams } from "./client";

export type ConversationResponse = {
  conversation: Conversation;
};

export const createConversation = async (
  agentId: number
): Promise<ConversationResponse> => {
  try {
    const { data } = await client.post(
      Paths.conversations,
      getQueryParams(agentId)
    );
    return data;
  } catch (error) {
    throw new Error(ERRORS.GET_MESSAGE);
  }
};
