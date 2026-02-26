import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useLoginMutation } from '@/entities/auth';
import { Form } from '@/shared/ui/Form';
import { Button } from '@/shared/ui/Button';
import FormItem from '@/shared/ui/Form/FormItems/FormItem';
import Input from '@/shared/ui/Input';

import { loginSchema, type LoginFormData } from './loginShema';

const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    await login(data);
  };

  return (
    <Form form={form} onSubmit={onSubmit}>
      <FormItem<LoginFormData, 'name'>
        name="name"
        label="Имя пользователя"
        render={(field) => <Input {...field} placeholder="имя - котик" />}
      />

      <FormItem<LoginFormData, 'password'>
        name="password"
        label="Пароль"
        render={(field) => <Input {...field} placeholder="пароль - 1234" />}
      />

      <Button type="submit" loading={isLoading}>
        {isLoading ? 'Вход...' : 'Войти'}
      </Button>
    </Form>
  );
};

export default LoginForm;
