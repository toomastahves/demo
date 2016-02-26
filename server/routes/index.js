import { getToken } from '../controllers/token';

const routes = (app) => {
  app.get('/token', getToken);
};

export default routes;
