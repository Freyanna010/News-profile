import type { ButtonHTMLAttributes, ReactNode } from 'react';

import {
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  BUTTON_ICON_PLACEMENTS,
} from './constants';

export type ButtonShape = (typeof BUTTON_SHAPES)[keyof typeof BUTTON_SHAPES];
export type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
export type ButtonVariant =
  (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
export type ButtonIconPlacement =
  (typeof BUTTON_ICON_PLACEMENTS)[keyof typeof BUTTON_ICON_PLACEMENTS];

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string | number;
  icon?: ReactNode;
  iconPlacement?: ButtonIconPlacement;
  shape?: ButtonShape;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
}
