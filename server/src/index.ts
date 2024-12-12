import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  if (!process.env['APP_KEY']) throw Error('No App Key');
  res.send('Express + TypeScript Server');
});

app.use((error: Error, req: Request, res: Response, _next: NextFunction) => {
  console.log(error);
  res.status(500).send('Server error');
});

app.listen(port, () => {
  console.log(`[Server] is running at http://localhost:${port}`);
});
