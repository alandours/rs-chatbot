import { USERNAMES } from "@/constants";
import { MessageRoles } from "@/types";

import errorIcon from "@/assets/error.webp";

import * as styles from "./styles";
import { formatDate } from "@/utils";

type MessageProps = {
  data: {
    content: string;
    role: MessageRoles;
    createdAt?: Date;
  };
  error?: string;
};

export const Message = ({
  data: { content, role, createdAt },
  error,
}: MessageProps) => (
  <styles.MessageContainer $variant={role}>
    <styles.MessageHeader $variant={role}>
      <styles.Username>{USERNAMES[role]}</styles.Username>
      {createdAt && <styles.Time>{formatDate(createdAt)}</styles.Time>}
    </styles.MessageHeader>
    <styles.MessageWrapper $variant={role}>
      {error && <styles.ErrorIcon src={errorIcon}></styles.ErrorIcon>}
      <styles.Message $variant={role} $error={!!error}>
        {content}
      </styles.Message>
    </styles.MessageWrapper>
    {error && <styles.ErrorMessage>{error}</styles.ErrorMessage>}
  </styles.MessageContainer>
);
