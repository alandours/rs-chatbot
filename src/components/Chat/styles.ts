import styled from "styled-components";

import { BREAKPOINTS } from "@/constants";
import { COLORS } from "@/constants/colors";

export const Chatbot = styled.div`
  border-radius: 0.25rem 0.25rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  width: 100%;

  @media (min-device-width: ${BREAKPOINTS.TABLET}px) {
    width: 37.5rem;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeIn 250ms;
`;

export const Header = styled.div`
  align-items: center;
  background: ${COLORS.GREY.DARKER};
  border-radius: inherit;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2.25rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Status = styled.div`
  background: ${COLORS.GREEN};
  border-radius: 100%;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
`;

export const Title = styled.h1`
  color: ${COLORS.WHITE};
  font-size: 1.75rem;
  font-weight: 500;
  margin: 0;
  margin-left: 1rem;
`;

export const MinimizeButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
`;

export const MinimizeIcon = styled.img`
  width: 2.25rem;
`;

export const Main = styled.div`
  background: ${COLORS.WHITE};
  height: 42.5rem;
  overflow-y: auto;
  padding: 2rem 2rem 13.5rem 2rem;

  @media (min-device-height: ${BREAKPOINTS.TABLET}px) {
    padding: 2rem 2rem 5.5rem 2rem;
  }
`;

export const Footer = styled.form`
  background: ${COLORS.WHITE};
  border-top: 1px solid ${COLORS.GREY.LIGHT};
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const Input = styled.input`
  border: 0;
  border-radius: 0;
  font-size: 1.25rem;
  padding: 1.75rem 1.5rem;
  width: 100%;

  &::placeholder {
    color: ${COLORS.GREY};
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;

  &:disabled {
    cursor: initial;
    opacity: 0.43;
  }
`;

export const SendIcon = styled.img`
  width: 1.75rem;
`;
