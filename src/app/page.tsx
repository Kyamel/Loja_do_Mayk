// "use client";

// import { useEffect, useState } from "react";
// import { ContainerFull } from "@/components/containerfull";
// import { Produto } from "@/types/types";
// import { Header } from "@/components/header";
// import { Footer } from "@/components/footer";
// import { seedProducts } from "@/lib/seed";

// export default function Home() {
//   const [cartCount, setCartCount] = useState(0);
//   const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

//   const [cartItems, setCartItems] = useState<Produto[]>([]);
//   const [carrinhoAberto, setCarrinhoAberto] = useState(false);

//   const adicionarAoCarrinho = (produto: Produto) => {
//     setCartItems((prev) => [...prev, produto]);
//   };


//   useEffect(() => {
//     seedProducts(); // Preenche o localStorage se não tiver nada ainda
//   }, []);

//   return (
//     <>
//       <Header
//         cartCount={cartItems.length}
//         onAbrirCarrinho={() => setCarrinhoAberto(true)}
//       />
//       <ContainerFull
//         setCartCount={setCartCount}
//         produtoSelecionado={cartItems}
//         setProdutoSelecionado={setProdutoSelecionado}
//         onClose={() => setCarrinhoAberto(false)}
//         open={carrinhoAberto}
//         produto={cartItems}
//         onAbrirCarrinho={() => setCarrinhoAberto(true)}
//       />
//       <Footer />
//     </>
//   );
// }


'use client'

import { useEffect, useState } from "react";
import { ContainerFull } from "@/components/containerfull";
import { Produto } from "@/types/types";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { seedProducts } from "@/lib/seed";
import { VendaModal } from "@/components/vendaModal";
import { Modal } from "@/components/modal";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<Produto[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

  useEffect(() => {
    seedProducts(); // Preenche o localStorage se necessário
  }, []);

  const handleComprar = (produto: Produto) => {
    setCartItems((prev) => [...prev, produto]);
    setCartCount((prev) => prev + 1);
    setProdutoSelecionado(produto); // Abre o modal do produto atual
  };

  const handleOpenCart = () => {
    const ultimo = cartItems[cartItems.length - 1];
    if (ultimo) setProdutoSelecionado(ultimo);
  };

  return (
    <>
      <Header
        cartCount={cartCount}
        produto={null} // Produto manualmente zerado
        onComprar={handleOpenCart}
      />
      <ContainerFull
        setCartCount={setCartCount}
        setProdutoSelecionado={handleComprar} // aqui está o pulo do gato
        produtoSelecionado={produtoSelecionado}

      />
      <VendaModal
        produto={produtoSelecionado}
        onClose={() => setProdutoSelecionado(null)}
      />
      <Modal
        setCartCount={setCartCount}
        onClose={() => setProdutoSelecionado(null)}
        produto={produtoSelecionado}
      />
      <Footer />
    </>
  );
}
