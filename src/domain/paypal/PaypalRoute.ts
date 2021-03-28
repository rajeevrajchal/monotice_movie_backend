import express from 'express';
import { paymentProcess, successPaypal } from './PayPalController';

const paypalRoute = express.Router();

paypalRoute.post('', paymentProcess);
paypalRoute.get('/success', successPaypal);

export default paypalRoute;
