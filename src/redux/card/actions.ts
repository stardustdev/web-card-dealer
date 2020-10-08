import axios from 'axios';
import { Dispatch } from 'redux';

import Card from 'src/models/Card';
import { CardActionTypes, ICardAction } from './types';

export const suffleCardsCreator = () => (dispatch: Dispatch) => {
  axios
    .get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then((response) => dispatch(shuffleCards(response.data.deck_id)))
    .catch((err) => dispatch(fetchError(err)));
};

export const dealCardsCreator = (deckId: string) => (dispatch: Dispatch) => {
  axios
    .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then((response) => dispatch(dealCards(response.data.cards)))
    .catch((err) => dispatch(fetchError(err)));
};

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
