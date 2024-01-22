import { Paths } from "@/constants/paths";
import { ERRORS } from "@/constants";
import { Agent } from "@/types";

import { client } from "./client";

export type SessionResponse = {
  token: string;
  agent: Agent;
};

export const createSession = async (): Promise<SessionResponse> => {
  try {
    const { data } = await client.post(Paths.sessions, {});
    return data;
  } catch (error) {
    throw new Error(ERRORS.GET_MESSAGE);
  }
};
