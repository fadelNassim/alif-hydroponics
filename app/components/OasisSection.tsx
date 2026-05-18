import { Thermometer, Cpu, Plug, Sun, Wifi, Shield, type LucideIcon } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import FeatureCard, { type CardColor } from "./ui/FeatureCard";

const features: { icon: LucideIcon; title: string; description: string; color: CardColor }[] = [
  {
    icon: Thermometer,
    title: "Contrôle Climatique Automatisé",
    description:
      "Des capteurs de précision surveilleront en continu la température, l'humidité et le CO₂, ajustant automatiquement les systèmes CVC pour maintenir l'environnement de croissance optimal 24h/24.",
    color: "blue",
  },
  {
    icon: Cpu,
    title: "Irrigation Pilotée par Algorithme",
    description:
      "Notre logiciel analysera les données des capteurs en temps réel pour optimiser les cycles d'eau, prévenir les moisissures et maximiser les taux de germination.",
    color: "purple",
  },
  {
    icon: Plug,
    title: "Conception Plug-and-Play",
    description:
      "L'unité cible sera déployable sur toute surface plane en moins de 48 heures, avec des branchements minimaux : une connexion électrique standard et une arrivée d'eau.",
    color: "orange",
  },
  {
    icon: Sun,
    title: "Intégration Solaire Envisagée",
    description:
      "Un panier de panneaux solaires en option permettra un fonctionnement entièrement hors réseau, idéal pour les fermes isolées ou les régions à réseau instable.",
    color: "yellow",
  },
  {
    icon: Wifi,
    title: "Surveillance IoT à Distance",
    description:
      "Suivre chaque paramètre et gérer les opérations à distance via une interface web et mobile est dans notre feuille de route.",
    color: "green",
  },
  {
    icon: Shield,
    title: "Prevention des Moisissures",
    description:
      "Filtration en surpression, stérilisation UV et systèmes d'alerte précoce pour garantir des lots zéro contamination à chaque cycle — une priorité de conception dès le départ.",
    color: "teal",
  },
];

export default function OasisSection() {
  return (
    <section id="oasis" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="Notre Vision Technique"
          title={
            <>
              Découvrez <span className="text-green-600">Oasis</span>
            </>
          }
          description="Un conteneur hydroponique autonome à climat contrôlé — notre vision pour délivrer un fourrage de qualité constante quelles que soient les conditions extérieures."
        />

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        {/* Container callout */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 lg:p-12 text-white overflow-hidden relative">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-green-500/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-green-400 font-semibold text-sm uppercase tracking-widest mb-3">
                Unité Cible
              </div>
              <h3 className="text-2xl lg:text-3xl font-extrabold mb-4">
                Conteneur Maritime 40 Pieds High-Cube
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Notre design cible repose sur une plateforme standardisée mondialement. L’Oasis pourra être transportée partout, déployée en une nuit et intégrée à l’infrastructure existante de la ferme — c’est la référence vers laquelle notre prototype progresse.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Empreinte", value: "Conteneur 40ft HC" },
                { label: "Production/Jour (cible)", value: "500 – 1 000 kg" },
                { label: "Eau Utilisée (cible)", value: "< 3 L / kg" },
                { label: "Connectivité", value: "WiFi IoT (en dév.)" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-4"
                >
                  <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                    {item.label}
                  </div>
                  <div className="text-white font-bold text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
