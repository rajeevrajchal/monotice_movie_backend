import express from 'express';
import checkPermission from '../../middleware/checkPermission';
import { UserEnum } from '../auth/userEnum';
import { fetchCurrentMovie, fetchMovie, storeMovie } from './MovieController';
import validateToken from '../../middleware/validateToken';

const movieRoute = express.Router();

//USER LOGIN
// authRoute.post('/admin-movie', [checkPermission([UserEnum.admin, UserEnum.super_admin])], fetchMovie);
movieRoute.get('', fetchCurrentMovie);
movieRoute.get('/movie-list', [validateToken, checkPermission([UserEnum.admin, UserEnum.super_admin])], fetchMovie);
movieRoute.post('', [validateToken, checkPermission([UserEnum.admin, UserEnum.super_admin])], storeMovie);

export default movieRoute;