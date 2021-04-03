import mongoose, { Schema } from 'mongoose';
import { rEmail, rString, unEmail } from '../../utils/field';

const donationSchema = new Schema(
  {
    name: rString,
    country_code: rString,
    currency: rString,
    amount: rString,
    email: unEmail,
    payment_id: rString,
  },
  { timestamps: true }
);

const Donation = mongoose.model('donation', donationSchema);
export default Donation;
