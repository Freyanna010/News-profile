import type { NavigateFunction } from 'react-router-dom';

import { baseApi } from '@/shared/config/query';
import { API_TAGS, TOKEN_KEY } from '@/shared/constans';

import type {
  LoginRequest,
  AuthResponse,
  LogoutResponse,
} from '../model/types';
import { MOCK_USERS } from '../model/moks';

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, LoginRequest>({
      //TODO: вместо получения токена
      queryFn: async (credentials, _api, _extraOptions, _baseQuery) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const user = MOCK_USERS.find(
          (user) =>
            user.name === credentials.name &&
            user.password === credentials.password
        );

        if (user) {
          return {
            data: { token: `mock_token_${Math.random()}` },
          };
        } else {
          return {
            error: {
              status: 401,
              data: {
                message: 'Неверныое имя или пароль',
              },
            },
          };
        }
      },

      async onQueryStarted(_credentials, { queryFulfilled, extra }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem(TOKEN_KEY, data.token);
          const { navigate } = extra as { navigate: NavigateFunction };
          navigate('/main');
        } catch (error) {
          console.error(error);
        }
      },

      invalidatesTags: [API_TAGS.AUTH],
    }),

    logout: build.mutation<LogoutResponse, void>({
      queryFn: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return {
          data: { success: true },
        };
      },

      async onQueryStarted(_args, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          console.error(error);
        } finally {
          localStorage.removeItem(TOKEN_KEY);
        }
      },

      invalidatesTags: [API_TAGS.AUTH],
    }),
  }),
});
export const { useLoginMutation, useLogoutMutation } = authApi;
