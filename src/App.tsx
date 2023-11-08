import { useRef, useState } from "react";
import { FrameContextConsumer } from "react-frame-component";
import { StyleSheetManager } from "styled-components";

import { Chatbot } from "@/components/Chatbot";

import { Frame } from "./styles";
import { GlobalStyle } from "./globalStyle";

function App() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  const setFrameSize = () => {
    setWidth(ref.current?.offsetWidth || 0);
    setHeight(ref.current?.offsetHeight || 0);
  };

  return (
    <Frame width={width} height={height}>
      <FrameContextConsumer>
        {({ document }) => (
          <StyleSheetManager target={document?.head}>
            <GlobalStyle />
            <Chatbot setFrameSize={setFrameSize} chatbotRef={ref} />
          </StyleSheetManager>
        )}
      </FrameContextConsumer>
    </Frame>
  );
}

export default App;
