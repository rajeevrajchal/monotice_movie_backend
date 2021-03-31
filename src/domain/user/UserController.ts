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

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userUUID } = req.params;
    console.log(userUUID);
    console.log(req.body);
    const user = await User.findOneAndUpdate({ _id: userUUID }, req.body);
    if (user) {
      return res.status(200).json({
        status: 'success',
        user: user,
      });
    } else {
      res.status(401).json({
        success: 'false',
        message: 'Failed to update user',
      });
    }
  } catch (e) {
    res.status(400).json({
      success: 'false',
      message: e.message,
    });
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  console.log('hello world');
  try {
    const { userUUID } = req.params;
    console.log(req.params);
    const users = await User.findOneAndDelete({ _id: userUUID });
    if (users) {
      return res.status(200).json({
        status: 'success',
        users: users,
      });
    } else {
      res.status(401).json({
        success: 'false',
        message: 'Failed to Delete User',
      });
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({
      success: 'false',
      message: e.message,
    });
  }
};
