// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

import Image from "next/image";


import { Produto } from "@/types/types";
import { AddButton } from "./addButton";

interface ProductCardProps {
  produto: Produto
  onComprar: (produto: Produto) => void

  onVeiw: (produto: Produto) => void


  cartCount?: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;

}


export function Cards({ produto, onComprar, setCartCount, onVeiw}: ProductCardProps) {


  // adicionar item ao carrinho e fechar modal
  const handleAddToCart = () => {
    setCartCount(1);
    
    onComprar(produto); // chama a função de compra com o produto atual
    // aqui você fecharia o modal
  };

  return (
    <div className={`"flex flex-col p-2 gap-2 items-start text-black border border-gray-300 md:max-w-80 rounded-md px-2 min-h-[370px] w-[230px] max-h-[370px]shadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300 ease-in-out bg-[#fff8dc] space-y-16 opacity-95 ${produto.Stock < 1 ? "opacity-30" : ""
      }"`}>


      {produto.Iimage && (
        <div className="w-full h-28 flex items-center justify-center rounded mb-2 mt-0">
          <Image
            src={produto.Iimage}
            alt={produto.title}
            width={120}
            height={120}
            className="max-w-full max-h-full object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      )}

      <p className="flex flex-col md:text-lg text-base font-medium text-black break-words max-h-20 mx-auto w-full text-center">
        <span className="flex items-center justify-center"><span className="md:text-lg text-base font-bold flex items-center justify-center gap-2 text-center">{produto.title}</span></span>
        {produto.description}
      </p>
      <div className="flex justify- items-center w-full mb-0 mt-5 flex-col gap-2">
        <button onClick={() => onVeiw(produto)} className="w-48 h-10 rounded-xl bg-green-600 mx-auto text-center text-white cursor-pointer">
          Ver Detalhes
        </button>
        <AddButton handleAddToCart={handleAddToCart} />
      </div>
    </div>
  );
}