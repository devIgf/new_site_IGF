import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Hero = () => {
  const [showFullText, setShowFullText] = useState(false);

// Les services essentiels (ce qui est visible par défaut)
const part1 = `Nous proposons des services complets : gestion d'entreprise,
développement de logiciels sur mesure, paie, comptabilité, RH, et formation.`;

// Les détails de l'accompagnement (le "Lire la suite" - la partie complémentaire)
const part2 = `Notre équipe accompagne nos clients dans l'intégration comptable, 
le développement web et mobile, et la mise en place de solutions cloud 
sécurisées avec assistance en temps réel.`;

// Le texte complet construit à partir des deux parties (utilisez un saut de ligne ou un espace)
const fullDescription = `${part1} ${part2}`;

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero hero-glow">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-crypto-purple/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-crypto-light-purple/10 rounded-full filter blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 animate-fade-in-left pt-5 sm:pt-0 md:pt-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              <span className="text-gradient">
                IGF est une entreprise informatique partenaire agréé Sage100 et
                fournisseur de solutions Odoo.
              </span>
            </h1>

            {/* Texte initial et conditionnel avec bouton */}
            <p className="text-base md:text-lg text-gray-300 mb-6 max-w-lg">
              {/* Afficher la première partie */}
              {part1}

              {/* Afficher la deuxième partie seulement si showFullText est vrai */}
              {showFullText && (
                <>
                  <br />
                  {part2}
                </>
              )}
            </p>

            {/* Le bouton "Voir plus/Voir moins" */}
            <button
              onClick={toggleText}
              className="text-sm font-semibold text-blue-400 hover:text-blue-300 mb-6 focus:outline-none"
            >
              {showFullText ? "Voir moins" : "Voir plus"}
            </button>

            <div className="mt-8 flex items-center space-x-6">
              <div>
                <p className="text-2xl font-bold text-white">+ 10ans</p>
                <p className="text-sm text-gray-400">D'expérience</p>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div>
                <p className="text-2xl font-bold text-white">+ 50</p>
                <p className="text-sm text-gray-400">Clients satisfaits</p>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div>
                <p className="text-2xl font-bold text-white">+130</p>
                <p className="text-sm text-gray-400">Global Markets</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-in-right">
            <div className="relative max-w-md mx-auto animate-float">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&h=800"
                alt="Trading platform dashboard"
                className="rounded-xl shadow-2xl border border-white/10"
              />
              <div className="absolute -right-6 -bottom-6 bg-crypto-purple/20 backdrop-blur-md rounded-lg p-4 border border-crypto-purple/30 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Rendement</p>
                    <p className="text-lg font-bold text-green-500">+12.34%</p>
                  </div>
                </div>
              </div>
              <div className="absolute -left-6 -top-6 bg-crypto-purple/20 backdrop-blur-md rounded-lg p-4 border border-crypto-purple/30 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-crypto-purple/20 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-crypto-purple"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Securisez vos</p>
                    <p className="text-lg font-bold text-white">Données</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
