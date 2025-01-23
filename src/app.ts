import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import { limiter } from './middlewares/rateLimit';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(limiter);

app.use('/api', userRoutes);

export default app;
