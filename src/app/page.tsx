// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

import { Metadata } from 'next';
import { Email } from "@/components/email";
import { ContainerFull } from "@/components/containerfull";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Faq } from '@/components/faq';
import { Separator } from '@/components/separator';

export const metadata: Metadata = {
  title: "Focus Consultoria | Transformando desafios em oportunidades",
  description: "Consultoria especializada em soluções estratégicas.",

};


export default function Home() {
  return (

    <ContainerFull>

      <div className=" flex flex-col items-center justify-center px-4 md:px-0 w-auto mx-auto md:max-w-[800px] gap-4 mt-5">
        <div className="flex flex-col items-center justify-center w-full gap-4 ">
          <h2 className="md:text-4xl text-2xl font-bold text-black text-center">Focus Consultoria Jr</h2>

        </div>
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <p className="md:text-xl text-base font-algorithms-font text-black text-center">A Focus Consultoria Jr, formada por estudantes de Engenharia de Produção, atua oferecendo serviços de consultoria, treinamentos, gestão de estoque, processos de qualidade e análise de mercado para pequenas e médias empresas.</p>
          <p className="md:text-xl text-base font-algorithms-font text-black text-center">O objetivo principal é gerar impacto no mercado local/regional, desenvolver habilidades práticas dos membros e promover o aprendizado por meio de projetos reais.</p>
        </div>
        <Separator />
      </div>

      <div className="text-black flex flex-col items-center justify-center px-4 md:px-0 w-auto mx-auto md:max-w-[800px] gap-4 mt-5 space-y-2">
        <h2 className='md:text-4xl text-2xl font-bold text-black text-center underline mb-3'>Perguntas Frequentes</h2>
        <ul className='list-none space-y-4'>
          <Faq question='O QUE É UMA EMPRESA JÚNIOR?' response='Empresa júnior é uma associação civil sem fins lucrativos e com fins educacionais, gerida e administrada por estudantes do ensino superior.' />

          <Faq question='QUEM REALIZA AS CONSULTORIAS?' response='Graduandos de Engenharia de Produção, em conjunto com mestres e doutores da Universidade Federal de Ouro Preto.' />

          <Faq question='O QUE PRECISO PARA ME TORNAR UM MEMBRO DA INOVA?' response='Estar alinhado com os valores da empresa, valorizar a ética profissional, ter proatividade, ser comunicativo e ter vontade de fazer a diferença.' />

          <Faq question='O PROFESSOR POSSUI DISPONIBILIDADE PARA RESPONDER OS CLIENTES?' response='O professor orientador do projeto é responsável por acompanhar a execução do mesmo desde a elaboração da proposta até a conclusão do projeto.' />

        </ul>
        <Separator />
      </div>

      <div className=" flex flex-col items-center justify-center px-4 md:px-0 w-auto mx-auto md:max-w-[800px] gap-4 mt-8">
        <h2 className='md:text-4xl text-2xl font-bold text-black text-center mb-3'>Entre em Contato com a Focus</h2>
        <Email />
      </div>
    </ContainerFull>
  );
}



