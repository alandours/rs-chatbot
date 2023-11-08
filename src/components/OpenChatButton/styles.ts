import styled from "styled-components";

import { COLORS } from "@/constants/colors";

export const OpenChat = styled.div`
  height: 7.5rem;
  width: 7.5rem;
`;

export const OpenChatButton = styled.button`
  background: ${COLORS.WHITE};
  border: 0;
  border-radius: 100%;
  box-shadow: 2px 2px 24px 4px ${COLORS.SHADOW};
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

export const ChatIcon = styled.img`
  width: 4.5rem;
`;
