import { Message } from "@/components/Message";
import { MessageRoles } from "@/constants/enums";

export const TypingLoader = () => (
  <Message
    data={{
      content: "Typing...",
      role: MessageRoles.LOADER,
    }}
  />
);
