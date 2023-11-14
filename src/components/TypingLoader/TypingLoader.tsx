import { Message } from "@/components/Message";
import { MessageRoles } from "@/types";

export const TypingLoader = () => (
  <Message
    data={{
      content: "Typing...",
      role: MessageRoles.LOADER,
    }}
  />
);
