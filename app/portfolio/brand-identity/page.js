"use client";

import { motion } from "framer-motion";
import BrandIdentityCard from "@/components/BrandIdentityCard";
import { brandIdentityProjects } from "@/data/brandIdentityProjects";

export default function BrandIdentityPage() {
  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      {/* ─── Header ─── */}
      <div className="text-right mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm font-mono tracking-widest uppercase"
        >
          الهوية البصرية
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-text-white mt-2"
        >
          المجموعة التصميمية الواجهية
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted text-lg mt-4 max-w-2xl"
        >
          نصمم هويات بصرية متكاملة تحكي قصة علامتك التجارية وتترك أثراً لا يُنسى في أذهان جمهورك
        </motion.p>
      </div>

      {/* ─── Premium Grid ─── */}
      {/* Using 2 columns for landscape/moodboard layouts to give them breathing room */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {brandIdentityProjects.map((project, index) => (
          <BrandIdentityCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
