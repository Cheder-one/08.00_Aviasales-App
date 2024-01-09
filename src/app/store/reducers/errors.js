const SET = 'errors/set';

const initialState = {
  entities: [],
};

const set = (errors) => ({
  type: SET,
  payload: errors,
});

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET:
      return { ...state, entities: action.payload };
    default:
      return state;
  }
};

export const errorActions = {
  setError: (err) => (dispatch) => {
    const { message, info } = err;
    dispatch(set({ message, info }));
  },
};

export const errorSelectors = {
  getError: (state) => state.errors.entities,
};

export default errorReducer;
