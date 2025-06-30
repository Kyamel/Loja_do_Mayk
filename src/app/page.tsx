// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

import { Metadata } from 'next';
import { Email } from "@/components/email";
import { ContainerFull } from "@/components/containerfull";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Faq } from '@/components/faq';
import { Separator } from '@/components/separator';
import styles from './page.module.css'; // onde terá os estilos das layers
import { DisqusComments } from '@/components/DisqusComments';

export const metadata: Metadata = {
  title: "MaykShop | Tecnologia e Games",
  description: "Tecnologia e Games.",
};


// Lucas: Adicionar layers no fundo da página principal, seguingo estilo retro
export default function Home() {
  return (
    <ContainerFull>
      <section className={styles.layer1Section}>
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <h2 className="text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            MaykShop
          </h2>
          <p style={{ fontSize: "var(--fs-md)", color: "var(--text-primary)" }}>
            A MaykShop é uma empresa especializada em segmentação comercial, criada para conectar entusiastas e amadores das áreas de tecnologia e games.
          </p>
          <Separator />
        </div>
      </section>

      <section className={styles.layer2Section}>
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
            Perguntas Frequentes
          </h2>
          <Faq question="O QUEM SOMOS" response="A MaykShop é uma empresa especializada em segmentação comercial, que reúne entusiastas e amadores da tecnologia e dos games" />
          <Separator />
        </div>
      </section>

      <section className={styles.layer3Section}>
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
            Entre em Contato com a MaykShop
          </h2>
          <Email />
        </div>
      </section>

    <section>
      <DisqusComments />
    </section>
    </ContainerFull>
  );
}
