import bodyParser from 'body-parser';
import logger from 'morgan';
import responseTime from 'response-time';
import compression from 'compression';
import helmet from 'helmet';
import errorhandler from 'errorhandler';

export const applyMiddleware = (app) => {
  app.use(logger('dev'));
  app.use(responseTime());
  app.use(compression());
  app.use(helmet());
  app.use(helmet.hidePoweredBy({ setTo: 'Fantasy Unicorns' }));
  app.use(bodyParser.json());

  if(process.env.NODE_ENV !== 'production') {
    app.use(errorhandler());
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'DELETE, POST, PUT');
      res.header('Access-Control-Allow-Credentials', true);
      res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
  }

  app.use((err, req, res, next) => {
    if (res.headersSent) {
      return next(err);
    }
    console.error(err.stack);
    res.status(500).send({ error: 'Something broke!' });
  });
};
