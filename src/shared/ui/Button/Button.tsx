import type { FC } from 'react';
import clxs from 'clsx';

import { CLASS_MAPPINGS } from './config';
import { DEFAULTS } from './constants';
import type { ButtonProps } from './types';
import classes from './Button.module.scss';

const Button: FC<ButtonProps> = (props) => {
  const {
    text,
    icon,
    iconPlacement = 'start',
    shape = DEFAULTS.shape,
    size = DEFAULTS.size,
    variant = DEFAULTS.variant,
    disabled = false,
    loading = false,
    className,
    children,
    type = 'button',
    ...buttonProps
  } = props;

  const content = text ?? children;
  const hasContent = !!content;
  const hasIcon = !!icon;

  const isOnliIcon = hasIcon && !hasContent;
  const isIconAndContent = hasIcon && hasContent;

  const buttonClasses = clxs(
    classes.button,
    CLASS_MAPPINGS.shape[shape],
    CLASS_MAPPINGS.size[size],
    CLASS_MAPPINGS.variant[variant],
    {
      [classes.disabled]: disabled,
      [classes.loading]: loading,
      [classes.onlyIcon]: isOnliIcon,
      [classes.withIcon]: isIconAndContent,
      [classes.iconStart]: isIconAndContent && iconPlacement === 'start',
      [classes.iconEnd]: isIconAndContent && iconPlacement === 'end',
    },
    className
  );

  const renderContent = () => {
    if (isOnliIcon) {
      return <span className={classes.icon}>{icon}</span>;
    }

    if (isIconAndContent) {
      return (
        <>
          {iconPlacement === 'start' && (
            <span className={classes.icon}>{icon}</span>
          )}
          <span className={classes.text}>{content}</span>
          {iconPlacement === 'end' && (
            <span className={classes.icon}>{icon}</span>
          )}
        </>
      );
    }

    return <span className={classes.textContent}>{content}</span>;
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...buttonProps}
    >
      {renderContent()}
      {loading && <div className={classes.loader} aria-hidden="true" />}
    </button>
  );
};

export default Button;
