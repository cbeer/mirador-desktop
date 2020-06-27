import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
// eslint-disable-next-line import/no-cycle
import counterReducer from './features/counter/counterSlice';
import miradorReducer from 'mirador/dist/es/src/state/reducers/rootReducer';

export default function createRootReducer(history: History) {
  return miradorReducer({
    router: connectRouter(history),
    counter: counterReducer,
  });
}
