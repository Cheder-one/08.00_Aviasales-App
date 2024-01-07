/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import ticketsService from '../../service/tickets.service';
import { createNewErr } from '../../utils';

import { errorActions } from './errors';

const { setErrors } = errorActions;

const initialState = {
  entities: [],
  isLoading: true,
};

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    received(state, action) {
      state.entities.push(...action.payload);
      state.isLoading = false;
    },

    ticketsRequested(state) {
      state.isLoading = true;
    },
    ticketsRequestFailed(state) {
      state.isLoading = false;
    },
  },
});

// prettier-ignore
const { received, ticketsRequested, ticketsRequestFailed } = ticketsSlice.actions;
const { reducer: ticketsReducer } = ticketsSlice;

export const ticketActions = {
  ticketsChunkLoaded: () => async (dispatch, getState) => {
    dispatch(ticketsRequested());
    try {
      const searchId = getState().search.entities;
      const data = await ticketsService.fetch(searchId);
      dispatch(received(data));
    } catch ({ message }) {
      const info = 'Ошибка при получении билетов';

      dispatch(ticketsRequestFailed());
      dispatch(setErrors({ message, info }));
      throw createNewErr(message, info);
    }
  },
};

export const ticketSelectors = {
  getTickets: () => (state) => state.tickets.entities,
  getTicketsLoadingStatus: () => (state) => state.tickets.isLoading,
};

export default ticketsReducer;
