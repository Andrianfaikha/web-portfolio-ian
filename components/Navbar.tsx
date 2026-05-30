"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-black/50 backdrop-blur-xl border-zinc-800/40 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="group relative flex items-center"
        >
          <img 
            src="/logo.png" 
            alt="Andrian Faikha" 
            className="h-5 md:h-6 object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.25em] font-medium text-zinc-400 hover:text-white transition-colors duration-300 relative py-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 origin-right transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-hover:origin-left" />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger (Elegant minimalistic bullet) */}
        <a
          href="#contact"
          className="md:hidden text-[10px] uppercase tracking-[0.2em] px-4 py-2 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          {"Let's Talk"}
        </a>
      </div>
    </motion.nav>
  );
}
