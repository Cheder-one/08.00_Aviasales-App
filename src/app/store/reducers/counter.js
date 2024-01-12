const initialState = {
  counter: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

const incCounter = () => ({ type: 'INCREMENT' });
const decCounter = () => ({ type: 'DECREMENT' });

export const counterActions = { incCounter, decCounter };
export const counterSelectors = {
  getCounter: (state) => state.counter,
};

export default counterReducer;
