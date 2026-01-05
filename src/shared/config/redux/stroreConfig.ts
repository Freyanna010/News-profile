import {
  combineReducers,
  configureStore,
  type Reducer,
} from '@reduxjs/toolkit';

import type { State } from './State';
import { baseApi } from '../query';

interface CreateReduxStoreParams {
  initialState?: State;
  //TODO: типизировать редбюсеры
  reducers?: Record<string, Reducer>;
}

export const createReduxStore = ({
  initialState,
  reducers = {},
}: CreateReduxStoreParams) => {
  const allReducers = {
    [baseApi.reducerPath]: baseApi.reducer,
    ...reducers,
  };

  return configureStore({
    reducer: combineReducers(allReducers),
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });
};
