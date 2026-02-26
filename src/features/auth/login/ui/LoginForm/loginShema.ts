import { z } from 'zod';

export const loginSchema = z.object({
  name: z.string().min(1, 'Заполните имя').trim(),
  password: z
    .string()
    .min(4, 'Пароль должен содержать минимум 4 символа')
    .trim(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
