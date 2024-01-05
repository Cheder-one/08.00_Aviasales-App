/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { throwNewErr } from '../../utils';

const initialState = {
  entities: [],
};

const errorsSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    set(state, action) {
      state.entities = action.payload;
    },
  },
});

const { reducer: errorReducer } = errorsSlice;
const { set } = errorsSlice.actions;

export const errorActions = {
  setErrors: (error) => (dispatch) => {
    const { message, info } = error;
    dispatch(set(message));
    throwNewErr(message, info);
  },
};

export const errorSelectors = {
  getErrors: () => (state) => state.errors.entities,
};

export default errorReducer;
