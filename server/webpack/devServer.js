import webpack from 'webpack';
import config from '../../webpack.config.dev';
import WebpackDevServer from 'webpack-dev-server';

export const startWebpackDevServer = () => {
  new WebpackDevServer(webpack(config), {
    historyApiFallback: true,
    noInfo: true,
    publicPath: config.output.publicPath,
    proxy: {
      '*': 'http://127.0.0.1:3000'
    }
  })
  .listen(1337, '127.0.0.1', () => {
    console.log('WebpackDevServer started at 1337');
  });
};
