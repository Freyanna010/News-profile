import React from 'react';
import { Link as RouterLink, useMatch } from 'react-router-dom';
import clsx from 'clsx';

import classes from './AppLink.module.scss';
import { DEFAULTS } from './constants';
import type { LinkProps } from './types';
import { CLASS_MAPPINGS } from './config';

const AppLink: React.FC<LinkProps> = (props) => {
  const {
    children,
    to,
    type = DEFAULTS.type,
    size = DEFAULTS.size,
    activeType,
    className,
    ...restProps
  } = props;

  const match = useMatch(typeof to === 'string' ? to : to.pathname || '/');
  const isActive = Boolean(match);

  const currentType = isActive && activeType ? activeType : type;
  //TODO: добавить для какждого типа свой active стиль?
  const linkClasses = clsx(
    classes.link,
    CLASS_MAPPINGS.type[currentType],
    CLASS_MAPPINGS.size[size],
    className
  );

  return (
    <RouterLink to={to} className={linkClasses} {...restProps}>
      {children}
    </RouterLink>
  );
};

export default AppLink;
