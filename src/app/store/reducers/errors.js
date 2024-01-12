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
      // prettier-ignore
      return { 
        ...state, 
        entities: [...state.entities, action.payload] };
    default:
      return state;
  }
};

export const errorActions = {
  setErrors: (err) => (dispatch) => {
    dispatch(set(err));
  },
};

export const errorSelectors = {
  getErrors: (state) => state.errors.entities,
};

export default errorReducer;
