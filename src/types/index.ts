import { MessageRoles } from "@/constants/enums";

export type Agent = {
  id: number;
  name: string;
  welcomeMessage: string;
  createdAt: Date;
};

export type Message = {
  id?: number;
  content: string;
  role: MessageRoles;
  createdAt: Date;
  errorMessage?: string;
};

export type Session = {
  token: string;
  agent: Agent;
}

export type Suggestion = {
  label: string;
  message: string;
};
