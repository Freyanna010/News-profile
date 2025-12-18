import logo from '@app/assets/logo.avif';

import { NavBar } from '@/shared/ui/NavBar';
import { AppLink } from '@/shared/ui/AppLink';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.leftFlex}>
        <div className={classes.logo}>
          <img src={logo} />
        </div>
        <div className={classes.title}>
          <h1>NewsYeaHub</h1>
        </div>
      </div>

      <NavBar type="horizontal">
        <AppLink to="/news" type="primary">
          <p>новости</p>
        </AppLink>
        <AppLink to="/news" type="primary">
          <p>новости</p>
        </AppLink>
        <AppLink to="/news" type="primary">
          <p>новости</p>
        </AppLink>
      </NavBar>
    </header>
  );
};

export default Header;
