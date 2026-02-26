export const AppRoutes = {
  MAIN: 'main',
  NEWS: 'news',
  PROFILE: 'profile',
  LOGIN: 'login',
  NOT_FOUND: 'not_found',
} as const;

export type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export const ROUTE_PATH: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.NEWS]: '/news',
  [AppRoutes.PROFILE]: '/profile/:id?',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.NOT_FOUND]: '*',
};
