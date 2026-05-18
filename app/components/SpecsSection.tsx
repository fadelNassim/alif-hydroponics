"use client";

import { CheckCircle } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { useScrollTo } from "../hooks/useScrollTo";

const specs = [
  {
    feature: "Capacité de Production",
    value: "500 kg – 1 000 kg de fourrage frais / jour",
    highlight: true,
  },
  {
    feature: "Consommation d'Eau",
    value: "< 3 litres par kg de fourrage produit",
    highlight: false,
  },
  {
    feature: "Empreinte Physique",
    value: "Conteneur maritime standard 40 pieds High-Cube",
    highlight: true,
  },
  {
    feature: "Connectivité",
    value: "IoT activé — Surveillance à distance via application mobile",
    highlight: false,
  },
  {
    feature: "Cycle de Croissance",
    value: "6 jours (graine → fourrage vert prêt à la récolte)",
    highlight: true,
  },
  {
    feature: "Rendement de Conversion",
    value: "7 kg de fourrage pour 1 kg de graine d'orge",
    highlight: false,
  },
  {
    feature: "Contrôle Climatique",
    value: "Capteurs de précision — Température, Humidité, CO₂",
    highlight: true,
  },
  {
    feature: "Système d'Irrigation",
    value: "Hydroponique en circuit fermé, piloté par IA",
    highlight: false,
  },
  {
    feature: "Source d'Énergie",
    value: "Réseau électrique standard ou intégration solaire hors réseau",
    highlight: true,
  },
  {
    feature: "Déploiement",
    value: "Plug-and-play — Opérationnel en moins de 48 heures",
    highlight: false,
  },
  {
    feature: "Réduction de la Consommation d'Eau",
    value: "Jusqu'à 90 % par rapport aux cultures en plein champ",
    highlight: true,
  },
  {
    feature: "Stérilisation",
    value: "Filtration UV + contrôle de pression positive",
    highlight: false,
  },
];

export default function SpecsSection() {
  const scrollTo = useScrollTo();
  return (
    <section id="specs" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="Données Techniques"
          title={
            <>
              Spécifications{" "}
              <span className="text-green-600">Techniques</span>
            </>
          }
          description="Des données précises pour les ingénieurs, les investisseurs et les évaluateurs de subventions. Oasis est conçue selon des standards industriels rigoureux."
        />

        {/* Specs table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wide w-2/5">
                    Caractéristique
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wide w-3/5">
                    Spécification
                  </th>
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, index) => (
                  <tr
                    key={spec.feature}
                    className={`border-b border-gray-50 transition-colors hover:bg-slate-50 ${
                      spec.highlight ? "bg-gray-50/50" : "bg-white"
                    } ${index === specs.length - 1 ? "border-b-0" : ""}`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="font-semibold text-gray-800 text-sm">
                          {spec.feature}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm leading-relaxed">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Download CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Besoin de la documentation complète ?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-green-600 text-white font-semibold text-sm hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
          >
            Demander le Livre Blanc Complet
          </a>
        </div>
      </div>
    </section>
  );
}
