/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { entities: [] };

const errorsSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    set(state, action) {
      state.entities = action.payload;
    },
  },
});

const { set } = errorsSlice.actions;

export const setErrors = (message) => (dispatch) => {
  dispatch(set(message));
};

export const getErrors = () => (state) => state.errors.entities;

const { reducer: errorReducer } = errorsSlice;
export default errorReducer;
