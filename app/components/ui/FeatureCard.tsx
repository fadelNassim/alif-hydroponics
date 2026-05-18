import type { LucideIcon } from "lucide-react";

export type CardColor = "blue" | "purple" | "orange" | "yellow" | "green" | "teal";

const colorMap: Record<CardColor, { bg: string; icon: string; border: string }> = {
  blue:   { bg: "bg-blue-50",   icon: "text-blue-600",   border: "border-blue-100" },
  purple: { bg: "bg-purple-50", icon: "text-purple-600", border: "border-purple-100" },
  orange: { bg: "bg-orange-50", icon: "text-orange-600", border: "border-orange-100" },
  yellow: { bg: "bg-yellow-50", icon: "text-yellow-600", border: "border-yellow-100" },
  green:  { bg: "bg-green-50",  icon: "text-green-600",  border: "border-green-100" },
  teal:   { bg: "bg-teal-50",   icon: "text-teal-600",   border: "border-teal-100" },
};

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: CardColor;
}

/**
 * Icon feature card with a coloured icon badge, title, and description.
 * Used in grids where each card represents a product feature.
 */
export default function FeatureCard({ icon: Icon, title, description, color }: FeatureCardProps) {
  const c = colorMap[color];
  return (
    <div
      className={`rounded-2xl border ${c.border} p-7 hover:shadow-lg transition-shadow group bg-white`}
    >
      <div
        className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
      >
        <Icon className={`w-6 h-6 ${c.icon}`} />
      </div>
      <h3 className="font-bold text-gray-900 text-lg mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
