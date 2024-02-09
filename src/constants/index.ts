import { createMessage } from "@/utils";

import { CONFIG } from "./config";
import { MessageRoles } from "./enums";

export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
};

export const MAX_FRAME_WIDTH = 480;

export const USERS = {
  ME: "You",
  ASSISTANT: CONFIG.CHATBOT_USERNAME,
};

export const USERNAMES = {
  [MessageRoles.USER]: USERS.ME,
  [MessageRoles.ASSISTANT]: USERS.ASSISTANT,
  [MessageRoles.LOADER]: USERS.ASSISTANT,
};

export const ERRORS = {
  GET_MESSAGE:
    "I'm sorry, I can't provide a response at the moment. Please try again later 🙏",
  SEND_MESSAGE: "We couldn't send your message. Please, try again.",
  RECAPTCHA_VERIFICATION:
    "We couldn't verify your humanity. Please, try again.",
};

export const ERROR_MESSAGES = {
  messages: [createMessage(ERRORS.GET_MESSAGE)],
};

export const SESSION = {
  PENDING_RESPONSE: "pendingResponse",
  SESSION_TOKEN: "sessionToken",
  MESSAGES_READ: "messagesRead",
  AGENT_WELCOME_MESSAGE: "agentWelcomeMessage",
};

export const REFETCH_INTERVAL = 5000;

export const DEFAULT_AGENT_WELCOME_MESSAGE = "👋 Greetings! Glad you’re here at Rootstrap. I’m your AI assistant. What can I do for you today?";
