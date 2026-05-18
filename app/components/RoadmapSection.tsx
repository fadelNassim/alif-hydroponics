import { CheckCircle, Circle, Clock } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

type PhaseStatus = "done" | "active" | "upcoming";

const phases: {
  id: string;
  status: PhaseStatus;
  period: string;
  title: string;
  description: string;
  milestones: string[];
}[] = [
  {
    id: "01",
    status: "done",
    period: "En cours — 2026",
    title: "Preuve de Concept",
    description:
      "Validation des principes fondamentaux de la culture hydroponique automatisée dans un environnement contrôlé à domicile.",
    milestones: [
      "Prototype maison fonctionnel",
      "Cycles de germination validés (6 jours)",
      "Contrôle automatisé température & humidité",
      "Irrigation programmée en circuit fermé",
    ],
  },
  {
    id: "02",
    status: "active",
    period: "T4 2026",
    title: "Prototype Conteneurisé",
    description:
      "Passage à l'échelle dans un conteneur maritime standard, avec automatisation complète et tests de fiabilité prolongés.",
    milestones: [
      "Intégration dans conteneur 40ft",
      "Système CVC et éclairage automatisés",
      "Tableau de bord de supervision à distance",
      "Tests de charge sur 3 mois",
      "Journalisation fine des consommations énergétiques (base de données d'entraînement IA)",
    ],
  },
  {
    id: "03",
    status: "upcoming",
    period: "2027",
    title: "Pilote Commercial",
    description:
      "Déploiement de la première unité chez un éleveur partenaire pour collecter des données terrain et développer l'IA d'optimisation énergétique en conditions réelles.",
    milestones: [
      "Premier partenaire éleveur identifié",
      "Déploiement et mise en service sur site",
      "Collecte de données de performance réelles",
      "Entraînement du modèle prédictif sur données terrain",
      "IA v1 : anticipation des pics de consommation CVC",
      "Réduction mesurée des compensations énergétiques",
    ],
  },
  {
    id: "04",
    status: "upcoming",
    period: "2028",
    title: "Mise à l'Échelle",
    description:
      "Production en série avec IA énergétique embarquée, réseau de distributeurs et expansion vers d'autres wilayas et marchés régionaux.",
    milestones: [
      "Production de 10 unités / an",
      "IA embarquée : adaptation en temps réel de l'énergie par cycle",
      "Réseau de maintenance et support",
      "Partenariats institutionnels et subventions",
      "Expansion régionale (Maghreb)",
    ],
  },
];

const statusConfig: Record<PhaseStatus, { icon: typeof CheckCircle; bar: string; badge: string; badgeText: string; border: string }> = {
  done: {
    icon: CheckCircle,
    bar: "bg-green-500",
    badge: "bg-green-100",
    badgeText: "text-green-700",
    border: "border-green-200",
  },
  active: {
    icon: Clock,
    bar: "bg-amber-500",
    badge: "bg-amber-100",
    badgeText: "text-amber-700",
    border: "border-amber-200",
  },
  upcoming: {
    icon: Circle,
    bar: "bg-slate-200",
    badge: "bg-slate-100",
    badgeText: "text-slate-500",
    border: "border-slate-200",
  },
};

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Feuille de Route"
          title={
            <>
              Notre Parcours vers{" "}
              <span className="text-green-600">l'Impact</span>
            </>
          }
          description="De la preuve de concept à la mise à l'échelle — voici les étapes clés qui jalonnent notre développement."
        />

        {/* Progress bar summary */}
        <div className="flex items-center gap-3 mb-12 max-w-lg mx-auto">
          {phases.map((phase, i) => (
            <div key={phase.id} className="flex-1 flex flex-col items-center gap-1">
              <div
                className={`h-2 w-full rounded-full ${statusConfig[phase.status].bar}`}
              />
              <span className="text-xs text-gray-400 hidden sm:block">{`Phase ${i + 1}`}</span>
            </div>
          ))}
        </div>

        {/* Phases grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase) => {
            const cfg = statusConfig[phase.status];
            const Icon = cfg.icon;
            return (
              <div
                key={phase.id}
                className={`relative bg-white rounded-3xl p-7 border ${cfg.border} ${
                  phase.status === "active" ? "shadow-lg shadow-amber-100" : "shadow-sm"
                }`}
              >
                {phase.status === "active" && (
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wider shadow">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      En cours
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-4 mt-2">
                  <span className="text-4xl font-extrabold text-gray-100 leading-none">
                    {phase.id}
                  </span>
                  <Icon
                    className={`w-5 h-5 flex-shrink-0 mt-1 ${
                      phase.status === "active"
                        ? "text-amber-500"
                        : phase.status === "done"
                        ? "text-green-500"
                        : "text-slate-300"
                    }`}
                  />
                </div>

                <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold mb-3 ${cfg.badge} ${cfg.badgeText}`}>
                  {phase.period}
                </div>

                <h3 className="font-extrabold text-gray-900 text-lg mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {phase.description}
                </p>

                <ul className="space-y-2">
                  {phase.milestones.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-gray-600">
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          phase.status === "active"
                            ? "bg-amber-500"
                            : phase.status === "done"
                            ? "bg-green-500"
                            : "bg-slate-300"
                        }`}
                      />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
