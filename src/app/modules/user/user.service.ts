import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { IUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  //if password is not given , use default password
  const userData: Partial<IUser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = 'student'

  //set manually generated id
  userData.id = '203000001'
  userData.needPasswordChange = false;
  //create a user
  const newUser = await User.create(userData);

  //create a student
  if(Object.keys(newUser).length){
    //set id, _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }

};

export const UserService = {
  createStudentIntoDB,
};
