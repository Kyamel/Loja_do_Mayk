// 'use client';

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import {
//   Navigation,
//   Pagination,
//   EffectCoverflow,
//   Autoplay,
// } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';

// const imagens = [
//   '/carousel-image/ps5-pro.jpeg',
//   '/carousel-image/minecraft.jpg',
//  '/supermariorpg.jpg',
//   '/carousel-image/switch-oled.jpg', 
//   '/carousel-image/banner.jpg',
  
// ];

// const ImagemCarrossel = () => {
//   return (
//     <Swiper
//       initialSlide={1}
//       className="w-full md:max-w-full max-w-[180px] max-h-[400px] mx-auto flex items-center justify-center"
//       autoplay={{ delay: 8000, disableOnInteraction: false }}
//       speed={800}
//       loop={true}
//       effect="fade"
//       centeredSlides={true}
//       slidesPerView={1}
//       coverflowEffect={{
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//       }}
//       modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
//       navigation={true}
//       pagination={{ clickable: true }}
//       // style={{ padding: '40px 0' }}
//       breakpoints={{
//         0: {
//           slidesPerView: 1,
//           coverflowEffect: {
//             rotate: 30,
//             stretch: 0,
//             depth: 80,
//             modifier: 1,
//             slideShadows: true,
//           },
//         },
    
//         1024: {
//           slidesPerView: 1,
//           coverflowEffect: {
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           },
//         },
//       }}
//     >
//       {imagens.map((imagemUrl, index) => (
//         <SwiperSlide key={index} className='flex items-center justify-center mx-auto'>
//           <img
//             className="w-full md:max-h-[400px] max-w-[180px] max-h-[400px] h-[400px] object-contain mx-auto"
//             src={imagemUrl}
//             alt={`Slide ${index + 1}`}
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default ImagemCarrossel;


"use client";

import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames";

const imagens = [
  "/carousel-image/ps5-pro.jpeg",
  "/carousel-image/minecraft.jpg",
  "/supermariorpg.jpg",
  "/carousel-image/switch-oled.jpg",
  "/carousel-image/banner.jpg",
];

const TEMPO_AUTOPLAY = 8000; // 8s

const ImagemCarrossel = () => {
  const [indexAtual, setIndexAtual] = useState(1);
  const intervaloRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = imagens.length;

  const proximoSlide = () => {
    setIndexAtual((prev) => (prev + 1) % totalSlides);
  };

  const slideAnterior = () => {
    setIndexAtual((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // autoplay
  useEffect(() => {
    intervaloRef.current = setInterval(() => {
      proximoSlide();
    }, TEMPO_AUTOPLAY);

    return () => {
      if (intervaloRef.current) clearInterval(intervaloRef.current);
    };
  }, []);

  const irParaSlide = (index: number) => {
    setIndexAtual(index);
    if (intervaloRef.current) {
      clearInterval(intervaloRef.current);
      intervaloRef.current = setInterval(() => {
        proximoSlide();
      }, TEMPO_AUTOPLAY);
    }
  };

  return (
    <div className="relative w-full md:max-w-full max-w-[180px] max-h-[400px] mx-auto overflow-hidden">
      {/* Slides */}
      <div className="relative h-[400px] flex transition-transform duration-700 ease-in-out"
           style={{ transform: `translateX(-${indexAtual * 100}%)` }}>
        {imagens.map((src, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-full flex justify-center items-center"
            style={{
              minWidth: "100%",
              transition: "opacity 0.8s ease",
              opacity: idx === indexAtual ? 1 : 0.3,
              transform: idx === indexAtual ? "scale(1)" : "scale(0.9)",
              filter: idx === indexAtual ? "none" : "blur(2px)",
            }}
          >
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="max-h-[400px] h-[400px] object-contain transition-all duration-700"
            />
          </div>
        ))}
      </div>

      {/* Setas de navegação */}
      <button
        onClick={slideAnterior}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 z-10"
      >
        ◀
      </button>
      <button
        onClick={proximoSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 z-10"
      >
        ▶
      </button>

      {/* Paginação (bolinhas) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {imagens.map((_, idx) => (
          <button
            key={idx}
            onClick={() => irParaSlide(idx)}
            className={classNames(
              "w-3 h-3 rounded-full",
              idx === indexAtual ? "bg-white" : "bg-gray-400"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagemCarrossel;
