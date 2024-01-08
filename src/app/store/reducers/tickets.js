import ticketsService from '../../service/tickets.service';
import { createNewErr } from '../../utils';

import { errorActions } from './errors';

const { setErrors } = errorActions;

//----------------------------
const RECEIVED = 'tickets/received';
const REQUESTED = 'tickets/requested';
const SORTED_PRICE = 'tickets/sortedPrice';
const SORTED_OPTIMAL = 'tickets/sortedOptimal';
const REQUEST_FAILED = 'tickets/requestFailed';
const SORTED_DURATION = 'tickets/sortedDuration';

const initialState = {
  entities: [],
  isLoading: true,
};

const received = (data) => ({
  type: RECEIVED,
  payload: data,
});

const requested = () => {
  return {
    type: REQUESTED,
  };
};
const requestFailed = () => {
  return {
    type: REQUEST_FAILED,
  };
};

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED:
      return {
        ...state,
        entities: action.payload,
        isLoading: false,
      };
    case SORTED_PRICE:
      return {
        //
      };
    case SORTED_DURATION:
      return {
        //
      };
    case SORTED_OPTIMAL:
      return {
        //
      };
    case REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

const ticketsChunkLoaded = () => async (dispatch, getState) => {
  dispatch(requested());
  try {
    const searchId = getState().search.entities;
    const data = await ticketsService.fetch(searchId);
    dispatch(received(data));
  } catch ({ message }) {
    const info = 'Ошибка при получении билетов';

    dispatch(requestFailed());
    dispatch(setErrors({ message, info }));
    throw createNewErr(message, info);
  }
};

const allTicketsLoaded = () => () => {};

export const ticketActions = {
  ticketsChunkLoaded,
  allTicketsLoaded,
};

export const ticketSelectors = {
  getTickets: () => (state) => state.tickets.entities,
  getTicketsLoadingStatus: () => (state) => state.tickets.isLoading,
};

export default ticketsReducer;
