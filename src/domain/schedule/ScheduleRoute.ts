import express from 'express';
import {
  checkScheduleTime,
  deleteSchedule,
  disableSchedule,
  fetchScheduleList,
  storeSchedule,
} from './ScheduleController';
import checkPermission from '../../middleware/checkPermission';
import { UserEnum } from '../auth/userEnum';

const movieScheduleRoute = express.Router();

movieScheduleRoute.get('/movie-time/:moviePlayTime', checkScheduleTime);
movieScheduleRoute.post('', [checkPermission([UserEnum.admin, UserEnum.super_admin])], storeSchedule);
movieScheduleRoute.get('/:movieID', fetchScheduleList);
movieScheduleRoute.post('/:scheduleUUID', disableSchedule);
movieScheduleRoute.delete('/:scheduleUUID', deleteSchedule);

export default movieScheduleRoute;
