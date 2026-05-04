"use client";

import { motion } from "framer-motion";

export default function ServiceCard({ seq, title, description, thumbnail }) {
  return (
    <motion.div
      whileHover={{ borderColor: "#00D289" }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col bg-bg-card border border-border rounded-2xl p-6 text-right overflow-hidden"
    >
      {/* ─── Sequence Number ─── */}
      <span className="text-accent font-mono text-sm font-bold mb-4 tracking-widest">
        {seq}
      </span>

      {/* ─── Text Content ─── */}
      <h3 className="text-2xl font-bold text-text-white mb-3">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">
        {description}
      </p>

      {/* ─── Thumbnail ─── */}
      <div className="relative w-full h-44 rounded-xl overflow-hidden border border-border">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle green overlay on hover */}
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}
