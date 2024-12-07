import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.service';

// const getAllStudents = catchAsync(async (req, res) => {
//   const result = await StudentServices.getAllStudentsFromDB();

//   res.status(200).json({
//     success: true,
//     message: 'Students are retrieved succesfully',
//     data: result,
//   });
// });

const getAcademicSemesterFromDb = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAcademicSemester();
  // res.status(200).json({
  //   success: true,
  //   message: 'Students are retrieved succesfully',
  //   data: result,
  // });
  res.status(200).json({
    success: true,
    message: 'Academic semesters retrieved successfullly',
    data: result,
  });
});

const getSingleAcademicSemesterFromDb = catchAsync(async (req, res) => {
  const { academicSemesterId } = req.params;
  const result =
    await AcademicSemesterServices.getSingleAcademicSemester(
      academicSemesterId,
    );

  res.status(200).json({
    success: true,
    message: 'Academic semester retrieve success',
    data: result,
  });
});
const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDb(
    req.body,
  );

  res.status(200).json({
    success: true,
    message: 'Academic Semester created  succesfully',
    data: result,
  });
});

// const getSingleStudent: RequestHandler = catchAsync(async (req, res) => {
//   const { studentId } = req.params;

//   const result = await StudentServices.getSingleStudentFromDB(studentId);

//   res.status(200).json({
//     success: true,
//     message: 'Student is retrieved succesfully',
//     data: result,
//   });
// });

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAcademicSemesterFromDb,
  getSingleAcademicSemesterFromDb
};
