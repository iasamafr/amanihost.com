import type { Commune } from '../types';
import { pagesStandard, faqStandard } from '../modele';

// TEXTES À RELIRE PAR SIMON ET ROMÉO AVANT MISE EN LIGNE
const nom = 'Grimaud';
const a = 'à Grimaud';

const commune: Commune = {
  slug: 'grimaud',
  nom,
  secteur: 'golfe-de-saint-tropez',
  codePostal: '83310',
  statut: 'mise-en-relation',
  aRelire: true,
  marche: { annonces: 817, prixNuitUsd: 401, occupation: 35, source: 'AirROI', periode: '12 mois glissants, septembre 2026' },
  simulateur: { semaineHauteSaisonParChambres: { '3': 7000, '4': 9500, '5': 13000, '6': 17000 }, semainesLoueesParDefaut: 9, commission: 0.2 },
  accueil: {
    title: 'Conciergerie de villas à Grimaud | AmaniHost',
    description: 'Conciergerie de villas à Grimaud, Port Grimaud et Beauvallon : votre concierge AmaniHost gère tout. Il vient vous rencontrer, sans engagement.',
    h1: 'Conciergerie de villas à Grimaud',
    chapo: 'Le village médiéval, les maisons sur l’eau de Port Grimaud, les villas de Beauvallon : Grimaud réunit plusieurs marchés en une commune. Votre concierge AmaniHost connaît chacun d’eux.',
    sections: [
      {
        h2: 'Trois Grimaud en un',
        paragraphes: [
          'Le village perché et ses collines, Port Grimaud avec ses maisons au bord des canaux, Beauvallon et ses villas face au golfe : chaque partie de la commune a ses voyageurs et ses contraintes. Votre concierge les adapte à votre maison.',
        ],
      },
      {
        h2: 'Port Grimaud, une location à part',
        paragraphes: [
          'La cité lacustre imaginée par François Spoerry dans les années 1960 attire des voyageurs qui veulent vivre au bord de l’eau, parfois avec un amarrage devant la maison. La gestion d’une maison de Port Grimaud demande de connaître le règlement de la cité, l’accès réservé et la gestion des bateaux.',
        ],
      },
      {
        h2: 'Au fond du golfe, tout est proche',
        paragraphes: [
          'Grimaud est à mi-chemin entre Sainte-Maxime et Saint-Tropez. Les voyageurs rayonnent facilement dans tout le golfe, ce qui rend les villas de la commune très demandées par les familles.',
        ],
      },
    ],
  },
  pages: pagesStandard({
    nom, a,
    saison: 'Juillet et août font l’essentiel des revenus, à la semaine. Port Grimaud et Beauvallon se louent aussi au printemps et en septembre, en particulier aux amateurs de bateau et de golf.',
    voyageurs: 'Familles, amateurs de bateau, golfeurs, voyageurs étrangers fidèles au golfe. Beaucoup apprécient de pouvoir rejoindre Saint-Tropez par la mer ou par la route sans y loger.',
    equipements: 'Piscine et climatisation pour les villas, bon équipement de cuisine et extérieurs agréables partout. À Port Grimaud, l’amarrage et la terrasse sur l’eau sont les premiers critères ; à Beauvallon, la vue sur le golfe et la proximité de la plage.',
    vente: 'Grimaud offre plusieurs marchés : maisons de Port Grimaud, villas de Beauvallon, propriétés des collines. Un historique de location documenté facilite la vente, surtout auprès d’acquéreurs étrangers.',
  }),
  quartiers: [
    {
      slug: 'port-grimaud', menu: 'Port Grimaud',
      title: 'Maisons à Port Grimaud | AmaniHost',
      description: 'Maison sur l’eau à Port Grimaud : amarrage, règlement de la cité, voyageurs plaisanciers. Gestion intégrale par votre concierge AmaniHost.',
      h1: 'Maisons de Port Grimaud',
      chapo: 'Des maisons au bord des canaux, souvent avec amarrage : une location recherchée qui a ses propres règles.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'Une cité, un règlement', paragraphes: ['Accès réservé, stationnement, usage des quais : la vie à Port Grimaud est encadrée. Votre concierge informe les voyageurs, gère les badges et veille au respect des règles de la cité.'] }],
    },
    {
      slug: 'beauvallon', menu: 'Beauvallon',
      title: 'Villas à Beauvallon, Grimaud | AmaniHost',
      description: 'Villa à Beauvallon, Grimaud : vue sur le golfe, golf, plages. Gestion intégrale par votre concierge AmaniHost.',
      h1: 'Villas de Beauvallon, Grimaud',
      chapo: 'Face à Saint-Tropez, Beauvallon réunit des villas avec vue sur le golfe, entre la mer et le golf.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'La vue sur Saint-Tropez', paragraphes: ['Les villas de Beauvallon se louent pour leur vue et leur accès rapide à la mer. Votre concierge met en valeur ces atouts et prépare chaque séjour avec le même soin.'] }],
    },
    {
      slug: 'village-de-grimaud', menu: 'Le village',
      title: 'Villas au village de Grimaud | AmaniHost',
      description: 'Villa autour du village médiéval de Grimaud : collines, calme et vues. Gestion intégrale par votre concierge AmaniHost.',
      h1: 'Villas du village et des collines, Grimaud',
      chapo: 'Autour du village médiéval et de son château, des villas dans les collines, au calme, avec des vues sur le golfe.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'Le calme au-dessus du golfe', paragraphes: ['Ces villas attirent les familles qui veulent de l’espace et du calme. Les extérieurs et la piscine sont leur principal atout : votre concierge en assure le suivi pendant toute la saison.'] }],
    },
  ],
  voisines: [
    {
      slug: 'cogolin', menu: 'Cogolin',
      title: 'Conciergerie de villas à Cogolin | AmaniHost',
      description: 'Villa à Cogolin, au cœur du golfe de Saint-Tropez : gestion intégrale par votre concierge AmaniHost de Grimaud.',
      h1: 'Conciergerie de villas à Cogolin',
      chapo: 'Voisine de Grimaud, Cogolin offre des villas au cœur du golfe, entre la ville, ses marines et la campagne.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'Au cœur du golfe', paragraphes: ['Cogolin, connue pour son artisanat du tapis et de la pipe, est au centre de tout : plages, Saint-Tropez, Grimaud. Les villas de la commune se louent aux familles qui veulent rayonner dans le golfe à un prix plus accessible.'] }],
    },
  ],
  faq: [
    ...faqStandard(nom, a),
    { q: 'Gérez-vous les maisons de Port Grimaud ?', r: 'Oui. Votre concierge connaît le règlement de la cité, la gestion des accès et des amarrages, et prépare les voyageurs à ces règles avant leur arrivée.' },
    { q: 'Ma villa est à Cogolin. Pouvez-vous la gérer ?', r: 'Oui. Le concierge AmaniHost de Grimaud prend aussi en charge les villas de Cogolin.' },
  ],
  voisinesReseau: ['sainte-maxime', 'gassin', 'saint-tropez'],
};

export default commune;
