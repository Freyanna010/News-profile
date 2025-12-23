import { Navigate, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';

import { useMockAuth } from '@/shared/lib/hooks/useMockAuth';
import { RoutePath } from '@/shared/constans/routes';

interface ProtectedRouteProps {
  children: ReactNode;
}
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useMockAuth();

  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={RoutePath.login} replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
