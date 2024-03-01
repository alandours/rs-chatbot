import { SESSION } from "@/constants";
import { MessageRoles } from "@/constants/enums";
import { Message } from "@/types";

export const handlePendingResponse = (
  isSendingMessage: boolean,
  messages: Message[]
) => {
  if (isSendingMessage) {
    localStorage.setItem(
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
  localStorage.removeItem(SESSION.PENDING_RESPONSE);

export const isPendingResponse = () =>
  !!localStorage.getItem(SESSION.PENDING_RESPONSE);

export const getSessionSessionToken = (): string | null => {
  const sessionData = localStorage.getItem(SESSION.SESSION_TOKEN);
  return sessionData && JSON.parse(sessionData);
};

export const setSessionSessionToken = (sessionToken: string) =>
  localStorage.setItem(
    SESSION.SESSION_TOKEN,
    JSON.stringify(sessionToken)
  );

export const getSessionAgentWelcomeMessage = (): string | null => {
  const welcomeMessage = localStorage.getItem(
    SESSION.AGENT_WELCOME_MESSAGE
  );
  return welcomeMessage && JSON.parse(welcomeMessage);
}

export const setSessionAgentWelcomeMessage = (welcomeMessage: string) =>
  localStorage.setItem(
    SESSION.AGENT_WELCOME_MESSAGE,
    JSON.stringify(welcomeMessage)
  );

export const showNotification = () => {
  const messagesRead = localStorage.getItem(SESSION.MESSAGES_READ);
  return messagesRead ? !JSON.parse(messagesRead) : true;
}

export const setSessionReadMessages = (open: boolean) =>
  open && localStorage.setItem(SESSION.MESSAGES_READ, JSON.stringify(open));
