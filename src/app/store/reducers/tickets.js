/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import ticketsService from '../service/tickets.service';
import { throwNewErr } from '../../utils';

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

const { reducer: ticketsReducer } = ticketsSlice;
const { received, ticketsRequested, ticketsRequestFailed } =
  ticketsSlice.actions;

export const ticketActions = {
  tasksLoaded: () => async (dispatch) => {
    dispatch(ticketsRequested());
    try {
      const data = await ticketsService.fetch();
      dispatch(received(data));
    } catch ({ message }) {
      const info = 'Ошибка при получении билетов';
      dispatch(ticketsRequestFailed());
      dispatch(setErrors({ message, info }));
    }
  },
};

export const ticketSelectors = {
  getTickets: () => (state) => state.tickets.entities,
  getTicketsLoadingStatus: () => (state) => state.tickets.isLoading,
};

export default ticketsReducer;
