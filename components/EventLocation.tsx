"use client";

import { INVITATION_CONFIG } from "@/config/invitation";
import { motion } from "framer-motion";
import { MapPin, Map } from "lucide-react";

export default function EventLocation() {
  const handleSearchClick = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(INVITATION_CONFIG.location)}`;
    window.open(url, '_blank');
  };

  const handleWazeClick = () => {
    window.open('https://waze.com/ul/hd1u0q9dt5', '_blank');
  };

  const handleDirectionsClick = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(INVITATION_CONFIG.location)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-8 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="transparentCard p-8 flex flex-col items-center"
        >
          
          <h2 className="text-3xl font-serif text-rose-900 mb-3">
            Lugar del Evento
          </h2>
          
          <p className="text-stone-700 font-light mb-8 text-lg capitalize">
            {INVITATION_CONFIG.location}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            

            <button
              onClick={handleWazeClick}
              className="inline-flex flex-1 items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-medium tracking-wide transition-all shadow-md shadow-rose-200"
            >
              Ir con Waze
              <MapPin className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
