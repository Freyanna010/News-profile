import { useId, type FC } from 'react';
import clxs from 'clsx';

import classes from './Select.module.scss';
import { DEFAULTS } from './constants';
import type { SelectProps } from './types';
import { CLASS_MAPPINGS } from './config';

const Select: FC<SelectProps> = (props) => {
  const {
    options,
    label,
    type = DEFAULTS.type,
    size = DEFAULTS.size,
    className,
    error,
    disabled = false,
    fullWidth = false,
    id,
    ...selectProps
  } = props;

  const generatedId = useId();
  const selectId = id || generatedId;

  const selectClasses = clxs(
    classes.select,
    CLASS_MAPPINGS.type[type],
    CLASS_MAPPINGS.size[size],
    className
  );

  return (
    <div className={classes.wrapper}>
      {label && (
        <label htmlFor={selectId} className={classes.label}>
          {label}
        </label>
      )}

      <div className={classes.selectContainer}>
        <select id={selectId} className={selectClasses} {...selectProps}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className={classes.arrow} aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Select;
