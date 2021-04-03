import express from 'express';
import { paymentComplete } from './PayPalController';

const paypalRoute = express.Router();

paypalRoute.post('', paymentComplete);

export default paypalRoute;
