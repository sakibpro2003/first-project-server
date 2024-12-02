import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middleware/validateRequest';
import createStudentValidationSchema from '../student/student.validation';

const router = express.Router();




router.post('/create-student',validateRequest(createStudentValidationSchema), UserController.createStudent);



export const userRoutes = router;
