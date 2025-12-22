import logo from '@shared/assets/logo.avif';

import { NavBar } from '@/shared/ui/NavBar';
import { AppLink } from '@/shared/ui/AppLink';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <div className={classes.leftFlex}>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={classes.title}>
            <h1>NewsYeaHub</h1>
          </div>
        </div>

        <NavBar type="horizontal" align="end" spacing="small">
          <AppLink to="/news" type="primary">
            новости
          </AppLink>
          <AppLink to="/news" type="primary">
            новости
          </AppLink>
          <AppLink to="/news" type="primary">
            новости
          </AppLink>
        </NavBar>
      </div>
    </header>
  );
};

export default Header;
