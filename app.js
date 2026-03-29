import express from 'express';
import { corsOptions } from './src/middlewares/cors.middleware.js';
import { sanitiseInputs } from './src/middlewares/santotise.middleware.js';
import router from './src/routers/index.js';
import { globalErrorHandler } from './src/utils/errorHandler.js';

const app = express();

app.use(corsOptions);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(...sanitiseInputs);
app.use('/api', router);

// Global error handler — MUST be last middleware
app.use(globalErrorHandler);

export default app;