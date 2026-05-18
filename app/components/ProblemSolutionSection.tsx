import { CloudRain, TrendingUp, Droplets, Sprout, Clock, Sun } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const problems = [
  {
    icon: CloudRain,
    title: "Climat Imprévisible",
    description:
      "Les pluies irrégulières et les événements climatiques extrêmes détruisent les récoltes et laissent le bétail sans fourrage adéquat pendant des mois.",
  },
  {
    icon: TrendingUp,
    title: "Hausse du Coût des Céréales",
    description:
      "Les pressions sur les chaînes d'approvisionnement mondiales et l'inflation ont poussé les prix des aliments traditionnels à des niveaux insoutenables.",
  },
  {
    icon: Droplets,
    title: "Pénurie d'Eau Sévère",
    description:
      "La production fourragère conventionnelle consomme des centaines de litres par kg. L'épuisement des nappes phréatiques menace la viabilité à long terme.",
  },
];

const solutions = [
  {
    icon: Sprout,
    title: "Agriculture en Environnement Contrôlé",
    description:
      "Notre Oasis scellée élimine totalement la dépendance météorologique, produisant un fourrage d'orge luxuriant 365 jours par an, quelles que soient les conditions extérieures.",
  },
  {
    icon: Clock,
    title: "1 kg → 7 kg en 6 Jours",
    description:
      "Nos protocoles de germination propriétaires transforment 1 kg de graines d'orge en 7 kg de fourrage vert riche en nutriments en seulement 6 jours — un multiplicateur de rendement de 7×.",
  },
  {
    icon: Sun,
    title: "< 3 L d'Eau par kg",
    description:
      "La recirculation hydroponique en circuit fermé utilise moins de 3 litres d'eau par kg de fourrage produit, réduisant la consommation jusqu'à 90 % par rapport aux cultures en plein champ.",
  },
];

export default function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="Le Défi & Notre Réponse"
          title={
            <>
              Un Système Défaillant Exige une{" "}
              <span className="text-green-600">Solution Radicale</span>
            </>
          }
          description="Nous comprenons les problèmes des éleveurs modernes. C'est pourquoi nous avons conçu un système qui les rend obsolètes."
        />

        {/* Two-column grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem column */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-red-100 shadow-sm">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-bold mb-8">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Le Problème
            </div>
            <div className="space-y-8">
              {problems.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution column */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 lg:p-10 shadow-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-bold mb-8">
              <span className="w-2 h-2 rounded-full bg-white" />
              La Solution
            </div>
            <div className="space-y-8">
              {solutions.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact bridge */}
        <div className="mt-16 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-10 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { value: "90 %", label: "Moins d'Eau", sub: "vs. agriculture conventionnelle" },
            { value: "7×", label: "Multiplicateur", sub: "conversion graine → fourrage" },
            { value: "365", label: "Jours/An", sub: "production continue" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-green-600">{stat.value}</span>
              <span className="mt-1 text-base font-semibold text-gray-800">{stat.label}</span>
              <span className="text-sm text-gray-400 mt-0.5">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
