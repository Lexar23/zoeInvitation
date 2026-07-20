import type { Metadata } from "next";
import { Cinzel, Great_Vibes } from "next/font/google";
import FallingDaisies from "@/components/FallingDaisies";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-sans" });
const howellAlt = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Invitación Baby Shower",
  description: "Te invitamos a celebrar con nosotros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cinzel.variable} ${howellAlt.variable}`}>
      <body className="antialiased text-stone-800 min-h-full flex flex-col font-sans relative  p-4">
        <FallingDaisies />
        <div className="relative z-0 flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
