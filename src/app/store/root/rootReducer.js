import { combineReducers } from 'redux';

import errorReducer from '../reducers/errors';
import searchReducer from '../reducers/searchId';
import transfersReducer from '../reducers/filters/transfers';
import counterReducer from '../reducers/counter';
import ticketsReducer from '../reducers/tickets/tickets';
import typeReducer from '../reducers/filters/type';

const rootReducer = combineReducers({
  search: searchReducer,
  tickets: ticketsReducer,
  filters: combineReducers({
    transfers: transfersReducer,
    type: typeReducer,
  }),
  errors: errorReducer,
  counter: counterReducer,
});

export default rootReducer;
