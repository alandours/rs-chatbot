import { Ref } from "react";

import { CHATBOT_NAME } from "@/constants/colors";

import minimizeIcon from "@/assets/minimize.webp";
import sendIcon from "@/assets/send.webp";

import * as styles from "./styles";

type ChatProps = {
  chatbotRef: Ref<HTMLDivElement>;
  minimizeChat: () => void;
};

export const Chat = ({ chatbotRef, minimizeChat }: ChatProps) => (
  <styles.Chatbot ref={chatbotRef}>
    <styles.Header>
      <styles.TitleWrapper>
        <styles.Status />
        <styles.Title>{CHATBOT_NAME}</styles.Title>
      </styles.TitleWrapper>
      <styles.MinimizeButton onClick={minimizeChat}>
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
