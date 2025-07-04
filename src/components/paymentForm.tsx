// components/PaymentForm.tsx
import { DadosPagamento, Produto } from '@/types/types'



import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type FieldErrors} from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { sendMail, sendMailPay } from "@/lib/http/sendmail";
import { emailSchemaPay } from '@/lib/mail';

export let ErrorPay: FieldErrors;

export let NameProducts: Produto;

export function getNameProducts({description,id,price,title,Iimage}:Produto){
  return NameProducts ={
    Iimage,
    description,
    price,
    title,
    id,

  }
}

type DataSchema = z.infer<typeof emailSchemaPay>;

interface Props {
  onSubmit: (dados: DadosPagamento) => void
  loading: boolean
}

export function PaymentForm({ onSubmit, loading }: Props) {
  // const [formaPagamento, setFormaPagamento] = useState<'pix' | 'cartao' | 'boleto'>('pix')
  // const [nome, setNome] = useState('')
  // const [email, setEmail] = useState('')
  // const [endereco, setEndereco] = useState('')

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   onSubmit({ formaPagamento, comprador: { nome, email, endereco } })
  // }



  const useClient = useQueryClient();
  const { register, handleSubmit, reset, formState: { errors }} = useForm<DataSchema>({
    resolver: zodResolver(emailSchemaPay),
  });




  const mutation = useMutation({
    mutationFn: async ({ email, endereço, name, formaPagamento}: DataSchema) => {
      return sendMailPay([{ name, email, subject:`${NameProducts.title}`, endereço, formaPagamento}]);
    },
    onSuccess: () => {
      useClient.invalidateQueries({ queryKey: ["email"] });
      reset();
    },
  });
  
  async function onSubmitForm(data: DataSchema) {
    mutation.mutate(data);
  }

  ErrorPay = {
    name: errors.name,
    email: errors.email,
    endereço: errors.endereço,
    formaPagamento: errors.formaPagamento,
    subject: errors.subject,
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="mt-4 space-y-3 bg-[#fff8dc] w-full mx-auto">
      <label className="block text-black">
        Nome:
        <input
          type="text"
          className="w-full border p-2 rounded bg-[##ccc2a5]"
          {...register("name")}
          placeholder="Digite Seu Nome"
         
          required
        />
      </label>

      <label className="block text-black">
        E-mail:
        <input
          type="email"
          className="w-full border p-2 rounded bg-[##ccc2a5]"
          {...register("email")}
          placeholder="Digite Seu Email"
          required
        />
      </label>

      <label className="block text-black">
        Endereço:
        <textarea
          className="w-full border p-2 rounded bg-[##ccc2a5] resize-none"
          {...register("endereço")}
          placeholder="Digite Seu Endereço"
          required
        />
      </label>

      <div>
        <label className='text-black'>Forma de pagamento:</label>
        <select
          {...register("formaPagamento")}
      
          className="w-full border p-2 rounded text-black"
        >
          <option value="pix">Pix</option>
          <option value="cartao">Cartão</option>
          <option value="boleto">Boleto</option>
        </select>
      </div>

      <div className='w-full mx-auto flex flex-col items-center'>
        <button
        type="submit"
    
        className=" bg-[#ffcc00] hover:bg-[#cc9900] text-white px-4 py-2 rounded w-60 mx-auto disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Processando...' : 'Confirmar compra'}
      </button>

      </div>

      
    </form>
  )
}
