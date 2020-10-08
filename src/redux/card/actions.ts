import Card from 'src/models/Card';
import { CardActionTypes, ICardAction } from './types';

export const shuffleCards = (payload: string): ICardAction => ({
  type: CardActionTypes.SHUFFLE_CARDS,
  payload,
});

export const dealCards = (payload: Card[]): ICardAction => ({
  type: CardActionTypes.DEAL_CARDS,
  payload,
});

export const fetchError = (payload: string): ICardAction => ({
  type: CardActionTypes.FETCH_ERROR,
  payload,
});
