import classes from './Link.module.scss';
import { LINK_TYPES, LINK_SIZES } from './constants';

export const CLASS_MAPPINGS = {
  type: {
    [LINK_TYPES.PRIMARY]: classes.primary,
    [LINK_TYPES.SECONDARY]: classes.secondary,
    [LINK_TYPES.ERROR]: classes.red,
  } as const,

  size: {
    [LINK_SIZES.SMALL]: classes.small,
    [LINK_SIZES.MEDIUM]: classes.medium,
    [LINK_SIZES.LARGE]: classes.large,
  } as const,
} as const;
