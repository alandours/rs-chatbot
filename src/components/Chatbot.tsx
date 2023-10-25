import * as styles from "./styles";

export const Chatbot = () => (
  <styles.Chatbot>
    <styles.Header>
      <styles.Title>Chatbot</styles.Title>
    </styles.Header>
    <styles.Main />
    <styles.Footer>
      <styles.Input type="text" />
      <styles.Button>Send</styles.Button>
    </styles.Footer>
  </styles.Chatbot>
);
