import type { Commune } from '../types';
import { pagesStandard, faqStandard } from '../modele';

// TEXTES À RELIRE PAR SIMON ET ROMÉO AVANT MISE EN LIGNE
const nom = 'Ramatuelle';
const a = 'à Ramatuelle';

const commune: Commune = {
  slug: 'ramatuelle',
  nom,
  secteur: 'golfe-de-saint-tropez',
  codePostal: '83350',
  statut: 'mise-en-relation',
  aRelire: true,
  marche: { annonces: 265, prixNuitUsd: 783, occupation: 63, source: 'GuestFavorites (ajusté)', periode: 'septembre 2025 à août 2026' },
  simulateur: { semaineHauteSaisonParChambres: { '3': 11000, '4': 16000, '5': 22000, '6': 30000 }, semainesLoueesParDefaut: 8, commission: 0.2 },
  accueil: {
    title: 'Conciergerie de villas à Ramatuelle | AmaniHost',
    description: 'Conciergerie de villas à Ramatuelle, de Pampelonne à Camarat : votre concierge AmaniHost gère tout. Il vient vous rencontrer, sans engagement.',
    h1: 'Conciergerie de villas à Ramatuelle',
    chapo: 'Pampelonne, les collines de vignes, le cap Camarat : Ramatuelle concentre certaines des plus belles propriétés du golfe. Votre concierge AmaniHost prend en charge toute leur gestion.',
    sections: [
      {
        h2: 'Des propriétés plus que des villas',
        paragraphes: [
          'À Ramatuelle, beaucoup de maisons sont de vrais domaines : grands terrains, plusieurs bâtiments, piscines à débordement, parfois des vignes. Leur gestion demande plus qu’un ménage entre deux séjours : un suivi régulier des extérieurs, des équipements et des intervenants.',
        ],
      },
      {
        h2: 'La plage de Pampelonne à quelques minutes',
        paragraphes: [
          'La longue plage de Pampelonne et ses clubs font venir chaque été une clientèle internationale qui cherche une maison au calme, loin de l’agitation du port. Ces voyageurs réservent souvent plusieurs semaines, à des prix parmi les plus élevés de France.',
        ],
      },
      {
        h2: 'Un concierge qui connaît les chemins',
        paragraphes: [
          'Chemins de terre, portails, domaines sans adresse précise : arriver dans une villa de Ramatuelle n’est pas toujours simple. Votre concierge accueille les voyageurs, les guide et règle sur place ce qui doit l’être.',
        ],
      },
    ],
  },
  pages: pagesStandard({
    nom, a,
    saison: 'L’essentiel des revenus se fait en juillet et en août, à la semaine. Juin et septembre se louent bien pour les grandes propriétés, notamment pour des familles ou des groupes qui veulent profiter de Pampelonne hors de la foule. Le festival de théâtre de Ramatuelle, début août, ajoute une clientèle culturelle.',
    voyageurs: 'Familles internationales, groupes d’amis, clientèle d’affaires en vacances : ils cherchent l’espace, l’intimité et un service irréprochable. Beaucoup reviennent chaque année dans la même maison quand l’expérience a été parfaite.',
    equipements: 'Grande piscine, climatisation, extérieurs aménagés pour vivre dehors, cuisine d’été, chambres avec salles de bain : à Ramatuelle, ce sont des attentes de base. Le calme, la vue sur la mer ou les vignes et la proximité de Pampelonne font le prix.',
    vente: 'Les grandes propriétés de Ramatuelle forment un marché rare et international. Un historique locatif solide rassure les acquéreurs qui envisagent de louer une partie de l’été.',
  }),
  quartiers: [
    {
      slug: 'pampelonne', menu: 'Pampelonne',
      title: 'Villas à Pampelonne, Ramatuelle | AmaniHost',
      description: 'Villa près de la plage de Pampelonne à Ramatuelle : la demande la plus forte du golfe. Gestion intégrale par votre concierge AmaniHost.',
      h1: 'Villas de Pampelonne, Ramatuelle',
      chapo: 'Derrière la plage de Pampelonne, les villas des pins et des vignes sont les plus demandées du golfe en plein été.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'La plage à pied, la demande au sommet', paragraphes: ['Une villa d’où l’on rejoint Pampelonne à pied se loue en priorité. Votre concierge met cet atout en avant, tout en protégeant la maison : sable, serviettes, piscine et extérieurs sont contrôlés à chaque départ.'] }],
    },
    {
      slug: 'camarat-escalet', menu: 'Camarat et l’Escalet',
      title: 'Villas à Camarat et l’Escalet, Ramatuelle',
      description: 'Villa au cap Camarat ou à l’Escalet, Ramatuelle : nature préservée, criques, grandes vues. Gestion intégrale par votre concierge AmaniHost.',
      h1: 'Villas de Camarat et de l’Escalet, Ramatuelle',
      chapo: 'Au sud de la commune, autour du phare de Camarat et des criques de l’Escalet, des villas isolées dans une nature préservée.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'L’isolement, un luxe qui se prépare', paragraphes: ['Loin des commerces, ces maisons demandent une arrivée préparée : courses, consignes d’accès, numéros utiles. Votre concierge s’en charge pour que les voyageurs n’aient qu’à profiter de la vue.'] }],
    },
    {
      slug: 'village-de-ramatuelle', menu: 'Le village',
      title: 'Maisons au village de Ramatuelle | AmaniHost',
      description: 'Maison ou villa au village perché de Ramatuelle et dans ses collines : charme provençal et vues. Gestion intégrale AmaniHost.',
      h1: 'Maisons du village, Ramatuelle',
      chapo: 'Autour du village perché, des maisons de caractère et des villas dans les collines, avec des vues sur la mer et les vignes.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'Le charme provençal', paragraphes: ['Les voyageurs qui choisissent le village cherchent l’authenticité : pierre, terrasses, marchés. Votre concierge valorise ce caractère dans l’annonce et veille à l’entretien de ces maisons anciennes.'] }],
    },
  ],
  voisines: [],
  faq: [
    ...faqStandard(nom, a),
    { q: 'Pouvez-vous gérer un grand domaine ?', r: 'Oui. Les grandes propriétés de Ramatuelle demandent un suivi régulier des extérieurs, des piscines et des intervenants. Votre concierge coordonne l’ensemble et vous en rend compte.' },
    { q: 'Ma villa est loin de tout. Est-ce un problème pour la louer ?', r: 'Non, c’est souvent ce que recherchent les voyageurs ici. Il faut simplement préparer leur arrivée : accès, courses, consignes. C’est le rôle de votre concierge.' },
  ],
  voisinesReseau: ['saint-tropez', 'gassin', 'la-croix-valmer'],
};

export default commune;
