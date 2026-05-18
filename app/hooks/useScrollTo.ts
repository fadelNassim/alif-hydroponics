"use client";

/**
 * Returns a stable scrollTo helper that smoothly scrolls to any CSS selector,
 * offsetting for the fixed Navbar height.
 */
export function useScrollTo() {
  const scrollTo = (href: string) => {
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return scrollTo;
}
