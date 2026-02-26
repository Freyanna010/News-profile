import { UserCard } from '@/entities/user';

import classes from './ProfilePage.module.scss';

export const ProfilePage = () => {
  return (
    <div>
      <h1 className={classes.title}>Профиль пользователя</h1>
      <UserCard />
    </div>
  );
};

export default ProfilePage;
