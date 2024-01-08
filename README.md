# rs-chatbot-react

Rootstrap AI chatbot

## Setup

Clone the repo and update the `config.ts` file

```ts
const CONFIG = {
  // API url
  API_URL: "https://chatbot-api-url.com/api",
  // Chatbot agent id
  AGENT_ID: 1234,
  // Displayed at the top of the chat
  CHATBOT_NAME: "Ask AI",
  // Displayed next to each chatbot message
  CHATBOT_USERNAME: "Bot",
}
```

Install dependencies and run project

```sh
npm i && npm run dev
```

## Build

A pre-commit hook will run `build` before each commit and it will add the `dist` folder.

## Test

Push your changes and use the branch name or commit as version

```
https://cdn.jsdelivr.net/gh/rootstrap/rs-chatbot-react@{VERSION}/dist/index.js
```

## Release

1. Create a new release after changes are committed to the `main` branch.

2. Update the release version in the [jsDelivr](https://www.jsdelivr.com/documentation#id-github) url:

    ```
    https://cdn.jsdelivr.net/gh/rootstrap/rs-chatbot-react@{VERSION}/dist/index.js
    ```
