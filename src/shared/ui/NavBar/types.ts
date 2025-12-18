import type {
  ALIGN_VALUES,
  JUSTIFY_VALUES,
  NAV_BAR_TYPES,
  SPACING_VALUES,
} from './constants';

export type NavBarType = (typeof NAV_BAR_TYPES)[keyof typeof NAV_BAR_TYPES];
export type NavBarSpacing =
  (typeof SPACING_VALUES)[keyof typeof SPACING_VALUES];
export type NavBarAlign = (typeof ALIGN_VALUES)[keyof typeof ALIGN_VALUES];
export type NavBarJustify =
  (typeof JUSTIFY_VALUES)[keyof typeof JUSTIFY_VALUES];

export interface NavBarProps {
  children: React.ReactNode;
  type?: NavBarType;
  spacing?: NavBarSpacing;
  align?: NavBarAlign;
  justify?: NavBarJustify;
  className?: string;
}
