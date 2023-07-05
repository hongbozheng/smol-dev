import express from 'express';
import config from './config/index';
import { middleware1 } from './middleware/index';
import routes from './routes';

const app = express();

app.use(config);

const middleware = [middleware1];

middleware.forEach((m: express.RequestHandler) => app.use(m));

app.use(routes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});