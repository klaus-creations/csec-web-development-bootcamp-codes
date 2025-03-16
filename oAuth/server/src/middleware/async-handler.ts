import { NextFunction, Request, Response } from 'express';

export function asyncHandler(
  fn: (req: Request, res: Response, next?: NextFunction) => any,
) {
  return (req: Request, res: Response, next?: NextFunction) => {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };
}
