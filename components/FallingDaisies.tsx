"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Daisy = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(50, 50)">
      {/* Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse 
          key={angle}
          cx="0" cy="-20" 
          rx="8" ry="22" 
          fill="white" 
          stroke="#e7e5e4" // stone-200 stroke for slight definition
          strokeWidth="1"
          transform={`rotate(${angle})`} 
        />
      ))}
      {/* Center of the daisy */}
      <circle cx="0" cy="0" r="12" fill="#fde047" stroke="#eab308" strokeWidth="1" />
    </g>
  </svg>
);

interface DaisyConfig {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  size: number;
  rotation: number;
}

export default function FallingDaisies() {
  const [daisies, setDaisies] = useState<DaisyConfig[]>([]);

  useEffect(() => {
    // Generate daisies only on the client to avoid hydration errors
    const generatedDaisies = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // random horizontal position (%)
      animationDuration: Math.random() * 15 + 20, // fall duration between 20s and 35s
      delay: Math.random() * -30, // start at different points in the animation
      size: Math.random() * 30 + 20, // size between 20px and 50px
      rotation: Math.random() * 360, // initial rotation
    }));
    
    setDaisies(generatedDaisies);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden">
      {daisies.map((daisy) => (
        <motion.div
          key={daisy.id}
          className="absolute opacity-70"
          style={{ left: `${daisy.left}%`, top: "-10%" }}
          animate={{
            top: "110%",
            rotate: [daisy.rotation, daisy.rotation + 360],
          }}
          transition={{
            duration: daisy.animationDuration,
            repeat: Infinity,
            ease: "linear",
            delay: daisy.delay,
          }}
        >
          <Daisy size={daisy.size} />
        </motion.div>
      ))}
    </div>
  );
}
