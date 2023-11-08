import { useContext, useState } from "react";
import { FrameContextConsumer } from "react-frame-component";
import { StyleSheetManager } from "styled-components";

import { ChatbotContext } from "@/context/ChatbotContext";
import { Chatbot } from "@/components/Chatbot";

import { Frame } from "./styles";
import { GlobalStyle } from "./globalStyle";

function App() {
  const { open, chatbotRef } = useContext(ChatbotContext);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const setFrameSize = () => {
    setWidth(chatbotRef?.current?.offsetWidth || 0);
    setHeight(chatbotRef?.current?.offsetHeight || 0);
  };

  return (
    <Frame width={width} height={height} open={open}>
      <FrameContextConsumer>
        {({ document }) => (
          <StyleSheetManager target={document?.head}>
            <GlobalStyle />
            <Chatbot setFrameSize={setFrameSize} />
          </StyleSheetManager>
        )}
      </FrameContextConsumer>
    </Frame>
  );
}

export default App;
