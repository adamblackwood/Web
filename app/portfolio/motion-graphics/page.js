"use client";

import { motion } from "framer-motion";
import FeaturedVideoCard from "@/components/FeaturedVideoCard";
import VideoCard from "@/components/VideoCard";
import { motionProjects } from "@/data/motionProjects";

export default function MotionGraphicsPage() {
  const featuredProject = motionProjects.find((p) => p.isFeatured);
  const otherProjects = motionProjects.filter((p) => !p.isFeatured);

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
          الفيديو والموشن
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-text-white mt-2"
        >
          مستوى عالٍ للتصميم الترفيهي
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted text-lg mt-4 max-w-2xl"
        >
          نصنع تجارب بصرية متحركة تروي قصصاً وتترك أثراً عميقاً لدى الجمهور
        </motion.p>
      </div>

      {/* ─── Featured Video (Hero) ─── */}
      {featuredProject && (
        <div className="mb-16">
          <FeaturedVideoCard project={featuredProject} />
        </div>
      )}

      {/* ─── Video Grid ─── */}
      <div className="mb-8 text-right">
        <h2 className="text-2xl font-bold text-text-white">مشاريع أخرى</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherProjects.map((project, index) => (
          <VideoCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
