import { Suspense } from 'react';
import { MoonLoader } from 'react-spinners';
import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout } from '@/app/layouts/AuthLayout';
import { MainLayout } from '@/app/layouts/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { NewsPage } from '@/pages/NewsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { RoutePath } from '@/shared/constans';

import ProtectedRoute from './ProtectedRout';

export const router = createBrowserRouter(
  [
    {
      element: (
        <Suspense fallback={<MoonLoader color="#5a17ff" size={90} />}>
          <MainLayout />
        </Suspense>
      ),
      children: [
        {
          path: RoutePath.main,
          element: <HomePage />,
        },
        {
          path: RoutePath.news,
          element: <NewsPage />,
        },
        {
          path: RoutePath.profile,
          element: (
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          ),
        },
      ],
    },

    {
      element: (
        <Suspense fallback={<MoonLoader color="#5a17ff" size={90} />}>
          <AuthLayout />
        </Suspense>
      ),
      children: [
        {
          path: RoutePath.login,
          element: <LoginPage />,
        },
      ],
    },

    {
      path: RoutePath.not_found,
      element: (
        <Suspense fallback={<MoonLoader color="#ff1717ff" size={90} />}>
          <NotFoundPage />
        </Suspense>
      ),
    },
  ],
  {
    basename: '/',
  }
);
