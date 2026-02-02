import { ROUTE_PATH } from './routes';

export const NAV_HEADER_ITEMS = [
  { to: ROUTE_PATH.main, label: 'главная' },
  { to: ROUTE_PATH.news, label: 'новости' },
  { to: ROUTE_PATH.profile, label: 'профиль' },
  { to: ROUTE_PATH.login, label: 'войти' },
] as const;
