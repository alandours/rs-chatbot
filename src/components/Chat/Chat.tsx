import { useContext } from "react";

import { ChatbotContext } from "@/context/ChatbotContext";
import { CHATBOT_NAME } from "@/constants";
import { Message } from "@/components/Message";
import { MessageRoles } from "@/constants";

import minimizeIcon from "@/assets/minimize.webp";
import sendIcon from "@/assets/send.webp";

import * as styles from "./styles";

const mockMessages = [
  {
    conversationId: 1,
    id: 1,
    content:
      "👋 Hello! I'm Rootstrap Assistant, an AI bot made by Rootstrap. How can I help you?",
    role: MessageRoles.ASSISTANT,
    createdAt: "2023-11-07T14:18:34.831Z",
  },
  {
    conversationId: 1,
    id: 2,
    content: "I have an idea for a mobile app.",
    role: MessageRoles.USER,
    createdAt: "2023-11-07T14:18:44.320Z",
  },
  {
    conversationId: 1,
    id: 3,
    content:
      "That's great to hear! We're here to help you bring your mobile app idea to life. Please tell me more about your app idea and how you'd like to proceed.",
    role: MessageRoles.ASSISTANT,
    createdAt: "2023-11-07T14:19:08.262Z",
  },
  {
    conversationId: 1,
    id: 4,
    content:
      "Sure, it's a social networking app for connecting local artists. I'd like to discuss the next steps.",
    role: MessageRoles.USER,
    createdAt: "2023-11-07T14:19:10.715Z",
  },
];

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
      <styles.Main>
        {mockMessages.map((data) => (
          <Message data={data} key={data.id} />
        ))}
      </styles.Main>
      <styles.Footer>
        <styles.Input type="text" placeholder="Send a message..." />
        <styles.Button>
          <styles.SendIcon src={sendIcon} alt="Send message" />
        </styles.Button>
      </styles.Footer>
    </styles.Chatbot>
  );
};
