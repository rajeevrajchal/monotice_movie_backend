import paypal from 'paypal-rest-sdk';
import { NextFunction, Request, Response } from 'express';
import Movie from '../movie/Movie';

paypal.configure({
  mode: 'sandbox', //sandbox or live
  client_id: 'AVpNVy7Zkg_lCe33sRI3JLF7xm8pBE5q-IN6DY-Rzf0oTIeUhNRaeP-tsthM6bFhGWAcQbc4SbjyMrqz',
  client_secret: 'ECMBPLqayrlSoME75EbqelYu5Ym-6iNkFcJ8Ch472SId2Zm2OUF9IcMOXWIoWFzASNbG434ZcWSjU1qE',
});

export const paymentComplete = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('payment request');
  } catch (e) {
    console.log(e);
    // res.status(400).json({
    //   success: 'false',
    //   message: e.message,
    //   code: e.code,
    // });
  }
};

export const successPaypal = async (req: Request, res: Response, next: NextFunction) => {
  console.log('the success');
  console.log(req);
};
