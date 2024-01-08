const UPDATED = 'transfers/updated';

const initialState = {
  entities: [],
};

const updated = (ids) => ({
  type: UPDATED,
  payload: ids,
});

const transfersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATED:
      return { ...state, entities: action.payload };
    default:
      return state;
  }
};

export const transferActions = {
  checkboxChanged: (ids) => {
    return updated(ids);
  },
};

export const transferSelectors = {
  getTransfers: () => (state) => state.filters.transfers.entities,
};

export default transfersReducer;
