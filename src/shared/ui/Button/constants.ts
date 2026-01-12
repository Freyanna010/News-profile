export const BUTTON_SHAPES = {
  DEFAULT: 'default',
  CIRCLE: 'circle',
  SQUARE: 'square',
} as const;

export const BUTTON_SIZES = {
  SMALL: 'small',
  MIDDLE: 'middle',
  LARGE: 'large',
} as const;

export const BUTTON_VARIANTS = {
  SOLID: 'solid',
  OUTLINED: 'outlined',
  FILLED: 'filled',
  TEXT: 'text',
} as const;

export const BUTTON_ICON_PLACEMENTS = {
  START: 'start',
  END: 'end',
} as const;

export const DEFAULTS = {
  shape: BUTTON_SHAPES.DEFAULT,
  size: BUTTON_SIZES.MIDDLE,
  variant: BUTTON_VARIANTS.SOLID,
} as const;
