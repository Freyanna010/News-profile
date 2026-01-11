import type { SelectHTMLAttributes } from 'react';

import { SELECT_TYPES, SELECT_SIZES } from './constants';

export type SelectType = (typeof SELECT_TYPES)[keyof typeof SELECT_TYPES];
export type SelectSize = (typeof SELECT_SIZES)[keyof typeof SELECT_SIZES];

export interface SelectOption {
  value: string | number;
  label: string;
}

export interface SelectProps {
  options: readonly SelectOption[];
  type?: SelectType;
  size?: SelectSize;
  label?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  id?: string;
  selectProps?: SelectHTMLAttributes<HTMLSelectElement>;
  value?: string | number | readonly string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
