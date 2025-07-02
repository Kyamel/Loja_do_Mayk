// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

import Image from "next/image";

interface Card {
  title: string;
  description: string;
  Iimage?: string;
}

export function Cards({description, Iimage, title}:Card){
  return (
    <div className="flex flex-col p-2 gap-2 items-start text-black border border-gray-300 md:max-w-80 rounded-md px-2 min-h-72  w-[230px] shadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300 ease-in-out bg-[#fff8dc] opacity-45">
      
      
      {Iimage && (
        <div className="w-full h-32 flex items-center justify-center rounded mb-2">
          <Image 
            src={Iimage} 
            alt={title}
            width={120}
            height={120}
            className="max-w-full max-h-full object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      )}

      <p className="flex flex-col md:text-lg text-base font-algorithms-font font-medium text-black break-words ">
        <span className="flex items-center justify-center"><span className="md:text-lg text-base font-bold flex items-center justify-center gap-2 text-center">{title}</span></span>
        {description}
      </p>
    </div>
  );
}

