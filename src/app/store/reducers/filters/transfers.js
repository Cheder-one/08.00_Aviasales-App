/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: [],
};

const transfersSlice = createSlice({
  name: 'transfers',
  initialState,
  reducers: {
    updated(state, action) {
      state.entities = action.payload;
    },
  },
});

const { reducer: transfersReducer } = transfersSlice;
const { updated } = transfersSlice.actions;

export const transferActions = {
  checkboxChanged: (arrIds) => {
    return updated(arrIds);
  },
};

export const transferSelectors = {
  getTransfers: () => (state) => state.filters.transfers.entities,
};

export default transfersReducer;
