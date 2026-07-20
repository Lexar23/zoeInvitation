"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { INVITATION_CONFIG } from "@/config/invitation";
import { motion } from "framer-motion";

export default function Countdown() {
  const { timeLeft, isExpired } = useCountdown(INVITATION_CONFIG.eventDate);

  if (isExpired) {
    return (
      <section className="py-16 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-5xl font-serif text-rose-600"
        >
          ¡El gran día ha llegado!
        </motion.div>
      </section>
    );
  }

  const timeBlocks = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <section className="py-2 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-sm tracking-[0.3em] uppercase text-stone-500 mb-10">
          Faltan
        </h2>
        
        <div className="flex justify-center items-center gap-4 md:gap-8">
          {timeBlocks.map((block, idx) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 violetaColor flex items-center justify-center mb-3 rounded-full shadow-lg">
                <span className="text-2xl md:text-4xl font-serif text-white absolute">
                  {block.value.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs md:text-sm tracking-widest uppercase text-stone-600">
                {block.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
