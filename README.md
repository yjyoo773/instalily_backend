# Backend - Groupon Personal Assistant

This is the backend of the Groupon Personal Assistant, built with **Node.js**, **Express**, and **TypeScript**. It serves as a proxy between the frontend and OpenAI's GPT API, handling user messages securely.

## Table of Contents
- [Installation](#installation)
- [Scripts](#scripts)
- [Features](#features)

## Installation

1. Clone the repository:

    ```git clone https://github.com/yjyoo773/instalily_backend.git```

2. Install dependencies using **Yarn**:

    ```yarn install```

3. Create a `.env` file in the project root and add the following environment variables:
  
    ```OPENAI_API_KEY=your-openai-api-key```
    ```PORT=5000```

  - Replace your-openai-api-key with your OpenAI API key.
- Set the desired port number (default is 5000).

## Scripts 
- Start the server in development mode:
    ```yarn dev```
- Build for production:
    ```yarn start```

## Features
- **Secure Proxy to OpenAI**: Acts as a proxy for interacting with OpenAI's GPT API without exposing API keys to the frontend.
- **Handles User Intents**: Processes messages based on user intents like restaurant recommendations, activity suggestions, billing inquiries, and account management.
- **Rate Limiting**: Built-in rate limiting to prevent abuse of the OpenAI API.
- **Written in TypeScript**: Provides strong typing and error checking.



