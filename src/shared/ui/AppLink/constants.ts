export const LINK_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ERROR: 'error',
} as const;

export const LINK_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export const DEFAULTS = {
  type: LINK_TYPES.PRIMARY,
  size: LINK_SIZES.MEDIUM,
} as const;
