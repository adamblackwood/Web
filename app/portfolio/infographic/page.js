"use client";

import { motion } from "framer-motion";
import InfographicCard from "@/components/InfographicCard";
import { infographicProjects } from "@/data/infographicProjects";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function InfographicPortfolioPage() {
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
          لوحة البيانات
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-text-white mt-2"
        >
          معرض الإنفوجرافيك
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted text-lg mt-4 max-w-2xl"
        >
          تحويل البيانات المعقدة إلى قصص بصرية سهلة الفهم وتصاميم إنفوجرافيك تفاعلية
        </motion.p>
      </div>

      {/* ─── Dashboard Grid ─── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {infographicProjects.map((project) => (
          <InfographicCard key={project.id} project={project} />
        ))}
      </motion.div>

      {/* ─── Bottom CTA ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-20 text-center bg-bg-card border border-border rounded-3xl p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-text-white mb-4">
            هل لديك بيانات تحتاج لتوضيح؟
          </h2>
          <p className="text-text-muted max-w-xl mx-auto mb-8">
            دعنا نحوّل أرقامك وبياناتك إلى إنفوجرافيك مبهر يسهل فهمه ويجذب الانتباه
          </p>
          <a
            href="/contact"
            className="cta-green-outline inline-flex items-center justify-center gap-2 py-3 px-8 rounded-lg text-base font-bold"
          >
            ابدأ مشروعك
          </a>
        </div>
      </motion.div>
    </div>
  );
}
