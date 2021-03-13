import * as express from 'express';
import { Request, Response } from 'express';
import authRoute from '../domain/auth/AuthRoute';
import movieRoute from '../domain/movie/MovieRoute';
import scheduleRoute from '../domain/schedule/ScheduleRoute';
import userRoute from '../domain/user/UserRoute';

const router = express.Router();

//apis
router.use('/api/auth', authRoute);
router.use('/api/users', userRoute);
router.use('/api/movie/', movieRoute);
router.use('/api/schedule/movie', scheduleRoute);

//by default routes
router.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Backend of Movie App. ',
  });
});

export default router;
