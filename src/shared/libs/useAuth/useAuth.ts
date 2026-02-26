import { useSelector } from 'react-redux';

import type { RootState } from '@/app/providers/store/storeConfig';

export const useAuth = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const isAuthenticated = !!token;
  return { token, isAuthenticated };
};
