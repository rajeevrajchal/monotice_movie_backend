import paypal from 'paypal-rest-sdk';
import { NextFunction, Request, Response } from 'express';
import Movie from '../movie/Movie';
import Donation from './donation.model';

paypal.configure({
  mode: 'sandbox', //sandbox or live
  client_id: 'AVpNVy7Zkg_lCe33sRI3JLF7xm8pBE5q-IN6DY-Rzf0oTIeUhNRaeP-tsthM6bFhGWAcQbc4SbjyMrqz',
  client_secret: 'ECMBPLqayrlSoME75EbqelYu5Ym-6iNkFcJ8Ch472SId2Zm2OUF9IcMOXWIoWFzASNbG434ZcWSjU1qE',
});

export const donationComplete = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const donation = await Donation.create(req.body);
    if (donation) {
      return res.status(201).json({
        status: 'success',
      });
    } else {
      res.status(400).json({
        success: 'false',
        message: 'Failed',
      });
    }
  } catch (e) {
    res.status(400).json({
      success: 'false',
      message: e.message,
      code: e.code,
    });
  }
};

export const fetchAllDonation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const donations = await Donation.find();
    if (donations) {
      return res.status(200).json({
        status: 'success',
        donations: donations,
      });
    } else {
      res.status(400).json({
        success: 'false',
        message: 'Failed',
      });
    }
  } catch (e) {
    res.status(400).json({
      success: 'false',
      message: e.message,
      code: e.code,
    });
  }
};
