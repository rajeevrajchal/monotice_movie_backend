import paypal from 'paypal-rest-sdk';
import { NextFunction, Request, Response } from 'express';
import Movie from '../movie/Movie';

paypal.configure({
  mode: 'sandbox', //sandbox or live
  client_id: 'AVpNVy7Zkg_lCe33sRI3JLF7xm8pBE5q-IN6DY-Rzf0oTIeUhNRaeP-tsthM6bFhGWAcQbc4SbjyMrqz',
  client_secret: 'ECMBPLqayrlSoME75EbqelYu5Ym-6iNkFcJ8Ch472SId2Zm2OUF9IcMOXWIoWFzASNbG434ZcWSjU1qE',
});

export const paymentProcess = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('payment request');
    const create_payment_json = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      redirect_urls: {
        return_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:8000/api/paypal/cancel',
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                name: 'Donation',
                sku: 'donate',
                price: '1.00',
                currency: 'USD',
                quantity: 1,
              },
            ],
          },
          amount: {
            currency: 'USD',
            total: '1.00',
          },
          description: 'This is the test payment description.',
        },
      ],
    };
    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
        console.log(error);
        throw error;
      } else {
        // @ts-ignore
        for (let i = 0; i < payment.links.length; i++) {
          // @ts-ignore
          if (payment.links[i].rel === 'approval_url') {
            // @ts-ignore
            console.log(payment.links[i].href);
            // @ts-ignore
            res.redirect(payment.links[i].href);
          }
        }
      }
    });
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
