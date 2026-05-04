import { CheckCircle } from "lucide-react";

export default function ServiceItem({ title, description }) {
  return (
    <div className="flex gap-4 text-right group">
      <div className="mt-1 flex-shrink-0">
        <CheckCircle size={20} className="text-accent" />
      </div>
      <div>
        <h4 className="text-lg font-bold text-text-white mb-1 group-hover:text-accent transition-colors duration-200">
          {title}
        </h4>
        <p className="text-text-muted text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
