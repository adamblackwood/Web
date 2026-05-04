"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BrandIdentityCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/portfolio/brand-identity/${project.slug}`}>
        <div className="relative bg-bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5">
          {/* ─── Moodboard Top Section (60%) ─── */}
          <div className="relative h-[320px] md:h-[400px] w-full overflow-hidden">
            {/* Mockup Image */}
            <img
              src={project.mockupImageUrl}
              alt={project.brandName}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Dark Overlay for Logo Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main/90 via-bg-main/20 to-transparent" />

            {/* Sequence Number */}
            <div className="absolute top-6 left-6 text-text-muted/20 font-mono text-7xl font-extrabold select-none pointer-events-none">
              0{index + 1}
            </div>

            {/* Floating Logo Box (Overlapping the middle) */}
            <div className="absolute bottom-0 right-8 translate-y-1/2 z-20 w-28 h-28 bg-bg-card border border-border rounded-2xl p-3 shadow-2xl shadow-black/50 flex items-center justify-center transition-all duration-300 group-hover:border-accent group-hover:shadow-accent/20">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Fallback text if logo URL is just a placeholder */}
                <span className="text-2xl font-bold text-text-white">
                  {project.brandName.charAt(0)}
                </span>
                {/* If using real SVGs, replace the span above with:
                <img src={project.primaryLogoUrl} alt="Logo" className="w-full h-full object-contain" /> 
                */}
              </div>
            </div>
          </div>

          {/* ─── Content Section (40%) ─── */}
          <div className="pt-20 pb-8 px-8 text-right">
            {/* Category & Typography Hint */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono tracking-widest text-text-muted">
                {project.typography_used.split(" & ")[0]}
              </span>
              <span className="text-xs font-semibold tracking-wider text-accent uppercase">
                {project.category}
              </span>
            </div>

            {/* Brand Name */}
            <h3 className="text-3xl font-extrabold text-text-white group-hover:text-accent transition-colors duration-300 mb-6">
              {project.brandName}
            </h3>

            {/* Color Palette Swatches */}
            <div className="flex items-center gap-3 justify-end">
              {project.brandColors.map((color, i) => (
                <div key={i} className="group/swatch relative">
                  <div
                    className="w-9 h-9 rounded-lg border border-border transition-transform duration-300 hover:scale-125 cursor-pointer shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                  {/* Tooltip with hex code */}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/swatch:opacity-100 transition-opacity text-[10px] font-mono text-text-white bg-bg-main px-2 py-0.5 rounded pointer-events-none whitespace-nowrap">
                    {color}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
