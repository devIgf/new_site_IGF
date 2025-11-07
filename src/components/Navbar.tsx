import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LogoIgf from "../assets/igf_logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white/20 ${
        isScrolled
          ? "bg-green-700/30 backdrop-blur-md py-2 shadow-lg"
          : "py-2"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            <img src={LogoIgf} alt="" className="h-14 w-20 rounded " />
          </h1>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center space-x-8">
           <li>
            <a href="#home" className="text-[#229b8b] font-bold hover:text-white transition-colors">
              Home
            </a>
          </li>
          <li>
            <a
              href="#partenaires"
              className="text-[#229b8b] font-bold hover:text-white transition-colors"
            >
              Partenaires
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-[#229b8b] font-bold hover:text-white transition-colors"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#testimonials"
              className="text-[#229b8b] font-bold hover:text-white transition-colors"
            >
              Clients
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="text-[#229b8b] font-bold hover:text-white transition-colors"
            >
              Contact
            </a>
          </li>
          
        </ul>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-crypto-blue/95 backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-lg">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="#partenaires"
                  className="text-[#229b8b] font-bold hover:text-white transition-colors block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Partenaires
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-[#229b8b] font-bold hover:text-white transition-colors block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-[#229b8b] font-bold hover:text-white transition-colors block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-[#229b8b] font-bold hover:text-white transition-colors block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
