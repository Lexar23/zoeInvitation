"use client";

import { INVITATION_CONFIG } from "@/config/invitation";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import type { Guest } from "@/interfaces";

interface RsvpFormProps {
  guest?: Guest;
}

export default function RsvpForm({ guest }: RsvpFormProps) {
  const handleConfirm = () => {
    const defaultText = `¡Hola! Confirmo mi asistencia al Baby Shower de ${INVITATION_CONFIG.babyName}.`;
    const text = guest 
      ? `¡Hola! Soy ${guest.name}. Confirmo mi asistencia al Baby Shower de ${INVITATION_CONFIG.babyName} para ${guest.allowedGuests} personas.`
      : defaultText;
    
    const url = `https://wa.me/${INVITATION_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="transparentCard p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-rose-900 mb-4">
            Confirma tu Asistencia
          </h2>
          
          {guest ? (
            <p className="text-stone-600 mb-8 font-light text-lg">
              Esta invitación es válida únicamente para <strong className="font-medium text-rose-700">{guest.allowedGuests}</strong> {guest.allowedGuests > 1 ? 'personas' : 'persona'}.
            </p>
          ) : (
            <p className="text-stone-600 mb-8 font-light text-lg">
              Por favor, confirma tu asistencia para que podamos considerarte en este día tan especial.
            </p>
          )}

          <button
            onClick={handleConfirm}
            className="inline-flex items-center justify-center gap-3 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-medium tracking-wide transition-all hover:scale-105 active:scale-95 shadow-md shadow-rose-200"
          >
            Confirmar por WhatsApp
            <Send className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
