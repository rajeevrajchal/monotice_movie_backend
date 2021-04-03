import mongoose, { Schema } from 'mongoose';
import { rString } from '../../utils/field';

const donationSchema = new Schema(
  {
    name: rString,
  },
  { timestamps: true }
);

const Donation = mongoose.model('donation', donationSchema);
export default Donation;
