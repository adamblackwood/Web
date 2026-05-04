"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BrandIdentityCard({ project, index }) {
  // كود أمان للتأكد من وجود اسم الخط أو استخدام خط افتراضي
  const displayFont = project.brandFonts ? project.brandFonts[0] : (project.typography_used ? project.typography_used.split(" & ")[0] : "Premium Font");

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
          {/* ─── Moodboard Top Section ─── */}
          <div className="relative h-[320px] md:h-[400px] w-full overflow-hidden">
            <img
              src={project.heroMockupUrl || project.mockupImageUrl}
              alt={project.brandName}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main/90 via-bg-main/20 to-transparent" />

            <div className="absolute top-6 left-6 text-text-muted/20 font-mono text-7xl font-extrabold select-none pointer-events-none">
              0{index + 1}
            </div>

            <div className="absolute bottom-0 right-8 translate-y-1/2 z-20 w-28 h-28 bg-bg-card border border-border rounded-2xl p-3 shadow-2xl shadow-black/50 flex items-center justify-center transition-all duration-300 group-hover:border-accent group-hover:shadow-accent/20">
              <div className="relative w-full h-full flex items-center justify-center">
                <span className="text-2xl font-bold text-text-white">
                  {project.brandName ? project.brandName.charAt(0) : "A"}
                </span>
              </div>
            </div>
          </div>

          {/* ─── Content Section ─── */}
          <div className="pt-20 pb-8 px-8 text-right">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono tracking-widest text-text-muted">
                {displayFont}
              </span>
              <span className="text-xs font-semibold tracking-wider text-accent uppercase">
                {project.category}
              </span>
            </div>

            <h3 className="text-3xl font-extrabold text-text-white group-hover:text-accent transition-colors duration-300 mb-6">
              {project.brandName}
            </h3>

            <div className="flex items-center gap-3 justify-end">
              {(project.brandColors || []).map((colorObj, i) => {
                const colorHex = typeof colorObj === 'string' ? colorObj : colorObj.hex;
                return (
                  <div key={i} className="group/swatch relative">
                    <div
                      className="w-9 h-9 rounded-lg border border-border transition-transform duration-300 hover:scale-125 cursor-pointer shadow-sm"
                      style={{ backgroundColor: colorHex }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}