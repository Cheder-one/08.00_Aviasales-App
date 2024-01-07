import { configureStore, combineReducers } from '@reduxjs/toolkit';

import ticketsReducer from './reducers/tickets';
import errorReducer from './reducers/errors';
import transfersReducer from './reducers/filters/transfers';
import typeReducer from './reducers/filters/type';
import searchReducer from './reducers/searchId';

const rootReducer = combineReducers({
  search: searchReducer,
  tickets: ticketsReducer,
  filters: combineReducers({
    transfers: transfersReducer,
    type: typeReducer,
  }),
  errors: errorReducer,
});

const createStore = () => {
  return configureStore({ reducer: rootReducer });
};

export default createStore;
