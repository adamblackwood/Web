"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

// ─── Animated Percentage Counter ───
function AnimatedCounter({ target, isInView }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, Math.round);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, target, {
        duration: 1.5,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return <span className="tabular-nums">{display}%</span>;
}

export default function InfographicCard({ project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-bg-card border border-border rounded-2xl p-8 text-right flex flex-col group hover:border-accent/50 transition-colors duration-300"
    >
      {/* ─── Top Icon & Category ─── */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-xs font-medium text-text-muted tracking-wider uppercase">
          {project.category}
        </span>
        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
          <Icon size={22} />
        </div>
      </div>

      {/* ─── Chart Area ─── */}
      <div className="flex-1 flex flex-col items-center justify-center my-4">
        {project.chart_type === "circular" ? (
          <div className="relative w-36 h-36 flex items-center justify-center">
            <svg className="w-full h-full absolute" viewBox="0 0 100 100">
              {/* Background Track */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#222222"
                strokeWidth="8"
              />
              {/* Animated Progress Track */}
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#00D289"
                strokeWidth="8"
                strokeLinecap="round"
                style={{ transformOrigin: "50% 50%", rotate: -90 }}
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: project.percentage / 100 } : { pathLength: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>
            {/* Center Text */}
            <div className="relative z-10 text-3xl font-extrabold text-text-white">
              <AnimatedCounter target={project.percentage} isInView={isInView} />
            </div>
          </div>
        ) : (
          <div className="w-full space-y-4">
            <div className="flex justify-end items-center gap-4">
              <span className="text-3xl font-extrabold text-text-white">
                <AnimatedCounter target={project.percentage} isInView={isInView} />
              </span>
            </div>
            <div className="w-full h-3 bg-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${project.percentage}%` } : { width: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        )}
      </div>

      {/* ─── Title ─── */}
      <h3 className="text-xl font-bold text-text-white mt-6 group-hover:text-accent transition-colors duration-300">
        {project.title}
      </h3>
    </motion.div>
  );
}
