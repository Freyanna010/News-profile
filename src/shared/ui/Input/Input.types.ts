import { InputType, NameValue } from '@shared/form';

export interface InputProps<T> {
  name: NameValue<T>;
  label: string;
  size?: string;
  type?: InputType;
  isRequired?: boolean;
  errorMessage: string;
}
