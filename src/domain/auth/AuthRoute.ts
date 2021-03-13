import express from 'express';
import validateRule from '../../validation';
import { loginValidation, registerValidation } from './authValidation';
import { login, register } from './AuthController';
import validateToken from '../../middleware/validateToken';
import checkPermission from '../../middleware/checkPermission';
import { UserEnum } from './userEnum';

const authRoute = express.Router();

//USER LOGIN
authRoute.post('/login', [validateRule, loginValidation], login);
authRoute.post(
  '/register',
  [validateToken, checkPermission([UserEnum.admin, UserEnum.super_admin]), validateRule, registerValidation],
  register
);

export default authRoute;
