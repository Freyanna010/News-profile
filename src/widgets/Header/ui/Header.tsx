import logo from '@shared/assets/logo.avif';

import { NavBar } from '@/shared/ui/NavBar';
import { AppLink } from '@/shared/ui/AppLink';
import { RoutePath } from '@/shared/constans/route';

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
          <AppLink to={RoutePath.main} type="primary" activeType="secondary">
            <p>главная</p>
          </AppLink>
          <AppLink to={RoutePath.news} type="primary" activeType="secondary">
            <p>новости</p>
          </AppLink>
          <AppLink to={RoutePath.profile} type="primary" activeType="secondary">
            <p>профиль</p>
          </AppLink>
          <AppLink to={RoutePath.login} type="primary">
            {/*TODO: добавить "выйти" */}
            <p>войти</p>
          </AppLink>
        </NavBar>
      </div>
    </header>
  );
};

export default Header;
