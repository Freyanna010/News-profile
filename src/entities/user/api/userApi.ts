import { baseApi } from '@/shared/config/query';

import type { User } from '../model/types';

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<User, number>({
      query: (id) => `/users/${id}`,
      providesTags: ['User'],
    }),
  }),
});

export const { useGetUserQuery } = userApi;
