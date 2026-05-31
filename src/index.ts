import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT: number = 3000;

// Middleware to parse JSON payloads
app.use(express.json());

// Main Entry Route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello from Express and TypeScript!'
  });
});

// Start listening
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
