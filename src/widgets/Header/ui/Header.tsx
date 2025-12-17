import logo from '@app/assets/logo.avif';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <div className={classes.logo}>
          <img src={logo} />
        </div>
        <div className={classes.title}>
          <h1>NewsYeaHub</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
