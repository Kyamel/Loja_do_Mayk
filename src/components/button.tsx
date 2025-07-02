import { Produto } from "@/types/types"

interface ProductCardProps {
  produto: Produto
  onComprar: (produto: Produto) => void
}

export function Button({ produto, onComprar }: ProductCardProps){
    return(
        <>
        <button onClick={() => onComprar(produto)} className="w-48 h-10 rounded-xl bg-green-600 mx-auto text-center text-white z-10 cursor-pointer">
            Comprar Agora
        </button>
        </>
    )
}