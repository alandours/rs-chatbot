import { useQuery } from "react-query";

import { getAgents } from "@/services/agents";
import { CHATBOT_AGENT_ID } from "@/constants";

enum Queries {
  agents = "agents",
}

export const useGetAgent = () => {
  const { data, isLoading } = useQuery([Queries.agents], () => getAgents());

  const agent = data?.agents.find((agent) => agent.id === CHATBOT_AGENT_ID);

  return {
    agent,
    isLoading,
  };
};
