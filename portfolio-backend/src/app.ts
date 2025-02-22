import express, { Request, Response } from 'express';
import cors from 'cors';
import errorMiddleware from './middleware/errorHandler';
import formRoutes from './routes/formRoutes';
const app = express();

// Middleware
app.use(express.json());

app.use(cors());
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

// Routes
app.use('/api/form', formRoutes);

// Error handling middleware
app.use(errorMiddleware);

export default app;
