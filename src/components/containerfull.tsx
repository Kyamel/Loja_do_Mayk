// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HtmlHTMLAttributes } from "react";

interface ContainerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  props?: HtmlHTMLAttributes<HTMLDivElement>
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,     
    },
  },
});

export function ContainerFull({ children, props }: ContainerProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main
        {...props}
        className="flex-grow pb-20 w-full relative overflow-hidden"
        style={{
          fontFamily: "var(--font-sans)",
          color: "var(--text-primary)",
        }}
      >
        {/* Lucas: camadas de fundo retrô */}

        {/* Conteúdo sobreposto */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto">
          {children}
        </div>
      </main>
    </QueryClientProvider>
  );
}




