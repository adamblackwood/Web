"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SocialMediaCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
    >
      <Link href={`/portfolio/social-media/${project.slug}`}>
        {/* ─── Image Container (Aspect 4:5) ─── */}
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-border group-hover:border-accent/40 transition-colors duration-300">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          
          {/* Subtle dark gradient at bottom for text readability if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-main/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* ─── Niche Tag (Physical Top-Left) ─── */}
          <div className="absolute top-4 left-4 bg-accent text-bg-main px-4 py-1.5 rounded-lg text-xs font-bold shadow-lg shadow-accent/20">
            {project.niche_tag}
          </div>
        </div>

        {/* ─── Title Below ─── */}
        <h3 className="mt-5 text-lg font-bold text-text-white text-right group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-text-muted text-right">{project.category}</p>
      </Link>
    </motion.div>
  );
}
