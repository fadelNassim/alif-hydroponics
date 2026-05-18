import type { ReactNode } from "react";

type BadgeColor = "green" | "blue" | "red";

const badgeStyles: Record<BadgeColor, { light: string; dark: string }> = {
  green: { light: "bg-slate-100 text-slate-600", dark: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25" },
  blue:  { light: "bg-blue-100 text-blue-700",   dark: "bg-blue-500/15 text-blue-400 border border-blue-500/25" },
  red:   { light: "bg-red-100 text-red-600",     dark: "bg-red-500/15 text-red-400 border border-red-500/25" },
};

interface SectionHeaderProps {
  badge: string;
  badgeColor?: BadgeColor;
  title: ReactNode;
  description: string;
  className?: string;
  dark?: boolean;
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
  dark = false,
}: SectionHeaderProps) {
  const badgeClass = dark ? badgeStyles[badgeColor].dark : badgeStyles[badgeColor].light;
  return (
    <div className={`text-center mb-16 ${className}`}>
      <span
        className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${badgeClass}`}
      >
        {badge}
      </span>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight ${
        dark ? "text-white" : "text-gray-900"
      }`}>
        {title}
      </h2>
      <p className={`mt-4 text-lg max-w-2xl mx-auto ${
        dark ? "text-slate-400" : "text-gray-500"
      }`}>{description}</p>
    </div>
  );
}
