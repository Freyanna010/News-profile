import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL, API_TEGS } from '@/shared/constans';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      //TODO: настроить aвторизацию
      return headers;
    },
  }),
  tagTypes: Object.values(API_TEGS),
  endpoints: () => ({}),
});
