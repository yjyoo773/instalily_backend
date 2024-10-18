import { Router } from 'express';
import { gptController } from './gptController';

const router = Router();

router.post('/gpt', gptController);

export default router;