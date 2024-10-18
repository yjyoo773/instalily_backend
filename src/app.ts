import express from 'express';
import cors from 'cors';
import apiRouter from './api';

const app = express();

app.use(cors());
app.use(express.json());

// Use the GPT API routes
app.use('/api', apiRouter);

export default app;