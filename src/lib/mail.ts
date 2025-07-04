// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

import { Producs } from "@/components/producs";
import { z } from "zod";
export const emailSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email(),
  subject: z.string().min(3, "O assunto deve ter pelo menos 3 caracteres"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});



export const emailSchemaPay = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email(),
  endereço: z.string().min(3,),
  formaPagamento: z.enum(['pix', 'cartao', 'boleto'], {
    errorMap: () => ({ message: 'Selecione uma forma de pagamento válida.' }),
  }),
  subject: z.string().min(3, "O assunto deve ter pelo menos 3 caracteres").optional(),
  
  
});

