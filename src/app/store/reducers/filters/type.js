/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: '',
};

const typeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    update(state, action) {
      state.entities = action.payload;
    },
  },
});

const { update } = typeSlice.actions;
const { reducer: typeReducer } = typeSlice;

export const actions = {
  typeUpdated: (type) => {
    return update(type);
  },
};

export const selectors = {
  getType: () => (state) => state.filters.type.entities,
};

export default typeReducer;
