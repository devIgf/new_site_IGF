import React from "react";
import { Download, Wallet, BarChart4 } from "lucide-react";
import SAGE from "../assets/Sage-100-logo.png"
import ODOO from "../assets/Odoo_logo.png"

export const steps = [
  {
    number: "01",
    icon: <img src={SAGE} alt="SAGE100" className="h-20 w-24" />,
    title: "SAGE100",
    description:
      "IGF est partenaire certifié Sage100 et offre une expertise complète pour le déploiement de ses solutions : comptabilité, gestion commerciale, paie, RH, trésorerie, immobilisations, reporting financier et intégration cloud adaptée aux besoins des entreprises.",
  },
  {
    number: "02",
    icon: <img src={ODOO} alt="ODOO" className="h-20 w-24 p-3 " />,
    title: "ODOO",
    description:
      "Partenaire officiel d'Odoo, IGF accompagne les entreprises dans l'intégration personnalisée de ses modules : CRM, ventes, comptabilité, RH, projets, fabrication, support, etc., pour une mise en œuvre fluide et efficace du système ERP.",
  },
];
