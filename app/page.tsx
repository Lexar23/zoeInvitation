import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import EventDetails from "@/components/EventDetails";
import Countdown from "@/components/Countdown";
import RsvpForm from "@/components/RsvpForm";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen font-sans transparentCard">
      <Image src="/lazo.png" alt="Lazo" width={100} height={100} className="lazo" />
      <Hero />
      <Countdown />
      <Welcome />
      <EventDetails />
      <RsvpForm />
      <Footer />
    </main>
  );
}
