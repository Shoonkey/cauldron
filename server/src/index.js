require("dotenv").config({
  path: process.env.NODE_ENV === "development" ? ".env.dev" : ".env.prod"
});

import http from 'http';
import express from 'express';

import setupChat from './chat';

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8000;
  
setupChat(server);

server.listen(port, () => console.log(`Server running on port ${port}`));