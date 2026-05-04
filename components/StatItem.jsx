"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

export default function StatItem({ target, suffix, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, Math.round);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, target, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <div ref={ref} className="text-right p-6 bg-bg-card border border-border rounded-2xl relative overflow-hidden group">
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <h3 className="text-5xl font-extrabold text-accent mb-2 tabular-nums">
          {display}
          {suffix}
        </h3>
        <p className="text-text-muted text-sm font-medium">{label}</p>
      </div>
    </div>
  );
}
