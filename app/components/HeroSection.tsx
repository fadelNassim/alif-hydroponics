"use client";

import { Download, Mail, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-900 to-emerald-800" />

      {/* Decorative background circles */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 rounded-full bg-green-500/10 blur-3xl" />
      <div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 rounded-full bg-emerald-400/10 blur-3xl" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #4ade8030 1px, transparent 1px), linear-gradient(to bottom, #4ade8030 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              AgTech de Nouvelle Génération
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              L&apos;Alimentation de Demain :{" "}
              <span className="text-green-400">
                Résistante à la Sécheresse, Automatisée et Durable.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-green-100/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Des systèmes hydroponiques modulaires d&apos;orge fourragère conçus pour
              réduire la consommation d&apos;eau de{" "}
              <span className="font-semibold text-white">90 %</span> et fournir{" "}
              <span className="font-semibold text-white">365 jours</span> de
              nutrition riche en nutriments à votre bétail.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#specs"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#specs");
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-green-500 text-white font-semibold text-base hover:bg-green-400 transition-all shadow-lg shadow-green-500/30 hover:shadow-green-400/40 hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                Livre Blanc Technique
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#contact");
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                Programme Pilote
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-14 grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {[
                { value: "90 %", label: "Réduction d'eau" },
                { value: "7×", label: "Ratio Graine/Fourrage" },
                { value: "6 Jours", label: "Cycle de Croissance" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-green-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-green-200/70 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-800/60 to-emerald-900/60 border border-green-500/20 shadow-2xl p-1">
              {/* Mock container interior visual */}
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-green-950 to-emerald-900 aspect-[4/3] flex items-center justify-center relative">
                {/* LED glow effect */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-purple-500/20 via-blue-400/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green-500/20 to-transparent" />

                {/* Shelf rows simulation */}
                <div className="w-full px-8 space-y-4">
                  {[1, 2, 3].map((row) => (
                    <div key={row} className="relative">
                      {/* LED strip */}
                      <div className="h-1 rounded-full bg-gradient-to-r from-purple-400/60 via-blue-300/80 to-purple-400/60 shadow-[0_0_12px_4px_rgba(167,139,250,0.4)] mb-2" />
                      {/* Barley trays */}
                      <div className="flex gap-2">
                        {[1, 2, 3, 4].map((tray) => (
                          <div
                            key={tray}
                            className="flex-1 h-8 rounded bg-gradient-to-t from-green-700 to-green-500 opacity-90 relative overflow-hidden"
                          >
                            <div className="absolute inset-x-0 top-0 flex justify-around">
                              {[...Array(6)].map((_, i) => (
                                <div
                                  key={i}
                                  className="w-0.5 rounded-full bg-green-300"
                                  style={{ height: `${10 + Math.random() * 10}px` }}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* IoT badge */}
                <div className="absolute top-4 right-4 bg-green-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  IoT En Direct
                </div>
                <div className="absolute bottom-4 left-4 text-green-300/80 text-xs font-medium">
                  Intérieur Smart-Box — Conteneur 40ft HC
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-lg">🌾</span>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">Production Journalière</div>
                <div className="text-sm font-bold text-gray-900">Jusqu&apos;à 1 000 kg</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#problem-solution")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
