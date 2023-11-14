import { Paths } from "@/constants/paths";
import { Agent } from "@/types";

import { client } from "./client";

type AgentsResponse = {
  agents: Agent[];
};

export const getAgents = async (): Promise<AgentsResponse> => {
  try {
    const { data } = await client.get(Paths.agents);
    return data;
  } catch (error) {
    throw new Error();
  }
};
