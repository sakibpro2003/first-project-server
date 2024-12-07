import { AcademicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDb = async (payload: TAcademicSemester) => {
  if (AcademicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid semester code!');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

const getAcademicSemester = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getSingleAcademicSemester= async(_id: string)=>{
  const result = await AcademicSemester.findOne({_id});
  return result ;
}

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDb,
  getAcademicSemester,
  getSingleAcademicSemester
};
