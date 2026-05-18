import type { ReactNode } from "react";

type BadgeColor = "green" | "blue" | "red";

const badgeStyles: Record<BadgeColor, string> = {
  green: "bg-slate-100 text-slate-600",
  blue: "bg-blue-100 text-blue-700",
  red: "bg-red-100 text-red-600",
};

interface SectionHeaderProps {
  badge: string;
  badgeColor?: BadgeColor;
  title: ReactNode;
  description: string;
  className?: string;
}

/**
 * Standard section header: pill badge → h2 → description paragraph.
 * Used by every landing-page section to stay consistent.
 */
export default function SectionHeader({
  badge,
  badgeColor = "green",
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <span
        className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${badgeStyles[badgeColor]}`}
      >
        {badge}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
        {title}
      </h2>
      <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">{description}</p>
    </div>
  );
}
