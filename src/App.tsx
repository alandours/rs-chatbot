import { FrameContextConsumer } from "react-frame-component";
import { StyleSheetManager } from "styled-components";

import { Chatbot } from "./components/Chatbot";

import { Frame } from "./styles";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <Frame>
      <FrameContextConsumer>
        {({ document }) => (
          <StyleSheetManager target={document?.head}>
            <GlobalStyle />
            <Chatbot />
          </StyleSheetManager>
        )}
      </FrameContextConsumer>
    </Frame>
  );
}

export default App;
