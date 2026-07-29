import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import EventDetails from "@/components/EventDetails";
import EventLocation from "@/components/EventLocation";
import GiftRegistry from "@/components/GiftRegistry";
import Countdown from "@/components/Countdown";
import RsvpForm from "@/components/RsvpForm";
import Footer from "@/components/Footer";
import type { Guest } from "@/interfaces";

async function getGuestData(id: string): Promise<Guest | null> {
  try {
    const filePath = path.join(process.cwd(), "data", "guests.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const guests: Guest[] = JSON.parse(jsonData);
    
    return guests.find(g => g.id === id) || null;
  } catch (error) {
    console.error("Error reading guests data:", error);
    return null;
  }
}

export default async function InvitePage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const guest = await getGuestData(id);

  if (!guest) {
    notFound();
  }

  return (
    <main className="min-h-screen font-sans">
      <Hero />
      <Welcome />
      <EventDetails />
      <EventLocation />
      <GiftRegistry />
      <Countdown />
      <RsvpForm guest={guest} />
      <Footer />
    </main>
  );
}
