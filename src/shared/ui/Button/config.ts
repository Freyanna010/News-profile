import classes from './Button.module.scss';
import { BUTTON_SHAPES, BUTTON_SIZES, BUTTON_VARIANTS } from './constants';

export const CLASS_MAPPINGS = {
  shape: {
    [BUTTON_SHAPES.DEFAULT]: classes.default,
    [BUTTON_SHAPES.CIRCLE]: classes.circle,
    [BUTTON_SHAPES.SQUARE]: classes.square,
  } as const,

  size: {
    [BUTTON_SIZES.SMALL]: classes.small,
    [BUTTON_SIZES.MIDDLE]: classes.middle,
    [BUTTON_SIZES.LARGE]: classes.large,
  } as const,

  variant: {
    [BUTTON_VARIANTS.SOLID]: classes.solid,
    [BUTTON_VARIANTS.OUTLINED]: classes.outlined,
    [BUTTON_VARIANTS.FILLED]: classes.filled,
    [BUTTON_VARIANTS.TEXT]: classes.text,
  } as const,
} as const;
