import type { LinkProps as RouterLinkProps } from 'react-router-dom';
import type { ReactNode } from 'react';

import { LINK_SIZES, LINK_TYPES } from './constants';

export type LinkType = (typeof LINK_TYPES)[keyof typeof LINK_TYPES];
export type LinkSize = (typeof LINK_SIZES)[keyof typeof LINK_SIZES];

export interface LinkProps extends RouterLinkProps {
  children: ReactNode;
  type?: LinkType;
  size?: LinkSize;
  className?: string;
}
