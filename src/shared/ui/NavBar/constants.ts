export const NAV_BAR_TYPES = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
} as const;

export const SPACING_VALUES = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export const ALIGN_VALUES = {
  START: 'start',
  CENTER: 'center',
  END: 'end',
  STRETCH: 'stretch',
} as const;

export const JUSTIFY_VALUES = {
  START: 'start',
  CENTER: 'center',
  END: 'end',
  BETWEEN: 'between',
  AROUND: 'around',
  EVENLY: 'evenly',
} as const;

export const DEFAULTS = {
  type: NAV_BAR_TYPES.HORIZONTAL,
  spacing: SPACING_VALUES.MEDIUM,
  align: ALIGN_VALUES.CENTER,
  justify: JUSTIFY_VALUES.START,
} as const;
