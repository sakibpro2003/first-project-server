import { NextFunction, Request, RequestHandler, Response } from "express";

//higher order func. takes a func as a pram and returns a func
const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};


export default catchAsync;