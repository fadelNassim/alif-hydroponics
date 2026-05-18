"use client";

import { useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import FormField from "./ui/FormField";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="Contactez-Nous"
          title={
            <>
              Partenaire de la{" "}
              <span className="text-green-600">Prochaine Génération AgTech</span>
            </>
          }
          description="Que vous soyez agriculteur, investisseur ou évaluateur de subvention gouvernementale, nous serions ravis d'échanger avec vous."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Informations de Contact
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: Mail,
                    label: "E-mail",
                    value: "contact@alif-hydroponics.dz",
                  },
                  {
                    icon: Phone,
                    label: "Téléphone",
                    value: "+213 (0) 5 XX XX XX XX",
                  },
                  {
                    icon: MapPin,
                    label: "Adresse",
                    value: "Ferme Pilote Alif Hydroponics, Algérie",
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                        {label}
                      </div>
                      <div className="text-gray-800 font-medium mt-0.5">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                Liens Utiles
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Biographie de l'Équipe", href: "#" },
                  { label: "Documentation Technique", href: "#specs" },
                  { label: "Instagram (Behind the Scenes)", href: "#" },
                  { label: "LinkedIn", href: "#" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 text-gray-500 hover:text-slate-900 text-sm transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-slate-700 transition-colors" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Message Envoyé !
                </h3>
                <p className="text-gray-500">
                  Merci pour votre intérêt. Notre équipe vous contactera dans les
                  48 heures.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Nom Complet" required>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"
                    />
                  </FormField>
                  <FormField label="E-mail" required>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vous@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"
                    />
                  </FormField>
                </div>

                <FormField label="Organisation / Ferme">
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Nom de votre entreprise ou ferme"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"
                  />
                </FormField>

                <FormField label="Je suis intéressé par" required>
                  <select
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"
                  >
                    <option value="" disabled>
                      Sélectionner une option
                    </option>
                    <option value="pilot">Programme Pilote</option>
                    <option value="whitepaper">Livre Blanc Technique</option>
                    <option value="investment">Opportunité d&apos;Investissement</option>
                    <option value="grant">Évaluation de Subvention</option>
                    <option value="partnership">Partenariat Commercial</option>
                    <option value="other">Autre</option>
                  </select>
                </FormField>

                <FormField label="Message">
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou posez vos questions..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition resize-none"
                  />
                </FormField>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
                >
                  <Send className="w-4 h-4" />
                  Envoyer le Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
