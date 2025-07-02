// components/VendaModal.tsx
import { useState } from 'react'
import { Produto, DadosPagamento } from '@/types/types'
import { PaymentForm } from './paymentForm'
import { X } from 'lucide-react'

interface Props {
  produto: Produto | null
  onClose: () => void
}

export function VendaModal({ produto, onClose }: Props) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleCompra = async (dados: DadosPagamento) => {
    if (!produto) return

    setLoading(true)
    try {
      const res = await fetch('/api/send-purchase-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ produto, dados }),
      })

      if (res.ok) {
        setSuccess(true)
      } else {
        alert('Erro ao enviar compra.')
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  if (!produto) return null

  return (
    <div className='absolute flex justify-startitems-center right-0 top-0 bottom-0 w-full bg-transparent shadow-2xl p-6 overflow-auto text-black'>
        <div className=" w-full bg-[#fff8dc] shadow-2xl p-6 h-[1000px] mt-1">
      <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-3xl bg-red-600 ">
        <X className='mx-auto'/>
      </button>

      <img src={produto.Iimage} alt={produto.title} className="w-full h-48 object-cover rounded-xl" />
      <h2 className="text-xl font-bold mt-4">{produto.title}</h2>
      <p className="text-gray-600 mt-2">{produto.description}</p>
      <p className="text-lg font-semibold mt-2">R$ {produto.price.toFixed(2)}</p>

      {success ? (
        <p className="text-green-600 mt-4 font-medium">Compra realizada com sucesso!</p>
      ) : (
        <PaymentForm onSubmit={handleCompra} loading={loading} />
      )}
    </div>
    </div>
  )
}
