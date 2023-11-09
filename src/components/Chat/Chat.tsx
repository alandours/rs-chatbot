import { useContext } from "react";

import { ChatbotContext } from "@/context/ChatbotContext";
import { CHATBOT_NAME } from "@/constants";

import minimizeIcon from "@/assets/minimize.webp";
import sendIcon from "@/assets/send.webp";

import * as styles from "./styles";

export const Chat = () => {
  const { chatbotRef, closeChat } = useContext(ChatbotContext);

  return (
    <styles.Chatbot ref={chatbotRef}>
      <styles.Header>
        <styles.TitleWrapper>
          <styles.Status />
          <styles.Title>{CHATBOT_NAME}</styles.Title>
        </styles.TitleWrapper>
        <styles.MinimizeButton onClick={closeChat}>
          <styles.MinimizeIcon src={minimizeIcon} alt="Minimize chat" />
        </styles.MinimizeButton>
      </styles.Header>
      <styles.Main />
      <styles.Footer>
        <styles.Input type="text" placeholder="Send a message..." />
        <styles.Button>
          <styles.SendIcon src={sendIcon} alt="Send message" />
        </styles.Button>
      </styles.Footer>
    </styles.Chatbot>
  );
};
