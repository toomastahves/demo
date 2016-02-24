import http from 'http';
import RED from 'node-red';
import express from 'express';

const app = express();
const server = http.createServer(app);

const settings = {
  httpAdminRoot: '/red',
  httpNodeRoot: '/api',
  userDir: './node_red',
  functionGlobalContext: { }
};

RED.init(server, settings);
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

const port = 5000;
server.listen(port, () => {
  console.log(`Node-RED started at ${port}`);
});

RED.start();
