import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { $FIXME } from '../constant';

const secretKey: $FIXME = process.env.SECRET_KEY;
const checkPermission = (roles: number[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      let authorization: $FIXME = req.headers['authorization'] && req.headers['authorization'].split(' ');
      const jwtVerified = jwt.verify(authorization[1], secretKey);
      if (!jwtVerified) {
        res.status(401).json({
          success: 'false',
          message: 'You are not authorized.',
        });
      }
      const token = jwt.decode(authorization[1], secretKey);
      if (token) {
        if (roles.length === 0) {
          // user's role is not authorized
          return res.status(401).json({ message: 'You have no permission' });
        }
        if (roles.length && !roles.includes(parseInt(token.user.role))) {
          // user's role is not authorized
          return res.status(401).json({ message: 'You have no permission' });
        }
        next();
      } else {
        return res.status(401).json({ message: 'You have no permission' });
      }
    } catch (e) {
      next(e);
    }
  };
};

export default checkPermission;
