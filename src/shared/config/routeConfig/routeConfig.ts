export const AppRoutes = {
  MAIN: 'main',
  NEWS: 'news',
  PROFILE: 'profile',
  LOGIN: 'login',
  NOT_FOUND: 'not_found',
} as const;

export type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export type AppRouteObject = {
  path: string;
  element?: React.ReactNode;
  authOnly?: boolean;
  title?: string;
  layout: string;
};

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.NEWS]: '/news',
  [AppRoutes.PROFILE]: '/profile/:id?',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteObject> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    title: 'Главная страница',
    authOnly: false,
    layout: 'main',
  },
  [AppRoutes.NEWS]: {
    path: RoutePath[AppRoutes.NEWS],
    title: 'Новости',
    authOnly: false,
    layout: 'main',
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath[AppRoutes.PROFILE],
    title: 'Профиль пользователя',
    authOnly: true,
    layout: 'main',
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath[AppRoutes.LOGIN],
    title: 'Авторизация',
    authOnly: false,
    layout: 'auth',
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    title: 'Страница не найдена',
    authOnly: false,
    layout: 'main',
  },
};
