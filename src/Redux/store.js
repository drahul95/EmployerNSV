import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
