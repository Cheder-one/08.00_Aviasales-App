/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: [],
};

const transfersSlice = createSlice({
  name: 'transfers',
  initialState,
  reducers: {
    update(state, action) {
      state.entities = action.payload;
    },
  },
});

const { reducer: transfersReducer } = transfersSlice;
const { update } = transfersSlice.actions;

export const transferActions = {
  checkboxChanged: (arrIds) => {
    return update(arrIds);
  },
};

export const transferSelectors = {
  getTransfers: () => (state) => state.filters.transfers.entities,
};

export default transfersReducer;
