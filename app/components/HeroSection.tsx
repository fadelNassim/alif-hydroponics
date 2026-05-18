"use client";

import { Download, Mail, ChevronDown } from "lucide-react";
import { useScrollTo } from "../hooks/useScrollTo";

// Pre-computed blade heights (rows × trays × blades) — 8 blades per tray
const BLADE_HEIGHTS: number[][][] = [
  [[14, 11, 16, 13, 18, 12, 15, 10], [10, 15, 13, 17, 11, 14, 16, 12], [16, 12, 14, 10, 15, 13, 11, 17], [11, 17, 13, 15, 12, 16, 10, 14]],
  [[12, 16, 10, 14, 18, 11, 13, 17], [15, 11, 17, 13, 12, 16, 10, 18], [13, 18, 11, 15, 10, 14, 17, 12], [16, 12, 15, 11, 17, 13, 14, 10]],
  [[10, 14, 17, 12, 15, 13, 11, 16], [17, 11, 13, 16, 10, 15, 12, 18], [14, 16, 12, 18, 13, 11, 15, 10], [12, 15, 11, 13, 17, 14, 16, 10]],
];

export default function HeroSection() {
  const scrollTo = useScrollTo();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

      {/* Decorative background circles */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 rounded-full bg-blue-500/5 blur-3xl" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Fourrage Hydroponique,{" "}
              <span className="text-green-400 whitespace-nowrap">
                365 Jours Par An.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Nous développons un conteneur automatisé qui produira jusqu&apos;à{" "}
              <span className="font-semibold text-white">1 tonne de fourrage frais</span>{" "}
              par jour — une solution 100% algérienne pour sécuriser l’élevage face à la sécheresse et réduire la consommation d&apos;eau de{" "}
              <span className="font-semibold text-white">90 %</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#oasis"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#oasis");
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-green-500 text-white font-semibold text-base hover:bg-green-400 transition-all shadow-lg shadow-green-500/30 hover:shadow-green-400/40 hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                Notre Vision
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
                Rejoindre le Projet
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-14 grid grid-cols-3 gap-6 pt-8">
              {[
                { value: "90 %", label: "Réduction d’eau (cible)" },
                { value: "7×", label: "Ratio Graine/Fourrage" },
                { value: "6 Jours", label: "Cycle de Croissance" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/90 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div className="relative">
            {/* Ambient glow behind the card */}
            <div className="absolute -inset-6 rounded-[3rem] bg-emerald-500/10 blur-3xl pointer-events-none" />

            {/* Outer container shell — industrial metallic */}
            <div
              className="relative rounded-3xl border border-slate-600/60 shadow-2xl shadow-black/70 overflow-hidden"
              style={{ background: "linear-gradient(160deg, #334155 0%, #1e293b 50%, #0f172a 100%)" }}
            >
              {/* Corrugated metal ribbing */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 7px, #94a3b8 7px, #94a3b8 8px)",
                }}
              />

              {/* Container label — visible above the viewport */}
              <div className="px-4 pt-3 pb-1 flex items-center justify-between">
                <span className="text-slate-200 text-xs font-bold uppercase tracking-widest">
                  Conteneur Maritime 40ft Reefer
                </span>
                <span className="text-slate-400 text-xs">12 m × 2,4 m</span>
              </div>

              {/* Interior viewport */}
              <div
                className="mx-3 mb-3 rounded-2xl overflow-hidden aspect-[4/3] relative"
                style={{ background: "linear-gradient(180deg, #020617 0%, #071020 45%, #041a0b 100%)" }}
              >
                {/* Ceiling LED ambient wash */}
                <div
                  className="absolute top-0 inset-x-0 h-20 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(167,139,250,0.35) 0%, rgba(147,197,253,0.18) 50%, transparent 100%)",
                  }}
                />

                {/* Floor moisture reflection */}
                <div
                  className="absolute bottom-0 inset-x-0 h-10 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(16,185,129,0.22), transparent)" }}
                />

                {/* Shelf rows */}
                <div className="absolute inset-0 flex flex-col justify-evenly py-4 px-5">
                  {[0, 1, 2].map((row) => (
                    <div key={row}>
                      {/* LED strip with bloom glow */}
                      <div className="relative h-0.5 mb-2">
                        <div
                          className="absolute inset-x-0 -top-4 h-10 pointer-events-none"
                          style={{
                            background:
                              "radial-gradient(ellipse 100% 120% at 50% 100%, rgba(192,168,255,0.55) 0%, rgba(147,197,253,0.25) 50%, transparent 100%)",
                          }}
                        />
                        <div className="h-full rounded-full bg-gradient-to-r from-violet-400/50 via-white to-violet-400/50" />
                      </div>

                      {/* Tray row */}
                      <div className="flex gap-1.5">
                        {[0, 1, 2, 3].map((tray) => (
                          <div
                            key={tray}
                            className="flex-1 h-9 rounded overflow-hidden relative"
                            style={{
                              background:
                                "linear-gradient(to top, #14532d 0%, #166534 55%, #15803d 100%)",
                            }}
                          >
                            {/* LED colour cast from above */}
                            <div
                              className="absolute inset-0 pointer-events-none"
                              style={{
                                background:
                                  "linear-gradient(to bottom, rgba(192,168,255,0.18) 0%, transparent 55%)",
                              }}
                            />
                            {/* Blades grow upward from soil */}
                            <div className="absolute inset-x-1 bottom-0 flex items-end justify-around">
                              {[...Array(8)].map((_, i) => (
                                <div
                                  key={i}
                                  className="rounded-t-full"
                                  style={{
                                    width: "2px",
                                    height: `${BLADE_HEIGHTS[row][tray][i]}px`,
                                    background:
                                      "linear-gradient(to top, #15803d, #4ade80, #d1fae5)",
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* IoT live badge */}
                <div className="absolute top-3 right-3 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  IoT En Direct
                </div>

                {/* Bottom sensor readout */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-end">
                  <span className="text-emerald-400 text-xs font-mono font-semibold">
                    24°C · 75% RH
                  </span>
                </div>
              </div>
            </div>

            {/* Floating production badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                <span className="text-emerald-600 text-lg">🌾</span>
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
