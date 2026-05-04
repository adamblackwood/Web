"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialMediaCard from "@/components/SocialMediaCard";
import { socialMediaProjects, socialCategories } from "@/data/socialMediaProjects";

export default function SocialMediaPortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filteredProjects =
    activeCategory === "الكل"
      ? socialMediaProjects
      : socialMediaProjects.filter((p) => p.category === activeCategory);

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
          تصميم سلع وخدمات
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-text-white mt-2"
        >
          معرض السوشيال ميديا
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted text-lg mt-4 max-w-2xl"
        >
          تصاميم ترويجية عالية التحويل تجذب الانتباه وتحقق أهداف المبيعات
        </motion.p>
      </div>

      {/* ─── Horizontal Scrollable Filters ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative mb-12 -mx-6 px-6 overflow-x-auto scrollbar-dark pb-4"
      >
        <div className="flex gap-3 w-max">
          {socialCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.label;

            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold 
                  transition-all duration-300 whitespace-nowrap border
                  ${isActive 
                    ? "bg-accent text-bg-main border-accent shadow-lg shadow-accent/20" 
                    : "bg-bg-card text-text-muted border-border hover:border-text-muted hover:text-text-white"
                  }
                `}
              >
                {Icon && <Icon size={16} />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* ─── Projects Grid ─── */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <SocialMediaCard key={project.id} project={project} />
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
