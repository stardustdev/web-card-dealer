import { combineReducers } from 'redux';

import card from './card/reducer';

const reducer = combineReducers({ card });

export type AppState = ReturnType<typeof reducer>;

export default reducer;
