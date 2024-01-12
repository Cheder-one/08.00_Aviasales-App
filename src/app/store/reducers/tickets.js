/* eslint-disable no-await-in-loop */

import ticketsService from '../../service/tickets.service';

import { errorActions } from './errors';

const { setError } = errorActions;

const REQUESTED = 'tickets/requested';
const RECEIVED = 'tickets/receivedChunk';
const REQUEST_FAILED = 'tickets/requestFailed';

const initialState = {
  entities: [],
  chunkCounter: 0,
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
        chunkCounter: state.chunkCounter + 1,
      };
    case REQUESTED:
      return { ...state, chunkCounter: 0 };
    case REQUEST_FAILED:
      return { ...state, chunkCounter: state.chunkCounter + 1 };
    default:
      return state;
  }
};

const ticketsLoaded = () => async (dispatch, getState) => {
  dispatch(requested());
  try {
    const searchId = getState().search.entities;
    let data = { stop: false };
    // const i = 1;
    while (!data.stop) {
      try {
        data = await ticketsService.fetch(searchId);
        dispatch(received(data));
      } catch (error) {
        if (error?.response?.status === 500) {
          console.warn(
            'Ошибка сервера, продолжаем подключение...',
            error.message
          );
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

export const ticketActions = {
  ticketsLoaded,
};

export const ticketSelectors = {
  getTickets: (state) => state.tickets.entities,
  getTicketsChunkCounter: (state) => state.tickets.chunkCounter,
  getTicketsLoadedStatus: (state) => state.tickets.isDataLoaded,
};

export default ticketsReducer;
