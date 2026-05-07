import { Thermometer, Cpu, Plug, Sun, Wifi, Shield } from "lucide-react";

const features = [
  {
    icon: Thermometer,
    title: "Contrôle Climatique Automatisé",
    description:
      "Des capteurs de précision surveillent en continu la température, l'humidité et le CO₂, ajustant automatiquement les systèmes CVC pour maintenir l'environnement de croissance optimal 24h/24.",
    color: "blue",
  },
  {
    icon: Cpu,
    title: "Irrigation Pilotée par l'IA",
    description:
      "Notre logiciel propriétaire analyse les données des capteurs en temps réel pour optimiser les cycles d'eau, prévenir les moisissures et maximiser les taux de germination.",
    color: "purple",
  },
  {
    icon: Plug,
    title: "Conception Plug-and-Play",
    description:
      "Déployable sur toute surface plane en moins de 48 heures. Branchements minimaux requis : une connexion électrique standard et une arrivée d'eau.",
    color: "orange",
  },
  {
    icon: Sun,
    title: "Intégration Solaire",
    description:
      "Un panier de panneaux solaires en option permet un fonctionnement entièrement hors réseau, idéal pour les fermes isolées ou les régions à réseau instable.",
    color: "yellow",
  },
  {
    icon: Wifi,
    title: "Surveillance IoT à Distance",
    description:
      "Suivez chaque paramètre, recevez des alertes et gérez les opérations depuis n'importe où via notre application mobile — compatible iOS et Android.",
    color: "green",
  },
  {
    icon: Shield,
    title: "Prévention des Moisissures",
    description:
      "Filtration en surpression, stérilisation UV et systèmes d'alerte précoce pilotés par l'IA pour garantir des lots zéro contamination à chaque cycle.",
    color: "teal",
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-100" },
  purple: { bg: "bg-purple-50", icon: "text-purple-600", border: "border-purple-100" },
  orange: { bg: "bg-orange-50", icon: "text-orange-600", border: "border-orange-100" },
  yellow: { bg: "bg-yellow-50", icon: "text-yellow-600", border: "border-yellow-100" },
  green: { bg: "bg-green-50", icon: "text-green-600", border: "border-green-100" },
  teal: { bg: "bg-teal-50", icon: "text-teal-600", border: "border-teal-100" },
};

export default function SmartBoxSection() {
  return (
    <section id="smart-box" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
            La Technologie
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Découvrez la{" "}
            <span className="text-green-600">Smart-Box</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Un conteneur hydroponique autonome à climat contrôlé qui délivre
            un fourrage de qualité constante quelles que soient les conditions
            extérieures — bourré de technologies qui travaillent à votre place.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map(({ icon: Icon, title, description, color }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className={`rounded-2xl border ${c.border} p-7 hover:shadow-lg transition-shadow group bg-white`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-6 h-6 ${c.icon}`} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>

        {/* Container callout */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 lg:p-12 text-white overflow-hidden relative">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-green-500/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-green-400 font-semibold text-sm uppercase tracking-widest mb-3">
                Unité Standard
              </div>
              <h3 className="text-2xl lg:text-3xl font-extrabold mb-4">
                Conteneur Maritime 40 Pieds High-Cube
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Construit sur une plateforme standardisée mondialement, notre
                Smart-Box peut être transportée partout, déployée en une nuit et
                intégrée à l&apos;infrastructure existante de la ferme sans effort majeur.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Empreinte", value: "Conteneur 40ft HC" },
                { label: "Production/Jour", value: "500 – 1 000 kg" },
                { label: "Eau Utilisée", value: "< 3 L / kg" },
                { label: "Connectivité", value: "App Mobile IoT" },
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
