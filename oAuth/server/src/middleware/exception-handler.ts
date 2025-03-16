import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../lib/http-exception';

export function exceptionHandler(
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  let statusCode = 500;
  let details: Record<string, any> | undefined = undefined;
  let message = 'Internal Server Error!';
  let errorType = 'unknownError';

  try {
    statusCode = err.statusCode;
    errorType = err.errorType;
    details = JSON.parse(err?.message);
    message = details?.message;
  } catch (error) {
    message = err?.message;
  }

  if (!statusCode || statusCode < 400 || statusCode > 500) {
    statusCode = 500;
  }

  const error = {
    error: true,
    path: req.url,
    method: req.method,
    message: message,
    details: details,
    statusCode: statusCode,
    errorType: errorType,
    timestamp: new Date().toISOString(),
  };
  console.error(error);

  res.status(statusCode).json(error);
}
