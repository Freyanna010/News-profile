import { ROUTE_PATH } from '@/shared/constans';
import { useAuth } from '@/shared/libs';
import { AppLink } from '@/shared/ui/AppLink';

const LoginLink = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return null;

  return (
    <AppLink to={ROUTE_PATH.login} type="primary" activeType="secondary">
      <p>Войти</p>
    </AppLink>
  );
};

export default LoginLink;
