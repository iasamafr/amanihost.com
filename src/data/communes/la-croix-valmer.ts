import type { Commune } from '../types';
import { pagesStandard, faqStandard } from '../modele';

// TEXTES À RELIRE PAR SIMON ET ROMÉO AVANT MISE EN LIGNE
// Commune opérée par AmaniHost : statut « partenaire ».
const nom = 'La Croix-Valmer';
const a = 'à La Croix-Valmer';

const commune: Commune = {
  slug: 'la-croix-valmer',
  nom,
  secteur: 'golfe-de-saint-tropez',
  codePostal: '83420',
  statut: 'partenaire',
  aRelire: false,
  marche: { annonces: 596, prixNuitUsd: 348, occupation: 60, source: 'GuestFavorites (ajusté)', periode: 'septembre 2025 à août 2026' },
  simulateur: { semaineHauteSaisonParChambres: { '3': 5500, '4': 7500, '5': 10000, '6': 14000 }, semainesLoueesParDefaut: 10, commission: 0.2 },
  accueil: {
    title: 'Conciergerie de villas à La Croix-Valmer | AmaniHost',
    description: 'Conciergerie de villas à La Croix-Valmer, Gigaro, Sylvabelle : là où AmaniHost est né. Votre concierge gère tout et vient vous rencontrer.',
    h1: 'Conciergerie de villas à La Croix-Valmer',
    chapo: 'C’est ici qu’AmaniHost est né. Nous gérons des villas à La Croix-Valmer chaque été, de Gigaro à Sylvabelle, et nous connaissons chaque chemin de la commune.',
    sections: [
      {
        h2: 'Notre commune',
        paragraphes: [
          'La méthode AmaniHost s’est construite ici, saison après saison : les états des lieux, le contrôle avant chaque arrivée, l’accueil en personne, les comptes rendus aux propriétaires. Confier votre villa à La Croix-Valmer, c’est la confier à l’équipe qui a inventé cette méthode.',
        ],
      },
      {
        h2: 'Entre plages et cap Lardier',
        paragraphes: [
          'Gigaro, Sylvabelle, le Vergeron, les sentiers du cap Lardier : La Croix-Valmer offre des plages préservées et une nature protégée, à quelques minutes de Saint-Tropez. Les voyageurs y cherchent le calme, la mer et une belle maison, et beaucoup reviennent chaque été.',
        ],
      },
      {
        h2: 'Des villas familiales très demandées',
        paragraphes: [
          'Les villas de La Croix-Valmer accueillent surtout des familles et des groupes d’amis, à la semaine. Une maison bien préparée, avec piscine et climatisation, se remplit vite pour juillet et août.',
        ],
      },
    ],
  },
  pages: pagesStandard({
    nom, a,
    saison: 'Juillet et août font l’essentiel des revenus, avec un minimum de six nuits en haute saison pour limiter les rotations. Juin et septembre se louent bien aux couples et aux familles sans enfants scolarisés, qui profitent des plages au calme.',
    voyageurs: 'Familles françaises et européennes, groupes d’amis, habitués qui reviennent chaque été. Ils cherchent une maison confortable, au calme, proche des plages de Gigaro ou de Sylvabelle.',
    equipements: 'Piscine et climatisation sont nos deux critères minimums pour une villa : sans eux, une maison se loue mal en été. Viennent ensuite une terrasse ombragée, un espace repas extérieur, une literie de qualité et une bonne connexion internet.',
    vente: 'La Croix-Valmer attire des acquéreurs qui veulent le golfe de Saint-Tropez avec plus de calme et des prix plus accessibles. Un historique de location documenté est un argument solide pour les acheteurs qui veulent louer une partie de l’été.',
  }),
  quartiers: [
    {
      slug: 'gigaro', menu: 'Gigaro',
      title: 'Villas à Gigaro, La Croix-Valmer | AmaniHost',
      description: 'Villa à Gigaro, La Croix-Valmer : plage, cap Lardier, hauteurs avec vue mer. Gestion intégrale par AmaniHost.',
      h1: 'Villas de Gigaro, La Croix-Valmer',
      chapo: 'Au pied du cap Lardier, Gigaro réunit une plage préservée et des villas sur les hauteurs avec vue sur la mer.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'La plage et la vue', paragraphes: ['Les villas des hauteurs de Gigaro comptent parmi les plus demandées de la commune. Leurs accès en pente et leurs grands extérieurs demandent un suivi attentif : c’est ce que nous faisons à chaque séjour.'] }],
    },
    {
      slug: 'sylvabelle', menu: 'Sylvabelle',
      title: 'Villas à Sylvabelle, La Croix-Valmer | AmaniHost',
      description: 'Villa à Sylvabelle, La Croix-Valmer : quartier résidentiel sous les pins, plage à pied. Gestion intégrale par AmaniHost.',
      h1: 'Villas de Sylvabelle, La Croix-Valmer',
      chapo: 'Sous les pins, au bord de la plage de Sylvabelle, un quartier résidentiel très apprécié des familles.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'La plage à pied', paragraphes: ['Aller à la plage sans voiture : c’est l’argument qui remplit ces villas. Nous le mettons en avant dans l’annonce et préparons la maison pour des séjours en famille.'] }],
    },
    {
      slug: 'village-et-hauteurs', menu: 'Village et hauteurs',
      title: 'Villas au village de La Croix-Valmer | AmaniHost',
      description: 'Villa près du village de La Croix-Valmer et sur ses hauteurs : vues sur la mer et les vignes. Gestion intégrale AmaniHost.',
      h1: 'Villas du village et des hauteurs, La Croix-Valmer',
      chapo: 'Autour du village, entre vignes et collines, des villas avec vue sur la mer, à quelques minutes des plages.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'Commerces et vues', paragraphes: ['Proches des commerces et du marché, ces villas plaisent aux voyageurs qui aiment vivre au rythme du village. La vue sur la baie de Cavalaire est leur principal atout.'] }],
    },
  ],
  voisines: [
    {
      slug: 'rayol-canadel', menu: 'Rayol-Canadel',
      title: 'Conciergerie de villas au Rayol-Canadel | AmaniHost',
      description: 'Villa au Rayol-Canadel-sur-Mer : vues spectaculaires, Domaine du Rayol. Gestion intégrale par AmaniHost, depuis La Croix-Valmer.',
      h1: 'Conciergerie de villas au Rayol-Canadel',
      chapo: 'Entre La Croix-Valmer et Le Lavandou, le Rayol-Canadel offre des villas accrochées à la corniche, face aux îles d’Or.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'Une corniche face aux îles', paragraphes: ['Connue pour le Domaine du Rayol et son jardin des Méditerranées, la commune attire des voyageurs en quête de nature et de vues exceptionnelles. Les accès en pente et les escaliers demandent une organisation précise des ménages et des arrivées.'] }],
    },
  ],
  faq: [
    ...faqStandard(nom, a),
    { q: 'Quelles villas acceptez-vous à La Croix-Valmer ?', r: 'Des villas avec piscine et climatisation. Ce sont nos deux critères minimums : sans eux, une maison se loue mal en juillet et en août.' },
    { q: 'Gérez-vous aussi le Rayol-Canadel ?', r: 'Oui. Nous prenons en charge les villas du Rayol-Canadel depuis La Croix-Valmer.' },
  ],
  voisinesReseau: ['cavalaire-sur-mer', 'ramatuelle'],
};

export default commune;
