// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

import { HTMLAttributes } from 'react';

interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {}

export function Separator(props : SeparatorProps){
    return (
        <div className="bg-[#000099] mx-auto w-full max-h-10 p-[1px] rounded-md my-8" {...props} />
    );
};
