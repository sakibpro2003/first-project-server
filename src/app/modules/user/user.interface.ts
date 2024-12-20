/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export interface TUser {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
}

export interface UserModel extends Model<TUser> {
  // myStaticMethode(): number;
  isUserExistsByCustomId(id: string): Promise<TUser>;
  isPasswordMatched(plainPassword: string, hashedPassword:string):Promise<boolean>;
}
