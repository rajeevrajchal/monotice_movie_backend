import express from 'express';
import { getUsers } from './UserController';
import validateToken from '../../middleware/validateToken';
import checkPermission from '../../middleware/checkPermission';
import { UserEnum } from '../auth/userEnum';

const userRoute = express.Router();

//USER LOGIN
userRoute.get('', [validateToken, checkPermission([UserEnum.admin, UserEnum.super_admin])], getUsers);

export default userRoute;
