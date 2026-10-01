import type { Commune } from '../types';
import { pagesStandard, faqStandard } from '../modele';

// TEXTES À RELIRE PAR SIMON ET ROMÉO AVANT MISE EN LIGNE
const nom = 'Gassin';
const a = 'à Gassin';

const commune: Commune = {
  slug: 'gassin',
  nom,
  secteur: 'golfe-de-saint-tropez',
  codePostal: '83580',
  statut: 'mise-en-relation',
  aRelire: false,
  marche: { annonces: 417, prixNuitUsd: 422, occupation: 61, source: 'GuestFavorites (ajusté)', periode: 'septembre 2025 à août 2026' },
  simulateur: { semaineHauteSaisonParChambres: { '3': 8000, '4': 11000, '5': 15000, '6': 20000 }, semainesLoueesParDefaut: 9, commission: 0.2 },
  accueil: {
    title: 'Conciergerie de villas à Gassin | AmaniHost',
    description: 'Conciergerie de villas à Gassin, entre Saint-Tropez et Pampelonne : votre concierge AmaniHost gère tout. Il vient vous rencontrer, sans engagement.',
    h1: 'Conciergerie de villas à Gassin',
    chapo: 'Entre Saint-Tropez, Ramatuelle et Cogolin, Gassin offre des villas au calme dans les collines, avec des vues sur tout le golfe. Votre concierge AmaniHost prend en charge toute leur gestion.',
    sections: [
      {
        h2: 'Au centre du golfe',
        paragraphes: [
          'Gassin est la commune d’où tout est proche : Saint-Tropez, les plages de Pampelonne, Cogolin et Grimaud. Pour les voyageurs, c’est un argument fort : une maison au calme, sans renoncer à rien.',
        ],
      },
      {
        h2: 'Un village perché, des collines de vignes',
        paragraphes: [
          'Le village perché, classé parmi les plus beaux villages de France, domine le golfe. Autour, les villas s’étendent dans les collines et les domaines viticoles : de beaux terrains, des vues dégagées, une campagne provençale à quelques minutes de la mer.',
        ],
      },
      {
        h2: 'Des villas qui se louent bien plus longtemps',
        paragraphes: [
          'Moins exposée à l’agitation estivale que Saint-Tropez, Gassin attire aussi des voyageurs au printemps et à l’automne, qui cherchent le calme et le vin plutôt que la plage. Votre concierge aide à remplir ces semaines.',
        ],
      },
    ],
  },
  pages: pagesStandard({
    nom, a,
    saison: 'Juillet et août font la plus grande part des revenus. La position centrale de Gassin et ses domaines viticoles permettent aussi de louer en mai, juin et septembre, à une clientèle qui cherche la Provence plus que la plage.',
    voyageurs: 'Familles qui veulent rayonner dans tout le golfe, groupes d’amis, amateurs de vin et de calme. Ils apprécient de pouvoir rejoindre Saint-Tropez ou Pampelonne en quelques minutes tout en dormant au calme.',
    equipements: 'Piscine, climatisation et extérieurs ombragés sont indispensables. La vue sur le golfe depuis les hauteurs, l’espace et la tranquillité font la valeur d’une villa à Gassin.',
    vente: 'Gassin bénéficie de la notoriété du golfe avec des prix souvent plus accessibles que Saint-Tropez ou Ramatuelle. Une villa bien louée intéresse les acquéreurs qui veulent amortir leur résidence secondaire.',
  }),
  quartiers: [
    {
      slug: 'collines-et-vignes', menu: 'Collines et vignes',
      title: 'Villas dans les collines de Gassin | AmaniHost',
      description: 'Villa dans les collines et les vignes de Gassin : terrain, vue sur le golfe, calme. Gestion intégrale par votre concierge AmaniHost.',
      h1: 'Villas des collines de Gassin',
      chapo: 'Dans les collines et autour des domaines viticoles, des villas avec du terrain et des vues sur le golfe.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'Espace et vue', paragraphes: ['Ces villas se louent pour leur calme et leurs extérieurs. Un jardin et une piscine impeccables sont l’essentiel de leur promesse : votre concierge en assure le suivi tout au long de la saison.'] }],
    },
    {
      slug: 'village-de-gassin', menu: 'Le village',
      title: 'Maisons au village de Gassin | AmaniHost',
      description: 'Maison au village perché de Gassin, face au golfe de Saint-Tropez. Gestion intégrale par votre concierge AmaniHost.',
      h1: 'Maisons du village, Gassin',
      chapo: 'Dans et autour du village perché, des maisons de caractère avec l’une des plus belles vues du golfe.',
      projet: 'gestion', type: 'formulaire',
      sections: [{ h2: 'Une vue rare', paragraphes: ['Le panorama sur le golfe est l’argument principal : il doit être au cœur des photos et de l’annonce. Votre concierge s’en occupe et organise la logistique propre aux ruelles du village.'] }],
    },
  ],
  voisines: [],
  faq: [
    ...faqStandard(nom, a),
    { q: 'Ma villa est dans les vignes, loin de la mer. Se loue-t-elle bien ?', r: 'Oui. Gassin est au centre du golfe : les plages et Saint-Tropez sont à quelques minutes. Beaucoup de voyageurs préfèrent dormir au calme et circuler dans la journée.' },
    { q: 'Peut-on louer hors de l’été à Gassin ?', r: 'Oui, plus facilement qu’au bord de mer. Le printemps et le début de l’automne attirent des voyageurs qui cherchent le calme, le vin et la Provence.' },
  ],
  voisinesReseau: ['saint-tropez', 'ramatuelle', 'grimaud'],
};

export default commune;
