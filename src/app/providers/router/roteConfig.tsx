import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout } from '@/app/layouts/AuthLayout';
import { MainLayout } from '@/app/layouts/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { NewsPage } from '@/pages/NewsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ROUTE_PATH } from '@/shared/constans';
import { LoaderPage } from '@/shared/ui/LoaderPage';

import ProtectedRoute from './ProtectedRout';

export const router = createBrowserRouter(
  [
    {
      element: (
        <Suspense fallback={<LoaderPage />}>
          <MainLayout />
        </Suspense>
      ),
      children: [
        {
          path: ROUTE_PATH.main,
          element: <HomePage />,
        },
        {
          path: ROUTE_PATH.news,
          element: <NewsPage />,
        },
        {
          path: ROUTE_PATH.profile,
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
        <Suspense fallback={<LoaderPage />}>
          <AuthLayout />
        </Suspense>
      ),
      children: [
        {
          path: ROUTE_PATH.login,
          element: <LoginPage />,
        },
      ],
    },

    {
      path: ROUTE_PATH.not_found,
      element: (
        <Suspense fallback={<LoaderPage />}>
          <NotFoundPage />
        </Suspense>
      ),
    },
  ],
  {
    basename: '/',
  }
);
