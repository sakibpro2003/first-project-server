import httpStatus from 'http-status';
import AppError from '../errors/AppError';
import { User } from '../modules/user/user.model';
import { TLoginUser } from './auth.interface';
import jwt from 'jsonwebtoken';
import config from '../config';

const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByCustomId(payload.id);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user not found');
  }
  // check if the user exists or not
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user does not exists!');
  }
  //check if the user is deleted
  if (user.isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted');
  }
  //check if the user is blocked
  if (user?.status === 'blocked') {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked');
  }
  //check if the password is correct
  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Wrong password!');

  //create token and send to the client
  const jwtPayload = {
    userId: user,
    role: user.role,
  };
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, { expiresIn: '10d'});
  return {
    accessToken,
    needsPasswordChange: user?.needsPasswordChange
  };
};

export const AuthServices = {
  loginUser,
};
