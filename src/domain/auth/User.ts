import mongoose, { Schema } from 'mongoose';
import { dEnum, rString, urEmail, uString } from '../../utils/field';
import { UserEnum } from './userEnum';

const userSchema = new Schema(
  {
    name: rString,
    email: urEmail,
    password: rString,
    address: uString,
    role: dEnum(UserEnum, UserEnum.admin),
  },
  { timestamps: true }
);

const User = mongoose.model('users', userSchema);
export default User;
