'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const imagens = [
  '/carousel-image/ps5-pro.jpeg',
  '/carousel-image/minecraft.jpg',
 '/supermariorpg.jpg',
  '/carousel-image/switch-oled.jpg', 
  '/carousel-image/banner.jpg',
  
];

const ImagemCarrossel = () => {
  return (
    <Swiper
      initialSlide={1}
      className="w-full max-w-[250px] md:max-w-full h-auto mx-auto flex items-center justify-center px-4 "
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      speed={800}
      loop={true}
      effect="flip"
      centeredSlides={true}
      slidesPerView={1}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      navigation={true}
      pagination={{ clickable: true }}
      style={{ padding: '40px 0' }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 80,
            modifier: 1,
            slideShadows: true,
          },
        },
        640: {
          slidesPerView: 2,
          coverflowEffect: {
            rotate: 40,
            stretch: 0,
            depth: 90,
            modifier: 1,
            slideShadows: true,
          },
        },
        1024: {
          slidesPerView: 3,
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          },
        },
      }}
    >
      {imagens.map((imagemUrl, index) => (
        <SwiperSlide key={index} className='flex items-center justify-center px-2'>
          <img
            className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] h-auto object-contain mx-auto"
            src={imagemUrl}
            alt={`Slide ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImagemCarrossel;
