import { configureStore, combineReducers } from '@reduxjs/toolkit';

import ticketsReducer from './reducers/tickets';
import errorReducer from './reducers/errors';
import transfersReducer from './reducers/filters/transfers';
import { typeReducer } from './reducers';

const rootReducer = combineReducers({
  filters: combineReducers({
    transfers: transfersReducer,
    type: typeReducer,
  }),
  tickets: ticketsReducer,
  errors: errorReducer,
});

const createStore = () => {
  return configureStore({ reducer: rootReducer });
};

export default createStore;
