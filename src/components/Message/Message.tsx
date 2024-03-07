import { USERNAMES } from "@/constants";
import { MessageRoles } from "@/constants/enums";
import linkifyHtml from "linkify-html";
import sanitizeHtml from "sanitize-html";

import errorIcon from "@/assets/error.webp";

import * as styles from "./styles";
import { formatDate } from "@/utils";

type MessageProps = {
  data: {
    content: string | string[];
    role: MessageRoles;
    createdAt?: Date;
    errorMessage?: string;
  };
};

const options = {
  target: "_blank",
  rel: "noopener noreferrer"
};

export const Message = ({
  data: { content, role, createdAt, errorMessage }
}: MessageProps) => {
  const contentArray = Array.isArray(content) ? content : [content];

  return (
    <styles.MessageContainer $variant={role}>
      <styles.MessageHeader $variant={role}>
        <styles.Username>{USERNAMES[role]}</styles.Username>
        {createdAt && <styles.Time>{formatDate(createdAt)}</styles.Time>}
      </styles.MessageHeader>
      {contentArray.map((content) => (
        <styles.MessageWrapper $variant={role} key={content}>
          {errorMessage && (
            <styles.ErrorIcon src={errorIcon}></styles.ErrorIcon>
          )}
          <styles.Message $variant={role} $error={!!errorMessage}>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(linkifyHtml(content, options))
              }}
            />
          </styles.Message>
        </styles.MessageWrapper>
      ))}
      {errorMessage && (
        <styles.ErrorMessage>{errorMessage}</styles.ErrorMessage>
      )}
    </styles.MessageContainer>
  );
};
