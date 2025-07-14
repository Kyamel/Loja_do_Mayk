// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

interface FaqProps {
  question: string;
  response: string;
}

export function Faq({ question, response }: FaqProps) {
  // Lucas: Adicionar Esquema de Global
  return (
    <div className="flex flex-col items-center justify-center gap-4 mx-auto">
      <li
        className="list-none text-start md:text-[1.35rem] w-full font-semibold text-lg mx-auto" 
        style={{
      
          fontFamily: "VCRMono",
      
        }}
      >
        {question}
      </li>
      <p className="text-start w-full font-normal text-lg md:text-[1.35rem] mx-auto"
        style={{
       
          fontFamily: "VCRMono",
      
        }}
      >
        {response}
      </p>
    </div>
  );
}
