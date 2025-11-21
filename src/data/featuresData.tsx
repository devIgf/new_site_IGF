import React from 'react';
import { RefreshCw, Calculator, Package, Users, Settings, Shield, Database, Cloud } from 'lucide-react';
export const features = [
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: "Synchronisation et intégrations",
    description: " Synchronisation et intégration fluide des données entre Sage100, Odoo et d'autres plateformes, garantissant une cohérence parfaite entre vos systèmes."
  },
  {
    icon: <Calculator className="h-6 w-6" />,
    title: "Gestion comptable optimisée",
    description: "Suivi précis et simplifié de votre comptabilité en temps réel, garantissant fiabilité et conformité avec les normes en vigueur."
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: "Gestion des stocks centralisée",
    description: "Mise à jour instantanée des niveaux de stock pour éviter les ruptures et optimiser vos approvisionnements."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Administration des ressources humaines",
    description: "Suivi intégré des employés, congés et paies pour une gestion RH efficace et automatisée."
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Gestion des opérations intégrée",
    description: "Coordination en temps réel des processus métiers liés aux ventes, achats et production pour une efficacité accrue."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Administration système informatique sécurisée",
    description: "Gestion et maintenance de votre infrastructure informatique pour assurer performance et sécurité optimales."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Administration bases de données",
    description: "Optimisation et sécurisation de vos bases de données pour garantir l'intégrité et la disponibilité des informations critiques."
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Solutions Cloud et virtualisation",
    description: "Hébergement sécurisé et accès flexible à vos applications et données depuis n'importe où et à tout moment."
  }
];
