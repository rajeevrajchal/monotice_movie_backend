import { NextFunction, Request, Response } from 'express';
import User from '../auth/User';

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();
    if (users) {
      return res.status(200).json({
        status: 'success',
        users: users,
      });
    } else {
      res.status(401).json({
        success: 'false',
        message: 'Failed to fetch Users',
      });
    }
  } catch (e) {
    res.status(400).json({
      success: 'false',
      message: e.message,
    });
  }
};
