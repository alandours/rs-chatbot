import { SESSION } from "@/constants";
import { MessageRoles } from "@/constants/enums";
import { Message } from "@/types";

export const handleRefetchMessage = (
  isSendingMessage: boolean,
  messages: Message[]
) => {
  if (isSendingMessage) {
    sessionStorage.setItem(
      SESSION.REFETCH_LAST_MESSAGE,
      JSON.stringify(isSendingMessage)
    );
  }

  if (
    !isSendingMessage &&
    !!messages.length &&
    messages[messages.length - 1].role === MessageRoles.ASSISTANT
  ) {
    sessionStorage.removeItem(SESSION.REFETCH_LAST_MESSAGE);
  }
};

export const refetchLastMessage = () =>
  !!sessionStorage.getItem(SESSION.REFETCH_LAST_MESSAGE);

export const getSessionConversationId = (): number | null => {
  const sessionData = sessionStorage.getItem(SESSION.CONVERSATION_ID);
  return sessionData && JSON.parse(sessionData);
};

export const setSessionConversationId = (conversationId: number) =>
  sessionStorage.setItem(
    SESSION.CONVERSATION_ID,
    JSON.stringify(conversationId)
  );

export const showNotification = () =>
  !sessionStorage.getItem(SESSION.MESSAGES_READ);

export const setSessionReadMessages = (open: boolean) =>
  open && sessionStorage.setItem(SESSION.MESSAGES_READ, JSON.stringify(open));