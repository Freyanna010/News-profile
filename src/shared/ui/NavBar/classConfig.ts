import classes from './NavBar.module.scss';
import {
  NAV_BAR_TYPES,
  SPACING_VALUES,
  ALIGN_VALUES,
  JUSTIFY_VALUES,
} from './constants';

export const CLASS_MAPPINGS = {
  orientation: {
    [NAV_BAR_TYPES.VERTICAL]: classes.vertical,
    [NAV_BAR_TYPES.HORIZONTAL]: classes.horizontal,
  } as const,

  spacing: {
    [SPACING_VALUES.NONE]: classes.spacingNone,
    [SPACING_VALUES.SMALL]: classes.spacingSmall,
    [SPACING_VALUES.MEDIUM]: classes.spacingMedium,
    [SPACING_VALUES.LARGE]: classes.spacingLarge,
  } as const,

  align: {
    [ALIGN_VALUES.START]: classes.alignStart,
    [ALIGN_VALUES.CENTER]: classes.alignCenter,
    [ALIGN_VALUES.END]: classes.alignEnd,
    [ALIGN_VALUES.STRETCH]: classes.alignStretch,
  } as const,

  justify: {
    [JUSTIFY_VALUES.START]: classes.justifyStart,
    [JUSTIFY_VALUES.CENTER]: classes.justifyCenter,
    [JUSTIFY_VALUES.END]: classes.justifyEnd,
    [JUSTIFY_VALUES.BETWEEN]: classes.justifyBetween,
    [JUSTIFY_VALUES.AROUND]: classes.justifyAround,
    [JUSTIFY_VALUES.EVENLY]: classes.justifyEvenly,
  } as const,
} as const;
