"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { name: "Email", val: "andrianfaikha2411@gmail.com", href: "mailto:andrianfaikha2411@gmail.com" },
  { name: "LinkedIn", val: "andrian faikha", href: "https://linkedin.com/in/andrianfaikha" },
  { name: "GitHub", val: "Andrianfaikha", href: "https://github.com/Andrianfaikha" },
  { name: "Instagram", val: "andrian.fi", href: "https://instagram.com/andrian.fi" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black py-24 md:py-36 px-6 md:px-12 border-t border-zinc-900 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center relative z-10 select-none">

        {/* Sub-label */}
        <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.4em] mb-6">
          [ GET IN TOUCH ]
        </span>

        {/* Large Cinematic Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <a
            href="mailto:andrianfaikha2411@gmail.com"
            className="font-syne font-black text-4xl min-[400px]:text-5xl sm:text-7xl md:text-9xl lg:text-[11vw] leading-none uppercase tracking-tighter text-white hover:text-zinc-300 transition-colors duration-500 inline-block group relative break-words text-center"
          >
            {"LET'S WORK"} <br /> {"TOGETHER"}
            {/* Dynamic expanding line below LET'S WORK TOGETHER */}
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center" />
          </a>

          <div className="mt-16 sm:mt-24">
            <a
              href="https://drive.google.com/file/d/1X55H-zgFlqtN3FAu8p-qCur2QmJto7nI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-zinc-700 text-white font-mono text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 group"
            >
              <span>Here's Check My CV</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </motion.div>

        {/* Info Grid / Social links */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 border-t border-zinc-900 pt-16 text-left">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col space-y-2 py-4 border-b border-transparent hover:border-zinc-800 transition-all duration-300"
            >
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                {link.name}
              </span>
              <span className="text-sm font-syne font-bold text-white group-hover:text-zinc-400 transition-colors duration-300 relative inline-block overflow-hidden py-1">
                {link.val}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 origin-right transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-hover:origin-left" />
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
