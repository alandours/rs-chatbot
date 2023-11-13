export const CHATBOT_NAME = import.meta.env.VITE_CHATBOT_NAME;

export const BREAKPOINTS = {
  TABLET: 768,
};

export const MAX_FRAME_WIDTH = 600;

export enum MessageRoles {
  USER = "user",
  ASSISTANT = "assistant",
  LOADER = "loader",
}

enum UserNames {
  USER = "You",
  ASSISTANT = import.meta.env.VITE_CHATBOT_USERNAME,
}

export const USERNAMES = {
  [MessageRoles.USER]: UserNames.USER,
  [MessageRoles.ASSISTANT]: UserNames.ASSISTANT,
  [MessageRoles.LOADER]: UserNames.ASSISTANT,
};
