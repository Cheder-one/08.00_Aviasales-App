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

const { update } = transfersSlice.actions;
const { reducer: transfersReducer } = transfersSlice;

export const actions = {
  checkboxChanged: (arrIds) => {
    return update(arrIds);
  },
};

export const selectors = {
  getTransfers: () => (state) => state.transfers.entities,
};

export default transfersReducer;
