import jwt from 'jsonwebtoken';

import { Response, Request, NextFunction } from 'express';

const secretKey: any = process.env.SECRET_KEY;

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.headers['authorization']) {
      return res.status(401).json({ message: 'You are not Authorized' });
    }
    let authorization = req.headers['authorization'].split(' ');
    if (authorization[0] !== 'Bearer') {
      return res.status(401).json({ message: 'You are not Authorized' });
    }
    try {
      const jwtVerified = jwt.verify(authorization[1], secretKey);
      if (jwtVerified) {
        next();
      }
    } catch (e) {
      return res.status(422).json({ message: 'Invalid Token' });
    }
  } catch (e) {
    next(e);
  }
};

export default validateToken;
