import express from 'express';
import errorMiddleware from './middleware/errorHandler';
const app = express();

// Middleware
app.use(express.json());

// Routes

// Error handling middleware
app.use(errorMiddleware);

export default app;
