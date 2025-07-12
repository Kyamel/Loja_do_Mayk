// components/PaymentForm.tsx
"use client";
import { Produto } from '@/types/types';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import { sendMailPay } from "@/lib/http/sendmail";
import { emailSchemaPay } from '@/lib/mail';


type DataSchema = z.infer<typeof emailSchemaPay>;

interface Props {
  produto: Produto | null
  
}

export function PaymentForm({produto}:Props) {
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset, formState: { errors}} = useForm<DataSchema>({
    resolver: zodResolver(emailSchemaPay),
  });

  async function onSubmitForm(data: DataSchema) {
    await sendMailPay([{
      name: data.name,
      email: data.email,
      subject: produto?.title,
      formaPagamento: data.formaPagamento,
      rua: data.rua,
      complemento: data.complemento,
      cidade: data.cidade,
      estado: data.estado,
      cep: data.cep,

    }]);

    queryClient.invalidateQueries({ queryKey: ["email"] });
    reset();

  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="mt-4 space-y-3 light:bg-background dark:bg-dark w-full mx-auto light:text-txlight dark:text-txDark">
      <label className="block light:text-txlight dark:text-txDark">
        Nome:
        <input type="text" {...register("name")} className="w-full border p-2 rounded light:bg-background dark:bg-dark" autoComplete='off' placeholder="Digite seu nome" aria-label="Nome" title="Nome"/>
      </label>

      <label className="block light:text-txlight dark:text-txDark">
        E-mail:
        <input type="email" {...register("email")} className="w-full border p-2 rounded" placeholder="Digite seu e-mail" autoComplete='off' aria-label="E-mail" title="E-mail"/>
      </label>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 light:text-txlight dark:text-txDark">
        <label>
          Rua:
          <input {...register("rua")} className="w-full border p-2 rounded" placeholder="Rua..." autoComplete='off'aria-label="Rua" title="Rua"/>
        </label>
        <label>
          Cidade:
          <input {...register("cidade")} className="w-full border p-2 rounded" placeholder="Cidade..." autoComplete='off'aria-label="Cidade" title="Cidade"/>
        </label>
        <label>
          Estado:
          <input {...register("estado")} className="w-full border p-2 rounded" placeholder="Estado..." autoComplete='off' aria-label="Estado" title="Estado"/>
        </label>
        <label>
          CEP:
          <input {...register("cep")} className="w-full border p-2 rounded" placeholder="CEP..." autoComplete='off' aria-label="CEP" title="CEP"/>
        </label>
        <label className="md:col-span-2">
          Complemento:
          <input {...register("complemento")} className="w-full border p-2 rounded" placeholder="Apartamento, bloco, etc..." autoComplete='off'aria-label="Complemento" title="Complemento"/>
        </label>
      </div>

      <div>
        <label className="light:text-txlight dark:text-txDark">Forma de pagamento:</label>
        <select {...register("formaPagamento")} className="w-full border p-2 rounded light:text-txlight dark:text-txDark">
          <option value="pix" className='light:bg-background dark:bg-dark light:text-txlight dark:text-txDark' aria-label="Pix" title="Pix">Pix</option>
          <option value="cartao" className='light:bg-background dark:bg-dark light:text-txlight dark:text-txDark' aria-label="Cartão" title="Cartão">Cartão</option>
          <option value="boleto" className='light:bg-background dark:bg-dark light:text-txlight dark:text-txDark' aria-label="Boleto" title="Boleto">Boleto</option>
        </select>
      </div>

      <div className="w-full flex flex-col items-center">
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-800 text-lg font-semibold light:text-txlight dark:text-txDark shadow cursor-pointer transition-colors duration-200 h-10 m text-center px-4  rounded w-52 disabled:opacity-50 mt-3 mx-auto"
          aria-label="Confirmar compra" title="Confirmar compra"
        >
          Confirmar compra
        </button>
      </div>
    </form>
  );
}

