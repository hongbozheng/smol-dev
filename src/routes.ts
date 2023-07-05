import * as express from 'express';
import { Request, Response } from 'express';
import * as controllers from './controllers/index';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    controllers.homeController.index(req, res);
});

// Add more routes as needed

export default router;