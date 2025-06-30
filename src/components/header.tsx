// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/logo.png"

import { throttle } from "lodash";

interface HeaderProps {
  children?: React.ReactNode;
}

const Navigation = () => (
  <>
    <Link href="/" className="hover:text-white hadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-75 ease-in-out">Inicio</Link>
    <Link href="/sobre" className="hover:text-white hadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-75 ease-in-out">Sobre</Link>
    <Link href="/servicos" className="hover:text-white hadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-75 ease-in-out">Serviços</Link>
    <Link href="/contatos" className="hover:text-white hadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-75 ease-in-out">Contatos</Link>
  </>
);

export function Header({ children }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollNav, setShowScrollNav] = useState(false);

  const handleScroll = useCallback(
    throttle(() => {
      setShowScrollNav(window.scrollY > 60);
    }, 200),
    []
  );

  useEffect(() => {
    // Função para fechar o menu ao redimensionar para dispositivos maiores
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // Fecha o menu ao redimensionar para desktop
      }
    };

    // Adiciona o ouvinte de evento de rolagem
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize); // Adiciona o listener de resize

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize); // Remove o listener de resize
    };
  }, [handleScroll]);

  return (
    <header className="p-3 text-center md:relative border-b border-gray-300 flex flex-col justify-between items-center bg-black ">
      <div className="bg-transparent flex justify-between items-center w-full">
        <Link href="/" className="flex items-center space-x-2 bg-transparent rounded-md px-2 max-h-20 p-2">
          <Image src={Logo} alt="Focus Consultoria JR" sizes="80" width={340} height={80} className="md:max-w-[340px] max-h-20 object-contain py-2"/>
        </Link>
        
        <div className="md:hidden flex items-center border-2 border-slate-600 rounded-md">
          <button 
            className="bg-black text-white px-4 py-2 rounded-lg text-center"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
        
        <nav className="hidden md:flex top-5 left-1/2 transform -translate-x-1/2 bg-transparent text-gray-400 px-6 py-3 rounded-full space-x-6 mr-0">
          <Navigation />
        </nav>
      </div>

      {menuOpen && (
        <nav className="mt-5 mx-auto w-full bg-black text-gray-400 flex flex-col space-y-4 py-4 px-6 shadow-lg rounded-md">
          <Navigation />
        </nav>
      )}

      {showScrollNav && (
        // Lucas: fix bug da navbar ficar com cor igual ao do fundo e difícil de ler em fundo colorido.
        <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black text-gray-400 px-6 py-3 rounded-full shadow-lg space-x-6 z-50">
          <Navigation />
        </nav>
      )}
    </header>
  );
}
