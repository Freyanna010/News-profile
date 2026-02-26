import type { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { baseApi } from '@/shared/config/query';
import { API_TAGS, ROUTE_PATH } from '@/shared/constans';

import type {
  LoginRequest,
  AuthResponse,
  LogoutResponse,
} from '../model/types';
import { MOCK_USERS } from '../../../shared/constans/moks';
import { clearToken, setToken } from '../model/authSlice';

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
                message: 'Неверныое имя или пароль🙅🏻‍♀️',
              },
            },
          };
        }
      },

      async onQueryStarted(_credentials, { queryFulfilled, dispatch, extra }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setToken(data.token));
          toast.success('Вход выполнен успешно🖐🏻');
          const { navigate } = extra as { navigate: NavigateFunction };
          navigate(ROUTE_PATH.main);
        } catch (error) {
          if (error && typeof error === 'object' && 'data' in error) {
            const err = error as { data: { message: string } };
            const errorMessage = err.data.message;
            toast.error(errorMessage);
            console.error(errorMessage);
          } else {
            toast.error('Ошибка входа🤷🏻‍♀️');
            console.error('Ошибка входа🤷🏻‍♀️');
          }
        }
      },

      invalidatesTags: [API_TAGS.AUTH],
    }),
    logout: build.mutation<LogoutResponse, void>({
      queryFn: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return { data: { success: true } };
      },

      async onQueryStarted(_args, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          dispatch(clearToken());
          toast.success('Вы успешно вышли. Пока.');
        } catch (error) {
          toast.error('Не получилось выйти🤷🏻‍♀️');
          console.error(error);
        }
      },

      invalidatesTags: [API_TAGS.AUTH],
    }),
  }),
});
export const { useLoginMutation, useLogoutMutation } = authApi;
