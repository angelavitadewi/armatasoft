import { combineReducers, createStore } from 'redux';

import { dataReducer, dataInitialState } from './DataReducer';

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      data: dataReducer,
    }),

    {
      data: dataInitialState,
    },
  );

  return store;
};

export default configureStore;
