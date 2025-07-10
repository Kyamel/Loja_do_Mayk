import { useState } from "react";

interface Props {
  handleAddToCart: () => void;
}
export function AddButton({handleAddToCart}:Props) {
  
  return (
    <button
        onClick={handleAddToCart}
        className="bg-yellow-400 px-3 py-1 rounded text-sm shadow cursor-pointer hover:bg-yellow-500 transition-colors duration-200"
      >
        Adicionar item
      </button>
  );
}