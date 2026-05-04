"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function FeaturedVideoCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-full aspect-video rounded-3xl overflow-hidden cursor-pointer border border-border hover:border-accent/50 transition-all duration-500 shadow-2xl shadow-black/40"
    >
      {/* ─── Background Image ─── */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* ─── Cinematic Overlays ─── */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* ─── Duration Badge (Top Left) ─── */}
      <div className="absolute top-6 left-6 bg-bg-main/80 backdrop-blur-md px-4 py-1.5 rounded-lg text-sm font-mono text-text-white border border-border z-20">
        {project.duration}
      </div>

      {/* ─── Center Play Button ─── */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-accent/30 blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-24 h-24 rounded-full bg-accent/20 backdrop-blur-xl border-2 border-accent/70 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:bg-accent/30 group-hover:border-accent"
          >
            <Play size={36} className="text-accent mr-[-4px]" fill="currentColor" />
          </motion.div>
        </div>
      </div>

      {/* ─── Bottom Info ─── */}
      <div className="absolute bottom-0 right-0 left-0 p-8 md:p-12 z-20 text-right">
        <span className="inline-block px-4 py-1 text-xs font-semibold tracking-wider text-accent bg-accent/10 border border-accent/20 rounded-full mb-4">
          {project.category}
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-text-white leading-tight">
          {project.title}
        </h2>
      </div>
    </motion.div>
  );
}
