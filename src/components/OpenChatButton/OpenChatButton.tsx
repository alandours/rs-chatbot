import { useContext } from "react";

import { ChatbotContext } from "@/context/ChatbotContext";

import robotIcon from "@/assets/robot.webp";

import * as styles from "./styles";

export const OpenChatButton = () => {
  const { chatbotRef, openChat, unread } = useContext(ChatbotContext);

  return (
    <styles.OpenChat ref={chatbotRef}>
      <styles.OpenChatButton onClick={openChat}>
        <styles.ChatIcon src={robotIcon} alt="Open chat" />
        {unread && <styles.Notification>1</styles.Notification>}
      </styles.OpenChatButton>
    </styles.OpenChat>
  );
};
