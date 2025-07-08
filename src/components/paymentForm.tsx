// components/PaymentForm.tsx
"use client";
import { DadosPagamento, Produto } from '@/types/types';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type FieldErrors } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sendMailPay } from "@/lib/http/sendmail";
import { emailSchemaPay } from '@/lib/mail';


type DataSchema = z.infer<typeof emailSchemaPay>;



export function PaymentForm() {
  const queryClient = useQueryClient();



  const { register, handleSubmit, reset, formState: { errors}} = useForm<DataSchema>({
    resolver: zodResolver(emailSchemaPay),
  });

  async function onSubmitForm(data: DataSchema) {
    await sendMailPay([{
      name: data.name,
      email: data.email,
      subject: ``,
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


  // const mutation = useMutation({
  //   mutationFn: async (data: DataSchema) => {
  //     await sendMailPay([{
  //       name: data.name,
  //       email: data.email,
  //       subject: `${NameProducts.title}`,
  //       formaPagamento: data.formaPagamento,
  //       rua: data.rua,
  //       complemento: data.complemento,
  //       cidade: data.cidade,
  //       estado: data.estado,
  //       cep: data.cep,
  //     }]);
  //     console.log(data)


  //   },

  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["email"] });
  //     reset();
  //   },
  // });

  // async function onSubmitForm(data: DataSchema) {
  //   mutation.mutate(data);
  // }



  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="mt-4 space-y-3 bg-[#fff8dc] w-full mx-auto">
      <label className="block text-black">
        Nome:
        <input type="text" {...register("name")} className="w-full border p-2 rounded" placeholder="Digite seu nome" />
      </label>

      <label className="block text-black">
        E-mail:
        <input type="email" {...register("email")} className="w-full border p-2 rounded" placeholder="Digite seu e-mail" />
      </label>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
        <label>
          Rua:
          <input {...register("rua")} className="w-full border p-2 rounded" placeholder="Rua..." />
        </label>
        <label>
          Cidade:
          <input {...register("cidade")} className="w-full border p-2 rounded" placeholder="Cidade..." />
        </label>
        <label>
          Estado:
          <input {...register("estado")} className="w-full border p-2 rounded" placeholder="Estado..." />
        </label>
        <label>
          CEP:
          <input {...register("cep")} className="w-full border p-2 rounded" placeholder="CEP..." />
        </label>
        <label className="md:col-span-2">
          Complemento:
          <input {...register("complemento")} className="w-full border p-2 rounded" placeholder="Apartamento, bloco, etc..." />
        </label>
      </div>

      <div>
        <label className="text-black">Forma de pagamento:</label>
        <select {...register("formaPagamento")} className="w-full border p-2 rounded text-black">
          <option value="pix">Pix</option>
          <option value="cartao">Cartão</option>
          <option value="boleto">Boleto</option>
        </select>
      </div>

      <div className="w-full flex flex-col items-center">
        <button
          type="submit"
          className="bg-[#ffcc00] hover:bg-[#cc9900] text-white px-4 py-2 rounded w-60 disabled:opacity-50"

        >
          Confirmar compra
        </button>
      </div>
    </form>
  );
}
