"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BrandHero({ project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative h-[70vh] w-full overflow-hidden rounded-3xl mb-32 border border-border">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full scale-110">
        <img
          src={project.heroMockupUrl}
          alt={project.brandName}
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/60 to-transparent" />
      
      <motion.div style={{ opacity }} className="absolute bottom-0 right-0 left-0 p-12 md:p-20 z-10 text-right">
        <span className="inline-block px-4 py-2 text-xs font-semibold tracking-wider text-accent bg-accent/10 border border-accent/20 rounded-full mb-6 backdrop-blur-sm">
          {project.category}
        </span>
        <h1 className="text-5xl md:text-8xl font-extrabold text-text-white tracking-tight">
          {project.brandName}
        </h1>
      </motion.div>
    </div>
  );
}
