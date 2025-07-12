// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/logo.png"

import { throttle } from "lodash";
import { ShoppingCart } from "lucide-react";
import { ThemeToggle } from "./buttonTheme";


interface NavProps {
  cartCount: number;
  onComprar: () => void
}



const Navigation = ({ cartCount, onComprar}: NavProps) => {

  const handleClick = () => {
    if (cartCount > 0) {
      onComprar();
    } else {
      alert("Nenhum produto selecionado.");
    }
  };

  return (
    <div className="flex items-center gap-6">
      <Link
        href="/"
        className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-75 ease-in-out"
      >
        Início
      </Link>

      <div className="relative">
        <button
          className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-75 ease-in-out hover:border-yellow-500 hover:border p-2 rounded-full w-10 h-10 flex items-center justify-center bg-gray-900 text-white"
          disabled={cartCount === 0}
          aria-label="Carrinho de compras"
          title="Carrinho de compras"
          onMouseDown={(e) => e.preventDefault()} // Previne o foco no botão  
          onClick={handleClick}
        >
          <ShoppingCart className="text-yellow-400" />
        </button>

        { cartCount > 0 &&(
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            {cartCount}
          </span>
        )}
      </div>

    </div>
  );
};

export default Navigation;



// import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
// import { useColorMode } from '@vueuse/core'

// const mode = useColorMode({
//   attribute: 'data-theme',
//   modes: {
//     light: 'light',
//     dark: 'dark',
//   },
//   disableTransition: false,
// })

// const toggleMode = () => {
//   mode.value = mode.value === 'dark' ? 'light' : 'dark'
// }

{/* <script setup>

</script>

<template>
  <button @click="toggleMode" class="cursor-pointer">
    <transition name="rotate-element" mode="out-in">
      <div :key="mode" class="icon-wrapper">
        <component :is="mode === 'dark' ? SunIcon : MoonIcon" class="w-8 h-8 stroke-1" />
      </div>
    </transition>
  </button>
</template> */}






type ThemeMode = "auto" | "light" | "dark";

export function Header({  cartCount, onComprar}: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollNav, setShowScrollNav] = useState(false);

  // Lucas: Add funções para controlar dark mode
  const [mounted, setMounted] = useState(false);
  // const [theme, setTheme] = useState<ThemeMode>("auto");
  // const themeIcon = theme === "auto" ? "🖥️" : theme === "dark" ? "🌙" : "☀️";
  // const themeLabel = theme === "auto" ? "Seguir sistema" : theme === "dark" ? "Modo escuro" : "Modo claro";

  // // Aplicar tema no DOM
  // const applyTheme = (mode: ThemeMode) => {
  //   const html = document.documentElement;
  //   html.classList.remove("light", "dark");

  //   if (mode === "dark") {
  //     html.classList.add("dark");
  //   } else if (mode === "light") {
  //     html.classList.add("light");
  //   } else {
  //     // Auto: aplica com base no sistema
  //     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //     html.classList.add(prefersDark ? "dark" : "light");
  //   }

  //   localStorage.setItem("theme", mode);
  // };

  // // Alterna entre os temas: auto | dark | light
  // const toggleTheme = () => {
  //   const next = theme === "auto" ? "dark" : theme === "dark" ? "light" : "auto";
  //   setTheme(next);
  //   applyTheme(next);
  // };

  useEffect(() => {
    setMounted(true);
    // const stored = localStorage.getItem("theme") as ThemeMode | null;

    // if (stored === "dark" || stored === "light") {
    //   setTheme(stored);
    //   applyTheme(stored);
    // } else {
    //   setTheme("auto");
    //   applyTheme("auto");
    // }
  }, []);

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

  if (!mounted) return null;

  // Lucas: Add dark mode buttom
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-3 bg-black">
      <div className="flex justify-between items-center w-full">

        {/* Logo na esquerda */}
        <Link href="/" className="flex items-center space-x-2 rounded-md px-2 max-h-8 p-2">
          <Image src={Logo} alt="MaykShop logo" width={340} height={80} className="md:max-w-[340px] max-h-20 object-contain py-2" />
        </Link>
      

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          
          <ThemeToggle/>
          {/* <button
            onClick={toggleTheme}
            className="  transition-colors hover:border-yellow-500 hover:border p-2 rounded-full w-10 h-10 flex items-center justify-center bg-gray-900 text-white"
            aria-label={themeLabel}
            title={themeLabel}
          >
            {themeIcon}
          </button> */}
         
          <nav className="flex space-x-6 text-gray-400">
            <Navigation cartCount={cartCount} onComprar={onComprar}/>
          </nav>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center space-x-4">
         
          <ThemeToggle/>
          {/* Botão hambúrguer no mobile */}
          <button
            className="bg-black text-white px-4 py-2 rounded-lg"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Menu"
          >
            ☰
          </button>
          
        </div>
      </div>

      {/* Menu mobile aberto */}
      {menuOpen && (
        <nav className="mt-5 mx-auto w-full bg-black text-gray-400 flex flex-col space-y-4 py-4 px-6 shadow-lg rounded-md md:hidden">
          <Navigation cartCount={cartCount} onComprar={onComprar}/>
        </nav>
      )}
    </header>
  );
}