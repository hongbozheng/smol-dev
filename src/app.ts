import express from 'express';
import { config } from './config/index';
import { middleware } from './middleware/index';
import { routes } from './routes';

const app = express();

// Load middleware
middleware.forEach((m) => app.use(m));

// Load routes
app.use('/', routes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});

export default app;