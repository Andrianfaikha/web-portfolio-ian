"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const creativeProjects = [
  {
    title: "Onewill Solusi Indonesia",
    role: "Digital Marketing & Visual Editor Intern",
    image: "/creative/Onewillsolusi.png",
  },
  {
    title: "Alfath Retail",
    role: "Digital Marketing Intern",
    image: "/creative/alfath.png",
  },
  {
    title: "Uno1Padel Club Malang",
    role: "Social Media Manager",
    image: "/creative/Uno1Padel.png",
  },
  {
    title: "Uno1Tennis Club Malang",
    role: "Freelance Graphic Design",
    image: "/creative/Uno1tennis.png",
  },
  {
    title: "EuphoriaSeni 2024 EM UB",
    role: "Art Visual Volunteer",
    image: "/creative/euphoria.png",
  },
  {
    title: "Inaugurasi FILKOM UB 2023",
    role: "Creative Staff",
    image: "/creative/filkom.png",
  },
  {
    title: "KBMDSI FILKOM UB",
    role: "Creative Staff",
    image: "/creative/kbmdsi.png",
  },
  {
    title: "LKMM - TM BEM FILKOM UB 2024",
    role: "Vice Head of Design Visual Documentation",
    image: "/creative/LKMM.png",
  },
  {
    title: "Eufoghia Al-Bayan Anyer",
    role: "Head Of Creative Division",
    image: "/creative/eufoghia.png",
  }
];

export default function CreativeWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollCenter = container.scrollLeft + container.clientWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child) => {
      const element = child as HTMLElement;
      if (element.hasAttribute('data-index')) {
        const index = parseInt(element.getAttribute('data-index') || "0");
        const childCenter = element.offsetLeft + element.clientWidth / 2;
        const distance = Math.abs(scrollCenter - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      // Get the width of the first child element
      const slideWidth = containerRef.current.children[1]?.clientWidth || 300;
      containerRef.current.scrollBy({ left: -slideWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const slideWidth = containerRef.current.children[1]?.clientWidth || 300;
      containerRef.current.scrollBy({ left: slideWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-black py-24 md:py-36 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col mb-16">
        <div className="flex justify-between items-baseline relative z-10 select-none">
          <h2 className="font-syne font-black text-4xl sm:text-5xl md:text-7xl lg:text-[6vw] leading-none uppercase tracking-tighter">
            CREATIVE<br />
            <span className="text-zinc-500 font-light">WORKS</span>
          </h2>
        </div>
        <p className="text-zinc-400 font-sans text-sm md:text-base mt-6 max-w-2xl">
          Use the arrows or swipe to explore my creative design projects, ranging from digital marketing campaigns, event inaugurations, to social media branding.
        </p>
      </div>

      {/* Horizontal Slider (CSS Scroll Snap) */}
      <div className="relative w-full">

        {/* Left Arrow Floating Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-black/60 backdrop-blur-md border border-zinc-800 rounded-full hover:bg-zinc-900 transition-colors group shadow-2xl flex items-center justify-center"
          aria-label="Previous Slide"
        >
          <svg className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        {/* Right Arrow Floating Button */}
        <button
          onClick={scrollRight}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-black/60 backdrop-blur-md border border-zinc-800 rounded-full hover:bg-zinc-900 transition-colors group shadow-2xl flex items-center justify-center"
          aria-label="Next Slide"
        >
          <svg className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        <div className="pl-6 md:pl-12">
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 pr-6 md:pr-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Internal styles to hide scrollbar for webkit browsers */}
            <style dangerouslySetInnerHTML={{
              __html: `
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
          `}} />

            {creativeProjects.map((project, index) => (
              <motion.div
                data-index={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                key={index}
                className="relative flex-none w-[90vw] sm:w-[85vw] md:w-[60vw] lg:w-[45vw] snap-center group cursor-grab active:cursor-grabbing"
              >
                <div className="relative w-full aspect-[16/9] bg-zinc-950 border border-zinc-900 overflow-hidden">
                  <motion.div
                    animate={{ filter: (activeIndex === index || (activeIndex === 0 && index === 1) || (activeIndex === creativeProjects.length - 2 && index === creativeProjects.length - 1)) ? "grayscale(0%) contrast(1)" : "grayscale(100%) contrast(1.2)" }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-4 transition-transform duration-[1500ms] ease-out hover:scale-105"
                    />
                  </motion.div>
                  {/* No overlay or text needed on the image itself */}
                </div>
                
                {/* Project Info Below Image */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-4 flex flex-col"
                >
                  <span className="text-[10px] md:text-xs font-mono text-zinc-500 tracking-widest uppercase mb-1">
                    {project.role}
                  </span>
                  <h3 className="font-syne font-bold text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-white group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
