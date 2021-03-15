import morgan from 'morgan';
import express from 'express';
import apiRouter from './routes/api';

// General
const app = express();
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', apiRouter);

export default app;
