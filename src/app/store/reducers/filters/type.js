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

const { reducer: typeReducer } = typeSlice;
const { update } = typeSlice.actions;

export const typeActions = {
  typeUpdated: (type) => {
    return update(type);
  },
};

export const typeSelectors = {
  getType: () => (state) => state.filters.type.entities,
};

export default typeReducer;
