// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

interface FaqProps {
    question: string;
    response: string;
}

export function Faq({question, response }:FaqProps) {
  return (

    
    <div className='flex flex-col items-center justify-center gap-4 mx-auto'>
        <li className='md:text-xl text-base font-semibold list-none text-start w-full '>{question}</li>
        <p className=' md:text-lg text-sm font-algorithms-font font-light text-gray-500'>{response}</p>
    </div>
    

  );
}