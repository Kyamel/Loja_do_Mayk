// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

import Image from "next/image";
import { Button } from "./button";
import { useState } from "react";
import { Produto } from "@/types/types";

interface ProductCardProps {
  produto: Produto
  onComprar: (produto: Produto) => void
}


export function Cards({produto, onComprar}:ProductCardProps){

  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null)

  return (
    <div className="flex flex-col p-2 gap-2 items-start text-black border border-gray-300 md:max-w-80 rounded-md px-2 min-h-[370px] w-[230px] max-h-[370px]shadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300 ease-in-out bg-[#fff8dc] space-y-16 opacity-95">
      
      
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

      <p className="flex flex-col md:text-lg text-base font-medium text-black break-words max-h-20">
        <span className="flex items-center justify-center"><span className="md:text-lg text-base font-bold flex items-center justify-center gap-2 text-center">{produto.title}</span></span>
        {produto.description}
      </p>
      <div className="flex justify- items-center w-full mb-0 mt-5">
        <button onClick={() => onComprar(produto)} className="w-48 h-10 rounded-xl bg-green-600 mx-auto text-center text-white cursor-pointer">
            Comprar Agora
        </button>
      </div>
    </div>
  );
}

