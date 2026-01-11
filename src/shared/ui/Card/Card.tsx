import type { FC, MouseEvent, KeyboardEvent } from 'react';
import clxs from 'clsx';

import type { CardProps } from './types';
import { CLASS_MAPPINGS } from './constans';
import classes from './Card.module.scss';

const Card: FC<CardProps> = (props) => {
  const { children, className, onClick, withHoverFocus = true } = props;
  const isClickable = !!onClick;
  withHoverFocus;

  const cardClasses = clxs(
    classes[CLASS_MAPPINGS.card],
    {
      [classes[CLASS_MAPPINGS.cardClickable]]: isClickable,
      [classes[CLASS_MAPPINGS.cardInteractive]]: withHoverFocus,
    },
    className
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      // Передаем keyboard event
      onClick?.(event);
    }
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    onClick?.(event);
  };

  return (
    <div
      className={cardClasses}
      onClick={onClick ? handleClick : undefined}
      onKeyDown={onClick ? handleKeyDown : undefined}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
    >
      {children}
    </div>
  );
};

export default Card;
