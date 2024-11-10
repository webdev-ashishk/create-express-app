import express, { Request, Response } from 'express';
const app = express();
const port = 3000;
app.get('/', (req: Request, res: Response) => {
  res.send('you are the / route');
});
app.listen(port, () => {
  console.log('server is running on port:  ' + port);
});
