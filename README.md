# rs-chatbot-react

Rootstrap AI chatbot

## Setup

Clone the repo and create an `.env.local` file

```sh
# API url
VITE_API_URL="https://chatbot-api-url.com/api"

# Chatbot agent id
VITE_AGENT_ID=1234

# Displayed at the top of the chat
VITE_CHATBOT_NAME="Rootstrap Assistant"

# Displayed next to each chatbot message
VITE_CHATBOT_USERNAME="Rootbot"
```

Install dependencies

```sh
npm i && npm run dev
```

## Build

A pre-commit hook will run `build` before each commit and it will add the `dist` folder.

## Release

1. Create a new release after changes are committed to the `main` branch.

2. Update the release version in the [jsDelivr](https://www.jsdelivr.com/documentation#id-github) url:

    ```
    https://cdn.jsdelivr.net/gh/rootstrap/rs-chatbot-react@{VERSION}/dist/index.js
    ```
