"use client";
import { INVITATION_CONFIG } from "@/config/invitation";
import { motion } from "framer-motion";
import { Gift, MessageCircle } from "lucide-react";

export default function GiftRegistry() {
  if (!INVITATION_CONFIG.giftRegistry) return null;

  const handleWhatsApp = () => {
    const text = `¡Hola! Ya vi la invitación de la pequeña Zoe.¿Me comparten la lista de sugerencias que tienen como guía? ¡Muchas gracias!`;
    const url = `https://wa.me/${INVITATION_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-10 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="transparentCard p-8 md:p-12 flex flex-col items-center"
        >
          <div className="p-4 bg-white/50 rounded-full text-rose-500 mb-6 shadow-sm">
            <Gift className="w-10 h-10" />
          </div>
          
          <h2 className="text-3xl font-serif text-rose-900 mb-4">
            Sugerencia de Regalos
          </h2>
          
          <p className="text-stone-700 mb-8 font-light text-lg">
            {INVITATION_CONFIG.giftRegistry}
          </p>

          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center gap-3 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-medium tracking-wide transition-all hover:scale-105 active:scale-95 shadow-md shadow-rose-200"
          >
            Elegir un regalito para Zoe
            <MessageCircle className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
