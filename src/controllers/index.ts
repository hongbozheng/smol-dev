import { Request, Response } from 'express';
import * as services from '../services/index';

export class IndexController {
    public static async get(req: Request, res: Response): Promise<void> {
        try {
            const data = await services.IndexService.getData();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.toString() });
        }
    }
}