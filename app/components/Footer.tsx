"use client";

import { Leaf } from "lucide-react";
import { useScrollTo } from "../hooks/useScrollTo";

const footerLinks = [
  {
    title: "Entreprise",
    links: [
      { label: "À Propos de Nous", href: "#" },
      { label: "Équipe", href: "#" },
      { label: "Mission & Valeurs", href: "#impact" },
      { label: "Actualités", href: "#" },
    ],
  },
  {
    title: "Technologie",
    links: [
      { label: "Oasis", href: "#oasis" },
      { label: "Spécifications Techniques", href: "#specs" },
      { label: "Documentation", href: "#specs" },
      { label: "Programme Pilote", href: "#contact" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Livre Blanc", href: "#contact" },
      { label: "Ferme Pilote", href: "#showcase-farm" },
      { label: "Subventions Publiques", href: "#impact" },
      { label: "FAQ", href: "#contact" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", href: "#", icon: "📸" },
  { label: "LinkedIn", href: "#", icon: "💼" },
  { label: "YouTube", href: "#", icon: "▶️" },
  { label: "Twitter / X", href: "#", icon: "🐦" },
];

export default function Footer() {
  const scrollTo = useScrollTo();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-green-600 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">Alif Hydroponics</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Des systèmes hydroponiques modulaires qui révolutionnent
              l&apos;alimentation du bétail — durables, automatisés, et résistants
              au changement climatique.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors text-base"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href !== "#") {
                          e.preventDefault();
                          scrollTo(link.href);
                        }
                      }}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} Alif Hydroponics. Tous droits réservés.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Politique de Confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Mentions Légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
