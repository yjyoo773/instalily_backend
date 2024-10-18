import { Request, Response } from 'express';
import { sendMessageToGPT } from './gptService';

// Controller function to handle requests to the GPT API
export const gptController = async (req: Request, res: Response): Promise<void> => {
  const { message } = req.body;

  if (!message) {
    res.status(400).json({ error: 'Message is required' });
    return;
  }

  try {
    const gptResponse = await sendMessageToGPT(message);
    res.json({ message: gptResponse });
  } catch (error) {
    res.status(500).json({ error: 'Error processing your request.' });
  }
};