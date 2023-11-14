export const CHATBOT_NAME = "Rootstrap Assistant";

export const BREAKPOINTS = {
  TABLET: 768,
};

export const MAX_FRAME_WIDTH = 600;

export enum MessageRoles {
  USER = "User",
  ASSISTANT = "Assistant",
  LOADER = "Loader",
}

enum UserNames {
  USER = "You",
  ASSISTANT = "Rootbot",
}

export const USERNAMES = {
  [MessageRoles.USER]: UserNames.USER,
  [MessageRoles.ASSISTANT]: UserNames.ASSISTANT,
  [MessageRoles.LOADER]: UserNames.ASSISTANT,
};
