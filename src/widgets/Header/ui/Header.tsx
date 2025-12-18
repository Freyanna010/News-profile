import logo from '@app/assets/logo.avif';

import { NavBar } from '@/shared/ui/NavBar';

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
        <p>новости</p>
        <p>главная</p>
        <p>профиль</p>
        <p>регистрация</p>
      </NavBar>
    </header>
  );
};

export default Header;
