"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-accent/40 transition-all duration-300"
    >
      {/* ─── Background Image ─── */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* ─── Dark Overlay ─── */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

      {/* ─── Duration Badge (Top Left) ─── */}
      <div className="absolute top-4 left-4 bg-bg-main/80 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-mono text-text-white z-20">
        {project.duration}
      </div>

      {/* ─── Center Play Button ─── */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 group-hover:bg-accent/20 group-hover:border-accent/70">
          <Play size={24} className="text-white group-hover:text-accent mr-[-2px] transition-colors" fill="currentColor" />
        </div>
      </div>

      {/* ─── Bottom Info ─── */}
      <div className="absolute bottom-0 right-0 left-0 p-5 z-20 text-right">
        <span className="text-accent text-xs font-semibold">{project.category}</span>
        <h3 className="text-lg font-bold text-text-white mt-1 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
}
