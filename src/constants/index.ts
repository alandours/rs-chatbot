import { MessageRoles, UserNames } from "./enums";

export const CHATBOT_NAME = import.meta.env.VITE_CHATBOT_NAME;
export const CHATBOT_AGENT_ID = Number(import.meta.env.VITE_AGENT_ID);

export const BREAKPOINTS = {
  TABLET: 768,
};

export const MAX_FRAME_WIDTH = 600;

export const USERNAMES = {
  [MessageRoles.USER]: UserNames.USER,
  [MessageRoles.ASSISTANT]: UserNames.ASSISTANT,
  [MessageRoles.LOADER]: UserNames.ASSISTANT,
};
