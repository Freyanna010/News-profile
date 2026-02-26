import clsx from 'clsx';
import InputMask from 'react-input-mask';
import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

import classes from './Input.module.scss';

interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { size = 'md', type = 'text', className, id, ...restProps } = props;

  const input =
    type === 'date' ? (
      <InputMask mask="99-99-9999" {...restProps}>
        {(maskedProps) => (
          <input
            {...maskedProps}
            ref={ref}
            id={id}
            type="text"
            className={clsx(classes.input, className)}
          />
        )}
      </InputMask>
    ) : (
      <input
        {...restProps}
        ref={ref}
        id={id}
        type={type}
        className={clsx(classes.input, className)}
      />
    );

  return <div className={classes[size]}>{input}</div>;
});

export default Input;
