import { Shield, Leaf, Lightbulb, Users } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const pillars = [
  {
    icon: Shield,
    color: "blue",
    title: "Sécurité Alimentaire",
    subtitle: "Résilience de la Chaîne d'Approvisionnement Locale",
    description:
      "En produisant du fourrage localement dans des environnements contrôlés, notre système réduit la dépendance aux marchés céréaliers mondiaux volatils et renforce la souveraineté alimentaire nationale.",
    stat: "100%",
    statLabel: "production nationale",
  },
  {
    icon: Leaf,
    color: "green",
    title: "Durabilité",
    subtitle: "Impact Environnemental Mesurable",
    description:
      "Une seule unité Oasis économise environ 85 millions de litres d'eau par an par rapport à une production fourragère conventionnelle équivalente. Notre système en boucle fermée ne génère aucun ruissellement agricole.",
    stat: "85 M L",
    statLabel: "eau économisée / an",
  },
  {
    icon: Lightbulb,
    color: "purple",
    title: "Innovation",
    subtitle: "Emplois Agricoles High-Tech",
    description:
      "Chaque déploiement crée des emplois qualifiés en génie logiciel, agriculture de précision, maintenance IoT et analyse de données — apportant des carrières technologiques de pointe aux communautés rurales.",
    stat: "12+",
    statLabel: "emplois par déploiement",
  },
  {
    icon: Users,
    color: "orange",
    title: "Impact Communautaire",
    subtitle: "Autonomisation des Agriculteurs Locaux",
    description:
      "Notre modèle de franchise et de partenariat permet aux petites et moyennes fermes d'élevage d'accéder à une technologie nutritionnelle de niveau industriel avec un faible investissement en capital.",
    stat: "60 %",
    statLabel: "réduction des coûts pour les éleveurs",
  },
];

const colorMap: Record<string, { bg: string; iconBg: string; icon: string; badge: string; badgeText: string }> = {
  blue: {
    bg: "from-blue-50 to-blue-50/30",
    iconBg: "bg-blue-100",
    icon: "text-blue-700",
    badge: "bg-blue-100",
    badgeText: "text-blue-700",
  },
  green: {
    bg: "from-green-50 to-green-50/30",
    iconBg: "bg-green-100",
    icon: "text-green-700",
    badge: "bg-green-100",
    badgeText: "text-green-700",
  },
  purple: {
    bg: "from-purple-50 to-purple-50/30",
    iconBg: "bg-purple-100",
    icon: "text-purple-700",
    badge: "bg-purple-100",
    badgeText: "text-purple-700",
  },
  orange: {
    bg: "from-orange-50 to-orange-50/30",
    iconBg: "bg-orange-100",
    icon: "text-orange-700",
    badge: "bg-orange-100",
    badgeText: "text-orange-700",
  },
};

export default function ImpactSection() {
  return (
    <section id="impact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="Financement Public & Mission"
          badgeColor="blue"
          title={
            <>
              Une Mission Qui a du Sens :{" "}
              <span className="text-green-600">Au-delà de la Ferme</span>
            </>
          }
          description="Alif Hydroponics n'est pas seulement une entreprise agricole — c'est un projet d'infrastructure nationale pour la sécurité alimentaire, la durabilité environnementale et le développement économique rural."
        />

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {pillars.map(({ icon: Icon, color, title, subtitle, description, stat, statLabel }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className={`bg-gradient-to-br ${c.bg} rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${c.icon}`} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-xl">{title}</h3>
                    <p className={`text-sm font-semibold ${c.icon} mt-0.5`}>{subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>
                <div className="flex items-end gap-2">
                  <span className={`text-3xl font-extrabold ${c.icon}`}>{stat}</span>
                  <span className="text-gray-500 text-sm mb-1">{statLabel}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Grant evaluator callout */}
        <div className="bg-gradient-to-br from-slate-950 to-slate-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-500/10 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
              🏛️ Pour les Évaluateurs de Subvention
            </div>
            <h3 className="text-2xl lg:text-3xl font-extrabold mb-4 max-w-2xl">
              Alif Hydroponics Répond à Tous les Critères d&apos;Innovation de l&apos;État
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                { label: "Alignement ODD", value: "Objectifs 2, 6, 8, 12" },
                { label: "Eau Économisée / An", value: "85 M+ Litres" },
                { label: "Emplois Créés", value: "12+ par Unité" },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 border border-white/15 rounded-2xl p-5">
                  <div className="text-slate-400 text-xs uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-white font-bold text-lg">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
