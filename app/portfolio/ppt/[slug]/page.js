import { pptProjects } from "@/data/pptProjects";
import { notFound } from "next/navigation";
import { ArrowRight, AlertTriangle, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import SlideShowcaseCard from "@/components/SlideShowcaseCard";

// ─── Generate Static Paths ───
export async function generateStaticParams() {
  return pptProjects.map((project) => ({
    slug: project.slug,
  }));
}

// ─── Page Component ───
export default async function PptProjectDetailPage({ params }) {
  const { slug } = params;
  const projectIndex = pptProjects.findIndex((p) => p.slug === slug);
  const project = pptProjects[projectIndex];

  if (!project) {
    notFound();
  }

  // Navigation Logic
  const prevProject = pptProjects[(projectIndex - 1 + pptProjects.length) % pptProjects.length];
  const nextProject = pptProjects[(projectIndex + 1) % pptProjects.length];

  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      {/* ─── Header ─── */}
      <Link
        href="/portfolio/ppt"
        className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors mb-12 group"
      >
        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
        <span className="text-sm font-semibold">العودة للمعرض</span>
      </Link>

      <div className="mb-16 text-right">
        <span className="inline-block px-4 py-2 text-xs font-semibold tracking-wider text-accent bg-accent/10 rounded-full mb-6">
          {project.category}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-text-white leading-tight">
          {project.title}
        </h1>
      </div>

      {/* ─── 2-Col Problem / Solution ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {/* Problem */}
        <div className="bg-bg-card border border-red-900/30 rounded-2xl p-8 text-right relative overflow-hidden group hover:border-red-900/60 transition-colors">
          <div className="absolute top-0 left-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle size={24} className="text-red-400" />
              <h3 className="text-xl font-bold text-text-white">المشكلة</h3>
            </div>
            <p className="text-text-muted leading-relaxed">{project.problem_solved}</p>
          </div>
        </div>

        {/* Solution */}
        <div className="bg-bg-card border border-accent/30 rounded-2xl p-8 text-right relative overflow-hidden group hover:border-accent/60 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 size={24} className="text-accent" />
              <h3 className="text-xl font-bold text-text-white">الحل</h3>
            </div>
            <p className="text-text-muted leading-relaxed">{project.what_delivered}</p>
          </div>
        </div>
      </div>

      {/* ─── Slides Grid ─── */}
      <div className="mb-8 text-right">
        <span className="text-accent text-sm font-mono tracking-widest uppercase">
          شرائح العرض
        </span>
        <h2 className="text-3xl font-extrabold text-text-white mt-2">
          معاينة التصميم الداخلي
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {project.slides.map((slide, index) => (
          <SlideShowcaseCard key={index} slide={slide} index={index} />
        ))}
      </div>

      {/* ─── Project Navigation ─── */}
      <div className="border-t border-border pt-12 grid grid-cols-2 gap-8">
        <Link
          href={`/portfolio/ppt/${prevProject.slug}`}
          className="group flex items-center gap-4 text-right"
        >
          <ArrowRight size={20} className="text-text-muted group-hover:text-accent transition-colors flex-shrink-0" />
          <div>
            <span className="text-xs text-text-muted uppercase tracking-widest block mb-1">المشروع السابق</span>
            <h4 className="text-lg font-bold text-text-white group-hover:text-accent transition-colors">
              {prevProject.title}
            </h4>
          </div>
        </Link>

        <Link
          href={`/portfolio/ppt/${nextProject.slug}`}
          className="group flex items-center gap-4 text-left"
        >
          <div className="mr-auto">
            <span className="text-xs text-text-muted uppercase tracking-widest block mb-1">المشروع التالي</span>
            <h4 className="text-lg font-bold text-text-white group-hover:text-accent transition-colors">
              {nextProject.title}
            </h4>
          </div>
          <ArrowLeft size={20} className="text-text-muted group-hover:text-accent transition-colors flex-shrink-0" />
        </Link>
      </div>
    </div>
  );
}
