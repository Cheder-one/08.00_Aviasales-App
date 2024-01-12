import fetchSearchId from '../../service/fetchSearchId';

const SET = 'searchId/set';

const initialState = {
  entities: null,
};

const set = (searchId) => ({
  type: SET,
  payload: searchId,
});

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET:
      return { ...state, entities: action.payload };
    default:
      return state;
  }
};

export const searchActions = {
  searchIdSet: (callback) => async (dispatch) => {
    const searchId = await fetchSearchId();
    await dispatch(set(searchId));
    callback();
  },
};

export const searchSelectors = {
  getSearchId: (state) => state.search.entities,
};

export default searchReducer;
