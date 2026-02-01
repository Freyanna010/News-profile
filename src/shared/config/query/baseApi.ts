import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL, API_TAGS } from '@/shared/constans';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      //TODO: тут должна быть настройка заголовка с токеном для всех запросов
      return headers;
    },
  }),
  tagTypes: Object.values(API_TAGS),
  endpoints: () => ({}),
});
