import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: ReactNode;
}

/**
 * Wraps a form control (input / select / textarea) with a consistent label.
 */
export default function FormField({ label, required, children }: FormFieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label}{" "}
        {required && <span className="text-red-400">*</span>}
      </label>
      {children}
    </div>
  );
}
