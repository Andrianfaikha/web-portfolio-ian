"use client";

import { motion } from "framer-motion";

const skillsRow1 = [
  "UI/UX Design",
  "Product Management",
  "Frontend Development",
  "Next.js",
  "React",
  "Digital Marketing",
  "Data Analytics",
  "UI/UX Design",
  "Product Management",
  "Frontend Development",
  "Next.js",
  "React",
  "Digital Marketing",
  "Data Analytics",
];

const skillsRow2 = [
  "TailwindCSS",
  "Figma",
  "Content Strategy",
  "Creative Direction",
  "Firebase",
  "Laravel API",
  "TailwindCSS",
  "Figma",
  "Content Strategy",
  "Creative Direction",
  "Firebase",
  "Laravel API",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black py-24 overflow-hidden border-t border-zinc-900 select-none"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 mb-16">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-4">
          <h2 className="font-syne font-black text-3xl min-[375px]:text-4xl min-[430px]:text-5xl sm:text-6xl md:text-8xl lg:text-[7vw] leading-none uppercase tracking-tighter break-words">
            CAPABILITIES
          </h2>
          <p className="max-w-xs text-xs md:text-sm text-zinc-500 leading-relaxed tracking-wider pt-3">
            A comprehensive list of visual tools, system architectures, and execution strategies honed to craft premium products.
          </p>
        </div>
      </div>

      {/* Marquee Rows Container */}
      <div className="flex flex-col gap-6 w-full relative">
        {/* Subtle top & bottom shadow gradient to focus typography */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Row 1: Leftward Scrolling */}
        <div className="flex overflow-hidden w-full border-y border-zinc-900/60 py-6 bg-zinc-950/20">
          <div className="flex gap-16 whitespace-nowrap animate-marquee">
            {skillsRow1.map((skill, index) => (
              <span
                key={index}
                className="font-syne font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase text-zinc-800 hover:text-white transition-all duration-300 cursor-default hover:scale-105 inline-block"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Scrolling */}
        <div className="flex overflow-hidden w-full border-b border-zinc-900/60 py-6 bg-zinc-950/20">
          <div className="flex gap-16 whitespace-nowrap animate-marquee-reverse">
            {skillsRow2.map((skill, index) => (
              <span
                key={index}
                className="font-syne font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase text-zinc-800 hover:text-white transition-all duration-300 cursor-default hover:scale-105 inline-block font-light"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
