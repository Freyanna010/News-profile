import type { News } from '@/entities/news';
import { baseApi } from '@/shared/config/query';
import { API_TEGS } from '@/shared/constans';

export const newsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<News[], void>({
      query: () => '/posts',
      providesTags: [API_TEGS.NEWS],
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
