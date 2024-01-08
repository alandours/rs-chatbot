import axios, { AxiosRequestConfig } from "axios";
import humps from "humps";

import { CONFIG } from "@/constants/config";

const config: AxiosRequestConfig = {
  baseURL: CONFIG.API_URL,
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

export const setApiKey = (apiKey: string) =>
  client.interceptors.request.use((config) => {
    config.headers.set("x-api-key", apiKey);
    return config;
  });

type QueryParams = {
  conversation: { agentId: number };
};

export const getQueryParams = (agentId: number): QueryParams => ({
  conversation: { agentId },
});
