"use client";

import { INVITATION_CONFIG } from "@/config/invitation";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Welcome() {
  return (
    <section className="py-2 px-6 text-center max-w-2xl mx-auto rounded-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-6 p-8"
      >
        <Heart className="w-10 h-10 text-rose-400 animate-pulse" strokeWidth={1.5} />
        <p className="text-xl md:text-3xl text-stone-700 font-light leading-relaxed italic">
          "{INVITATION_CONFIG.welcomeMessage}"
        </p>
        <div className="w-24 h-[1px] bg-rose-200 mt-4" />
      </motion.div>
    </section>
  );
}
