import logo from '@shared/assets/logo.avif';

import { NavBar } from '@/shared/ui/NavBar';
import { AppLink } from '@/shared/ui/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

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
          <AppLink to={RoutePath.news} type="primary">
            <p>новости</p>
          </AppLink>
          <AppLink to={RoutePath.main} type="primary">
            <p>главная</p>
          </AppLink>
          <AppLink to={RoutePath.profile} type="primary">
            <p>профиль</p>
          </AppLink>
          <AppLink to={RoutePath.login} type="primary">
            //TODO: добавить "выйти"
            <p>войти</p>
          </AppLink>
        </NavBar>
      </div>
    </header>
  );
};

export default Header;
