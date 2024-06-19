import express from 'express';
import cors from 'cors';
import { getAllItems } from './mock-request.js';

const server = express();

server.use(cors());

server.get('', async (req, res) => {
  res.send(await getAllItems());
});

server.listen(8080, () => {
  console.log('servidor rodando na porta 8080!')
})