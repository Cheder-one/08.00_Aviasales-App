/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: 'cheap',
};

const typeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    updated(state, action) {
      state.entities = action.payload;
    },
  },
});

const { reducer: typeReducer } = typeSlice;
const { updated } = typeSlice.actions;

export const typeActions = {
  typeUpdated: (type) => {
    return updated(type);
  },
};

export const typeSelectors = {
  getType: () => (state) => state.filters.type.entities,
};

export default typeReducer;
