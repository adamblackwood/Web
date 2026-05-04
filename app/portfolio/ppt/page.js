"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PptProjectCard from "@/components/PptProjectCard";
import { pptProjects, pptCategories } from "@/data/pptProjects";

export default function PptPortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filteredProjects =
    activeCategory === "الكل"
      ? pptProjects
      : pptProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      {/* ─── Header ─── */}
      <div className="text-right mb-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm font-mono tracking-widest uppercase"
        >
          معرض الأعمال
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-text-white mt-2"
        >
          قوالب العروض التقديمية
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted text-lg mt-4 max-w-2xl"
        >
          تصاميم احترافية تحوّل الأفكار إلى عروض بصرية مؤثرة ومقنعة
        </motion.p>
      </div>

      {/* ─── Category Filters ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-3 mb-12 justify-end"
      >
        {pptCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 border ${
              activeCategory === cat
                ? "bg-accent text-bg-main border-accent shadow-lg shadow-accent/20"
                : "bg-transparent text-text-muted border-border hover:border-text-muted hover:text-text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* ─── Projects Grid ─── */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <PptProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-text-muted text-lg">لا توجد أعمال في هذا التصنيف حالياً</p>
        </div>
      )}
    </div>
  );
}
