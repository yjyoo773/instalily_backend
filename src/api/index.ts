import { Router } from 'express';
import { gptController } from './gptController';
import rateLimit from 'express-rate-limit';

const router = Router();

// Rate limiting middleware (e.g., 60 requests per minute)
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60, // Limit each IP to 60 requests per windowMs
  message: 'Too many requests, please try again later.',
});

router.post('/gpt', limiter, gptController);

export default router;