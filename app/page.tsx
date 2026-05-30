import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Works from "@/sections/Works";
import CreativeWorks from "@/sections/CreativeWorks";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-white selection:text-black">
      {/* Premium Minimal Navigation */}
      <Navbar />

      {/* Hero Presentation */}
      <Hero />

      {/* Selected Projects (Virtual Horizontal scroll) */}
      <Works />

      {/* Creative Design Projects Slider */}
      <CreativeWorks />

      {/* Experience History */}
      <Experience />

      {/* Dynamic continuous marquee capabilities */}
      <Skills />

      {/* Artistic Mindset & Bio */}
      <About />

      {/* High-impact kinetic call-to-action */}
      <Contact />

      {/* Minimal copyright & top controller */}
      <Footer />
    </main>
  );
}
