import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
    className,
    ...restProps
  } = props;

  const linkClasses = clsx(
    classes.link,
    CLASS_MAPPINGS.type[type],
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
