import type { Commune } from '../types';
import { pagesStandard, faqStandard } from '../modele';

// TEXTES À RELIRE PAR SIMON ET ROMÉO AVANT MISE EN LIGNE
const nom = 'Saint-Tropez';
const a = 'à Saint-Tropez';

const commune: Commune = {
  slug: 'saint-tropez',
  nom,
  secteur: 'golfe-de-saint-tropez',
  codePostal: '83990',
  statut: 'mise-en-relation',
  aRelire: true,
  marche: { annonces: 867, prixNuitUsd: 545, occupation: 34, source: 'AirROI', periode: '12 mois glissants, septembre 2026' },
  simulateur: { semaineHauteSaisonParChambres: { '3': 10000, '4': 14000, '5': 19000, '6': 26000 }, semainesLoueesParDefaut: 8, commission: 0.2 },
  accueil: {
    title: 'Conciergerie de villas à Saint-Tropez | AmaniHost',
    description: 'Conciergerie de villas à Saint-Tropez : votre concierge AmaniHost gère tout, des voyageurs à l’entretien. Il vient vous rencontrer, sans engagement.',
    h1: 'Conciergerie de villas à Saint-Tropez',
    chapo: 'Une villa à Saint-Tropez attire une clientèle parmi les plus exigeantes du monde. Votre concierge AmaniHost vit ici, connaît les quartiers, les accès et les artisans, et prend en charge toute la gestion de votre maison.',
    sections: [
      {
        h2: 'Une clientèle qui ne pardonne rien',
        paragraphes: [
          'À Saint-Tropez, les voyageurs paient le prix d’un palace et attendent le même niveau : une maison parfaite à l’arrivée, quelqu’un pour les accueillir, une réponse immédiate au moindre souci. Une villa mal tenue se voit dans les avis dès la première semaine.',
          'C’est là que la gestion fait la différence : un contrôle complet avant chaque arrivée, un concierge qui se déplace, des artisans qui interviennent vite en pleine saison.',
        ],
      },
      {
        h2: 'Les contraintes d’ici, gérées sur place',
        paragraphes: [
          'Une seule route d’accès, des embouteillages légendaires en été, des chemins privés dans les collines, des copropriétés aux règles strictes : la logistique d’une villa tropézienne demande de l’anticipation. Votre concierge organise les arrivées, les ménages et les livraisons en tenant compte de tout cela.',
        ],
      },
      {
        h2: 'Une saison plus longue qu’on ne le croit',
        paragraphes: [
          'Juillet et août font l’essentiel des revenus, mais Saint-Tropez se loue aussi au printemps et à l’automne, en particulier pendant les Voiles de Saint-Tropez, fin septembre et début octobre. Bien gérer, c’est aussi remplir ces semaines-là au bon prix.',
        ],
      },
    ],
  },
  pages: pagesStandard({
    nom, a,
    saison: 'À Saint-Tropez, l’essentiel des revenus d’une villa se fait en juillet et en août, à des prix parmi les plus élevés de France. Les ponts de mai, juin, septembre et les Voiles de Saint-Tropez forment une seconde saison, plus courte mais très recherchée.',
    voyageurs: 'Une clientèle internationale et fortunée : familles qui reviennent chaque été, groupes d’amis, clients d’affaires. Ils réservent tôt les meilleures maisons et attendent un service digne d’un hôtel de luxe.',
    equipements: 'Piscine, climatisation dans toutes les chambres, extérieurs soignés, linge de qualité hôtelière : ce sont des évidences ici. La vue sur le golfe, la proximité des plages à pied ou du village, le stationnement et la discrétion font ensuite la différence de prix.',
    vente: 'Saint-Tropez reste l’un des marchés de villas les plus chers de France, porté par une demande internationale. Une villa qui se loue bien et dont les revenus sont documentés intéresse les acquéreurs qui veulent amortir une partie de leur achat.',
  }),
  quartiers: [
    {
      slug: 'les-salins', menu: 'Les Salins',
      title: 'Villas aux Salins, Saint-Tropez | AmaniHost',
      description: 'Villa aux Salins à Saint-Tropez : calme, plage des Salins, grandes propriétés. Gestion intégrale par votre concierge AmaniHost.',
      h1: 'Villas des Salins, Saint-Tropez',
      chapo: 'À l’est du village, le quartier des Salins réunit de grandes propriétés au calme, autour de la plage du même nom.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'Le calme, à quelques minutes du port', paragraphes: ['Les villas des Salins séduisent les voyageurs qui veulent la tranquillité sans renoncer au village. Les accès sont souvent privés : votre concierge prépare des consignes d’arrivée précises pour chaque maison.'] }],
    },
    {
      slug: 'les-canoubiers', menu: 'Les Canoubiers',
      title: 'Villas aux Canoubiers, Saint-Tropez | AmaniHost',
      description: 'Villa aux Canoubiers à Saint-Tropez : bord de mer, vue sur le golfe, résidences fermées. Gestion intégrale par votre concierge AmaniHost.',
      h1: 'Villas des Canoubiers, Saint-Tropez',
      chapo: 'Face au golfe, les Canoubiers comptent parmi les adresses les plus prisées de Saint-Tropez, souvent en domaine fermé.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'Domaines fermés et règles de copropriété', paragraphes: ['Beaucoup de villas des Canoubiers sont en domaine privé, avec gardiennage et règlement. Votre concierge connaît ces règles et les fait respecter par les voyageurs : badges, horaires, stationnement, bruit.'] }],
    },
    {
      slug: 'village-et-citadelle', menu: 'Village et citadelle',
      title: 'Maisons au village de Saint-Tropez | AmaniHost',
      description: 'Maison ou villa au village de Saint-Tropez, de la Ponche à la citadelle : tout à pied. Gestion intégrale par votre concierge AmaniHost.',
      h1: 'Maisons du village, Saint-Tropez',
      chapo: 'De la Ponche à la citadelle, les maisons du village se louent pour leur emplacement : port, place des Lices et plages à pied.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'Tout à pied, mais une logistique fine', paragraphes: ['Ruelles étroites, livraisons difficiles, stationnement rare : une maison de village demande une organisation précise pour le ménage et le linge. C’est ce que votre concierge prend en charge.'] }],
    },
  ],
  voisines: [],
  faq: [
    ...faqStandard(nom, a),
    { q: 'Pouvez-vous gérer une villa en domaine privé ?', r: 'Oui. Votre concierge connaît le fonctionnement des domaines fermés de Saint-Tropez et applique leur règlement : accès, gardiennage, stationnement, horaires.' },
    { q: 'Ma villa peut-elle se louer hors de l’été ?', r: 'Oui. Les ponts de mai, juin, septembre et les Voiles de Saint-Tropez attirent une clientèle prête à payer pour une belle maison. Votre concierge vous dira quelles semaines ouvrir.' },
  ],
  voisinesReseau: ['ramatuelle', 'gassin', 'grimaud'],
};

export default commune;
