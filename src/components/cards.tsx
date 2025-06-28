// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

import { LucideIcon } from "lucide-react"
interface Card {
  title: string;
  description: string;
  Iimage: LucideIcon | string;
}

export function Cards({description, Iimage, title}:Card){
  return (
    <div className="flex flex-col p-2 gap-2 items-start text-black border border-gray-300 md:max-w-80 rounded-md px-2 min-h-72  w-[300px] shadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
      <p className="flex flex-col md:text-lg text-base font-algorithms-font font-medium text-black break-words ">
        <span className="flex items-center justify-center"><span className="md:text-lg text-base font-bold flex items-center justify-center gap-2 text-center"><Iimage size={24}/>{title}</span></span>
        {description}
      </p>
    </div>
  );
}

