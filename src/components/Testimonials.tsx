import { useState } from "react";
import Marquee from "react-fast-marquee";
import "./LogoSlider.css";
import { logoClients } from "../data/logoClients";

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-crypto-blue to-[#12141C]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Ils nous font confiance
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Plusieurs entreprises ont transformé leur expérience et
            optimisé leur potentiel. C'est le résultat d'une collaboration basée
            sur l'excellence et la confiance mutuelle. <br />{" "}
            <strong>
              La Confiance de l'Industrie. Découvrez les leaders qui s'appuient
              sur notre expertise au quotidien
            </strong>
          </p>
        </div>

        <div className="relative max-w-full mx-auto py-8">
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="py-5 bg-gradient-to-b from-crypto-blue to-[#444858]"
          >
            {logoClients.map((item, i) => (
              <div
                key={i}
                className="mx-6 w-40 h-28 flex items-center justify-center"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
