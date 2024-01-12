import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import { thunk } from 'redux-thunk';

import rootReducer from './rootReducer';

const initiateStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default initiateStore;
