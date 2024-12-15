import { AuthControllers } from './auth.controller';
import { AuthValidations } from './auth.validation';
import express from 'express'
import validateRequest from '../middlewares/validateRequest';

const router = express.Router();

router.post('/login',validateRequest(AuthValidations.loginValidationSchema),AuthControllers.loginUser)

export const AuthRoutes = router;
