import { NextFunction, Request, Response } from 'express';
import Suggestion from './Suggestion';

export const storeSuggestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const suggestions = await Suggestion.create(req.body);
    if (suggestions) {
      return res.status(200).json({
        status: 'success',
        suggestions: suggestions,
      });
    } else {
      res.status(400).json({
        success: 'false',
        message: 'No suggestion can stored.',
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

export const fetchSuggestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const suggestions = await Suggestion.find();
    if (suggestions) {
      return res.status(200).json({
        status: 'success',
        suggestions: suggestions,
      });
    } else {
      res.status(400).json({
        success: 'false',
        message: 'No suggestion can fetch.',
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

export const deleteSuggestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { suggestionUUID } = req.params;
    console.log(suggestionUUID);
    const suggestion = await Suggestion.findOneAndDelete({ _id: suggestionUUID });
    if (suggestion) {
      return res.status(200).json({
        status: 'success',
        suggestion: suggestion,
      });
    } else {
      res.status(400).json({
        success: 'false',
        message: 'cannot delete suggestion',
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
