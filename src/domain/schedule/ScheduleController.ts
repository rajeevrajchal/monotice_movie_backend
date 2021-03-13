import { NextFunction, Request, Response } from 'express';
import Movie from '../movie/Movie';
import Schedule from './Schedule';
import { $FIXME } from '../../constant';

export const storeSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const scheduleInfo = {
      time: req.body.slot,
      status: req.body.status,
    };
    const movieUUID = req.body.movieUUID;
    const response = await Movie.findByIdAndUpdate(movieUUID, {
      $addToSet: {
        schedule: [scheduleInfo],
      },
    });
    if (response) {
      const schedule: $FIXME = await Schedule.create(req.body);
      if (schedule) {
        return res.status(201).json({
          status: 'success',
          schedule_movie: schedule,
        });
      } else {
        res.status(400).json({
          success: 'false',
          message: 'No Time slot can acquired.',
        });
      }
    } else {
      res.status(400).json({
        success: 'false',
        message: 'No Time slot can acquired.',
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
