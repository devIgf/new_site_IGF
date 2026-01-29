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
                Email:{" "}
                <a
                  href="mailto:"
                  className="text-gray-400 hover:text-crypto-purple transition-colors"
                >
                  contacts@igf-sn.com
                </a>
              </span>
            </div>
            <div className="flex space-x-4 mt-3">
              <a
                href="https://www.facebook.com/igf.sarl/"
                target="_blank"
                className="text-gray-400 hover:text-crypto-purple transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://x.com/igf_sarl"
                target="_blank"
                className="text-gray-400 hover:text-crypto-purple transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/igf_sarl/"
                target="_blank"
                className="text-gray-400 hover:text-crypto-purple transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/igf/"
                target="_blank"
                className="text-gray-400 hover:text-crypto-purple transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://wa.me/221770000000" //numéro
                target="_blank"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.56 4.1 1.54 5.82L0 24l6.48-1.52A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.24-6.2-3.48-8.52zm-8.5 17.02c-2.06 0-4.1-.55-5.86-1.52l-.42-.25-3.86.91.95-3.76-.27-.44A9.9 9.9 0 012.1 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.17-7.78c-.28-.14-1.65-.82-1.91-.91-.26-.09-.45-.14-.64.14s-.74.91-.91 1.1c-.17.18-.34.2-.63.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.34.42-.51.14-.17.19-.28.28-.47.09-.18.05-.35-.03-.49-.09-.14-.64-1.54-.88-2.1-.23-.55-.47-.48-.64-.49-.16-.01-.35-.01-.54-.01s-.49.07-.75.35c-.26.28-1 .97-1 .97s-.18.18-.18.44.24.52.28.56c.05.05.5.82.91 1.57.41.75.85 1.57 1.84 2.7 1 1.13 1.77 1.49 2.05 1.66.28.17.49.14.67.09.18-.05.57-.23.91-.47.34-.24 1.12-1.09 1.28-1.33.16-.24.14-.42.09-.47-.05-.05-.28-.09-.53-.23z" />
                </svg>
                <span className="sr-only">WhatsApp</span>
              </a>
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
