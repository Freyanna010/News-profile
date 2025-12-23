import { RoutePath } from './routes';

export const NAV_HEADER_ITEMS = [
  { to: RoutePath.main, label: 'главная' },
  { to: RoutePath.news, label: 'новости' },
  { to: RoutePath.profile, label: 'профиль' },
  { to: RoutePath.login, label: 'войти' },
] as const;
