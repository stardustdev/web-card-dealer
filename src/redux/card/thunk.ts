import { Dispatch } from 'redux';
import axios from 'axios';

import { shuffleCards, dealCards, fetchError } from './actions';

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
