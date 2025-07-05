// Lucas: Criar arquivo
// lib/api/games.tsx

import { Produto } from "@/types/types";

export function getGames(): Produto[] {
  return [
    {
      title: "It Takes Two",
      description: "Jogo cooperativo de aventura e quebra-cabeças.",
      Iimage: "/img1.png",
      id: "1",
      price: 60,
    },
    {
      title: "Mario Kart 8 Deluxe",
      description: "Corridas caóticas com os personagens clássicos da Nintendo.",
      Iimage: "/img2.png",
      id: "2",
      price: 300,
    },
    {
      title: "Zelda: Breath of the Wild",
      description: "Aventura em mundo aberto com liberdade total.",
      Iimage: "/img3.png",
      id: "3",
      price: 300,
    },
    {
      title: "Sonic Mania",
      description: "Um retorno às raízes com fases e músicas retrô.",
      Iimage: "/img4.png",
      id: "4",
      price: 90,
    },
    {
      title: "Shovel Knight: Treasure Trove",
      description: "Plataforma 2D com estilo NES e gameplay refinado.",
      Iimage: "/img5.png",
      id: "5",
      price: 80,
    },
    {
      title: "Mega Man 11",
      description: "Clássico da Capcom com gráficos retrô-modernizados.",
      Iimage: "/img6.png",
      id: "6",
      price: 120,
    },
    {
      title: "Streets of Rage 4",
      description: "Beat 'em up com arte desenhada à mão e trilha retrô.",
      Iimage: "/img7.png",
      id: "7",
      price: 110,
    },
    {
      title: "Cuphead",
      description: "Estética de desenho animado dos anos 30 com ação hardcore.",
      Iimage: "/img8.png",
      id: "8",
      price: 100,
    },
    {
      title: "Castlevania Anniversary Collection",
      description: "Coletânea com os clássicos 8-bit e 16-bit da série.",
      Iimage: "/img9.png",
      id: "9",
      price: 80,
    },
    {
      title: "TMNT: Shredder’s Revenge",
      description: "Tartarugas Ninja com visual retrô e ação cooperativa.",
      Iimage: "/img10.png",
      id: "10",
      price: 130,
    },
  ];
}
