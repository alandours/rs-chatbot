import { useState } from "react";

import * as styles from "./styles";

export const Chatbot = () => {
  const [open, setOpen] = useState<boolean>(false);

  return open ? (
    <styles.Chatbot>
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
    <styles.OpenChatButton onClick={() => setOpen(true)}>
      Open chat
    </styles.OpenChatButton>
  );
};
