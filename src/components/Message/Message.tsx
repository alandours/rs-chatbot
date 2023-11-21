import { USERNAMES } from "@/constants";
import { MessageRoles } from "@/constants/enums";

import errorIcon from "@/assets/error.webp";

import * as styles from "./styles";
import { formatDate } from "@/utils";

type MessageProps = {
  data: {
    content: string;
    role: MessageRoles;
    createdAt?: Date;
    errorMessage?: string;
  };
};

export const Message = ({
  data: { content, role, createdAt, errorMessage },
}: MessageProps) => (
  <styles.MessageContainer $variant={role}>
    <styles.MessageHeader $variant={role}>
      <styles.Username>{USERNAMES[role]}</styles.Username>
      {createdAt && <styles.Time>{formatDate(createdAt)}</styles.Time>}
    </styles.MessageHeader>
    <styles.MessageWrapper $variant={role}>
      {errorMessage && <styles.ErrorIcon src={errorIcon}></styles.ErrorIcon>}
      <styles.Message $variant={role} $error={!!errorMessage}>
        {content}
      </styles.Message>
    </styles.MessageWrapper>
    {errorMessage && <styles.ErrorMessage>{errorMessage}</styles.ErrorMessage>}
  </styles.MessageContainer>
);
