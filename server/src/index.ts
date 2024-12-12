import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { logger } from '@utils/logger';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  logger('123');
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[Server] is running at http://localhost:${port}`);
});
