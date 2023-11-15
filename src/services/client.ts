import axios, { AxiosRequestConfig } from "axios";
import humps from "humps";

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

export const client = axios.create(config);

client.interceptors.request.use((config) => {
  return {
    ...config,
    data: humps.decamelizeKeys(config.data),
  };
});

client.interceptors.response.use(async (response) => {
  return { ...response, data: humps.camelizeKeys(response.data) };
});

type QueryParams = {
  conversation: { agentId: number };
};

export const getQueryParams = (agentId: number): QueryParams => ({
  conversation: { agentId },
});
