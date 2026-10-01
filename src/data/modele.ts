// Pages communes à toutes les rubriques, enrichies de paragraphes propres à chaque commune.
// Chaque commune fournit ses faits locaux : jamais de page identique d'une commune à l'autre.
import type { SousPage } from './types';

export type Local = {
  nom: string;
  a: string; // « à Saint-Tropez », « au Rayol-Canadel »
  saison: string; // la saison locale : quand se font les revenus
  voyageurs: string; // qui vient louer ici
  equipements: string; // ce qui fait louer une villa ici
  vente: string; // le marché de la vente de villas ici
};

const court = (t: string) => (t.length > 60 ? t.replace(' | AmaniHost', '') : t);

export function pagesStandard(l: Local): SousPage[] {
  return [
    {
      slug: 'gestion-locative',
      menu: 'Gestion locative',
      title: court(`Gestion locative saisonnière ${l.a} | AmaniHost`),
      description: `Gestion locative saisonnière de villa ${l.a} : prix, voyageurs, accueil, ménage, linge, entretien. Un concierge AmaniHost sur place.`,
      h1: `Gestion locative saisonnière ${l.a}`,
      chapo: `Confier la gestion de votre villa ${l.a}, c’est confier toute la chaîne de la location à un concierge installé sur place, de l’annonce au départ du dernier voyageur.`,
      projet: 'gestion',
      type: 'formulaire',
      sections: [
        { h2: `La saison ${l.a}`, paragraphes: [l.saison] },
        { h2: 'Qui vient louer', paragraphes: [l.voyageurs] },
        {
          h2: 'Ce que comprend la gestion intégrale',
          paragraphes: [
            'Diffusion et prix ajustés à chaque semaine, sélection des voyageurs, accueil en personne, états des lieux, caution, ménage et linge hôtelier, suivi de la piscine et du jardin, petits travaux, comptes rendus après chaque séjour.',
            'Le détail et la commission figurent dans la proposition écrite que vous remet votre concierge après la visite de la villa.',
          ],
        },
        {
          h2: 'Les obligations à respecter',
          paragraphes: [
            'Depuis le 20 mai 2026, l’enregistrement d’un meublé de tourisme passe par un téléservice national, et le numéro obtenu doit figurer sur chaque annonce. La taxe de séjour est collectée pour la commune. Votre concierge vérifie ces points avant la première réservation.',
          ],
        },
      ],
    },
    {
      slug: 'mettre-sa-villa-en-location',
      menu: 'Mettre sa villa en location',
      title: court(`Louer sa villa ${l.a} : le guide | AmaniHost`),
      description: `Mettre sa villa en location saisonnière ${l.a} : équipements attendus, semaines à louer, démarches. Les conseils de votre concierge AmaniHost.`,
      h1: `Mettre sa villa en location ${l.a}`,
      chapo: `Première saison de location ? Voici ce que les voyageurs attendent d’une villa ${l.a}, et ce qu’il faut préparer avant d’ouvrir le calendrier.`,
      projet: 'location',
      type: 'formulaire',
      sections: [
        { h2: 'Les équipements qui font louer', paragraphes: [l.equipements] },
        {
          h2: 'Choisir ses semaines',
          paragraphes: [
            'Beaucoup de propriétaires gardent une partie de l’été pour eux. La formule la plus rentable consiste souvent à louer juillet et août, les semaines les mieux payées, et à profiter de la villa en juin ou en septembre.',
          ],
        },
        {
          h2: 'Les démarches',
          paragraphes: [
            'Enregistrement du meublé via le téléservice national, numéro affiché sur les annonces, taxe de séjour, assurance adaptée à la location saisonnière. La fiscalité des revenus locatifs a évolué récemment : faites le point avec votre expert-comptable.',
          ],
        },
      ],
    },
    {
      slug: 'estimation-revenus',
      menu: 'Estimer ses revenus',
      title: court(`Estimer les revenus de sa villa ${l.a}`),
      description: `Simulateur gratuit : estimez ce que votre villa ${l.a} peut rapporter en location saisonnière, commission de gestion déduite. Résultat immédiat.`,
      h1: `Combien peut rapporter votre villa ${l.a} ?`,
      chapo: 'Une première estimation en quelques clics, à partir du nombre de chambres et des semaines louées en été. Votre concierge l’affine lors de la visite.',
      type: 'simulateur',
      projet: 'gestion',
      sections: [
        {
          h2: 'Ce que l’estimation prend en compte',
          paragraphes: [
            'Le calcul part d’un prix de semaine en haute saison selon la taille de la villa, multiplié par le nombre de semaines louées, puis retire la commission de gestion. La vue, l’emplacement exact et la qualité des prestations peuvent faire varier fortement le résultat : c’est ce que votre concierge regarde lors de la visite.',
          ],
        },
      ],
    },
    {
      slug: 'vendre-sa-villa',
      menu: 'Vendre sa villa',
      title: court(`Vendre sa villa ${l.a} | AmaniHost`),
      description: `Vous envisagez de vendre votre villa ${l.a} ? Décrivez votre bien : nous vous orientons vers un professionnel de l’immobilier local.`,
      h1: `Vendre sa villa ${l.a}`,
      chapo: 'Une villa louée avec un historique de réservations se valorise mieux auprès des acquéreurs qui veulent continuer à la louer.',
      type: 'formulaire',
      projet: 'vente',
      sections: [
        { h2: `Le marché ${l.a}`, paragraphes: [l.vente] },
        {
          h2: 'L’historique locatif, un argument de vente',
          paragraphes: [
            'Pour un acquéreur, des revenus de location documentés rendent le prix plus facile à justifier. Rassemblez les relevés de réservations, les charges et les avis voyageurs des dernières saisons avant de lancer la vente.',
          ],
        },
      ],
    },
  ];
}

export function faqStandard(nom: string, a: string) {
  return [
    {
      q: `Qui gère ma villa ${a} ?`,
      r: `Le concierge AmaniHost de ${nom}, un entrepreneur installé sur place et formé à la méthode AmaniHost. C’est votre seul interlocuteur, du premier rendez-vous aux comptes rendus.`,
    },
    {
      q: 'Le premier rendez-vous est-il payant ?',
      r: 'Non. Votre concierge vient visiter la villa et vous remet une proposition écrite, sans engagement. Vous décidez ensuite.',
    },
    {
      q: 'Combien coûte la gestion de ma villa ?',
      r: 'Une commission sur les revenus locatifs, précisée par écrit dans la proposition remise après la visite, sans frais cachés. Elle couvre la gestion intégrale de votre villa.',
    },
  ];
}
