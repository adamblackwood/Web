export default function BrandSystemCard({ title, children }) {
  return (
    <div className="bg-bg-card border border-border rounded-2xl p-8 md:p-10 flex flex-col text-right h-full">
      <h3 className="text-xs font-semibold text-text-muted tracking-[0.2em] uppercase mb-8">
        {title}
      </h3>
      <div className="flex-1 flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}
