import express from 'express';
import cros from 'cors';
import route from './routes';

const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cros());
app.use(route);

export default app;
