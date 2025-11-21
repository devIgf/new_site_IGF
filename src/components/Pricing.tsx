import { useState } from "react";
import DG from "../assets/Diop.jpeg";

const directorImage = "../assets/Diop.jpeg";

const directorMessage = {
  name: "Doudoiu Diop",
  title: "Directeur Général",
  message:
    "Chez IGF, notre mission est de simplifier votre transformation digitale en vous offrant des solutions informatiques innovantes (Sage, Odoo) et sur mesure.\n\nNous nous engageons à garantir l'efficacité, la sécurité et la performance de vos systèmes. La confiance de nos partenaires est au cœur de notre expertise.\n\nEnsemble, façonnons un avenir numérique performant pour votre entreprise.",
};

const Pricing = () => {
  return (
    <section className="py-24 bg-[#12141cc3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Mot du Directeur
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Découvrez la vision inspirante de notre Directeur Général, Doudoiu Diop, sur l'engagement d'IGF à transformer votre entreprise grâce à des solutions informatiques innovantes et sur mesure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg">
          {/* Colonne 1 : Image du Directeur */}
          <div className="flex justify-center md:justify-end">
            {/* L'image est un cercle avec une bordure stylisée */}
            <img
              src={DG}
              alt={directorMessage.name}
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-crypto-purple shadow-xl shadow-crypto-purple/20"
            />
          </div>

          {/* Colonne 2 : Mot du Directeur */}
          <div className="p-4 md:p-6">
            {/* <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-300">
              Mot du Directeur
            </h2> */}

            {/* Afficher le message avec des sauts de ligne */}
            {directorMessage.message.split("\n").map((paragraph, index) => (
              <p key={index} className="text-gray-300 mb-3 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-lg font-semibold text-gradient">
                {directorMessage.name}
              </p>
              <p className="text-sm text-gray-400">{directorMessage.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
