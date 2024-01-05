export const createDOMElements = () => {
  const chatbotWrapper = document.createElement("div");
  chatbotWrapper.setAttribute("id", "rs-chatbot-wrapper");

  const root = document.createElement("div");
  root.setAttribute("id", "rs-chatbot-root");

  const recaptchaWrapper = document.createElement("div");
  recaptchaWrapper.setAttribute("id", "rs-chatbot-recaptcha");
  recaptchaWrapper.style.display = "none";

  chatbotWrapper.appendChild(root);
  chatbotWrapper.appendChild(recaptchaWrapper);

  document.body.appendChild(chatbotWrapper);
};
