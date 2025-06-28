// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.


"use client";
import { emailSchema } from "@/lib/mail";

import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { sendMail } from "@/lib/http/sendmail";
import { Loading } from "./loading";

type DataSchema = z.infer<typeof emailSchema>;

export  function Email() {

  const useClient = useQueryClient();
  const { register, handleSubmit, reset, formState: { errors }} = useForm<DataSchema>({
    resolver: zodResolver(emailSchema),
  });

  // async function onSubmit({ email, message, subject}: DataSchema) {
  //       const res = await sendMail([{
  //           email,
  //           subject,
  //           message,
  //       }]);

  //       if(res === 200){

  //           setStatus("Email enviado com sucesso!");
  //           reset();
  //           useClient.invalidateQueries({ queryKey: ["email"] });

  //       }else{

  //         setStatus("Erro ao enviar email. Tente novamente.");
  //       }
  //   };


  const mutation = useMutation({
    mutationFn: async ({ email, subject, message, name }: DataSchema) => {
      return sendMail([{ name, email, subject, message }]);
    },
    onSuccess: () => {
      useClient.invalidateQueries({ queryKey: ["email"] });
      reset();
    },
  });
  
  async function onSubmit(data: DataSchema) {
    mutation.mutate(data);
  }


  return (

    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md shadow-lg space-y-4 mx-auto text-black w-full">
      {mutation.isPending ? <Loading/> :(
        <>
          <input type="text" {...register("name")} autoFocus autoComplete='off' placeholder="Digite Seu Nome" className="p-2 border border-gray-300 w-full rounded-md"/>
          {errors.name && <p className="text-red-500 text-sm w-full text-center">{errors.name.message}</p>}

          <input type="email" {...register("email")} autoFocus autoComplete='off' placeholder="Digite Seu Email" className="p-2 border border-gray-300 w-full rounded-md"/>
          {errors.email && <p className="text-red-500 text-sm w-full text-center">{errors.email.message}</p>}
                    
          <input type="text" {...register("subject")} autoFocus autoComplete='off' placeholder="Assunto" className="p-2 border border-gray-300 w-full  rounded-md"/>
          {errors.subject && <p className="text-red-500 text-sm w-full text-center">{errors.subject.message}</p>}
                    
          <textarea {...register("message")} autoFocus autoComplete='off' placeholder="Mensagem" className="p-2 border border-gray-300 w-full h-24 resize-none max-h-24 rounded-md"/>
          {errors.message && <p className="text-red-500 text-sm w-full text-center">{errors.message.message}</p>}
        </>

      )}

      
      <button type="submit" className="p-2 bg-black text-white w-auto rounded-md mx-auto">{ mutation.isError ? "Erro ao enviar email. Tente novamente." : mutation.isSuccess ? "Email enviado com sucesso!" : mutation.isPending ? "Enviando..." : "Enviar"}</button>
    </form>
  );
}