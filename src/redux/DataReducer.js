import * as ActionType from './ActionType';

export const dataInitialState = {
  data: [],
};

export const dataReducer = (state = dataInitialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_DATA:
      return { ...state, data: payload };
    default:
      return state;
  }
};
