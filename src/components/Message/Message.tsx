import { MessageRoles, USERNAMES } from "@/constants";

import * as styles from "./styles";

type MessageProps = {
  data: {
    content: string;
    role: MessageRoles;
    createdAt?: string;
  };
};

export const Message = ({ data: { content, role, createdAt } }: MessageProps) => (
  <styles.MessageContainer $variant={role}>
    <styles.MessageHeader $variant={role}>
      <styles.Username>{USERNAMES[role]}</styles.Username>
      <styles.Time>{createdAt}</styles.Time>
    </styles.MessageHeader>
    <styles.Message $variant={role}>{content}</styles.Message>
  </styles.MessageContainer>
);
