import React from 'react';
import clsx from 'clsx';

import classes from './NavBar.module.scss';
import type { NavBarProps } from './types';
import { DEFAULTS } from './constants';
import { CLASS_MAPPINGS } from './config';

const NavBar: React.FC<NavBarProps> = ({
  children,
  type = DEFAULTS.type,
  spacing = DEFAULTS.spacing,
  align = DEFAULTS.align,
  justify = DEFAULTS.justify,
  className,
}) => {
  const navClasses = clsx(
    classes.navBar,
    CLASS_MAPPINGS.orientation[type],
    CLASS_MAPPINGS.spacing[spacing],
    CLASS_MAPPINGS.align[align],
    CLASS_MAPPINGS.justify[justify],
    className
  );

  return <nav className={navClasses}>{children}</nav>;
};
export default NavBar;
