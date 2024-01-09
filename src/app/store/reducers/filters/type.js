const UPDATED = 'type/updated';

const initialState = {
  entities: 'cheap',
};

const updated = (type) => ({
  type: UPDATED,
  payload: type,
});

const typeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATED:
      return { ...state, entities: action.payload };
    default:
      return state;
  }
};

export const typeActions = {
  typeUpdated: (type) => {
    return updated(type);
  },
};

export const typeSelectors = {
  getType: (state) => state.filters.type.entities,
};

export default typeReducer;
