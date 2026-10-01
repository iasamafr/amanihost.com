import type { Commune } from '../types';

// TEXTES À RELIRE PAR SIMON AVANT MISE EN LIGNE (aRelire: false)
// Sources marché : AirROI, 12 mois glissants au 12/09/2026.

const commune: Commune = {
  slug: 'sainte-maxime',
  nom: 'Sainte-Maxime',
  secteur: 'golfe-de-saint-tropez',
  codePostal: '83120',
  statut: 'mise-en-relation',
  aRelire: false,
  marche: {
    annonces: 1363,
    prixNuitUsd: 305,
    occupation: 36,
    source: 'AirROI',
    periode: '12 mois glissants, septembre 2026',
  },
  simulateur: {
    // GRILLE INDICATIVE À VALIDER PAR SIMON : prix d'une semaine en juillet-août, villa avec piscine
    semaineHauteSaisonParChambres: { '3': 5000, '4': 7000, '5': 9500, '6': 13000 },
    semainesLoueesParDefaut: 10,
    commission: 0.2,
  },

  accueil: {
    title: 'Conciergerie à Sainte-Maxime pour villas | AmaniHost',
    description:
      "Conciergerie de villas à Sainte-Maxime : votre concierge AmaniHost gère tout, de la location à l’entretien. Il vient vous rencontrer chez vous, sans engagement.",
    h1: 'Conciergerie de villas à Sainte-Maxime',
    chapo:
      "Vous possédez une villa à Sainte-Maxime et vous voulez la louer sans vous en occuper ? Votre concierge AmaniHost vit ici, connaît la ville et ses quartiers, et prend en charge toute la gestion de votre maison.",
    sections: [
      {
        h2: 'Un marché de villas familiales face à Saint-Tropez',
        paragraphes: [
          "Sainte-Maxime fait face à Saint-Tropez, de l'autre côté du golfe. Ses voyageurs cherchent la même lumière et la même mer, avec plus de calme et des plages de sable faciles pour les familles. C'est ce qui fait la force de la location de villas ici : des séjours longs, souvent à la semaine, et une clientèle qui revient.",
          "Le centre et la Croisette sont surtout faits d’appartements. Les villas se trouvent sur les hauteurs du Sémaphore, vers La Nartelle et dans l’arrière-pays : ce sont elles que recherchent les familles et les groupes qui viennent passer une semaine ou deux.",
        ],
      },
      {
        h2: "Ce que la conciergerie prend en charge",
        paragraphes: [
          "La conciergerie crée et optimise vos annonces, fixe les prix selon la saison et les événements du golfe, répond aux voyageurs, organise les arrivées et les départs, puis prépare la villa entre deux séjours : ménage, linge, contrôle de la piscine et du jardin.",
          "Vous recevez un compte rendu régulier des réservations et des revenus. Vous gardez la main sur les périodes où vous occupez la villa.",
        ],
      },
      {
        h2: 'Un concierge qui connaît Sainte-Maxime',
        paragraphes: [
          "Votre concierge sait quelles semaines se louent le mieux, à quel prix, et quels voyageurs viennent à Sainte-Maxime. Il connaît les artisans, les pisciniers, les accès difficiles des collines. Quand un voyageur appelle un samedi d’août, c’est lui qui se déplace.",
        ],
      },
    ],
  },

  pages: [
    {
      slug: 'gestion-locative',
      menu: 'Gestion locative',
      title: 'Gestion locative saisonnière à Sainte-Maxime | AmaniHost',
      description:
        "Gestion locative saisonnière de villa à Sainte-Maxime : tarification, voyageurs, ménage, linge, entretien. Un concierge AmaniHost sur place, gestion intégrale.",
      h1: 'Gestion locative saisonnière à Sainte-Maxime',
      chapo:
        "Déléguer la gestion de sa villa, c'est confier toute la chaîne de la location à une équipe sur place, de l'annonce au départ du dernier voyageur.",
      projet: 'gestion',
      type: 'formulaire',
      sections: [
        {
          h2: 'Une saison courte qui se joue sur les prix',
          paragraphes: [
            "À Sainte-Maxime, l'essentiel des revenus d'une villa se fait entre juin et septembre, avec un pic en juillet et en août. Bien gérer, c'est remplir les semaines de haute saison au bon prix, puis aller chercher les ailes de saison : printemps, ponts de mai, septembre.",
          ],
        },
        {
          h2: 'Ce que comprend une gestion complète',
          paragraphes: [
            "Diffusion sur les plateformes de location et ajustement des prix, échanges avec les voyageurs avant et pendant le séjour, accueil et remise des clés, état des lieux, ménage et linge hôtelier, suivi de la piscine et du jardin, gestion des petits incidents et de la caution.",
            "Le détail et le taux de commission dépendent de la conciergerie et des services choisis. Ils figurent dans la proposition que vous recevez après la visite.",
          ],
        },
        {
          h2: 'Les obligations à respecter',
          paragraphes: [
            "Depuis le 20 mai 2026, l'enregistrement d'un meublé de tourisme passe par un téléservice national, et le numéro obtenu doit figurer sur chaque annonce. La taxe de séjour est collectée pour la commune. Une conciergerie sérieuse vérifie ces points avant la première réservation.",
          ],
        },
      ],
    },
    {
      slug: 'mettre-sa-villa-en-location',
      menu: 'Mettre sa villa en location',
      title: 'Louer sa villa à Sainte-Maxime : le guide | AmaniHost',
      description:
        "Mettre sa villa en location saisonnière à Sainte-Maxime : équipements attendus, saison, prix, démarches. Conseils de votre concierge AmaniHost.",
      h1: 'Mettre sa villa en location à Sainte-Maxime',
      chapo:
        "Première saison de location ? Voici ce que les voyageurs attendent d'une villa à Sainte-Maxime, et ce qu'il faut préparer avant d'ouvrir le calendrier.",
      projet: 'location',
      type: 'formulaire',
      sections: [
        {
          h2: 'Les équipements qui font louer',
          paragraphes: [
            "En été, la piscine et la climatisation sont décisives : une villa sans l'une ou l'autre perd une grande partie de la clientèle de haute saison. Viennent ensuite une terrasse ombragée, un espace repas extérieur, une literie de qualité et une connexion internet fiable pour les séjours longs.",
          ],
        },
        {
          h2: 'Choisir ses semaines',
          paragraphes: [
            "Beaucoup de propriétaires gardent une partie de l'été pour eux. La formule la plus rentable consiste souvent à louer juillet et août, périodes les mieux payées, et à profiter de la villa en juin ou en septembre.",
          ],
        },
        {
          h2: 'Les démarches',
          paragraphes: [
            "Enregistrement du meublé via le téléservice national, affichage du numéro sur les annonces, taxe de séjour, assurance adaptée à la location saisonnière. La fiscalité des revenus locatifs a évolué récemment : faites le point avec votre expert-comptable.",
          ],
        },
      ],
    },
    {
      slug: 'estimation-revenus',
      menu: 'Estimer ses revenus',
      title: 'Estimer les revenus locatifs de sa villa à Sainte-Maxime',
      description:
        "Simulateur gratuit : estimez en 2 minutes ce que votre villa à Sainte-Maxime peut rapporter en location saisonnière, commission de conciergerie déduite.",
      h1: 'Combien peut rapporter votre villa à Sainte-Maxime ?',
      chapo:
        "Une première estimation en quelques clics, à partir du nombre de chambres et du nombre de semaines louées en été. Elle est affinée par la conciergerie lors de la visite.",
      type: 'simulateur',
      projet: 'gestion',
      sections: [
        {
          h2: "Ce que l'estimation prend en compte",
          paragraphes: [
            "Le calcul part d'un prix de semaine en haute saison selon la taille de la villa, multiplié par le nombre de semaines louées, puis retire la commission de la conciergerie. Il ne tient pas compte de la vue, de l'emplacement exact ou de la qualité des prestations, qui peuvent faire varier fortement le résultat.",
          ],
        },
      ],
    },
    {
      slug: 'vendre-sa-villa',
      menu: 'Vendre sa villa',
      title: 'Vendre sa villa à Sainte-Maxime | AmaniHost',
      description:
        "Vous envisagez de vendre votre villa à Sainte-Maxime ? Décrivez votre bien, nous vous mettons en relation avec un professionnel de l'immobilier local.",
      h1: 'Vendre sa villa à Sainte-Maxime',
      chapo:
        "Une villa louée avec un historique de réservations se valorise mieux auprès des acquéreurs qui veulent continuer à la louer. Décrivez votre bien, nous vous orientons vers un professionnel local.",
      type: 'formulaire',
      projet: 'vente',
      sections: [
        {
          h2: "L'historique locatif, un argument de vente",
          paragraphes: [
            "Pour un acquéreur, des revenus de location documentés rendent le prix plus facile à justifier. Rassemblez les relevés de réservations, les charges et les avis voyageurs des dernières saisons avant de lancer la vente.",
          ],
        },
      ],
    },
  ],

  quartiers: [
    {
      slug: 'le-semaphore',
      menu: 'Le Sémaphore',
      title: 'Louer sa villa au Sémaphore, Sainte-Maxime | AmaniHost',
      description:
        "Villa au Sémaphore à Sainte-Maxime : vue panoramique sur le golfe, clientèle haut de gamme. Gestion intégrale par votre concierge AmaniHost.",
      h1: 'Villas du Sémaphore, Sainte-Maxime',
      chapo:
        "Sur les hauteurs du centre, le Sémaphore est le quartier le plus recherché de Sainte-Maxime, pour sa vue sur tout le golfe de Saint-Tropez.",
      projet: 'gestion',
      type: 'formulaire',
      sections: [
        {
          h2: 'Une vue qui se paie',
          paragraphes: [
            "Les villas du Sémaphore dominent le golfe, face à Saint-Tropez. Pour les voyageurs, cette vue justifie un prix nettement supérieur à celui d'une villa équivalente sans vue. Elle doit être au cœur des photos et de l'annonce.",
            "Le centre et ses plages restent proches, ce qui plaît aux familles comme aux couples. Il faut en revanche bien informer les voyageurs sur l'accès en pente et le stationnement.",
          ],
        },
      ],
    },
    {
      slug: 'la-nartelle',
      menu: 'La Nartelle',
      title: 'Location de villa à La Nartelle, Sainte-Maxime | AmaniHost',
      description:
        "Villa à La Nartelle, Sainte-Maxime : quartier résidentiel près d'une grande plage de sable. Gestion intégrale par votre concierge AmaniHost.",
      h1: 'Villas de La Nartelle, Sainte-Maxime',
      chapo:
        "À l'est du centre, La Nartelle est un quartier de maisons et de villas, tourné vers sa grande plage de sable.",
      projet: 'gestion',
      type: 'formulaire',
      sections: [
        {
          h2: 'Le quartier des familles',
          paragraphes: [
            "La plage de La Nartelle est l'une des plus connues de Sainte-Maxime. Les villas du quartier attirent surtout des familles qui veulent aller à la plage à pied et loger au calme. Les séjours à la semaine y sont la règle en été.",
          ],
        },
      ],
    },
    {
      slug: 'centre-croisette',
      menu: 'Centre et Croisette',
      title: 'Location saisonnière centre et Croisette, Sainte-Maxime',
      description:
        "Location saisonnière dans le centre de Sainte-Maxime et à la Croisette : tout à pied, plages et port. Conciergerie locale pour villas et maisons.",
      h1: 'Centre-ville et Croisette, Sainte-Maxime',
      chapo:
        "Au centre, tout se fait à pied : plages, port, marché et navette maritime vers Saint-Tropez. Le parc est surtout fait d'appartements, les maisons y sont rares et donc recherchées.",
      projet: 'gestion',
      type: 'formulaire',
      sections: [
        {
          h2: 'Rare, donc recherché',
          paragraphes: [
            "Une maison avec extérieur dans le centre ou à la Croisette se démarque facilement des nombreux appartements proposés autour. La navette maritime vers Saint-Tropez est un vrai argument à mettre en avant dans l'annonce.",
          ],
        },
      ],
    },
  ],

  voisines: [
    {
      slug: 'plan-de-la-tour',
      menu: 'Plan-de-la-Tour',
      title: 'Conciergerie de villas au Plan-de-la-Tour | AmaniHost',
      description:
        "Villa au Plan-de-la-Tour, dans l'arrière-pays de Sainte-Maxime : calme, grands terrains, piscine. Gestion intégrale par votre concierge AmaniHost.",
      h1: 'Conciergerie de villas au Plan-de-la-Tour',
      chapo:
        "Village de l'arrière-pays de Sainte-Maxime, le Plan-de-la-Tour attire les voyageurs qui veulent le calme de la campagne varoise à quelques minutes de la mer.",
      projet: 'gestion',
      type: 'formulaire',
      sections: [
        {
          h2: 'La campagne à côté de la mer',
          paragraphes: [
            "Les villas du Plan-de-la-Tour offrent souvent plus de terrain et plus d'intimité que sur le littoral. Pour bien les louer, l'annonce doit rassurer sur la proximité des plages de Sainte-Maxime et mettre en avant la piscine et les espaces extérieurs.",
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Qui gère ma villa à Sainte-Maxime ?',
      r: "Votre villa est gérée par le concierge AmaniHost de Sainte-Maxime, un entrepreneur installé sur place, formé à la méthode AmaniHost. C’est lui votre interlocuteur, du premier rendez-vous aux comptes rendus.",
    },
    {
      q: 'Le premier rendez-vous est-il payant ?',
      r: "Non. Votre concierge vient visiter la villa et vous remet une proposition écrite, sans engagement. Vous décidez ensuite.",
    },
    {
      q: 'Combien coûte la gestion de ma villa ?',
      r: "Une commission sur les revenus locatifs, précisée par écrit dans la proposition remise après la visite, sans frais cachés. Elle couvre la gestion intégrale de votre villa.",
    },
    {
      q: 'Ma villa doit-elle avoir une piscine ?',
      r: "Ce n'est pas obligatoire, mais en été une villa sans piscine ni climatisation se loue beaucoup moins bien et moins cher à Sainte-Maxime.",
    },
    {
      q: 'Dois-je enregistrer ma villa comme meublé de tourisme ?',
      r: "Oui. Depuis le 20 mai 2026, l'enregistrement se fait sur un téléservice national et le numéro doit apparaître sur vos annonces.",
    },
  ],

  voisinesReseau: ['grimaud', 'saint-tropez', 'gassin'],
};

export default commune;
