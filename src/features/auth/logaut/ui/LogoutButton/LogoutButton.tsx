import { CiLogout } from 'react-icons/ci';

import { useLogoutMutation } from '@/entities/auth';
import { useAuth } from '@/shared/libs';
import { Button } from '@/shared/ui/Button';

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
    <Button
      onClick={handleLogout}
      disabled={isLoading}
      variant="text"
      icon=<CiLogout />
    />
  );
};

export default LogoutButton;
