// components/PaymentForm.tsx
import { useState } from 'react'
import { DadosPagamento } from '@/types/types'

interface Props {
  onSubmit: (dados: DadosPagamento) => void
  loading: boolean
}

export function PaymentForm({ onSubmit, loading }: Props) {
  const [formaPagamento, setFormaPagamento] = useState<'pix' | 'cartao' | 'boleto'>('pix')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [endereco, setEndereco] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ formaPagamento, comprador: { nome, email, endereco } })
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3 bg-[#fff8dc] ">
      <label className="block text-black">
        Nome:
        <input
          type="text"
          className="w-full border p-2 rounded bg-[##ccc2a5]"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </label>

      <label className="block text-black">
        E-mail:
        <input
          type="email"
          className="w-full border p-2 rounded bg-[##ccc2a5]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label className="block text-black">
        Endereço:
        <textarea
          className="w-full border p-2 rounded bg-[##ccc2a5]"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          required
        />
      </label>

      <div>
        <label className='text-black'>Forma de pagamento:</label>
        <select
          value={formaPagamento}
          onChange={(e) => setFormaPagamento(e.target.value as any)}
          className="w-full border p-2 rounded text-black"
        >
          <option value="pix">Pix</option>
          <option value="cartao">Cartão</option>
          <option value="boleto">Boleto</option>
        </select>
      </div>

      <button
        type="submit"
    
        className=" bg-[#ffcc00] hover:bg-[#cc9900] text-white px-4 py-2 rounded w-full disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Processando...' : 'Confirmar compra'}
      </button>
    </form>
  )
}
