/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { entities: [] };

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    //
  },
});

const { add } = ticketsSlice.actions;

const { reducer: ticketsReducer } = ticketsSlice;
export default ticketsReducer;
