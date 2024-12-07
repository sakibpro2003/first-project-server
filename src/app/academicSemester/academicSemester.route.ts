import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middleware/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';

const router = express.Router();

router.post('/create-academic-semester',validateRequest(AcademicSemesterValidations.creatAcademicSemesterValidationSchema),AcademicSemesterControllers.createAcademicSemester );
router.get('/',AcademicSemesterControllers.getAcademicSemesterFromDb );
router.get('/:academicSemesterId',AcademicSemesterControllers.getSingleAcademicSemesterFromDb );


export const AcademicSemesterRoutes = router;
