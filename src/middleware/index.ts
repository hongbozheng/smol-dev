import express from 'express';

export const middleware1 = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // Middleware logic here
    next();
};

export const middleware = [middleware1];