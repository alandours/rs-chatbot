import { Ref } from "react";

import robotIcon from "@/assets/robot.webp";

import * as styles from "./styles";

type OpenChatButtonProps = {
  chatbotRef: Ref<HTMLDivElement>;
  openChat: () => void;
};

export const OpenChatButton = ({
  chatbotRef,
  openChat,
}: OpenChatButtonProps) => (
  <styles.OpenChat ref={chatbotRef}>
    <styles.OpenChatButton onClick={openChat}>
      <styles.ChatIcon src={robotIcon} alt="Open chat" />
    </styles.OpenChatButton>
  </styles.OpenChat>
);
