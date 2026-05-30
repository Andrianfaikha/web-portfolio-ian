"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "Aug 2025 — Apr 2026",
    role: "Digital Marketing Specialist Freelance",
    company: "OneWill Solusi Indonesia",
    desc: "Analyzed social media performance data using Excel and Instagram Insights to optimize content strategy. Grew Instagram followers by 500+ and generated 334,000+ views. Created weekly/monthly performance reports and developed data-driven content strategies.",
  },
  {
    year: "Jun 2025 — Dec 2025",
    role: "Social Media Manager Freelance",
    company: "Uno1Padel Malang",
    desc: "Monitored Instagram & TikTok data analytics to analyze audience behavior. Processed engagement data using spreadsheets and successfully achieved 236,000+ total views within 3 months through insight-based content optimization.",
  },
  {
    year: "Mar 2025 — Jun 2025",
    role: "User Interface Design Practicum Assistant",
    company: "Faculty of Computer Science (FILKOM) Universitas Brawijaya",
    desc: "Managed academic scoring data for 32 students using structured spreadsheets. Conducted evaluation and reporting of student progress. Assisted students in UI development using Figma, HTML, CSS, and JavaScript.",
  },
  {
    year: "Jan 2025 — Apr 2025",
    role: "Digital Marketing Specialist Intern",
    company: "OneWill Solusi Indonesia",
    desc: "Assisted in analyzing social media performance data using Excel and Instagram Insights to optimize content strategy. Grew Instagram followers and generated views.",
  },
  {
    year: "Jul 2024 — Sep 2024",
    role: "Creative Design & Videography Intern",
    company: "Alfath Corporation",
    desc: "Created content marketing reels and brainstormed content strategies. Designed social media feeds, promotional menus, and a fresh new logo for AlfathStreetwear.",
  },
  {
    year: "Jun 2024 — Sep 2024",
    role: "Graphic Designer & Editor Freelance",
    company: "Uno1Tennis Tennis Club Malang",
    desc: "Designed Instagram feeds, merchandise, and lanyards for internal tournaments. Edited branding collaboration videos and designed the brand new jersey for tennis and padel.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-black py-24 md:py-36 px-6 md:px-12 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-6 mb-20 select-none">
          <h2 className="font-syne font-black text-4xl min-[400px]:text-5xl sm:text-6xl md:text-8xl lg:text-[7vw] leading-none uppercase tracking-tighter">
            EXPERIENCE
          </h2>
          <p className="max-w-xs text-xs md:text-sm text-zinc-500 leading-relaxed tracking-wider pt-3">
            A comprehensive path bridging advanced technical orchestration, rigorous product discovery, and pixel-perfect design aesthetics.
          </p>
        </div>

        {/* Brutalist Vertical Timeline Cards */}
        <div className="flex flex-col border-t border-zinc-900">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-zinc-900 items-start hover:bg-zinc-950/40 transition-colors duration-500 px-4 -mx-4"
            >
              {/* Year Column */}
              <div className="col-span-12 md:col-span-3 flex items-center md:items-start">
                <span className="font-syne font-black text-3xl md:text-4xl text-zinc-700 tracking-tighter group-hover:text-white transition-colors duration-500">
                  {exp.year}
                </span>
              </div>

              {/* Position / Company Column */}
              <div className="col-span-12 md:col-span-4">
                <h3 className="font-syne font-extrabold text-xl md:text-2xl text-white tracking-tight uppercase">
                  {exp.role}
                </h3>
                <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase mt-1 block">
                  @ {exp.company}
                </span>
              </div>

              {/* Description Column */}
              <div className="col-span-12 md:col-span-5 pt-1">
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed tracking-wider font-sans group-hover:text-zinc-300 transition-colors duration-500">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
