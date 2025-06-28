// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

import { z } from "zod";
export const emailSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email(),
  subject: z.string().min(3, "O assunto deve ter pelo menos 3 caracteres"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});
