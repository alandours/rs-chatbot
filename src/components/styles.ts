import styled from "styled-components";

export const Chatbot = styled.div`
  border: 1px solid #000000;
  border-radius: 0.25rem;
  display: flex;
  height: 100%;
  flex-direction: column;
  font-family: sans-serif;
`;

export const Header = styled.div`
  align-items: center;
  background: #111;
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
`;

export const Title = styled.h1`
  color: #eee;
  font-size: 1.125rem;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: 0;
  color: #eee;
  padding: 0.5rem;
`;

export const Main = styled.div`
  background: #eee;
  height: 100%;
`;

export const Footer = styled.div`
  background: #111;
  display: flex;
  padding: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.25rem;
  width: 100%;
`;

export const Button = styled.button`
  border: 1px solid #000000;
  border-radius: 0.25rem;
  margin-left: 0.5rem;
  padding: 0.5rem;
`;

export const OpenChatButton = styled.button`
  background: #111;
  border: 0;
  border-radius: 0.25rem;
  color: #eee;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
`;