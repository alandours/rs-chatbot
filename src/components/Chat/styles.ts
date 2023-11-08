import styled from "styled-components";

import { COLORS } from "@/constants/colors";

export const Chatbot = styled.div`
  border-radius: 0.25rem 0.25rem 0rem 0rem;
  box-shadow: 8px 8px 48px 0px ${COLORS.SHADOW};
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  width: 37.5rem;
`;

export const Header = styled.div`
  align-items: center;
  background: ${COLORS.GREY.DARKER};
  border-radius: inherit;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1.25rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Status = styled.div`
  background: ${COLORS.GREEN};
  border-radius: 100%;
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
  height: 37.5rem;
  padding: 2rem;
`;

export const Footer = styled.div`
  border-top: 1px solid ${COLORS.GREY.LIGHT};
  display: flex;
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
  padding: 1rem;
`;

export const SendIcon = styled.img`
  width: 1.75rem;
`;
