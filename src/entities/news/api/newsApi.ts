import type { News } from '@/entities/news';
import { baseApi } from '@/shared/config/query';
import { API_TAGS } from '@/shared/constans';

export const newsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<News[], { page: number; limit: number }>({
      query: ({ page, limit }) => `/posts?_page=${page}&_limit=${limit}`,
      providesTags: [API_TAGS.NEWS],
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
