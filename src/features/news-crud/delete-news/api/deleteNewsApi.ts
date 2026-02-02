import { baseApi } from '@/shared/config/query';
import type { News } from '@/entities/news';
import { API_TAGS } from '@/shared/constans';
//TODO: добавить тостеры

export const deleteNewsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    deleteNews: build.mutation<void, News['id']>({
      query: (newsId) => ({
        url: `/posts/${newsId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [API_TAGS.NEWS],
    }),
  }),
});

export const { useDeleteNewsMutation } = deleteNewsApi;
