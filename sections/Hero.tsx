"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Parallax scrolling triggers
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-2, 4]);

  useEffect(() => {
    // Elegant line reveal with GSAP
    if (textRef.current) {
      const chars = textRef.current.querySelectorAll(".reveal-text");
      gsap.fromTo(
        chars,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1.6,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.3,
        }
      );
    }
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden py-20 md:py-32 px-4 sm:px-6 md:px-12"
    >
      {/* Background Subtle Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/10 via-black to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Side: Overlapping Cinematic Image Stack */}
        <motion.div
          style={{ y: imageY, rotate: imageRotate }}
          className="col-span-12 lg:col-span-6 relative flex items-center justify-center h-[350px] sm:h-[50vh] lg:h-[70vh] w-full"
        >
          {/* Back Stack Image Layer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="absolute w-[60%] h-[80%] border border-zinc-800 -rotate-6 translate-x-4 -translate-y-4 pointer-events-none"
          />
          
          {/* Main Portrait Wrapper */}
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
            className="relative w-[70%] h-[90%] md:w-[65%] md:h-[95%] lg:w-[80%] lg:h-[90%] bg-zinc-950 overflow-hidden contrast-125 border border-zinc-900 shadow-2xl group"
          >
            <motion.div
              initial={{ scale: 1.3, filter: "blur(10px)" }}
              animate={{ scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/ian_profile.png"
                alt="Ian Profile"
                fill
                priority
                className="object-contain transition-transform duration-[2000ms] ease-out group-hover:scale-105"
              />
              {/* Dark vignette grid */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>

          {/* Overlapping Info Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            className="absolute bottom-2 left-4 sm:left-6 lg:left-0 bg-black/85 border border-zinc-800/80 backdrop-blur px-4 sm:px-5 py-2 sm:py-3 flex flex-col space-y-1"
          >
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono">Location</span>
            <span className="text-[11px] uppercase tracking-wider font-syne font-bold text-white">Jakarta, ID</span>
          </motion.div>
        </motion.div>

        {/* Right Side / Overlapping Text: Editorial Swiss Layout */}
        <div className="col-span-12 lg:col-span-6 relative flex flex-col justify-center h-full select-none mt-4 lg:mt-0">
          <motion.div
            style={{ y: textY }}
            ref={textRef}
            className="flex flex-col text-left"
          >
            {/* Accent Line */}
            <div className="h-[1px] w-12 bg-white/40 mb-6 sm:mb-8" />

            {/* Oversized Swiss Headline */}
            <h1 className="font-syne font-extrabold tracking-tight text-white mb-6 sm:mb-8">
              <div className="overflow-hidden block py-1 min-h-[2rem] sm:min-h-[3rem] lg:h-[6vw]">
                <span className="reveal-text block text-2xl sm:text-5xl md:text-6xl lg:text-[5vw] leading-none uppercase font-light">
                  {"HELLO, I'M"}
                </span>
              </div>
              <div className="overflow-hidden block py-1 min-h-[3.5rem] sm:min-h-[5.5rem] lg:h-[11vw] mt-1 sm:mt-2">
                <span className="reveal-text block text-5xl sm:text-8xl md:text-9xl lg:text-[9.5vw] font-black leading-none text-white tracking-tighter">
                  IAN.
                </span>
              </div>
            </h1>

            {/* Cinematic Role Layout */}
            <div className="space-y-2 sm:space-y-3 font-syne font-bold text-[16px] sm:text-[22px] md:text-[26px] tracking-wide text-zinc-400 mt-1 sm:mt-2 uppercase border-l-2 border-zinc-800 pl-4 sm:pl-6 py-2">
              <div className="overflow-hidden block">
                <span className="reveal-text block hover:text-white transition-colors duration-300">
                  UI/UX Designer
                </span>
              </div>
              <div className="overflow-hidden block">
                <span className="reveal-text block hover:text-white transition-colors duration-300">
                  Product Manager
                </span>
              </div>
              <div className="overflow-hidden block">
                <span className="reveal-text block hover:text-white transition-colors duration-300 font-light text-zinc-500">
                  Frontend Developer
                </span>
              </div>
            </div>

            {/* Short Bio Block */}
            <p className="mt-6 sm:mt-8 max-w-md text-xs md:text-sm text-zinc-500 leading-relaxed tracking-wider font-sans">
              Information Technology undergraduate with experience in UI/UX design, product management, frontend development, digital marketing, social media management, and creative direction. Passionate about building modern digital experiences with strong visual aesthetics and user-centered design.
            </p>
          </motion.div>
        </div>

      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.35em] text-zinc-600 font-mono">SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-8 sm:h-10 bg-zinc-800"
        />
      </div>
    </section>
  );
}
