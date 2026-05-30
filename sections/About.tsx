"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black py-24 md:py-36 px-4 sm:px-6 md:px-12 border-t border-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Title */}
        <div className="mb-20 select-none">
          <h2 className="font-syne font-black text-3xl min-[375px]:text-4xl min-[430px]:text-5xl sm:text-6xl md:text-8xl lg:text-[7vw] leading-none uppercase tracking-tighter break-words">
            ABOUT <span className="text-zinc-500 font-light">IAN</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Portrait Image with offsetting shadow borders */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-5 relative flex justify-center lg:justify-start"
          >
            <div className="relative w-[85%] aspect-[3/4] sm:w-[70%] lg:w-full bg-zinc-950 border border-zinc-900 grayscale contrast-125 group overflow-hidden">
              <Image
                src="/ian_profile.png"
                alt="Ian profile"
                fill
                className="object-contain transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Back Offset Graphic Line */}
            <div className="absolute top-6 left-6 -z-10 w-full h-full border border-zinc-900 pointer-events-none hidden lg:block" />
          </motion.div>

          {/* Right Column: Editorial Text Blocks */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-start space-y-12">

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.25em] block">
                [ Introduction ]
              </span>
              <p className="font-syne font-medium text-lg min-[375px]:text-xl min-[430px]:text-2xl md:text-3xl text-white leading-tight tracking-tight uppercase break-words hyphens-auto">
                An Information Technology undergraduate blending data-driven analytics with premium user-centered design.
              </p>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed tracking-wider font-sans pt-2 break-words">
                With a strong foundation in UI/UX design, product management, and frontend development, I bridge the gap between technical execution and creative direction. I have experience in managing social media performance, leading product discovery cycles, and building interactive prototypes that harmonize function with absolute artistic perfection.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
