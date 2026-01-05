import { createReduxStore, type State } from '@/shared/config/redux';

//TODO: тут редьюсеры
const reducers = {};

export const getStore = (initialState?: State) =>
  createReduxStore({
    reducers,
    initialState,
  });

export const store = getStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
