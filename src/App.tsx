import { useContext, useEffect } from "react";
import { FrameContextConsumer } from "react-frame-component";
import { StyleSheetManager } from "styled-components";

import { ChatbotContext } from "@/context/ChatbotContext";
import { Chatbot } from "@/components/Chatbot";

import { Frame } from "./styles";
import { GlobalStyle } from "./globalStyle";
import { useFrameSize } from "./hooks/useFrameSize";

function App() {
  const { open } = useContext(ChatbotContext);
  const { width, height, setFrameSize } = useFrameSize();

  useEffect(() => {
    window.addEventListener("resize", setFrameSize);
    return () => window.removeEventListener("resize", setFrameSize);
  }, [setFrameSize]);

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
