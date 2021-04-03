import express from 'express';
import { donationComplete, fetchAllDonation } from './DonationController';

const donationRoute = express.Router();

donationRoute.post('', donationComplete);
donationRoute.get('', fetchAllDonation);

export default donationRoute;
