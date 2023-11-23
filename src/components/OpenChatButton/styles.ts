import styled from "styled-components";

import { COLORS } from "@/constants/colors";

export const OpenChat = styled.div`
  height: fit-content;
  width: fit-content;
  padding: 1.5rem;
`;

export const OpenChatButton = styled.button`
  background: ${COLORS.WHITE};
  border: 0;
  border-radius: 100%;
  box-shadow: 2px 2px 24px 4px ${COLORS.SHADOW};
  cursor: pointer;
  position: relative;
  height: 5.5rem;
  width: 5.5rem;
`;

export const ChatIcon = styled.img`
  width: 3rem;
`;

export const Notification = styled.div`
  align-items: center;
  background: ${COLORS.RED.BASE};
  border: 2px solid ${COLORS.WHITE};
  border-radius: 50%;
  color: ${COLORS.WHITE};
  display: flex;
  font-size: 0.875rem;
  font-weight: 700;
  font-family: sans-serif;
  height: 2rem;
  justify-content: center;
  position: absolute;
  right: -0.375rem;
  top: -0.375rem;
  width: 2rem;
`;
