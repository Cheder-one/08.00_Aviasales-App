/* eslint-disable no-await-in-loop */
import { createSelector } from 'reselect';

import ticketsService from '../../service/tickets.service';
import { calcTotalDuration } from '../../utils/ticketsReducer';

import { errorActions } from './errors';

// TODO: Реализовать кеширование результатов фильтров

const { setError } = errorActions;

const RECEIVED = 'tickets/received';
const REQUESTED = 'tickets/requested';
const REQUEST_FAILED = 'tickets/requestFailed';

const initialState = {
  entities: [],
  isChunkLoaded: false,
  isDataLoaded: false,
};

const received = (data) => ({
  type: RECEIVED,
  payload: data,
});

const requested = () => {
  return { type: REQUESTED };
};
const requestFailed = () => {
  return { type: REQUEST_FAILED };
};

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED:
      if (action.payload.stop) {
        return { ...state, isDataLoaded: true };
      }

      return {
        ...state,
        entities: [...state.entities, ...action.payload.tickets],
        isChunkLoaded: true,
      };
    case REQUESTED:
      return { ...state, isChunkLoaded: false };
    case REQUEST_FAILED:
      return { ...state, isChunkLoaded: true };
    default:
      return state;
  }
};

const ticketsLoaded = () => async (dispatch, getState) => {
  dispatch(requested());
  try {
    const searchId = getState().search.entities;
    let stop = false;

    while (!stop) {
      try {
        const data = await ticketsService.fetch(searchId);
        dispatch(received(data));
        stop = data.stop;
      } catch (error) {
        if (error?.response?.status === 500) {
          // prettier-ignore
          console.error('Ошибка сервера, продолжаем подключение...', error.message);
        }
      }
    }
  } catch ({ message }) {
    const info = 'Ошибка при получении билетов';
    dispatch(requestFailed());
    dispatch(setError({ message, info }));

    throw new Error([message, info].join(' | '));
  }
};

const getTickets = (state) => state.tickets.entities;

const getSortedByPrice = createSelector(getTickets, (tickets) =>
  [...tickets].sort((a, b) => a.price - b.price)
);

const getSortedByDuration = createSelector(getTickets, (tickets) =>
  [...tickets].sort((a, b) => {
    const durA = calcTotalDuration(a.segments);
    const durB = calcTotalDuration(b.segments);
    return durA - durB;
  })
);

const getSortedByOptimal = createSelector(getTickets, (tickets) =>
  [...tickets].sort((a, b) => {
    const durA = calcTotalDuration(a.segments);
    const durB = calcTotalDuration(b.segments);
    const optimalA = a.price * durA;
    const optimalB = b.price * durB;
    return optimalA - optimalB;
  })
);

export const ticketActions = {
  ticketsLoaded,
};

export const ticketSelectors = {
  getTickets: (state) => state.tickets.entities,
  getTicketsLoadingStatus: (state) => state.tickets.isChunkLoaded,
  getTicketsByPrice: (state) => getSortedByPrice(state),
  getTicketsByDuration: (state) => getSortedByDuration(state),
  getTicketsByOptimal: (state) => getSortedByOptimal(state),
};

export default ticketsReducer;
