"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { ArrowUpRight, Briefcase, Users, Clock, Award } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";

// ─── Data ───
const STATS = [
  { icon: Briefcase, value: 150, suffix: "+", label: "مشروع منجز" },
  { icon: Users, value: 80, suffix: "+", label: "عميل سعيد" },
  { icon: Clock, value: 5, suffix: "+", label: "سنوات خبرة" },
  { icon: Award, value: 12, suffix: "", label: "جائزة تصميم" },
];

const PROJECTS = [
  {
    title: "تصميم هوية بصرية",
    category: "التصميم الجرافيكي",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
  },
  {
    title: "تطبيق تتبع اللياقة",
    category: "تصميم واجهات UI/UX",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
  },
  {
    title: "حملة إعلانية رقمية",
    category: "التسويق الرقمي",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
  },
];

const SERVICES = [
  {
    seq: "01",
    title: "تصميم واجهات المستخدم",
    description:
      "تصميم واجهات تطبيقات ومواقع جذابة وسهلة الاستخدام، مركّز على تجربة المستخدم وتحقيق أهداف العمل.",
    thumbnail:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&q=80",
  },
  {
    seq: "02",
    title: "تطوير الويب",
    description:
      "بناء مواقع وتطبيقات ويب عصرية وسريعة باستخدام أحدث التقنيات مع ضمان التجاوب الكامل.",
    thumbnail:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&q=80",
  },
  {
    seq: "03",
    title: "الهوية البصرية",
    description:
      "بناء هويات بصرية فريدة تعكس قيم العلامة التجارية وتترك انطباعاً لا يُنسى لدى الجمهور.",
    thumbnail:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
  },
];

// ─── Animations Config ───
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

// ─── Counter Component ───
function AnimatedCounter({ target, suffix }) {
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
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

// ─── Section Wrapper ───
function Section({ id, children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={`py-24 px-6 lg:px-12 ${className}`}
    >
      {children}
    </motion.section>
  );
}

// ═══════════════════════════════════════════
// ─── MAIN PAGE ───
// ═══════════════════════════════════════════
export default function Home() {
  return (
    <div className="relative">
      {/* ─── HERO SECTION ─── */}
      <Section id="hero" className="min-h-screen flex items-center">
        <div className="w-full flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-right space-y-8">
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-4 py-2 text-xs font-semibold tracking-widest text-accent border border-accent/30 rounded-full bg-accent/5 mb-6">
                مطوّر و مصمّم إبداعي
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
            >
              تصاميم تلهم وتحقق{" "}
              <span className="text-accent">النتائج</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-text-muted text-lg md:text-xl max-w-xl leading-relaxed"
            >
              أحوّل الأفكار إلى تجارب رقمية استثنائية تجمع بين الجاذبية البصرية والأداء العالي.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#portfolio"
                className="cta-green-outline flex items-center gap-2 py-3 px-8 rounded-lg text-base font-bold"
              >
                <span>استعرض أعمالي</span>
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 py-3 px-8 rounded-lg text-base font-bold text-text-white bg-white/5 border border-border hover:bg-white/10 transition-colors"
              >
                تواصل معي
              </a>
            </motion.div>
          </div>

          {/* Portrait Image */}
          <motion.div
            variants={fadeInUp}
            className="flex-1 w-full max-w-md md:max-w-none relative"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden border-2 border-border">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="عبدالله نبيل"
                className="w-full h-full object-cover"
              />
              {/* Decorative overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/10 blur-3xl rounded-full" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:left-auto md:-right-4 bg-bg-card border border-border rounded-xl px-5 py-3 shadow-2xl shadow-black/50 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold text-text-white">متاح للعمل الحر</span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ─── STATS SECTION ─── */}
      <Section id="stats">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-bg-card border border-border rounded-2xl p-8 text-right relative overflow-hidden group"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <stat.icon
                size={28}
                className="text-accent mb-4 relative z-10"
              />
              <h3 className="text-4xl md:text-5xl font-extrabold text-text-white mb-2 relative z-10">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-text-muted text-sm font-medium relative z-10">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── FEATURED WORK SECTION ─── */}
      <Section id="portfolio">
        <motion.div variants={fadeInUp} className="flex justify-between items-end mb-12">
          <div>
            <span className="text-accent text-sm font-mono tracking-widest uppercase">
              أعمالي
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-text-white mt-2">
              مشاريع مختارة
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-text-muted hover:text-accent transition-colors">
            <span>مشاهدة الكل</span>
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── SERVICES SECTION ─── */}
      <Section id="services">
        <motion.div variants={fadeInUp} className="text-right mb-12">
          <span className="text-accent text-sm font-mono tracking-widest uppercase">
            خدماتي
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-white mt-2">
            ماذا أقدّم
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── CTA FOOTER SECTION ─── */}
      <Section id="cta_footer" className="pb-32">
        <motion.div
          variants={fadeInUp}
          className="relative bg-bg-card border border-border rounded-3xl p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Background Decorative Blurs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-text-white leading-tight">
              مستعد لتحويل <br className="hidden md:block" />
              <span className="text-accent">فكرتك إلى واقع؟</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              دعنا نتعاون معاً لبناء تجربة رقمية تتجاوز التوقعات وتحقق أهدافك بامتياز.
            </p>
            <a
              href="#contact"
              className="cta-green-outline inline-flex items-center gap-3 py-4 px-10 rounded-lg text-lg font-bold"
            >
              <span>ابدأ مشروعك الآن</span>
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
