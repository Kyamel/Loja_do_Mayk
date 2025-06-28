// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

"use client";

import { motion } from "framer-motion";

export function Loading() {
  return (
    <div className="flex space-x-2 bg-transparent text-black mt-20">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-4 h-4 bg-black rounded-full"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}