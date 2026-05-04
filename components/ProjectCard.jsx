"use client";

import { motion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";

export default function ProjectCard({ title, category, image }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative rounded-2xl overflow-hidden bg-bg-card border border-border cursor-pointer"
    >
      {/* ─── Glow Effect on Hover ─── */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-accent/5 z-0" />
      <div className="absolute -inset-1 opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 bg-accent z-0" />

      {/* ─── Image Container ─── */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent opacity-60" />
        
        {/* Hover Icon */}
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-bg-main/50 backdrop-blur-sm flex items-center justify-center text-accent opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpLeft size={18} />
        </div>
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10 p-5 text-right">
        <span className="text-xs font-medium text-accent tracking-wider uppercase">
          {category}
        </span>
        <h3 className="text-xl font-bold text-text-white mt-2 transition-colors duration-300 group-hover:text-accent">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
