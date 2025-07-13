// src/components/ImagemCarrossel.tsx

'use client';

import React from 'react';
// Removi o useRef e o onSwiper, pois com mais slides eles não são mais necessários para corrigir a inicialização.
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// ▼▼▼ PONTO 1: AUMENTAMOS O NÚMERO DE IMAGENS ▼▼▼
// Dupliquei o array para ter 6 imagens no total.
const imagens = [
  '/carousel-image/ps5-pro.jpeg',
  '/carousel-image/switch-oled.jpg',
  '/carousel-image/ps5-pro.jpeg',
  '/carousel-image/ps5-pro.jpeg',
  '/carousel-image/switch-oled.jpg',
  '/carousel-image/ps5-pro.jpeg',
];

const ImagemCarrossel = () => {
  return (
    <Swiper
      // ▼▼▼ PONTO 2: DEFINIMOS O SLIDE INICIAL ▼▼▼
      // O carrossel vai começar no segundo item do array (índice 1).
      initialSlide={1}

      loop={true}
      effect={'coverflow'}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      navigation={true}
      pagination={{ clickable: true }}
      style={{ padding: '40px 0' }}
    >
      {imagens.map((imagemUrl, index) => (
        <SwiperSlide key={index}>
          <img
            src={imagemUrl}
            alt={`Slide ${index + 1}`}
            style={{
              width: '100%',
              objectFit: 'contain',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImagemCarrossel;