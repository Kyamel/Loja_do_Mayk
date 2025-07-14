// src/lib/storage.ts
import { Produto } from "@/types/types";

export function seedProducts() {
  if (typeof window === "undefined") return;

  const alreadySeeded = localStorage.getItem("products");
  if (!alreadySeeded) {
    const products: Produto[] = [
      {
        id: "1",
        title: "Console Nintendo Switch",
        description: "Console híbrido da Nintendo. Jogue em casa ou em qualquer lugar!",
        Iimage: "/Switch.png",
        price: 1999.99,
        Stock: 20,
      },
      {
        id: "2",
        title: "Jogos Mario Bros",
        description: "Coleção completa dos clássicos jogos do Mario Bros e família.",
        Iimage: "/mario.png",
        price: 299.9,
        Stock: 15,
      },
      {
        id: "3",
        title: "Nintendo Switch Pro",
        description: "Versão premium do Switch com controles aprimorados.",
        Iimage: "/switch_logo.png",
        price: 2499,
        Stock: 8,
      },
      
    ];

    const carouselProducts: Produto[] = [
      {
        id: "4",
        title: "It Takes Two",
        description: "Jogo cooperativo de aventura e quebra-cabeças.",
        Iimage: "/covers/it_takes_two.jpeg",
        price: 60,
        Stock: 10,
      },
      {
        id: "5",
        title: "Mario Kart 8 Deluxe",
        description: "Corridas caóticas com os personagens clássicos da Nintendo.",
        Iimage: "/covers/mario_odyssei.webp",
        price: 300,
        Stock: 5,
      },
      {
        id: "6",
        title: "Zelda: Breath of the Wild",
        description: "Aventura em mundo aberto com liberdade total.",
        Iimage: "/covers/zelda_botw.jpeg",
        price: 300,
        Stock: 8,
      },

       
    ];

    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("carouselProducts", JSON.stringify(carouselProducts));
    
  }
}
