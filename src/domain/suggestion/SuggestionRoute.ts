import express from 'express';
import { deleteSuggestion, fetchSuggestion, storeSuggestion } from './SuggestionController';
import validateToken from '../../middleware/validateToken';
import checkPermission from '../../middleware/checkPermission';
import { UserEnum } from '../auth/userEnum';

const suggestionRoute = express.Router();

suggestionRoute.post('', storeSuggestion);
suggestionRoute.get('', [validateToken, checkPermission([UserEnum.admin, UserEnum.super_admin])], fetchSuggestion);
suggestionRoute.delete(
  '/:suggestionUUID',
  [validateToken, checkPermission([UserEnum.admin, UserEnum.super_admin])],
  deleteSuggestion
);

export default suggestionRoute;
