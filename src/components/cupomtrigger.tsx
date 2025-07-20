"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CupomTrigger({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      onClick={onClick}
      className="fixed left-6 bottom-6 z-30 cursor-pointer"
      initial={{ y: 0 }}
      animate={{ y: [0, -8, 0] }} // animação de "flutuação"
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="bg-white/70 backdrop-blur-sm shadow-xl border border-gray-200 p-3 rounded-full hover:scale-105 transition-transform">
        <Image
          src="/kokiri.png"
          alt="Abrir cupom"
          width={48}
          height={48}
          className="rounded-full object-contain"
          title="Abrir cupom!"
          priority
        />
      </div>
    </motion.div>
  );
}
