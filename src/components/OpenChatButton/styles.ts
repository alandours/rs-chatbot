import styled from "styled-components";

import { COLORS } from "@/constants/colors";

export const OpenChat = styled.div`
  height: fit-content;
  width: fit-content;
  padding: 1.25rem;
`;

export const OpenChatButtonGradientBorder = styled.div`
  height: 3.25rem;
  width: 3.25rem;
  position: relative;
  background: linear-gradient(0deg, #1b1b1b, #bf80ff, #f6ff80);
  border-radius: 100%;
  padding: 0.125rem;
`;

export const OpenChatButton = styled.button`
  background: ${COLORS.BLACK};
  border: 0;
  border-radius: 100%;
  box-shadow: 2px 2px 24px 4px ${COLORS.SHADOW};
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

export const ChatIcon = styled.img`
  width: 1.875rem;
`;

export const Notification = styled.div`
  align-items: center;
  background: ${COLORS.PRIMARY[500]};
  border: 1px solid ${COLORS.BLACK};
  border-radius: 50%;
  color: ${COLORS.BLACK};
  display: flex;
  font-size: 0.6rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  height: 1.25rem;
  justify-content: center;
  position: absolute;
  right: -0.2rem;
  top: -0.2rem;
  width: 1.25rem;
`;
