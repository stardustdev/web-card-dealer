import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import reducer, { AppState } from './redux/reducer';

const store = createStore(
  reducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState>)
);

export default store;
