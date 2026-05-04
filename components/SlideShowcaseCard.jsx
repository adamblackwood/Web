"use client";

import { motion } from "framer-motion";

export default function SlideShowcaseCard({ slide, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-full aspect-video rounded-2xl overflow-hidden border border-border cursor-pointer transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
    >
      {/* ─── Slide Image ─── */}
      <img
        src={slide.slide_image}
        alt={slide.slide_title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* ─── Cinematic Gradient Overlays ─── */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* ─── Data Highlight Badge (Physical Top-Left) ─── */}
      {slide.highlight_data && (
        <div className="absolute top-4 left-4 bg-accent text-bg-main px-4 py-1.5 rounded-lg text-sm font-extrabold shadow-lg shadow-accent/30 z-20 font-mono tracking-wide">
          {slide.highlight_data}
        </div>
      )}

      {/* ─── Slide Number (Physical Bottom-Left) ─── */}
      <div className="absolute bottom-4 left-4 text-text-muted/30 text-6xl font-extrabold select-none z-10 pointer-events-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* ─── Title (Bottom-Right for RTL) ─── */}
      <div className="absolute bottom-0 right-0 left-0 p-5 z-20 text-right">
        <h3 className="text-lg font-bold text-text-white group-hover:text-accent transition-colors duration-300">
          {slide.slide_title}
        </h3>
      </div>
    </motion.div>
  );
}
