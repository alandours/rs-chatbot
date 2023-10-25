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
  background: #111;
  display: flex;
  padding: 0.75rem;
`;

export const Title = styled.h1`
  color: #eee;
  font-size: 1.125rem;
  margin: 0;
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
