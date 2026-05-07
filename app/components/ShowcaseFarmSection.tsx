import { TrendingUp, BarChart3, RefreshCw } from "lucide-react";

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
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
            Preuve de Concept
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            La Ferme Pilote :{" "}
            <span className="text-green-600">Des Résultats Réels</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Notre ferme pilote démontre la Smart-Box en production quotidienne,
            nourrissant un troupeau de moutons sain et générant des données qui
            améliorent continuellement notre logiciel.
          </p>
        </div>

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
              Nos moutons présentent des améliorations mesurables sur les
              principaux indicateurs de santé lors du passage de l&apos;alimentation
              sèche au fourrage Smart-Box — validé par évaluation vétérinaire indépendante.
            </p>
            <div className="space-y-5">
              {healthMarkers.map((marker) => (
                <div key={marker.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-gray-700">
                      {marker.label}
                    </span>
                    <span className="text-sm font-bold text-green-600">
                      {marker.improvement}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{
                        width: `${parseInt(marker.improvement, 10)}%`,
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{marker.description}</p>
                </div>
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
                <span className="text-gray-600">Ferme Smart-Box</span>
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
                        <span>Ferme Smart-Box</span>
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
                title: "Le Conteneur Nourrit la Ferme",
                desc: "La Smart-Box livre chaque matin du fourrage d'orge frais et optimisé en nutriments directement au bétail.",
              },
              {
                step: "02",
                title: "La Ferme Génère des Données",
                desc: "Les capteurs de santé animale et les dossiers vétérinaires suivent la réponse du bétail à chaque lot de fourrage.",
              },
              {
                step: "03",
                title: "Les Données Améliorent le Logiciel",
                desc: "Notre IA intègre les données de performance de la ferme pour affiner les programmes d'irrigation, les niveaux nutritifs et les calendriers de récolte.",
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
