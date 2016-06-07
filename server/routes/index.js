import router from 'koa-route';
import { getHome, getToken } from '../controllers/home';

const routes = (app) => {
  app.use(router.get('/home', getHome));
  app.use(router.get('/token', getToken));
};

export default routes;
