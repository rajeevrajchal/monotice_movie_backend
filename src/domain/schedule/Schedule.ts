import mongoose, { Schema } from 'mongoose';
import { dEnum, rNumber, rString, uObject, uString } from '../../utils/field';
import { ScheduleStatus } from './ScheduleEnum';

const scheduleSchema = new Schema(
  {
    slot: rString,
    status: dEnum(ScheduleStatus),
    uploader: uObject,
    movieUUID: uString,
    uploaderUUID: uString,
  },
  { timestamps: true }
);

const Schedule = mongoose.model('schedule', scheduleSchema);
export default Schedule;
