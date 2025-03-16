import { NextFunction, Request, Response } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(
    'Logger',
    req.method,
    decodeURI(req.url),
    res.statusCode,
    res.statusMessage,
  );
  next();
}
