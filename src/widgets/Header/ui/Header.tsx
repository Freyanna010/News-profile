import logo from '@app/assets/logo.avif';

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

      <nav>
        <p>новости</p>
        <p>главная</p>
        <p>профиль</p>
        <p>регистрация</p>
      </nav>
    </header>
  );
};

export default Header;
