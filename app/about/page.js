"use client";

import { motion } from "framer-motion";
import ServiceTag from "@/components/ServiceTag";
import ServiceItem from "@/components/ServiceItem";
import StatItem from "@/components/StatItem";

// ─── Data ───
const SERVICE_TAGS = ["Branding", "Motion", "Data-viz", "UI/UX", "Print"];

const SERVICES = [
  {
    title: "تصميم الهويات البصرية",
    description: "بناء هويات فريدة تعكس جوهر علامتك التجارية وتترك انطباعاً دائماً.",
  },
  {
    title: "الموشن جرافيك والفيديو",
    description: "تحويل الأفكار إلى قصص بصرية متحركة تجذب الانتباه وتوصيل الرسالة بامتياز.",
  },
  {
    title: "تصميم واجهات وتجربة المستخدم",
    description: "تصميم واجهات سلسة وبديهية تضمن تفاعلاً مثالياً وتجربة مستخدم لا تُنسى.",
  },
];

const STATS = [
  { target: 120, suffix: "+", label: "مشروع منجز" },
  { target: 50, suffix: "+", label: "عميل سعيد" },
  { target: 5, suffix: "+", label: "جوائز تصميم" },
  { target: 10, suffix: "+", label: "تعاون دولي" },
];

// ─── Animation Variants ───
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      {/* ─── Hero Split Layout ─── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-32"
      >
        {/* ─── Right Column (Text Content) ─── */}
        <div className="space-y-8 text-right order-2 md:order-1">
          <motion.div variants={fadeInUp}>
            <span className="text-accent text-sm font-mono tracking-widest uppercase">
              عنّي
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-text-white mt-3 leading-tight">
              عبدالله نبيل
            </h1>
            <p className="text-xl text-text-muted mt-2 font-light">
              مصمم جرافيك و مخرج فني
            </p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-text-muted text-lg leading-relaxed"
          >
            أؤمن بأن التصميم ليس مجرد شكل، بل هو أداة استراتيجية لحل المشكلات وبناء العلامات التجارية. أسعى لدمج الجمال البصري مع الأداء الوظيفي لصنع تجارب استثنائية.
          </motion.p>

          {/* Service Tags */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 justify-end">
            {SERVICE_TAGS.map((tag) => (
              <ServiceTag key={tag} label={tag} />
            ))}
          </motion.div>

          {/* Service Items */}
          <motion.div variants={staggerContainer} className="space-y-6 pt-4">
            {SERVICES.map((service, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <ServiceItem {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ─── Left Column (Studio Image) ─── */}
        <motion.div
          variants={fadeInUp}
          className="relative order-1 md:order-2 w-full aspect-[4/5] md:aspect-auto md:h-[650px] rounded-3xl overflow-hidden group"
        >
          {/* Ambient Neon "AN" Background */}
          <div className="absolute inset-0 flex items-center justify-center z-0 opacity-30 group-hover:opacity-40 transition-opacity duration-700">
            <span className="text-[280px] font-extrabold text-accent select-none blur-2xl drop-shadow-2xl">
              AN
            </span>
          </div>

          {/* Studio Image */}
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" 
            alt="عبدالله نبيل في الاستوديو"
            className="relative z-10 w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
          />

          {/* Dark Gradient Overlays */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-bg-main via-transparent to-transparent opacity-70" />
          <div className="absolute inset-0 z-20 bg-gradient-to-l from-transparent to-bg-main/40 opacity-60" />
          
          {/* Border Glow on Hover */}
          <div className="absolute inset-0 z-20 rounded-3xl border border-border group-hover:border-accent/30 transition-colors duration-500 pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* ─── Stats Section ─── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {STATS.map((stat, i) => (
          <motion.div key={i} variants={fadeInUp}>
            <StatItem {...stat} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
