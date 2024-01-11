type Config = {
  API_URL: string;
  AGENT_ID: number;
  CHATBOT_NAME: string;
  CHATBOT_USERNAME: string;
  GOOGLE_RECAPTCHA_SITE_KEY: string;
};

export const CONFIG: Config = {
  API_URL: "https://api.chatbot-poc.rootstrap.net/api/v1",
  AGENT_ID: 6,
  CHATBOT_NAME: "Ask Rootstrap AI",
  CHATBOT_USERNAME: "Rootbot",
  GOOGLE_RECAPTCHA_SITE_KEY: "6Lf_bDEpAAAAAI9PUblivbB8IKe1tbTqSP4HqzJi",
};
