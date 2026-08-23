import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { PreloaderGate } from "@/components/sections/Preloader";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Showreel } from "@/components/sections/Showreel";
import { Technology } from "@/components/sections/Technology";
import { WhyKreeda } from "@/components/sections/WhyKreeda";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <PreloaderGate>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Showreel />
        <Technology />
        <WhyKreeda />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </PreloaderGate>
  );
}
