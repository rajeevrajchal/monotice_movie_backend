import mongoose, { Schema } from 'mongoose';
import { dArray, dEnum, rArray, rNumber, rString, uArray, uObject, uString } from '../../utils/field';
import { MovieDeleteEnum, MovieLang, MovieStatus } from './MovieEnum';

const movieSchema = new Schema(
  {
    name: rString,
    description: rString,
    duration: rString,
    year: rNumber,
    like: rNumber,
    rating: rNumber,
    tomato_rating: rNumber,
    genres: rArray,
    poster: rString,
    movie: uString,
    schedule: dArray,
    language: dEnum(MovieLang, MovieLang.en),
    delete_flag: dEnum(MovieDeleteEnum, MovieDeleteEnum.active),
    status: dEnum(MovieStatus, MovieStatus.list),
    uploader: uObject,
    uploaderUUID: uString,
  },
  { timestamps: true }
);

const Movie = mongoose.model('movies', movieSchema);
export default Movie;
