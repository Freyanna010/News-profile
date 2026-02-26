import { useLogoutMutation } from '@/entities/auth';
import { useAuth } from '@/shared/libs';

const LogoutButton = () => {
  const { isAuthenticated } = useAuth();
  const [logout, { isLoading }] = useLogoutMutation();

  if (!isAuthenticated) {
    return null;
  }

  const handleLogout = async () => {
    await logout();
  };

  return (
    <button onClick={handleLogout} disabled={isLoading}>
      Выйти
    </button>
  );
};

export default LogoutButton;
