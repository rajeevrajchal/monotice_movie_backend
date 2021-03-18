import express from 'express';
import checkPermission from '../../middleware/checkPermission';
import { UserEnum } from '../auth/userEnum';
import { fetchScheduleList, storeSchedule } from './ScheduleController';

const scheduleRoute = express.Router();

//USER LOGIN
// authRoute.post('/admin-movie', [checkPermission([UserEnum.admin, UserEnum.super_admin])], fetchMovie);
scheduleRoute.post('', [checkPermission([UserEnum.admin, UserEnum.super_admin])], storeSchedule);
scheduleRoute.get('/:movieID', fetchScheduleList);

export default scheduleRoute;
