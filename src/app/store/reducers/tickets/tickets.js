/* eslint-disable no-await-in-loop */

import { handleError, handleOfflineError } from './helpers';
import fetchData from './helpers/fetchData';

const REQUESTED = 'tickets/requested';
const RECEIVED = 'tickets/receivedChunk';
const REQUEST_FAILED = 'tickets/requestFailed';

const initialState = {
  entities: [],
  chunkCounter: 0,
  isDataLoaded: false,
  isDataReceiving: false,
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
        isDataReceiving: true,
      };
    case REQUESTED:
      return { ...state, isDataReceiving: true };
    case REQUEST_FAILED:
      return { ...state, isDataReceiving: false };
    default:
      return state;
  }
};

export const dataReceived = (data) => (dispatch) => {
  dispatch(received(data));
};

const ticketsLoaded = () => async (dispatch, getState) => {
  try {
    const searchId = getState().search.entities;

    while (!getState().tickets.isDataLoaded) {
      await fetchData(dispatch, searchId);

      if (!navigator.onLine) {
        handleOfflineError(dispatch);
        break;
      }
      dispatch(requested());
    }
  } catch (error) {
    dispatch(requestFailed());
    handleError(dispatch, error);
  }
};

export const ticketActions = {
  ticketsLoaded,
};

export const ticketSelectors = {
  getTickets: (state) => state.tickets.entities,
  getTicketsChunkCounter: (state) => state.tickets.chunkCounter,
  getTicketsLoadedStatus: (state) => state.tickets.isDataLoaded,
  getTicketsReceivingStatus: (state) => state.tickets.isDataReceiving,
};

export default ticketsReducer;
