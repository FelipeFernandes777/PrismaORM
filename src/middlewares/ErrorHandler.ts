import { NextFunction, Request, Response } from "express";
import { ErrorBase } from "../errors/ErrorBase";

export function ErrorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ErrorBase) {
    new ErrorBase(error.message);

    return res.status(error.statusCode).send({
      message: `Error - ${error.message}`,
      status: error.statusCode,
    });
  } else {
    return res.status(500).send({
      message: error.message,
      name: error.name,
    });
  }
}
