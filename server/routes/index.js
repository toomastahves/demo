import { sayHello } from '../controllers/hello';

const routes = (app) => {
  app.get('/hello', sayHello);
};

export default routes;
