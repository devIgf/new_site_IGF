
import { Button } from "@/components/ui/button";
import { steps } from "../data/howItWorks";


const HowItWorks = () => {
  return (
    <section id="partenaires" className="py-24 bg-gradient-to-b from-[#12141C] to-crypto-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Nos Partenaires 
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
           Démarrez votre collaboration avec nos partenaires de confiance. Ensemble, nous facilitons vos projets et vous ouvrons les portes d'un avenir digital réussi.
          </p>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white/5  backdrop-blur-sm border border-[#229b8b] rounded-xl p-8 animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="absolute -top-4 -left-4 bg-crypto-blue border rounded-md border-[#229b8b] text-[#229b8b] font-bold  text-xl px-3 py-1">
                {step.number}
              </span>
              <div className="bg-crypto-purple/20 rounded-xl w-36 h-24 flex items-center justify-center mb-6 text-[#229b8b]">
                {step.icon}
              </div>
              {/* <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3> */}
              <p className="text-white/90">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
