import { configureStore, combineReducers } from '@reduxjs/toolkit';

import ticketsReducer from './reducers/tickets';
import errorReducer from './reducers/errors';
import transfersReducer from './reducers/filters/transfers';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  transfers: transfersReducer,
  errors: errorReducer,
});

const createStore = () => {
  return configureStore({ reducer: rootReducer });
};

export default createStore;
