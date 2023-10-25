import { Ref, useEffect, useState } from "react";

import * as styles from "./styles";

type ChatbotProps = {
  setFrameSize: () => void;
  chatbotRef: Ref<HTMLDivElement>;
};

export const Chatbot = ({ setFrameSize, chatbotRef }: ChatbotProps) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setFrameSize();
  }, [setFrameSize, open]);

  return open ? (
    <styles.Chatbot ref={chatbotRef}>
      <styles.Header>
        <styles.Title>Chatbot</styles.Title>
        <styles.CloseButton onClick={() => setOpen(false)}>
          X
        </styles.CloseButton>
      </styles.Header>
      <styles.Main />
      <styles.Footer>
        <styles.Input type="text" />
        <styles.Button>Send</styles.Button>
      </styles.Footer>
    </styles.Chatbot>
  ) : (
    <styles.OpenChat ref={chatbotRef}>
      <styles.OpenChatButton onClick={() => setOpen(true)}>
        Open chat
      </styles.OpenChatButton>
    </styles.OpenChat>
  );
};
