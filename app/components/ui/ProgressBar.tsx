interface ProgressBarProps {
  label: string;
  /** Display value shown on the right (e.g. "+18%") */
  displayValue: string;
  /** 0-100 fill percentage */
  percentage: number;
  description?: string;
  color?: string;
}

/**
 * Labelled horizontal progress bar with an optional description line below.
 */
export default function ProgressBar({
  label,
  displayValue,
  percentage,
  description,
  color = "bg-green-500",
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, percentage));
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-bold text-slate-900">{displayValue}</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full`}
          style={{ width: `${clamped}%` }}
        />
      </div>
      {description && (
        <p className="text-xs text-gray-400 mt-1">{description}</p>
      )}
    </div>
  );
}
