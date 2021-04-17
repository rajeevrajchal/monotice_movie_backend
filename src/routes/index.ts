import * as express from 'express';
import { Request, Response } from 'express';
import authRoute from '../domain/auth/AuthRoute';
import movieRoute from '../domain/movie/MovieRoute';
import userRoute from '../domain/user/UserRoute';
import suggestionRoute from '../domain/suggestion/SuggestionRoute';
import donationRoute from '../domain/paypal/DonationRoute';
import movieScheduleRoute from '../domain/schedule/ScheduleRoute';

const router = express.Router();

//apis
router.use('/api/auth', authRoute);
router.use('/api/users', userRoute);
router.use('/api/movie/', movieRoute);
router.use('/api/suggestion/', suggestionRoute);
router.use('/api/donation/', donationRoute);
router.use('/api/schedule/', movieScheduleRoute);

//by default routes
router.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Backend of Movie App. ',
  });
});

export default router;
