"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black border-t border-zinc-950 py-12 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Copyright */}
        <div className="flex flex-col space-y-1 text-center md:text-left">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white">
            IAN © 2026
          </span>
          <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
            All Rights Reserved.
          </span>
        </div>

        {/* Right Side: Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center space-x-3 px-5 py-3 border border-zinc-900 bg-zinc-950 hover:bg-white hover:text-black hover:border-white transition-all duration-500 rounded-full"
        >
          <span className="text-[9px] font-mono uppercase tracking-[0.25em] font-bold">
            Back to Top
          </span>
          <div className="w-5 h-5 rounded-full flex items-center justify-center bg-zinc-900 group-hover:bg-zinc-100 transition-colors duration-500">
            <ArrowUp className="w-3 h-3 transition-transform duration-500 group-hover:-translate-y-[2px]" />
          </div>
        </button>

      </div>
    </footer>
  );
}
