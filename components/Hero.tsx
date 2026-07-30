"use client";

import { INVITATION_CONFIG } from "@/config/invitation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="z-20 text-center px-4 max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-2xl font-light text-rose-800 mb-4 tracking-wide uppercase my-2">
          {INVITATION_CONFIG.heroMessage}
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-serif italic text-rose-900 mb-6 drop-shadow-sm"
        >
          {INVITATION_CONFIG.babyName}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-2 text-rose-800/80">
          <p className="text-xl md:text-2xl font-medium tracking-widest uppercase">
            {new Date(INVITATION_CONFIG.eventDate).toLocaleDateString('es-ES', { 
              month: 'long', day: 'numeric', year: 'numeric' 
            })}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
