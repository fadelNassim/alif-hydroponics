import SectionHeader from "./ui/SectionHeader";

// ─── Temperature line chart data ────────────────────────────────────────────
// viewBox "0 0 520 160" — chart area: x 40→510, y 5→140
// Temp range 12–30°C  →  y(t) = 5 + (30 − t) × 7.5
// Optimal band: 18–24°C  →  y=50 (top) … y=95 (bottom)

const REACTIVE_POINTS =
  "40,72 60,65 79,35 99,128 118,65 138,20 158,136 177,65 197,50 216,20 236,128 255,65 275,72 295,42 314,120 334,57 353,20 373,136 393,65 412,35 432,120 451,57 471,72 491,65 510,72";

const PREDICTIVE_POINTS =
  "40,72 79,65 118,72 158,80 197,72 236,65 275,72 314,65 353,72 393,80 432,72 471,65 510,72";

const X_LABELS = ["0h", "4h", "8h", "12h", "16h", "20h", "24h"];

// ─── Energy bar chart data ───────────────────────────────────────────────────
// 12 two-hour blocks; values in kWh; max used for % scaling
const ENERGY_IOT = [4.2, 5.8, 6.5, 3.2, 5.5, 7.1, 3.1, 6.2, 7.0, 3.5, 5.8, 5.2];
const ENERGY_AI  = [2.8, 3.1, 3.0, 2.9, 3.0, 3.2, 2.8, 3.0, 3.1, 2.9, 3.0, 2.9];
const ENERGY_MAX = 7.5;
const BLOCK_LABELS = ["0h","2h","4h","6h","8h","10h","12h","14h","16h","18h","20h","22h"];

const savingPct = Math.round(
  ((ENERGY_IOT.reduce((a, b) => a + b, 0) - ENERGY_AI.reduce((a, b) => a + b, 0)) /
    ENERGY_IOT.reduce((a, b) => a + b, 0)) *
    100,
);

export default function AISection() {
  return (
    <section id="ai" className="py-24 lg:py-32 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="Intelligence Artificielle"
          badgeColor="blue"
          dark
          title={
            <>
              Oasis Apprend à{" "}
              <span className="text-emerald-400">Anticiper</span>
            </>
          }
          description="Un système IoT seul réagit après coup — la température monte, le système corrige, puis sur-corrige. L'IA prédit les dérives avant qu'elles surviennent et ajuste l'énergie de manière préventive, éliminant les compensations coûteuses."
        />

        {/* ── Architecture diagram ─────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-6 mb-14">
          {/* Without AI */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              IoT sans IA — Réactif
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { label: "Capteurs", sub: "Temp · Hum · CO₂", color: "bg-slate-700 border-slate-600" },
                null,
                { label: "Actionneur", sub: "CVC / Irrigation", color: "bg-slate-700 border-slate-600" },
              ].map((node, i) =>
                node === null ? (
                  <div key={i} className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-full h-px bg-red-500/60 relative">
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-red-400 text-xs whitespace-nowrap">
                        seuil dépassé →
                      </span>
                    </div>
                  </div>
                ) : (
                  <div
                    key={node.label}
                    className={`rounded-xl border ${node.color} px-4 py-3 text-center min-w-[90px]`}
                  >
                    <div className="font-bold text-sm text-white">{node.label}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{node.sub}</div>
                  </div>
                ),
              )}
            </div>
            <div className="mt-6 space-y-2">
              {[
                "Détection tardive des dérives",
                "Sur-correction → compensations énergétiques",
                "Cycles chauffage/refroidissement inutiles",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* With AI */}
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              IoT avec IA — Prédictif
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { label: "Capteurs", sub: "Temp · Hum · CO₂", color: "bg-slate-800 border-slate-600" },
                null,
                { label: "Modèle IA", sub: "Prédiction & Adapt.", color: "bg-emerald-900/60 border-emerald-600/50" },
                null,
                { label: "Actionneur", sub: "CVC / Irrigation", color: "bg-slate-800 border-slate-600" },
              ].map((node, i) =>
                node === null ? (
                  <div key={i} className="flex items-center flex-1 min-w-[20px]">
                    <div className="w-full h-px bg-emerald-500/50" />
                    <svg className="w-3 h-3 text-emerald-500 flex-shrink-0 -ml-1" viewBox="0 0 10 10" fill="currentColor">
                      <polygon points="0,2 10,5 0,8" />
                    </svg>
                  </div>
                ) : (
                  <div
                    key={node.label}
                    className={`rounded-xl border ${node.color} px-3 py-3 text-center min-w-[80px]`}
                  >
                    <div className="font-bold text-sm text-white">{node.label}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{node.sub}</div>
                  </div>
                ),
              )}
            </div>
            <div className="mt-6 space-y-2">
              {[
                "Anticipation des dérives avant qu'elles surviennent",
                "Ajustement progressif → zéro compensation",
                "Réduction de la consommation énergétique",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Charts ──────────────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Chart 1 — Temperature line chart (SVG) */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4">
              <h3 className="font-bold text-white text-base">Température sur 24h</h3>
              <p className="text-slate-400 text-xs mt-1">Déviation par rapport à la zone optimale (18–24 °C)</p>
            </div>
            {/* Legend */}
            <div className="flex gap-5 mb-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <span className="w-6 h-0.5 bg-red-400 inline-block rounded" />
                IoT sans IA
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="w-6 h-0.5 bg-emerald-400 inline-block rounded" />
                IoT avec IA
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className="w-4 h-3 bg-emerald-900/40 border border-emerald-700/40 inline-block rounded-sm" />
                Zone optimale
              </div>
            </div>
            <svg viewBox="0 0 520 160" className="w-full" aria-hidden="true">
              {/* Y-axis gridlines */}
              {[20, 50, 95, 140].map((y) => (
                <line key={y} x1={40} y1={y} x2={510} y2={y} stroke="rgba(148,163,184,0.12)" strokeWidth={1} />
              ))}
              {/* Optimal zone band */}
              <rect x={40} y={50} width={470} height={45} fill="rgba(16,185,129,0.1)" rx={2} />
              <text x={512} y={54} fill="rgb(52,211,153)" fontSize={8} dominantBaseline="hanging">24°C</text>
              <text x={512} y={91} fill="rgb(52,211,153)" fontSize={8}>18°C</text>
              {/* Reactive line */}
              <polyline
                points={REACTIVE_POINTS}
                fill="none"
                stroke="rgb(248,113,113)"
                strokeWidth={1.8}
                strokeLinejoin="round"
              />
              {/* Predictive line */}
              <polyline
                points={PREDICTIVE_POINTS}
                fill="none"
                stroke="rgb(52,211,153)"
                strokeWidth={2}
                strokeLinejoin="round"
              />
              {/* X-axis */}
              <line x1={40} y1={145} x2={510} y2={145} stroke="rgba(148,163,184,0.25)" strokeWidth={1} />
              {X_LABELS.map((lbl, i) => {
                const x = 40 + i * (470 / 6);
                return (
                  <text key={lbl} x={x} y={155} textAnchor="middle" fill="rgb(100,116,139)" fontSize={9}>
                    {lbl}
                  </text>
                );
              })}
              {/* Y-axis label */}
              <text x={6} y={72} fill="rgb(100,116,139)" fontSize={8} transform="rotate(-90,6,72)" textAnchor="middle">
                Température (°C)
              </text>
            </svg>
          </div>

          {/* Chart 2 — Energy bar chart (CSS) */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="font-bold text-white text-base">Consommation Énergétique</h3>
                <p className="text-slate-400 text-xs mt-1">kWh par tranche de 2h — sur une journée type</p>
              </div>
              <div className="text-right flex-shrink-0 ml-4">
                <div className="text-2xl font-extrabold text-emerald-400">−{savingPct} %</div>
                <div className="text-xs text-slate-500">économie avec IA</div>
              </div>
            </div>
            {/* Legend */}
            <div className="flex gap-5 mb-4">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <span className="w-3 h-3 rounded-sm bg-slate-500 inline-block" />
                IoT sans IA
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="w-3 h-3 rounded-sm bg-emerald-500 inline-block" />
                IoT avec IA
              </div>
            </div>
            {/* Bars */}
            <div className="flex items-end gap-1 h-40">
              {ENERGY_IOT.map((val, i) => (
                <div key={i} className="flex-1 h-full flex items-end gap-0.5">
                  {/* IoT bar */}
                  <div
                    className="flex-1 rounded-t bg-slate-500/70 transition-all"
                    style={{ height: `${(val / ENERGY_MAX) * 100}%` }}
                    title={`IoT: ${val} kWh`}
                  />
                  {/* AI bar */}
                  <div
                    className="flex-1 rounded-t bg-emerald-500 transition-all"
                    style={{ height: `${(ENERGY_AI[i] / ENERGY_MAX) * 100}%` }}
                    title={`IA: ${ENERGY_AI[i]} kWh`}
                  />
                </div>
              ))}
            </div>
            {/* X labels */}
            <div className="flex gap-1 mt-1">
              {BLOCK_LABELS.map((lbl, i) => (
                <div key={i} className="flex-1 text-center text-slate-500" style={{ fontSize: "9px" }}>
                  {lbl}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom callout */}
        <div className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.575 1.399a1.125 1.125 0 01-1.55-.065l-2.1-2.1m0 0l-2.1-2.1m2.1 2.1l2.1 2.1" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Développement en cours — Phase 3</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Le modèle prédictif sera entraîné sur les données collectées lors du déploiement pilote (phase 3). L&apos;objectif est une réduction mesurable des compensations énergétiques CVC dès la première année d&apos;exploitation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
