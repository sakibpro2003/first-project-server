import { Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import { AuthServices } from './auth.service';
import sendResponse from '../utils/sendResponse';
import httpStatus from 'http-status';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.loginUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    data: result,
  });
});

export const AuthControllers = {
    loginUser
}
