"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";

export default function PptProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden bg-bg-card border border-border cursor-pointer"
    >
      <Link href={`/portfolio/ppt/${project.slug}`} className="block h-full">
        {/* ─── Thumbnail ─── */}
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
          
          {/* Hover Icon */}
          <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-bg-main/50 backdrop-blur-sm flex items-center justify-center text-accent opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpLeft size={18} />
          </div>
        </div>

        {/* ─── Content ─── */}
        <div className="relative p-5 text-right">
          <span className="inline-block px-3 py-1 text-[10px] font-semibold tracking-wider text-accent bg-accent/10 rounded-full mb-3">
            {project.category}
          </span>
          <h3 className="text-xl font-bold text-text-white group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        {/* ─── Green Border Hover Effect ─── */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent transition-all duration-300 pointer-events-none" />
      </Link>
    </motion.div>
  );
}
