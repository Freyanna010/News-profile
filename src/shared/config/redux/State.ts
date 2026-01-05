import type { baseApi } from '../query';

export interface State {
  [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
  // TODO: Добавить:
  // user: UserState;
  // news: NewsState;
}
