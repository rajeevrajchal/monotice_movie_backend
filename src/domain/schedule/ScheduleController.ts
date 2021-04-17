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

export const fetchScheduleList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { movieID } = req.params;
    const currentMovieSchedule = await Schedule.find({ movieUUID: movieID });
    return res.status(200).json({
      status: 'success',
      currentMovieSchedule: currentMovieSchedule,
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      success: 'false',
      message: e.message,
      code: e.code,
    });
  }
};

export const checkScheduleTime = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { moviePlayTime } = req.params;
    const currentDate: $FIXME = new Date();
    console.log(Date.parse(currentDate));
    console.log(Date.parse(moviePlayTime));
    if (Date.parse(currentDate) >= Date.parse(moviePlayTime)) {
      const exceedTime = Math.abs(Date.parse(currentDate) - Date.parse(moviePlayTime));
      res.status(200).json({
        success: true,
        message: 'Movie Play Time is exceed ',
        exceedTime: exceedTime,
      });
    } else {
      res.status(200).json({
        success: false,
        message: 'Movie Time is not approaching ',
      });
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({
      success: false,
      message: e.message,
      code: e.code,
    });
  }
};

export const disableSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { scheduleUUID } = req.params;
    const object = req.body;
    console.log(object);
    const { slot, movieUUID } = req.body;
    const schedule = await Schedule.findOneAndUpdate({ _id: scheduleUUID }, req.body);
    console.log(schedule);
    await Movie.updateOne(
      { _id: movieUUID, 'schedule.time': slot },
      {
        $set: {
          'schedule.$.status': object.status,
        },
      }
    );
    return res.status(200).json({
      status: 'success',
      currentMovieSchedule: schedule,
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      success: false,
      message: e.message,
      code: e.code,
    });
  }
};

export const deleteSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { scheduleUUID } = req.params;
    const schedule = await Schedule.findOneAndRemove({ _id: scheduleUUID });
    return res.status(200).json({
      status: 'success',
      currentMovieSchedule: schedule,
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      success: false,
      message: e.message,
      code: e.code,
    });
  }
};
