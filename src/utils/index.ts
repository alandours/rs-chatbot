import { Message, MessageRoles } from "@/types";

export const formatDate = (date: Date) =>
  new Date(date)
    .toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
    .toLowerCase()
    .replace(/\s/, "");

export const createMessage = (
  content: string,
  role = MessageRoles.ASSISTANT
): Message => ({
  content,
  role,
  createdAt: new Date(),
});
