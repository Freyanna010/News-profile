// ui/form/FormField.tsx
import { Controller, useFormContext } from 'react-hook-form';
import type { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';

import classes from './FormItems.module.scss';

interface FormItemProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
> {
  name: TName;
  label?: string;
  render: (
    field: ControllerRenderProps<TFieldValues, TName>
  ) => React.ReactElement;
}

const FormItem = <
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
>(
  props: FormItemProps<TFieldValues, TName>
) => {
  const { name, label, render } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext<TFieldValues>();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className={classes.formItem}>
      {label && <label>{label}</label>}

      <Controller
        name={name}
        control={control}
        render={({ field }) => render(field)}
      />

      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};

export default FormItem;
