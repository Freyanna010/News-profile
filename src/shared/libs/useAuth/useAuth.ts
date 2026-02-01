import { TOKEN_KEY } from '@/shared/constans';

export const useAuth = () => {
  const isAuthenticated = !!localStorage.getItem(TOKEN_KEY);
  return { isAuthenticated };
};
