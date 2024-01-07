/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import fetchSearchId from '../../service/fetchSearchId';

const initialState = {
  entities: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    set: (state, action) => {
      state.entities = action.payload;
    },
  },
});

const { reducer: searchReducer } = searchSlice;
const { set } = searchSlice.actions;

export const searchActions = {
  searchIdWasSet: () => async (dispatch) => {
    const searchId = await fetchSearchId();
    dispatch(set(searchId));
  },
};

export const searchSelectors = {
  getSearchId: () => (state) => state.search.entities,
};

export default searchReducer;
