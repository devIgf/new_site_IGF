import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-crypto-blue to-[#12141C] relative overflow-hidden">
      <div className="text-center mb-16 mx-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
          Localisation
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Vous pouvez nous rendre visite à notre bureau situé à Dakar Sicap Foire en face de l'immeuble <i>KEUR YOFF</i>, juste derrière la station <i>Touba Oil</i>. Nous
          serons ravis de vous accueillir et de discuter de vos besoins en
          solutions informatiques.
        </p>
      </div>
      <div className="h-[450px] flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1754384748403!6m8!1m7!1sFFrIpcbZKHiuf_35ZxOcow!2m2!1d14.74512183595285!2d-17.45909566031823!3f131.9417611682786!4f33.42208374471035!5f0.7820865974627469"
          width="80%%"
          height="100%"
          allowFullScreen
          loading="lazy"
          className="rounded-xl shadow-md border-4"
        ></iframe>
      </div>
    </section>
  );
};

export default CTA;
