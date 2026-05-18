"use client";

import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { useScrollTo } from "../hooks/useScrollTo";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Problème & Solution", href: "#problem-solution" },
  { label: "Oasis", href: "#oasis" },
  { label: "Feuille de Route", href: "#roadmap" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useScrollTo();
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-lg bg-green-600 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span
              className={`font-bold text-lg tracking-tight transition-colors ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Alif Hydroponics
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-slate-900 hover:bg-slate-100"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="ml-3 px-5 py-2 rounded-full bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition-colors shadow"
            >
              Devenir Partenaire
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white shadow-xl`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="block mt-3 px-4 py-3 rounded-full bg-green-600 text-white text-center font-semibold hover:bg-green-700 transition-colors"
          >
            Devenir Partenaire
          </a>
        </div>
      </div>
    </nav>
  );
}
