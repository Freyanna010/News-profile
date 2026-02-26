import logo from '@shared/assets/logo.avif';

import { NavBar } from '@/shared/ui/NavBar';
import { AppLink } from '@/shared/ui/AppLink';
import { NAV_HEADER_ITEMS } from '@/shared/constans';
import { LoginLink } from '@/features/auth';
import { LogoutButton } from '@/features/auth/logaut';

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
          {NAV_HEADER_ITEMS.map((item) => (
            <AppLink
              key={item.to}
              to={item.to}
              type="primary"
              activeType="secondary"
            >
              <p>{item.label}</p>
            </AppLink>
          ))}

          <LoginLink />
          <LogoutButton />
        </NavBar>
      </div>
    </header>
  );
};

export default Header;
