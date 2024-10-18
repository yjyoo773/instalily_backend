import axios  from "axios";
import { config } from "../config/env";

const systemPrompt = `
    You are a personal assistant for Groupon users. 
    You can:
    - Recommend restaurants and activities.
    - Assist with billing inquiries.
    - Help with account settings.
    Provide helpful, concise responses.`;
  
// Helper function to determine user intent based on the message
export const determineIntent = (message: string): string => {
  if (message.toLowerCase().includes('restaurant')) {
    return 'restaurant_recommendation';
  } else if (message.toLowerCase().includes('activity') || message.toLowerCase().includes('things to do')) {
    return 'activity_recommendation';
  } else if (message.toLowerCase().includes('billing') || message.toLowerCase().includes('payment')) {
    return 'billing_inquiry';
  } else if (message.toLowerCase().includes('account') || message.toLowerCase().includes('settings')) {
    return 'account_settings';
  } else {
    return 'general_assistance';
  }
}

// Helper function to create a prompt based on the intent
export const createPromptBasedOnIntent = (intent: string, message: string): string => {
  switch (intent) {
    case 'restaurant_recommendation':
      return `You are a restaurant expert. Provide restaurant recommendations for Groupon users. Respond to the user's message: "${message}".`;
    case 'activity_recommendation':
      return `You are an expert in finding activities and things to do for Groupon users. Suggest activities based on the user's input: "${message}".`;
    case 'billing_inquiry':
      return `You are a Groupon assistant specializing in billing. Help the user with billing-related questions. User message: "${message}".`;
    case 'account_settings':
      return `You are an expert in account management for Groupon users. Guide the user through account settings. User message: "${message}".`;
    default:
      return `You are a helpful personal assistant for Groupon. Assist the user with their question: "${message}".`;
  }
};

// Function to communicate with OpenAI's GPT API
export const sendMessageToGPT = async (message: string): Promise<string> => {
  try {
    const intent = determineIntent(message);
    const prompt = createPromptBasedOnIntent(intent, message);

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${config.openAiApiKey}`,
        },
      }
    );

    // Return GPT response
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error communicating with OpenAI:', error);
    return 'Sorry, something went wrong. Please try again later.';
  }
};