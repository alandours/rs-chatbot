import { useContext } from "react";

import { ChatbotContext } from "@/context/ChatbotContext";
import { showNotification } from "@/utils/session";

import robotIcon from "@/assets/robot.webp";

import * as styles from "./styles";

export const OpenChatButton = () => {
  const { chatbotRef, openChat } = useContext(ChatbotContext);

  return (
    <styles.OpenChat ref={chatbotRef}>
      <styles.OpenChatButtonGradientBorder>
        <styles.OpenChatButton
          aria-label="Chat With Us - Rootstrap"
          onClick={openChat}
        >
          <styles.ChatIcon src={robotIcon} alt="Open chat" />
          {showNotification() && <styles.Notification>1</styles.Notification>}
        </styles.OpenChatButton>
      </styles.OpenChatButtonGradientBorder>
    </styles.OpenChat>
  );
};
