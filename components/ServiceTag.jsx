export default function ServiceTag({ label }) {
  return (
    <span className="inline-block px-5 py-2 rounded-full border border-border text-text-muted text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-300 cursor-default">
      {label}
    </span>
  );
}
