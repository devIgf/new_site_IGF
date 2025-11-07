import { features } from "../data/featuresData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArrowLeft = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} bg-gray-800/60 text-white w-10 h-10 rounded-full shadow`}
      onClick={onClick}
      aria-label="Previous slide"
    >
      ‹
    </button>
  );
};

const ArrowRight = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} bg-gray-800/60 text-white w-10 h-10 rounded-full shadow`}
      onClick={onClick}
      aria-label="Next slide"
    >
      ›
    </button>
  );
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <ArrowLeft />,
  nextArrow: <ArrowRight />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const Features = () => {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-crypto-blue to-[#12141C]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Nos Services
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
           Optimisez l'impossible. Nous vous apportons une expertise complète, couvrant l'intégralité de vos besoins critiques : de la gestion d'entreprise et du développement de logiciels sur mesure, jusqu'à la paie, la comptabilité et les RH. Bénéficiez de solutions Cloud ultra-sécurisées et d'une assistance en temps réel pour une performance sans faille.
          </p>
        </div>

        <div className="w-full">
          <Slider {...settings}>
            {features.map((f, idx) => (
              <div key={idx} className="px-2">
                <div className="bg-white/5 backdrop-blur-sm border border-[#229b8b] rounded-xl p-6 h-60 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#229b8b]  flex items-center justify-center text-white">
                      {f.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {f.title}
                    </h3>
                  </div>
                  <p className="text-white/90">{f.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Features;
