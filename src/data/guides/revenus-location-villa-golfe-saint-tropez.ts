import type { Guide } from '../types';

// Le tableau des marchés est généré à partir des fiches communes (src/data/communes/*.ts).
const guide: Guide = {
  slug: 'revenus-location-villa-golfe-saint-tropez',
  title: 'Combien rapporte une villa dans le golfe de Saint-Tropez ?',
  description: 'Prix par nuit, taux d’occupation, prix d’une semaine en été commune par commune : ce que rapporte une villa en location dans le golfe de Saint-Tropez.',
  h1: 'Combien rapporte une villa en location saisonnière dans le golfe de Saint-Tropez ?',
  chapo: 'De Cavalaire à Ramatuelle, le prix d’une semaine en été peut varier du simple au triple pour une villa de même taille. Voici les repères commune par commune, et les critères qui font vraiment le revenu de votre maison.',
  categorie: 'Revenus',
  publie: '2026-10-01',
  misAJour: '2026-10-01',
  lecture: 7,
  sections: [
    {
      h2: 'Les repères du marché, commune par commune',
      paragraphes: [
        'Le tableau ci-dessous réunit, pour chaque commune du golfe, le nombre d’annonces de location saisonnière, le prix moyen par nuit et le taux d’occupation relevés par des outils d’analyse du marché, ainsi que nos repères de prix pour une semaine en haute saison selon le nombre de chambres.',
      ],
      tableauCommunes: true,
    },
    {
      h2: 'Comment lire ces chiffres',
      paragraphes: [
        'Le prix moyen par nuit et le taux d’occupation portent sur toutes les annonces de la commune, appartements compris. Une villa avec piscine se loue nettement plus cher que cette moyenne, mais sur une saison plus courte : l’essentiel de son revenu se joue sur juillet et août.',
        'Les prix d’une semaine en haute saison sont des repères indicatifs, issus de notre expérience de gestion dans le golfe. Ils supposent une villa en bon état, avec piscine, climatisation et extérieurs soignés.',
      ],
    },
    {
      h2: 'Un exemple de calcul',
      paragraphes: [
        'Prenons une villa de 4 chambres à Sainte-Maxime. En haute saison, une semaine se loue autour de 7 000 €. Sur une saison, une villa bien gérée réalise l’équivalent de 9 à 10 semaines de haute saison, en additionnant juillet, août et les semaines de mai, juin et septembre louées moins cher : soit environ 63 000 à 70 000 € de revenus bruts.',
        'De ce montant, il faut retirer la commission de la conciergerie, les charges de la maison (piscine, jardin, électricité, assurance) et les impôts. Le simulateur de chaque commune vous donne une première estimation en deux minutes ; votre concierge la précise après avoir vu la maison.',
      ],
    },
    {
      h2: 'Ce qui fait le revenu d’une villa',
      liste: [
        '<strong>La piscine</strong> : sans piscine, une villa perd une grande partie de sa clientèle estivale.',
        '<strong>La climatisation</strong> dans les chambres : devenue indispensable en juillet et août.',
        '<strong>La vue et les extérieurs</strong> : terrasse, ombre, jardin entretenu, coin repas dehors.',
        '<strong>La distance à la plage</strong> et la possibilité de s’y rendre à pied.',
        '<strong>Le nombre de chambres et de salles de bain</strong> : une salle de bain par chambre fait monter le prix.',
        '<strong>Les avis</strong> : une note élevée remplit les semaines d’avant et d’après-saison.',
        '<strong>La qualité de la gestion</strong> : photos, prix ajustés semaine par semaine, réponse rapide aux demandes, maison impeccable à chaque arrivée.',
      ],
    },
    {
      h2: 'Allonger la saison',
      paragraphes: [
        'Juillet et août ne suffisent plus à faire la différence : ce sont les semaines de mai, juin et septembre qui séparent une villa moyenne d’une villa bien louée. Gassin et Ramatuelle, avec leurs domaines viticoles, ou La Croix-Valmer et ses sentiers du littoral, attirent une clientèle d’arrière-saison qui cherche le calme. Fin septembre, la mer est encore chaude et les restaurants sont ouverts : c’est souvent la meilleure période, de l’aveu même des voyageurs.',
      ],
    },
  ],
  faq: [
    {
      q: 'Combien de semaines se loue une villa dans le golfe de Saint-Tropez ?',
      r: 'Une villa bien gérée réalise en général l’équivalent de 8 à 10 semaines de haute saison sur l’année, en additionnant l’été et les semaines d’avant et d’après-saison louées moins cher.',
    },
    {
      q: 'Quelle commune du golfe rapporte le plus ?',
      r: 'Ramatuelle et Saint-Tropez affichent les prix les plus élevés, mais sur une saison plus courte et avec une clientèle très exigeante. Gassin, Grimaud et La Croix-Valmer offrent un bon équilibre entre prix et durée de saison.',
    },
  ],
  sources: [
    { titre: 'AirROI — données de marché de la location courte durée', url: 'https://www.airroi.com/' },
  ],
  liens: [
    { texte: 'Estimer les revenus de sa villa à Sainte-Maxime', href: '/sainte-maxime/estimation-revenus/' },
    { texte: 'Estimer les revenus de sa villa à Saint-Tropez', href: '/saint-tropez/estimation-revenus/' },
    { texte: 'Estimer les revenus de sa villa à La Croix-Valmer', href: '/la-croix-valmer/estimation-revenus/' },
  ],
};
export default guide;
