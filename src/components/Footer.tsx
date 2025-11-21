import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12141C] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              IGF<span className="text-gradient">SARL</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-xs">
              IGF SARL est une entreprise informatique spécialisée dans la
              fourniture de solutions logicielles innovantes et sur mesure pour
              les entreprises de toutes tailles.
            </p>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              IGF<span className="text-gradient">SARL</span>
            </h2>
            <div>
              <span>
                Téléphone:{" "}
                <a
                  href="tel:+221338000000"
                  className="text-gray-400 hover:text-crypto-purple transition-colors"
                >
                  +221 33 864 12 72
                </a>
              </span>
            </div>
            <div>
              <span>
                Email: <a href="mailto:" className="text-gray-400 hover:text-crypto-purple transition-colors">contacts@igf-sn.com</a>
              </span>
            </div>
            <div className="flex space-x-4 mt-3">
              <a
               href="https://www.facebook.com/igf.sarl/" target="_blank"
                className="text-gray-400 hover:text-crypto-purple transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
               href="https://x.com/igf_sarl" target="_blank"
                className="text-gray-400 hover:text-crypto-purple transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/igf_sarl/" target="_blank"
                className="text-gray-400 hover:text-crypto-purple transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/igf/" target="_blank"
                className="text-gray-400 hover:text-crypto-purple transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              {/* <a
                href="#!"
                className="text-gray-400 hover:text-crypto-purple transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; <i>IGF</i> {currentYear}. All rights reserved.{" "}
            </p>
            {/* <div className="flex space-x-6">
              <a
                href="#!"
                className="text-gray-400 hover:text-crypto-purple text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#!"
                className="text-gray-400 hover:text-crypto-purple text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#!"
                className="text-gray-400 hover:text-crypto-purple text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
