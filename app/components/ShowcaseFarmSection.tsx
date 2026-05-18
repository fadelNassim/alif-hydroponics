import { TrendingUp, BarChart3, RefreshCw } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import ProgressBar from "./ui/ProgressBar";

const metrics = [
  {
    label: "Réduction du Coût de l'Alimentation",
    farm: "62 %",
    traditional: "0 %",
    farmColor: "bg-green-500",
    tradColor: "bg-gray-300",
    farmWidth: "w-[62%]",
    tradWidth: "w-full",
  },
  {
    label: "Consommation d'Eau (L/kg de fourrage)",
    farm: "< 3 L",
    traditional: "250 L",
    farmColor: "bg-green-500",
    tradColor: "bg-red-400",
    farmWidth: "w-[3%]",
    tradWidth: "w-full",
  },
  {
    label: "Empreinte Foncière",
    farm: "1 conteneur",
    traditional: "2+ hectares",
    farmColor: "bg-green-500",
    tradColor: "bg-orange-400",
    farmWidth: "w-[5%]",
    tradWidth: "w-full",
  },
];

const healthMarkers = [
  { label: "Score de Condition Corporelle", improvement: "+18%", description: "Meilleures réserves de graisse et qualité du pelage" },
  { label: "Production Laitière", improvement: "+24%", description: "Fourrage frais à plus haute densité nutritive" },
  { label: "Santé Digestive", improvement: "+31%", description: "Réduction des ballonnements et incidents digestifs" },
  { label: "Taux de Prise de Poids", improvement: "+22%", description: "Croissance saine plus rapide chez les jeunes animaux" },
];

export default function ShowcaseFarmSection() {
  return (
    <section id="showcase-farm" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="Recherche & Prototype"
          title={
            <>
              Prototype Validé :{" "}
              <span className="text-green-600">Objectifs Mesurables</span>
            </>
          }
          description="Notre prototype ESP32-S3 valide les principes du contrôle hydroponique automatisé. Les métriques présentées sont des projections fondées sur la littérature scientifique publiée sur le fourrage hydroponique d&apos;orge."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Livestock performance */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl">
                Performance du Bétail
              </h3>
            </div>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Les recherches indépendantes sur l’alimentation des ruminants au fourrage hydroponique d’orge montrent des améliorations mesurables sur les principaux indicateurs de santé — ce sont les résultats que nous visons pour les éleveurs partenaires.
            </p>
            <div className="space-y-5">
              {healthMarkers.map((marker) => (
                <ProgressBar
                  key={marker.label}
                  label={marker.label}
                  displayValue={marker.improvement}
                  percentage={parseInt(marker.improvement, 10)}
                  description={marker.description}
                />
              ))}
            </div>
          </div>

          {/* Resource metrics comparison */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl">
                Comparaison des Ressources
              </h3>
            </div>
            <div className="flex items-center gap-5 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                <span className="text-gray-600">Système Oasis (Cible)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-300 inline-block" />
                <span className="text-gray-600">Ranch Traditionnel</span>
              </div>
            </div>
            <div className="space-y-7">
              {metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    {m.label}
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Ferme Oasis</span>
                        <span className="font-semibold text-green-600">{m.farm}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className={`${m.farmColor} ${m.farmWidth} h-3 rounded-full min-w-[8px]`} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Ranch Traditionnel</span>
                        <span className="font-semibold text-red-500">{m.traditional}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className={`${m.tradColor} ${m.tradWidth} h-3 rounded-full`} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closed-loop story */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 lg:p-12 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <RefreshCw className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-xl">Le Système en Boucle Fermée</h3>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Le Prototype Contrôle l'Environnement",
                desc: "Notre ESP32-S3 pilote déjà la température, l’humidité et l’irrigation sur un module de germination maison.",
              },
              {
                step: "02",
                title: "Les Données Guident le Design",
                desc: "Chaque cycle de germination génère des données (taux de germination, consommation d’eau, croissance) qui affinent notre conception de l’unité conteneurisée.",
              },
              {
                step: "03",
                title: "La Vision : le Conteneur Nourrit la Ferme",
                desc: "Une fois l’unité conteneurisée construite, elle livrera chaque matin du fourrage d’orge frais directement au bétail, fermé le cycle production–alimentation.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-4xl font-extrabold text-white/20 mb-2">
                  {item.step}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-green-100/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
