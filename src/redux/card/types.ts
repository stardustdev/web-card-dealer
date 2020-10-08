import Card from 'src/models/Card';

export enum CardActionTypes {
  SHUFFLE_CARDS = 'SHUFFLE_CARDS',
  DEAL_CARDS = 'DEAL_CARDS',
  FETCH_ERROR = 'DEAL_CARDS',
}

export interface CardState {
  cards: Card[];
  deckId: string;
  error: string;
}

interface ShuffleCardsAction {
  type: string;
  payload: string;
}

interface DealCardsAction {
  type: string;
  payload: Card[];
}

interface fetchErrorAction {
  type: string;
  payload: string;
}

export type ICardAction =
  | ShuffleCardsAction
  | DealCardsAction
  | fetchErrorAction;
