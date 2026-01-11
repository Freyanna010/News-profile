export const SELECT_TYPES = {
  FILLED: 'filled',
  OUTLINED: 'outlined',
} as const;

export const SELECT_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export const DEFAULTS = {
  type: SELECT_TYPES.OUTLINED,
  size: SELECT_SIZES.MEDIUM,
} as const;
