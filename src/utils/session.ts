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

export const getSessionSessionToken = (): string | null => {
  const sessionData = sessionStorage.getItem(SESSION.SESSION_TOKEN);
  return sessionData && JSON.parse(sessionData);
};

export const setSessionSessionToken = (sessionToken: string) =>
  sessionStorage.setItem(
    SESSION.SESSION_TOKEN,
    JSON.stringify(sessionToken)
  );

export const getSessionAgentWelcomeMessage = (): string | null => {
  const welcomeMessage = sessionStorage.getItem(
    SESSION.AGENT_WELCOME_MESSAGE
  );
  return welcomeMessage && JSON.parse(welcomeMessage);
}

export const setSessionAgentWelcomeMessage = (welcomeMessage: string) =>
  sessionStorage.setItem(
    SESSION.AGENT_WELCOME_MESSAGE,
    JSON.stringify(welcomeMessage)
  );

export const showNotification = () => {
  const messagesRead = sessionStorage.getItem(SESSION.MESSAGES_READ);
  return messagesRead && !JSON.parse(messagesRead);
}

export const setSessionReadMessages = (open: boolean) =>
  open && sessionStorage.setItem(SESSION.MESSAGES_READ, JSON.stringify(open));