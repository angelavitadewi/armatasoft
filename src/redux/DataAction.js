import * as ActionType from './ActionType';

export const setData = (dispatch, data) => {
  dispatch({ type: ActionType.SET_DATA, payload: data });
};
