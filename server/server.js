import webpack from 'webpack';
import config from '../webpack.config';
import express from 'express';

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  contentBase: './public',
  historyApiFallback: true
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('public'));

app.listen(1337);
