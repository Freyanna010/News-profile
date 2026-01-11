import classes from './Select.module.scss';
import { SELECT_TYPES, SELECT_SIZES } from './constants';

export const CLASS_MAPPINGS = {
  type: {
    [SELECT_TYPES.FILLED]: classes.filled,
    [SELECT_TYPES.OUTLINED]: classes.outlined,
  } as const,

  size: {
    [SELECT_SIZES.SMALL]: classes.small,
    [SELECT_SIZES.MEDIUM]: classes.medium,
    [SELECT_SIZES.LARGE]: classes.large,
  } as const,
} as const;
