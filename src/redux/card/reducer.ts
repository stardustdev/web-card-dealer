import Card from 'src/models/Card';
import { CardState, ICardAction, CardActionTypes } from './types';

const initialState: CardState = {
  cards: [],
  deckId: '',
  error: '',
};

const reducer = (state = initialState, action: ICardAction): CardState => {
  const { type, payload } = action;
  switch (type) {
    case CardActionTypes.SHUFFLE_CARDS:
      return {
        ...state,
        deckId: payload as string,
      };

    case CardActionTypes.DEAL_CARDS:
      return {
        ...state,
        cards: payload as Card[],
      };

    case CardActionTypes.FETCH_ERROR:
      return {
        ...state,
        error: payload as string,
      };

    case CardActionTypes.CLEAR_CARD_STATE:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
