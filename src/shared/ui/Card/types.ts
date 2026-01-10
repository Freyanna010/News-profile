import type { ReactNode, MouseEvent, KeyboardEvent } from 'react';

export interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: (
    event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>
  ) => void;
  withHoverFocus?: boolean;
}
