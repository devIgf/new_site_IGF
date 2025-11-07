import AubiLogo from "../assets/AUBI_logo.png";
import BaeaubaLogo from "../assets/BaEauBab_Sénégal_logo.png";
import BME from "../assets/Bara_Mboup_Electronics_(BME)_logo.png";
import Codex from "../assets/Codex.png";
import Confisen from "../assets/confisene.png";
import DPA from "../assets/DPA.png";
import Fary from "../assets/fary_institute_logo.png";
import GVA from "../assets/GVA.png";
import JahOil from "../assets/JahOil.png";
import Neptune from "../assets/neptune.png";
import Oumou from "../assets/oumou_logo.png";
import Performance from "../assets/performance.png";
import TitanOil from "../assets/titan_oil_logo.png";
import Touba from "../assets/touba_oil_logo.png";
import Vialogistique from "../assets/vialogistics_logo.png";

export interface LogoItem {
  name: string;
  logo: string; // Le chemin ou l'objet de l'image importée
}

export const logoClients: LogoItem[] = [
  {
    name: "AUBI",
    logo: AubiLogo,
  },
  {
    name: "BaEauBab Sénégal",
    logo: BaeaubaLogo,
  },
  {
    name: "Bara Mboup Electronics (BME)",
    logo: BME,
  },
  {
    name: "Codex",
    logo: Codex,
  },
  {
    name: "Confisen",
    logo: Confisen,
  },
  {
    name: "DPA",
    logo: DPA,
  },
  {
    name: "Fary Industries",
    logo: Fary,
  },
  {
    name: "GVA",
    logo: GVA,
  },
  {
    name: "Jah Oil",
    logo: JahOil,
  },
  {
    name: "Neptune",
    logo: Neptune,
  },
  {
    name: "Oumou",
    logo: Oumou,
  },
  {
    name: "Performance",
    logo: Performance,
  },
  {
    name: "Titan Oil",
    logo: TitanOil,
  },
  {
    name: "Touba Oil",
    logo: Touba,
  },
  {
    name: "Vialogistique",
    logo: Vialogistique,
  },
];
