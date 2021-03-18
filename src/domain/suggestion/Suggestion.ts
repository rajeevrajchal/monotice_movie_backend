import mongoose, { Schema } from 'mongoose';
import { dEnum, rString, uString } from '../../utils/field';
import { SuggestionStatus } from './SuggestionEnum';

const suggestionSchema = new Schema(
  {
    name_movie: rString,
    movie_reference: uString,
    status: dEnum(SuggestionStatus),
  },
  { timestamps: true }
);

const Movie = mongoose.model('suggestions', suggestionSchema);
export default Movie;
