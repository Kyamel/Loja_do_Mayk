// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

import { Metadata } from "next";
import { Email } from "@/components/email";
import { ContainerFull } from "@/components/containerfull";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Faq } from "@/components/faq";
import { Separator } from "@/components/separator";
import { Producs } from "../components/producs";
import { Cards } from "../components/cards";

export const metadata: Metadata = {
  title: "MaykShop | Tecnologia e Games",
  description: "Tecnologia e Games.",
};

// Lucas: Adicionar layers no fundo da página principal, seguingo estilo retro
export default function Home() {
  return (
    <ContainerFull>
      <section>
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <h2
            className="text-4xl"
            style={{
              color: "var(--text-primary)",
              fontFamily: "VCRMono",
              fontWeight: 200,
              marginBottom: 15,
            }}
          >
            MaykShop
          </h2>
          <p
            style={{
              fontSize: "var(--fs-md)",
              color: "var(--text-primary)",
              textAlign: "justify",
            }}
          >
            A MaykShop é uma empresa especializada em segmentação comercial,
            criada para conectar entusiastas e amadores das áreas de tecnologia
            e games.
          </p>
          <Separator />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-8 text-center">
        <h2
          className="text-4xl"
          style={{
            color: "var(--text-primary)",
            fontFamily: "VCRMono",
            fontWeight: 200,
          }}
        >
          Produtos Novos e Lançamentos
        </h2>
        <div className="max-w-3xl mx-auto px-4 py-8 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
          {Producs.map((p) => (
            <Cards
              Iimage={p.Iimage}
              description={p.description}
              title={p.title}
              key={p.title}
            />
          ))}
        </div>
        <Separator />
      </section>

      <section>
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <h2
            className="text-3xl"
            style={{
              color: "var(--text-primary)",
              fontFamily: "VCRMono",
              fontWeight: 200,
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            Perguntas Frequentes
          </h2>
          <Faq
            question="O QUEM SOMOS"
            response="A MaykShop é uma empresa especializada em segmentação comercial, que reúne entusiastas e amadores da tecnologia e dos games"
          />
          <Separator />
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <h2
            className="text-3xl mb-6"
            style={{
              color: "var(--text-primary)",
              fontFamily: "VCRMono",
              fontWeight: 200,
              textAlign: "center",
            }}
          >
            Entre em Contato com a MaykShop
          </h2>
          <Email />
        </div>
      </section>

      <section></section>
    </ContainerFull>
  );
}
