import { brandIdentityProjects } from "@/data/brandIdentityProjects";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BrandHero from "@/components/BrandHero";
import BrandSystemCard from "@/components/BrandSystemCard";
import ApplicationCard from "@/components/ApplicationCard";

export async function generateStaticParams() {
  return brandIdentityProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function BrandIdentityDetailPage({ params }) {
  const { slug } = params;
  const project = brandIdentityProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      {/* ─── Back Navigation ─── */}
      <Link
        href="/portfolio/brand-identity"
        className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors mb-16 group"
      >
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        <span className="text-sm font-semibold tracking-wide">العودة للهويات</span>
      </Link>

      {/* ─── Parallax Hero ─── */}
      <BrandHero project={project} />

      {/* ─── The Story (Problem / Solution) ─── */}
      <div className="max-w-5xl mx-auto mb-32 md:mb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="text-right">
            <span className="text-accent text-xs font-mono tracking-[0.3em] uppercase block mb-4">المشكلة</span>
            <h2 className="text-3xl md:text-4xl font-light text-text-white leading-relaxed">
              {project.problem_solved}
            </h2>
          </div>
          <div className="text-right">
            <span className="text-accent text-xs font-mono tracking-[0.3em] uppercase block mb-4">الحل</span>
            <h2 className="text-3xl md:text-4xl font-light text-text-white leading-relaxed">
              {project.what_delivered}
            </h2>
          </div>
        </div>
      </div>

      {/* ─── Brand System Grid ─── */}
      <div className="mb-32 md:mb-48">
        <div className="text-right mb-16">
          <span className="text-accent text-xs font-mono tracking-[0.3em] uppercase block mb-4">النظام البصري</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-white">عناصر الهوية</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Variations */}
          <BrandSystemCard title="الشعار">
            <div className="space-y-8">
              {project.logoVariations.map((logo, i) => (
                <div key={i} className="w-full h-24 bg-white/5 rounded-xl flex items-center justify-center border border-border p-4">
                  {/* Fallback text used for demonstration */}
                  <span className={`text-4xl font-bold text-text-white ${i === 1 ? 'text-text-muted' : ''} ${i === 2 ? 'text-2xl' : ''}`}>
                    {project.brandName.charAt(0)}{i === 2 ? '' : project.brandName.charAt(1)}
                  </span>
                </div>
              ))}
            </div>
          </BrandSystemCard>

          {/* Color Palette */}
          <BrandSystemCard title="الألوان">
            <div className="space-y-6">
              {project.brandColors.map((color, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div 
                    className="w-16 h-16 rounded-2xl shadow-inner border border-border flex-shrink-0 transition-transform hover:scale-110"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <p className="text-lg font-semibold text-text-white">{color.name}</p>
                    <p className="text-sm font-mono text-text-muted tracking-wider">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </BrandSystemCard>

          {/* Typography */}
          <BrandSystemCard title="الخطوط">
            <div className="space-y-8">
              {project.brandFonts.map((font, i) => (
                <div key={i} className="border-b border-border pb-6 last:border-0 last:pb-0">
                  <p className="text-xs text-text-muted mb-2 tracking-wider uppercase">{i === 0 ? 'العناوين' : 'النصوص'}</p>
                  <p className="text-3xl text-text-white" style={{ fontFamily: font }}>{font}</p>
                  <p className="text-xl text-text-muted mt-2" style={{ fontFamily: font }}>
                    {'أبجد هوز حطي كلمن'}
                  </p>
                </div>
              ))}
            </div>
          </BrandSystemCard>
        </div>
      </div>

      {/* ─── Application Mockups ─── */}
      <div className="mb-24">
        <div className="text-right mb-16">
          <span className="text-accent text-xs font-mono tracking-[0.3em] uppercase block mb-4">التطبيقات</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-white">الهوية في الواقع</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.applicationMockups.map((mockup, i) => (
            <ApplicationCard 
              key={i} 
              src={mockup} 
              alt={`${project.brandName} تطبيق`} 
              index={i} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
