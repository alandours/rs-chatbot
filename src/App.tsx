import { FrameContextConsumer } from "react-frame-component";
import { StyleSheetManager } from "styled-components";

import { Frame } from "./styles";

function App() {
  return (
    <Frame>
      <FrameContextConsumer>
        {({ document }) => (
          <StyleSheetManager target={document?.head}>Chatbot</StyleSheetManager>
        )}
      </FrameContextConsumer>
    </Frame>
  );
}

export default App;
