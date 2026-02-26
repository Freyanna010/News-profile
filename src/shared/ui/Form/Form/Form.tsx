import { FormProvider } from 'react-hook-form';
import type { UseFormReturn, FieldValues } from 'react-hook-form';
import clsx from 'clsx';

import classes from './Form.module.scss';

interface FormProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  children: React.ReactNode;
  className?: string;
}
export const Form = <T extends FieldValues>(props: FormProps<T>) => {
  const { form, onSubmit, children, className } = props;

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={clsx(classes.form, className)}
      >
        {children}
      </form>
    </FormProvider>
  );
};
export default Form;
