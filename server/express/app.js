import express from 'express';
import favicon from 'serve-favicon';
import { applyMiddleware } from './applyMiddleware';
import routes from '../routes/';

const app = express();
applyMiddleware(app);

app.use(express.static('public'));
app.use(favicon('public/favicon.ico'));

routes(app);

export default app;
