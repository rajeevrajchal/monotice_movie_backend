import { NextFunction, Request, Response } from 'express';
import Movie from './Movie';
import { MovieStatus } from './MovieEnum';

export const fetchCurrentMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const current_movie = await Movie.findOne({ status: MovieStatus.current });
    if (current_movie) {
      return res.status(200).json({
        status: 'success',
        current_movie: current_movie,
      });
    } else {
      res.status(400).json({
        success: 'false',
        message: 'No Current Movie',
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

export const fetchMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const movie = await Movie.find();
    if (movie) {
      return res.status(200).json({
        status: 'success',
        movie: movie,
      });
    } else {
      res.status(400).json({
        success: 'false',
        message: 'No Movie',
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

export const storeMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const movie = await Movie.create(req.body);
    if (movie) {
      return res.status(201).json({
        status: 'success',
        movie: movie,
      });
    } else {
      res.status(400).json({
        success: 'false',
        message: 'cannot store movie',
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
