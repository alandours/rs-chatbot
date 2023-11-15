export enum MessageRoles {
  USER = "user",
  ASSISTANT = "assistant",
  LOADER = "loader",
}

export enum UserNames {
  USER = "You",
  ASSISTANT = import.meta.env.VITE_CHATBOT_USERNAME,
}

export enum Queries {
  agents = "agents",
  messages = "messages",
}
