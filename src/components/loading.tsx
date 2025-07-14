// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import mario from "../../public/mario.png"; // ajuste o caminho conforme a organização do seu projeto

export function Loading() {
  return (
    <div className="flex justify-center items-center space-x-4 mt-20">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        >
          <Image
            src={mario}
            alt="Mario"
            width={32}
            height={32}
            className="drop-shadow-lg"
          />
        </motion.div>
      ))}
    </div>
  );
}
