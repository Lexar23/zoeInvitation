"use client";

import { INVITATION_CONFIG } from "@/config/invitation";
import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, Gift, Shirt } from "lucide-react";

export default function EventDetails() {
  const details = [
    {
      icon: <CalendarDays className="w-6 h-6" />,
      title: "Fecha",
      content: new Date(INVITATION_CONFIG.eventDate).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hora",
      content: INVITATION_CONFIG.eventTime,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Lugar",
      content: INVITATION_CONFIG.location,
    },
  ];

  if (INVITATION_CONFIG.dressCode) {
    details.push({
      icon: <Shirt className="w-6 h-6" />,
      title: "Código de Vestimenta",
      content: INVITATION_CONFIG.dressCode,
    });
  }

  if (INVITATION_CONFIG.giftRegistry) {
    details.push({
      icon: <Gift className="w-6 h-6" />,
      title: "Mesa de Regalos",
      content: INVITATION_CONFIG.giftRegistry,
    });
  }

  return (
    <section className="py-2 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-rose-900 mb-12">
          Detalles del Evento
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {details.map((detail, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center p-6 transparentCard text-center"
            >
              <div className="p-4 bg-white/50 rounded-full text-rose-500 mb-4 shadow-sm">
                {detail.icon}
              </div>
              <h3 className="text-lg font-medium text-stone-800 mb-2 uppercase tracking-wide">
                {detail.title}
              </h3>
              <p className="text-stone-600 font-light capitalize">
                {detail.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
