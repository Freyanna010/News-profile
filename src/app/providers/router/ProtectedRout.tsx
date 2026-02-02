import { Navigate, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';

import { ROUTE_PATH } from '@/shared/constans/routes';
import { useAuth } from '@/shared/libs';

interface ProtectedRouteProps {
  children: ReactNode;
}
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate to={ROUTE_PATH.login} replace state={{ from: location }} />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
