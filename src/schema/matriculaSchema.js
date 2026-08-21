import { z } from 'zod';

export const matriculaSchema = z.object({
  nome: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres.'),
  email: z.string().email('Informe um e-mail válido.'),
  idade: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 14, {
      message: 'Idade mínima para matrícula é 14 anos.',
    }),
  plano: z.string().min(1, 'Selecione um plano de treino.'),
  objetivo: z.string().min(1, 'Selecione seu objetivo principal.'),
});