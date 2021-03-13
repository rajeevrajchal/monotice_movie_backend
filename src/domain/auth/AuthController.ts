import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { $FIXME } from '../../constant';
import User from './User';
import { UserEnum } from './userEnum';

const generateToken = (user: $FIXME) => {
  const secrete: $FIXME = process.env.SECRET_KEY;
  const payload = {
    user: {
      id: user._id,
      name: user.name,
      role: user.role,
    },
  };
  return jwt.sign(payload, secrete, {
    algorithm: 'HS256',
    expiresIn: 3600,
  });
};

const encryptPassword = (password: string) => {
  return bcrypt.hash(password, 12);
};

const comparePassword = (reqPassword: string, user: $FIXME) => {
  return bcrypt.compare(reqPassword, user.password);
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(401).json({
        success: 'false',
        message: 'Authentication failed',
      });
    }
    const isMatch = await comparePassword(req.body.password, user);
    if (isMatch) {
      const token = await generateToken(user);
      if (token) {
        return res.status(200).json({
          status: 'success',
          user: user,
          token: token,
        });
      }
      res.status(401).json({
        success: 'false',
        message: 'Authentication failed',
      });
    }
    res.status(401).json({
      success: 'false',
      message: 'Authentication failed',
    });
  } catch (e) {
    res.status(401).json({
      success: 'false',
      message: 'Authentication failed',
    });
  }
};

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password } = req.body;
    const encryptedPassword = await encryptPassword(password);
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: encryptedPassword,
      address: req.body.address,
      role: req.body.role ?? UserEnum.admin,
    });
    if (user) {
      return res.status(201).json({
        status: 'success',
        users: user,
      });
    } else {
      res.status(400).json({
        success: 'false',
        message: 'cannot store user',
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
