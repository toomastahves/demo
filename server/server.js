import { startWebpackDevServer } from './webpack/devServer';
import app from './koa/app';

const port = process.env.PORT || 3000;
app.listen(port, '127.0.0.1', () => {
  console.log(`Koa started at ${port}`);
});

if(process.env.NODE_ENV !== 'production') {
  startWebpackDevServer();
}
