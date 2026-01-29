import React from 'react';
import { RefreshCw, Calculator, Package, Users, Settings, Shield, Database, Cloud } from 'lucide-react';
export const features = [
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: "Synchronisation et intégrations",
    description: "Synchronisation fluide des données entre Sage, Odoo et vos autres plateformes."
  },
  {
    icon: <Calculator className="h-6 w-6" />,
    title: "Gestion comptable optimisée",
    description: "Suivi fiable de votre comptabilité en temps réel, conforme aux normes en vigueur."
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: "Gestion des stocks centralisée",
    description: "Mise à jour instantanée des niveaux de stock pour éviter les ruptures."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Administration des ressources humaines",
    description: "Suivi intégré des employés, congés et paies pour une gestion RH efficace et automatisée."
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Gestion des opérations intégrée",
    description: "Coordination en temps réel des ventes, achats et processus de production."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Administration système informatique sécurisée",
    description: "Gestion et maintenance de votre infrastructure pour garantir performance et sécurité."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Administration bases de données",
    description: "Optimisation et sécurisation de vos bases de données critiques."
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Solutions Cloud et virtualisation",
    description: "Hébergement sécurisé et accès flexible à vos applications et données."
  }
];
