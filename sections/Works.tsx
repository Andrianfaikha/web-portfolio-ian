"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "Majadigi Super App",
    role: "UI/UX Designer",
    year: "2026",
    image: "/majadigi.png",
    desc: [
      "Redesigned user experience for better efficiency",
      "Created mobile-first wireframes and prototypes",
      "Improved UI consistency and accessibility",
      "Developed modern design systems"
    ]
  },
  {
    num: "02",
    title: "CUANKI Money Manager",
    role: "UI/UX Designer",
    year: "2025",
    image: "/cuanki.png",
    desc: [
      "Conducted user research and persona building",
      "Designed user flows and wireframes",
      "Created interactive prototypes",
      "Built scalable design systems"
    ]
  },
  {
    num: "03",
    title: "WellSync",
    role: "UI/UX Designer",
    year: "2026",
    image: "/wellsync.png",
    desc: [
      "Designed wireframes and high-fidelity UI in Figma",
      "Conducted UX research and user journey analysis",
      "Built interactive prototypes and design systems",
      "Collaborated with developers for implementation consistency"
    ]
  },
  {
    num: "04",
    title: "KopianKu",
    role: "Product Manager",
    year: "2026",
    image: "/kopianku.png",
    desc: [
      "Defined product roadmap and feature strategy",
      "Managed collaboration between design and development teams",
      "Conducted user research and market analysis",
      "Created user flows and sprint planning"
    ]
  }
];

export default function Works() {
  return (
    <div id="projects" className="relative bg-black py-24 md:py-36 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col">

        {/* Section Header with Massive Swiss Typography */}
        <div className="flex justify-between items-baseline mb-20 relative z-10 select-none">
          <h2 className="font-syne font-black text-5xl sm:text-6xl md:text-8xl lg:text-[7vw] leading-none uppercase tracking-tighter">
            SELECTED<br />
            <span className="text-zinc-500 font-light">WORKS</span>
          </h2>
          <span className="text-xs text-zinc-500 font-mono tracking-widest uppercase hidden md:block">
            [ Featured Projects ]
          </span>
        </div>

        {/* Vertical List of Project Cards */}
        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col w-full"
            >
              <div className="flex justify-between items-end mb-4 border-b border-zinc-900 pb-4">
                <div>
                  <span className="text-[12px] font-mono text-zinc-500 tracking-wider mb-2 block">
                    {project.num} —
                  </span>
                  <h3 className="font-syne font-bold text-2xl sm:text-3xl md:text-5xl uppercase tracking-tight text-white group-hover:text-zinc-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <span className="text-sm font-mono text-zinc-400 bg-zinc-950 border border-zinc-900 px-4 py-2 hidden sm:block">
                  {project.year}
                </span>
              </div>

              {/* Box containing the project mockup image */}
              <motion.div 
                initial={{ filter: "grayscale(100%) contrast(1.2)" }}
                whileInView={{ filter: "grayscale(0%) contrast(1)" }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-zinc-950 border border-zinc-900 transition-colors duration-700 hover:border-zinc-700"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-contain p-4 md:p-8 transition-transform duration-700 ease-out hover:scale-105"
                />
              </motion.div>

              {/* Project Metadata */}
              <div className="mt-8 flex flex-col md:flex-row gap-8 justify-between items-start">
                <div className="md:w-1/3">
                  <p className="text-sm text-zinc-400 uppercase tracking-widest font-mono border-l-2 border-zinc-800 pl-4 py-1">
                    ROLE: <span className="text-white font-bold">{project.role}</span>
                  </p>
                </div>
                <div className="md:w-2/3 flex flex-col space-y-2">
                  {project.desc.map((item, i) => (
                    <p key={i} className="text-sm md:text-base text-zinc-500 font-sans tracking-wide leading-relaxed">
                      • {item}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
