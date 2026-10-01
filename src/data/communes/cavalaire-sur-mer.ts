import type { Commune } from '../types';
import { pagesStandard, faqStandard } from '../modele';

// TEXTES À RELIRE PAR SIMON ET ROMÉO AVANT MISE EN LIGNE
// Commune opérée par AmaniHost : statut « partenaire ».
const nom = 'Cavalaire-sur-Mer';
const a = 'à Cavalaire-sur-Mer';

const commune: Commune = {
  slug: 'cavalaire-sur-mer',
  nom,
  secteur: 'golfe-de-saint-tropez',
  codePostal: '83240',
  statut: 'partenaire',
  aRelire: true,
  marche: { annonces: 858, prixNuitUsd: 219, occupation: 35, source: 'AirROI', periode: '12 mois glissants, septembre 2026' },
  simulateur: { semaineHauteSaisonParChambres: { '3': 4000, '4': 5500, '5': 7500, '6': 10000 }, semainesLoueesParDefaut: 10, commission: 0.2 },
  accueil: {
    title: 'Conciergerie de villas à Cavalaire-sur-Mer | AmaniHost',
    description: 'Conciergerie de villas à Cavalaire-sur-Mer : votre concierge AmaniHost gère tout, de la location à l’entretien. Il vient vous rencontrer, sans engagement.',
    h1: 'Conciergerie de villas à Cavalaire-sur-Mer',
    chapo: 'Une grande baie de sable, un port, des villas familiales sur les collines : Cavalaire est l’une de nos communes depuis le début. Nous y gérons des villas chaque été.',
    sections: [
      {
        h2: 'La station familiale du golfe',
        paragraphes: [
          'Avec sa longue plage de sable en pente douce, Cavalaire attire avant tout des familles. Elles réservent à la semaine, reviennent d’une année sur l’autre et attendent une maison pratique, propre et bien équipée.',
        ],
      },
      {
        h2: 'Des villas sur les collines',
        paragraphes: [
          'Les villas de Cavalaire s’étagent sur les collines qui dominent la baie, avec souvent une vue sur la mer et les îles. Les accès sont parfois raides : votre concierge prépare les voyageurs et organise les ménages en conséquence.',
        ],
      },
      {
        h2: 'Une équipe qui connaît la commune',
        paragraphes: [
          'Nous travaillons à Cavalaire depuis nos débuts, avec La Croix-Valmer. Nous connaissons les quartiers, les artisans et les habitudes des voyageurs : c’est ce qui permet de répondre vite quand quelque chose ne va pas.',
        ],
      },
    ],
  },
  pages: pagesStandard({
    nom, a,
    saison: 'Juillet et août font l’essentiel des revenus, avec des séjours à la semaine. Grâce à son port et à sa plage, Cavalaire se loue aussi en juin et en septembre, à des familles avec de jeunes enfants et à des couples.',
    voyageurs: 'Principalement des familles françaises, belges, suisses et allemandes, souvent fidèles. Elles cherchent une maison avec piscine, proche de la plage et des commerces, pour une ou deux semaines.',
    equipements: 'Piscine et climatisation sont indispensables pour louer en été. Pour les familles, comptent ensuite les chambres séparées, le matériel bébé, un jardin clos et la proximité de la plage.',
    vente: 'Cavalaire offre des prix plus accessibles que le reste du golfe, avec une forte demande de résidences secondaires familiales. Une villa qui se loue bien est un argument concret pour les acquéreurs.',
  }),
  quartiers: [
    {
      slug: 'pardigon', menu: 'Pardigon',
      title: 'Villas à Pardigon, Cavalaire-sur-Mer | AmaniHost',
      description: 'Villa à Pardigon, Cavalaire-sur-Mer : plage, nature préservée, calme. Gestion intégrale par votre concierge AmaniHost.',
      h1: 'Villas de Pardigon, Cavalaire-sur-Mer',
      chapo: 'À l’est de la baie, vers La Croix-Valmer, Pardigon offre une plage préservée et des villas au calme.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'La nature à côté de la ville', paragraphes: ['Les villas de Pardigon combinent le calme et la plage, à quelques minutes du centre de Cavalaire. Un atout fort pour les familles, que nous mettons en avant dans chaque annonce.'] }],
    },
    {
      slug: 'bonporteau', menu: 'Bonporteau',
      title: 'Villas à Bonporteau, Cavalaire-sur-Mer | AmaniHost',
      description: 'Villa à Bonporteau, Cavalaire-sur-Mer : crique, vue mer, hauteurs. Gestion intégrale par votre concierge AmaniHost.',
      h1: 'Villas de Bonporteau, Cavalaire-sur-Mer',
      chapo: 'À l’ouest, vers le Rayol, Bonporteau et ses hauteurs offrent des villas avec vue sur la mer au-dessus d’une petite crique.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'La vue sur la baie', paragraphes: ['Ces villas se louent pour leur vue et leur calme. Les accès en hauteur demandent des consignes d’arrivée précises : votre concierge s’en charge et accueille les voyageurs sur place.'] }],
    },
    {
      slug: 'centre-et-port', menu: 'Centre et port',
      title: 'Location saisonnière centre de Cavalaire | AmaniHost',
      description: 'Villa ou maison près du centre et du port de Cavalaire-sur-Mer : plage et commerces à pied. Gestion intégrale AmaniHost.',
      h1: 'Centre et port, Cavalaire-sur-Mer',
      chapo: 'Près du port et de la grande plage, tout se fait à pied. Les maisons avec extérieur y sont rares et donc recherchées.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'Rare, donc recherché', paragraphes: ['Une maison avec jardin ou piscine près du centre se démarque nettement des appartements voisins. Nous valorisons cet emplacement tout en préservant la tranquillité du voisinage.'] }],
    },
  ],
  voisines: [],
  faq: [
    ...faqStandard(nom, a),
    { q: 'Ma villa est sur les hauteurs. Est-ce un problème ?', r: 'Non, la vue est souvent un atout. Il faut simplement bien préparer les arrivées et les ménages, ce que fait votre concierge.' },
    { q: 'Les familles représentent-elles l’essentiel de la clientèle ?', r: 'Oui, à Cavalaire, les familles sont majoritaires. Une maison adaptée aux enfants (jardin clos, matériel bébé, piscine sécurisée) se loue mieux.' },
  ],
  voisinesReseau: ['la-croix-valmer'],
};

export default commune;
