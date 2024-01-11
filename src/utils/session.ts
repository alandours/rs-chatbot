import { SESSION } from "@/constants";
import { MessageRoles } from "@/constants/enums";
import { Message } from "@/types";

export const handlePendingResponse = (
  isSendingMessage: boolean,
  messages: Message[]
) => {
  if (isSendingMessage) {
    sessionStorage.setItem(
      SESSION.PENDING_RESPONSE,
      JSON.stringify(isSendingMessage)
    );
  }

  if (
    !isSendingMessage &&
    !!messages.length &&
    messages[messages.length - 1].role === MessageRoles.ASSISTANT
  ) {
    removePendingResponse();
  }
};

export const removePendingResponse = () =>
  sessionStorage.removeItem(SESSION.PENDING_RESPONSE);

export const isPendingResponse = () =>
  !!sessionStorage.getItem(SESSION.PENDING_RESPONSE);

export const getSessionConversationId = (): number | null => {
  const sessionData = sessionStorage.getItem(SESSION.CONVERSATION_ID);
  return sessionData && JSON.parse(sessionData);
};

export const setSessionConversationId = (conversationId: number) =>
  sessionStorage.setItem(
    SESSION.CONVERSATION_ID,
    JSON.stringify(conversationId)
  );
