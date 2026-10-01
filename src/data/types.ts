export type Section = { h2: string; paragraphes: string[] };

export type SousPage = {
  slug: string;
  menu: string; // libellé court dans la navigation
  title: string; // balise title, < 60 caractères
  description: string; // meta description, < 155 caractères
  h1: string;
  chapo: string;
  sections: Section[];
  type?: 'standard' | 'simulateur' | 'formulaire';
  projet?: 'gestion' | 'location' | 'vente';
};

export type Commune = {
  slug: string;
  nom: string;
  secteur: string; // slug du secteur
  codePostal: string;
  // Temps 1 : mise en relation. Temps 2 : partenaire nommé sous la marque.
  statut: 'mise-en-relation' | 'partenaire';
  partenaire?: { nom: string; adresse: string; telephone: string };
  aRelire: boolean; // true tant que Simon n'a pas validé les textes
  marche: {
    annonces: number;
    prixNuitUsd: number;
    occupation: number;
    source: string;
    periode: string;
  };
  // Grille indicative du simulateur, prix d'une semaine en haute saison (EUR)
  simulateur: {
    semaineHauteSaisonParChambres: Record<string, number>;
    semainesLoueesParDefaut: number;
    commission: number; // part prélevée par la conciergerie
  };
  accueil: {
    title: string;
    description: string;
    h1: string;
    chapo: string;
    sections: Section[];
  };
  quartiers: SousPage[];
  voisines: SousPage[];
  pages: SousPage[];
  faq: { q: string; r: string }[];
  voisinesReseau: string[]; // slugs d'autres communes du réseau
};
