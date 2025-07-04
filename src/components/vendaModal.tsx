// components/VendaModal.tsx
import { useState } from 'react'
import { Produto, DadosPagamento } from '@/types/types'
import { ErrorPay, getNameProducts, PaymentForm } from './paymentForm'


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
      getNameProducts(produto);

      if (!ErrorPay) {
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
    <div className='absolute flex justify-startitems-center right-0 top-0 bottom-0 w-full bg-transparent shadow-2xl p-6 text-black shadow-2xs'>
      <div className=" w-full bg-[#fff8dc] py-6 px-10 h-[800px] mt-1 overflow-y-scroll flex flex-col items-center rounded-lg border-gray-700 border-2 ">
      {/* <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-3xl bg-red-600 ">
        <X className='mx-auto'/>
      </button> */}

      <div className='w-full'>
        <img src={produto.Iimage} alt={produto.title} className="object-cover rounded-xl max-w-full max-h-full g-center bg-no-repeat px-8 mx-auto min-w-full" />
        <h2 className="text-xl font-bold mt-4">{produto.title}</h2>
        <p className="text-gray-600 mt-2 flex flex-col md:text-lg text-base font-medium break-words max-h-20">{produto.description}</p>
        <p className="text-lg font-semibold mt-2 text-white bg-green-600 max-w-32 rounded-2xl px-2">R$ {produto.price.toFixed(2)}</p>

      </div>

      {success ? (
        <p className="text-green-600 mt-4 font-medium">Compra realizada com sucesso!</p>
      ) : (
        <PaymentForm onSubmit={handleCompra} loading={loading} />
      )}

      <button onClick={onClose} className="bg-red-500 hover:bg-red-800 text-white px-4 py-2 rounded w-60 disabled:opacity-50 mt-3 mx-auto">
        Cancelar
      </button>

    </div>
    </div>
  )
}
