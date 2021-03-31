import express from 'express';
import { deleteUser, getUsers, updateUser } from './UserController';
import validateToken from '../../middleware/validateToken';
import checkPermission from '../../middleware/checkPermission';
import { UserEnum } from '../auth/userEnum';

const userRoute = express.Router();

//USER LOGIN
userRoute.get('', [validateToken, checkPermission([UserEnum.super_admin])], getUsers);
userRoute.post('/:userUUID', [validateToken, checkPermission([UserEnum.super_admin])], updateUser);
userRoute.delete('/:userUUID', [validateToken, checkPermission([UserEnum.super_admin])], deleteUser);

export default userRoute;
