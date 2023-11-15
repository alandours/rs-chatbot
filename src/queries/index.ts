import { useQuery } from "react-query";

import { CHATBOT_AGENT_ID } from "@/constants";
import { Queries } from "@/constants/enums";
import { getAgents } from "@/services/agents";

export const useGetAgent = () => {
  const { data, isLoading } = useQuery([Queries.agents], () => getAgents());

  const agent = data?.agents.find((agent) => agent.id === CHATBOT_AGENT_ID);

  return {
    agent,
    isLoading,
  };
};
