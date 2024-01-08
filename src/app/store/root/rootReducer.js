import { combineReducers } from 'redux';

import errorReducer from '../reducers/errors';
import searchReducer from '../reducers/searchId';
import ticketsReducer from '../reducers/tickets';
import typeReducer from '../reducers/filters/type';
import transfersReducer from '../reducers/filters/transfers';

const rootReducer = combineReducers({
  search: searchReducer,
  tickets: ticketsReducer,
  filters: combineReducers({
    transfers: transfersReducer,
    type: typeReducer,
  }),
  errors: errorReducer,
});

export default rootReducer;
