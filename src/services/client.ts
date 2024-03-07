import axios, { AxiosRequestConfig } from "axios";
import humps from "humps";

import { CONFIG } from "@/constants/config";

const config: AxiosRequestConfig = {
  baseURL: CONFIG.API_URL,
  headers: {
    "Content-Type": "application/json"
  }
};

export const client = axios.create(config);

client.interceptors.request.use((config) => {
  return {
    ...config,
    data: humps.decamelizeKeys(config.data)
  };
});

client.interceptors.response.use(async (response) => {
  return { ...response, data: humps.camelizeKeys(response.data) };
});

let sessionTokenInterceptor: number | null = null;

export const setSessionTokenHeader = (sessionToken: string) => {
  if (sessionTokenInterceptor !== null) {
    client.interceptors.request.eject(sessionTokenInterceptor);
  }

  sessionTokenInterceptor = client.interceptors.request.use((config) => {
    if (sessionToken) {
      config.headers.set("Authorization", sessionToken);
    }

    return config;
  });
};
