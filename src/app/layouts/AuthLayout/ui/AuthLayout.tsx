import { Outlet } from 'react-router-dom';

import classes from './AuthLayout.module.scss';

const AuthLayout = () => {
  return (
    <div className={classes.authLayout}>
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
