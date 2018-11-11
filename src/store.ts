import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const composeEnhancers = composeWithDevTools({});

export const buildGameStore = () => (
  process.env.NODE_ENV === 'production' ?
  createStore(
    reducer,
  )
  :
  createStore(
    reducer,
    composeEnhancers()
  )
)
