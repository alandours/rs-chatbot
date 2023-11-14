import { Message } from "@/components/Message";
import { MessageRoles } from "@/constants";

export const TypingLoader = () => (
  <Message
    data={{
      content: "Typing...",
      role: MessageRoles.LOADER,
    }}
  />
);
