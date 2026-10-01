// Rubrique « Devenir concierge » : argumentaire pour les futurs concierges AmaniHost.
// Source : document « Plateforme AmaniHost Network », section 07. Conditions financières : sur demande, jamais affichées.

export type Bloc =
  | { type: 'texte'; h2: string; paragraphes: string[] }
  | { type: 'cartes'; h2: string; intro?: string; items: { titre: string; texte: string; lien?: string }[] }
  | { type: 'etapes'; h2: string; intro?: string; items: { titre: string; quand?: string; texte: string; points?: string[] }[] }
  | { type: 'comparatif'; h2: string; intro?: string; colonnes: string[]; lignes: string[][] }
  | { type: 'liste'; h2: string; intro?: string; items: string[] }
  | { type: 'faq'; h2: string; items: { q: string; r: string }[] }
  | { type: 'citation'; texte: string };

export type PageConcierge = {
  slug: string; // '' pour la page principale
  menu: string;
  title: string;
  description: string;
  h1: string;
  chapo: string;
  blocs: Bloc[];
};

export const APPORTS = [
  {
    titre: 'Des propriétaires',
    texte: 'Le site AmaniHost de votre commune attire les propriétaires de villas qui cherchent une conciergerie. Leurs demandes arrivent chez vous. Vous démarrez avec des rendez-vous, pas avec une liste de numéros à appeler.',
  },
  {
    titre: 'Une méthode de villa',
    texte: 'Les process d’une conciergerie de villas qui tourne chaque été : accueil, états des lieux, ménage, linge, piscine, incidents, comptes rendus. Pensés pour la villa, pas recopiés d’une gestion d’appartements.',
  },
  {
    titre: 'L’art de convaincre',
    texte: 'L’argumentaire qui fait signer les propriétaires, et des séances d’entraînement en conditions réelles jusqu’à ce que le rendez-vous devienne naturel.',
  },
  {
    titre: 'L’anglais du métier',
    texte: 'Un parcours centré sur les vraies situations : accueillir, expliquer la maison, gérer un incident, échanger avec un propriétaire étranger.',
  },
  {
    titre: 'Une première saison accompagnée',
    texte: 'Un point chaque semaine, un appui sur les rendez-vous délicats et les premières urgences. Vous n’êtes jamais seul en plein mois d’août.',
  },
  {
    titre: 'Une marque et des outils',
    texte: 'Le nom AmaniHost, le site de votre commune, les documents types (livret d’accueil, règlement intérieur, état des lieux), l’application de planning du ménage.',
  },
];

export const PAGES_CONCIERGE: PageConcierge[] = [
  {
    slug: '',
    menu: 'Vue d’ensemble',
    title: 'Devenir concierge de villas avec AmaniHost',
    description:
      'Devenez concierge de villas sous la marque AmaniHost : propriétaires apportés, méthode, formation, première saison accompagnée. Exclusivité par ville.',
    h1: 'Devenez concierge de villas AmaniHost',
    chapo:
      'Vous voulez vivre d’un métier de terrain, au contact de belles maisons et de voyageurs exigeants, et construire votre propre entreprise ? Nous vous apportons ce qui manque à tous ceux qui démarrent : les premiers propriétaires, et la façon de les garder.',
    blocs: [
      {
        type: 'texte',
        h2: 'Ce qui fait échouer la plupart des conciergeries',
        paragraphes: [
          'Créer une conciergerie est simple sur le papier : une micro-entreprise, une assurance, quelques annonces. Ce qui est difficile, c’est la suite. Trouver ses premiers propriétaires quand personne ne vous connaît. Être crédible face à quelqu’un qui vous confie une maison de plusieurs millions. Tenir une saison où tout arrive en même temps, sans méthode et sans personne à appeler.',
          'La plupart des réseaux de conciergerie vous vendent une marque et un logiciel, puis vous laissent chercher vos clients. AmaniHost fait l’inverse : le réseau commence par vous apporter des propriétaires.',
        ],
      },
      { type: 'citation', texte: 'Nous vous apportons ce qui manque à tous ceux qui démarrent : les premiers propriétaires, et la façon de les garder.' },
      {
        type: 'cartes',
        h2: 'Ce que nous vous apportons',
        intro: 'Six choses concrètes, dès votre arrivée dans le réseau.',
        items: APPORTS.map((a) => ({ ...a, lien: '/devenir-concierge/ce-que-nous-apportons/' })),
      },
      {
        type: 'etapes',
        h2: 'Votre parcours',
        intro: 'De la candidature à votre deuxième saison, en autonomie.',
        items: [
          { quand: 'Étape 1', titre: 'Sélection', texte: 'Un échange pour faire connaissance, puis une mise en situation : un rendez-vous fictif avec un propriétaire.' },
          { quand: 'Étape 2', titre: 'Formation', texte: 'Les process, l’argumentaire, les entraînements et l’anglais du métier, avant la saison.' },
          { quand: 'Étape 3', titre: 'Première saison', texte: 'Vos premiers propriétaires, vos premiers voyageurs, et un point avec nous chaque semaine.' },
          { quand: 'Étape 4', titre: 'Autonomie', texte: 'Vous gérez seul votre portefeuille. Nous restons là pour le suivi, la formation continue et les cas difficiles.' },
        ],
      },
      {
        type: 'comparatif',
        h2: 'Pourquoi AmaniHost plutôt qu’un autre réseau',
        colonnes: ['', 'La plupart des réseaux', 'AmaniHost'],
        lignes: [
          ['Les clients', 'À vous de les trouver', 'Les propriétaires de votre ville vous sont apportés'],
          ['Le type de biens', 'Surtout des appartements', 'Uniquement des villas'],
          ['La méthode', 'Un logiciel et un manuel', 'Celle d’une conciergerie de villas en activité'],
          ['Le territoire', 'Souvent partagé', 'Exclusivité sur votre ville'],
          ['La première saison', 'Vous êtes seul', 'Un point chaque semaine et un appui sur les urgences'],
          ['Ce que vous reversez', 'Souvent une part importante de votre chiffre d’affaires', 'Une redevance volontairement légère, détaillée lors de notre premier échange'],
        ],
      },
      {
        type: 'liste',
        h2: 'Le profil que nous cherchons',
        intro: 'Nous recrutons une attitude, pas un CV. L’expérience de la conciergerie n’est pas nécessaire.',
        items: [
          'Vous êtes déterminé et vous voulez construire votre propre activité.',
          'Vous vivez sur votre ville, au moins pendant toute la saison.',
          'Vous êtes fiable, présentable et à l’aise avec une clientèle exigeante.',
          'Vous parlez anglais, ou vous êtes prêt à l’apprendre sérieusement.',
          'Vous aimez qu’un travail soit bien fait, et vous suivez une méthode.',
        ],
      },
      {
        type: 'faq',
        h2: 'Vos questions',
        items: [
          { q: 'Faut-il de l’expérience en conciergerie ?', r: 'Non. Notre formation couvre tout le métier. Une expérience du service (hôtellerie, restauration, accueil) est un plus, pas une condition.' },
          { q: 'Quel est mon statut ?', r: 'Vous êtes un entrepreneur indépendant. Vous créez votre entreprise et vous exploitez la marque AmaniHost sous licence. Vous n’êtes ni salarié, ni associé d’AmaniHost.' },
          { q: 'Combien cela coûte-t-il ?', r: 'Un droit d’entrée, un abonnement mensuel pour les outils et une redevance légère en fin d’année. Nous détaillons les conditions lors de notre premier échange.' },
          { q: 'Mon secteur sera-t-il exclusif ?', r: 'Oui. L’exclusivité est accordée par ville. Selon votre capacité, vous pouvez prendre une ou plusieurs villes.' },
          { q: 'Dans quelles villes recrutez-vous ?', r: 'Dans les destinations de villas les plus recherchées de France : Côte d’Azur, golfe de Saint-Tropez, Alpes, Bassin d’Arcachon, Côte basque, Corse. Indiquez la ville qui vous intéresse dans votre candidature.' },
        ],
      },
    ],
  },
  {
    slug: 'le-metier',
    menu: 'Le métier',
    title: 'Le métier de concierge de villas | AmaniHost',
    description:
      'Concierge de villas : en quoi consiste le métier, une saison type, les compétences attendues, le statut indépendant. Ce qu’il faut savoir avant de se lancer.',
    h1: 'Le métier de concierge de villas',
    chapo:
      'Un concierge de villas est l’interlocuteur unique du propriétaire. Il loue la maison, accueille les voyageurs, la fait entretenir et en rend compte. C’est un métier de terrain, de service et de confiance.',
    blocs: [
      {
        type: 'texte',
        h2: 'Ce que fait un concierge, concrètement',
        paragraphes: [
          'Il commercialise la villa : annonces, photos, prix selon la saison, sélection des voyageurs. Il les accueille en personne, fait visiter la maison, prend la caution et l’état des lieux. Il organise le ménage, le linge, l’entretien de la piscine et du jardin, et fait intervenir les bons artisans quand il le faut. Après chaque séjour, il rend compte au propriétaire.',
          'Le propriétaire n’a qu’une personne à appeler. Toute la valeur du métier est là : un propriétaire qui vous fait confiance vous confie sa maison pour des années.',
        ],
      },
      {
        type: 'etapes',
        h2: 'Une année de concierge',
        items: [
          { quand: 'Hiver', titre: 'Préparer', texte: 'Rencontrer de nouveaux propriétaires, signer les mandats, préparer les maisons, mettre à jour annonces et calendriers.' },
          { quand: 'Printemps', titre: 'Lancer la saison', texte: 'Premiers séjours, ponts de mai, mise en route des piscines, recrutement et formation de l’équipe de ménage.' },
          { quand: 'Été', titre: 'Tenir la saison', texte: 'Arrivées et départs chaque semaine, ménages, incidents, voyageurs exigeants. Les semaines qui font l’essentiel du chiffre d’affaires.' },
          { quand: 'Automne', titre: 'Faire le bilan', texte: 'Derniers séjours, comptes rendus de saison, travaux d’entretien, fermeture des maisons et nouveaux contacts.' },
        ],
      },
      {
        type: 'liste',
        h2: 'Les qualités qui font la différence',
        items: [
          'La rigueur : un état des lieux bâclé coûte une caution, un oubli coûte un propriétaire.',
          'Le sens du service : les voyageurs d’une villa attendent un accueil d’hôtel.',
          'Le calme : en plein mois d’août, une piscine verte ou une clé perdue se règlent sans paniquer.',
          'La présentation : vous représentez le propriétaire et la marque.',
          'L’organisation : plusieurs maisons, plusieurs équipes, les mêmes samedis.',
        ],
      },
      {
        type: 'texte',
        h2: 'Comment gagne un concierge',
        paragraphes: [
          'Le concierge perçoit une commission sur les revenus locatifs de chaque villa qu’il gère, et facture les prestations comme le ménage, le linge ou l’accueil. Sur une villa, les montants par séjour sont élevés : quelques maisons bien gérées suffisent à construire une activité solide.',
          'Le métier est saisonnier. Les revenus se concentrent sur l’été, ce qui demande d’anticiper sa trésorerie. Nous vous aidons à construire votre prévisionnel avant de vous lancer.',
        ],
      },
      {
        type: 'texte',
        h2: 'Le statut',
        paragraphes: [
          'Le concierge AmaniHost est un entrepreneur indépendant. Il crée sa propre entreprise et exploite la marque AmaniHost sous licence, sur une ou plusieurs villes qui lui sont réservées. Il est libre de son organisation, et applique la méthode qui fait la qualité du réseau.',
        ],
      },
    ],
  },
  {
    slug: 'ce-que-nous-apportons',
    menu: 'Ce que nous apportons',
    title: 'Ce qu’AmaniHost apporte à ses concierges',
    description:
      'Propriétaires apportés par le site de votre ville, méthode de villa, argumentaire, entraînement, anglais, première saison accompagnée, marque et outils.',
    h1: 'Ce que nous apportons à nos concierges',
    chapo:
      'Rejoindre AmaniHost, ce n’est pas acheter un nom. C’est démarrer avec des propriétaires, une méthode éprouvée et quelqu’un à vos côtés pendant votre première saison.',
    blocs: [
      {
        type: 'texte',
        h2: 'Des propriétaires, dès le départ',
        paragraphes: [
          'Chaque ville du réseau a sa rubrique sur amanihost.com, conçue pour apparaître quand un propriétaire cherche une conciergerie dans sa commune. Les pages parlent de votre ville, de ses quartiers, de ses villas. Quand un propriétaire remplit le formulaire, sa demande vous est transmise.',
          'Vous ne commencez pas par du démarchage. Vous commencez par des rendez-vous avec des propriétaires qui ont déjà fait la démarche.',
        ],
      },
      {
        type: 'texte',
        h2: 'Une méthode née sur le terrain',
        paragraphes: [
          'AmaniHost est né d’une conciergerie de villas qui gère chaque été des maisons à La Croix-Valmer et Cavalaire. La méthode que nous transmettons est celle que nous appliquons : comment préparer une villa, accueillir des voyageurs, faire un état des lieux qui tient, gérer un incident, rendre compte à un propriétaire.',
          'Tout est écrit, et tout a été testé en pleine saison.',
        ],
      },
      {
        type: 'texte',
        h2: 'Savoir convaincre un propriétaire',
        paragraphes: [
          'Un propriétaire signe quand il vous rencontre et qu’il sent le sérieux. Nous vous transmettons l’argumentaire qui fonctionne, les réponses aux questions qui reviennent toujours, la manière de présenter votre travail et vos documents.',
          'Puis nous nous entraînons : des rendez-vous simulés, repris et corrigés, jusqu’à ce que vous soyez à l’aise face à n’importe quel propriétaire.',
        ],
      },
      {
        type: 'texte',
        h2: 'L’anglais du métier',
        paragraphes: [
          'Une grande partie des voyageurs et de nombreux propriétaires sont étrangers. Notre parcours d’anglais part des situations réelles : accueillir, expliquer la maison et la piscine, régler un problème, écrire à un propriétaire. L’objectif est d’être à l’aise, pas de passer un examen.',
        ],
      },
      {
        type: 'texte',
        h2: 'Une première saison accompagnée',
        paragraphes: [
          'Pendant votre première saison, nous faisons un point chaque semaine : rendez-vous, signatures, séjours, incidents. Nous vous appuyons sur les rendez-vous délicats et sur les premières urgences. Ensuite, le suivi s’espace, et la formation continue reste ouverte.',
        ],
      },
      {
        type: 'texte',
        h2: 'Une marque et des outils prêts à l’emploi',
        paragraphes: [
          'Vous travaillez sous le nom AmaniHost, avec une image soignée dès le premier jour. Vous disposez des documents types qui rassurent les propriétaires et protègent leurs maisons : livret d’accueil, règlement intérieur, état des lieux, décharge piscine, compte rendu de séjour. Et de l’application qui organise le planning du ménage de vos villas.',
        ],
      },
    ],
  },
  {
    slug: 'le-parcours',
    menu: 'Le parcours',
    title: 'Devenir concierge AmaniHost : le parcours',
    description:
      'Sélection, formation, première saison accompagnée, autonomie : les étapes pour devenir concierge de villas AmaniHost dans votre ville.',
    h1: 'Le parcours pour devenir concierge AmaniHost',
    chapo: 'Quatre étapes, de votre candidature à votre deuxième saison en autonomie.',
    blocs: [
      {
        type: 'etapes',
        h2: 'Les étapes',
        items: [
          {
            quand: 'Étape 1',
            titre: 'La sélection',
            texte: 'Nous voulons être sûrs, vous comme nous, que le métier vous correspond.',
            points: ['Un premier échange pour faire connaissance et parler de votre ville', 'La présentation détaillée du réseau et des conditions', 'Une mise en situation : un rendez-vous fictif avec un propriétaire', 'La validation de votre ville et de votre projet'],
          },
          {
            quand: 'Étape 2',
            titre: 'La formation',
            texte: 'Avant la saison, vous apprenez le métier tel que nous le pratiquons.',
            points: ['Les process : préparation, accueil, états des lieux, ménage, linge, piscine, incidents, comptes rendus', 'L’argumentaire et les réponses aux questions des propriétaires', 'Les entraînements aux rendez-vous, jusqu’à l’aisance', 'L’anglais des situations réelles', 'La prise en main des outils et des documents'],
          },
          {
            quand: 'Étape 3',
            titre: 'La première saison',
            texte: 'Vous démarrez avec les demandes de propriétaires de votre ville, et nous restons à vos côtés.',
            points: ['Les premiers rendez-vous et les premières signatures', 'Un point chaque semaine avec AmaniHost', 'Un appui sur les cas délicats et les urgences', 'Le bilan de fin de saison'],
          },
          {
            quand: 'Étape 4',
            titre: 'L’autonomie',
            texte: 'Vous gérez votre portefeuille seul et vous le développez.',
            points: ['Un suivi plus espacé', 'La formation continue', 'La possibilité de prendre de nouvelles villes', 'Pour les meilleurs, former les concierges qui arrivent'],
          },
        ],
      },
    ],
  },
  {
    slug: 'pourquoi-amanihost',
    menu: 'Pourquoi AmaniHost',
    title: 'Conciergerie : franchise, réseau ou AmaniHost ?',
    description:
      'Se lancer seul, rejoindre une franchise de conciergerie ou devenir concierge AmaniHost : comparaison pour bien lancer votre conciergerie de villas.',
    h1: 'Se lancer seul, rejoindre un réseau, ou AmaniHost ?',
    chapo: 'Trois façons de lancer une conciergerie. Voici ce qui les distingue, sans détour.',
    blocs: [
      {
        type: 'comparatif',
        h2: 'Les trois options',
        colonnes: ['', 'Seul', 'Réseau classique', 'AmaniHost'],
        lignes: [
          ['Trouver des clients', 'Entièrement à vous', 'Le plus souvent à vous', 'Les propriétaires de votre ville vous sont apportés'],
          ['Crédibilité', 'À construire de zéro', 'Une marque, souvent orientée appartement', 'Une marque spécialiste de la villa'],
          ['Méthode', 'À inventer en pleine saison', 'Un manuel et un logiciel', 'Celle d’une conciergerie de villas en activité'],
          ['Formation commerciale', 'Aucune', 'Variable', 'Argumentaire et entraînements aux rendez-vous'],
          ['Première saison', 'Seul', 'Assistance à distance', 'Un point chaque semaine et un appui sur les urgences'],
          ['Territoire', 'Ouvert à tous', 'Souvent partagé', 'Exclusivité sur votre ville'],
          ['Coût', 'Aucun droit, tout à construire', 'Souvent une part importante du chiffre d’affaires', 'Volontairement léger, détaillé au premier échange'],
        ],
      },
      {
        type: 'texte',
        h2: 'Pourquoi nous ne gérons que des villas',
        paragraphes: [
          'Le marché des réseaux de conciergerie s’est construit sur l’appartement en location courte durée : beaucoup de logements, de petits montants, beaucoup de concurrence. La villa est un autre métier. Les montants par séjour sont plus élevés, les voyageurs restent à la semaine, les propriétaires attendent un niveau de service supérieur.',
          'Pour un concierge, c’est un avantage : moins de maisons à gérer pour une activité solide, et une relation durable avec chaque propriétaire.',
        ],
      },
      {
        type: 'texte',
        h2: 'Pourquoi nous vous apportons des propriétaires',
        paragraphes: [
          'Notre conviction est simple : un concierge doit passer son temps sur le terrain et en rendez-vous, pas à chercher des contacts. AmaniHost investit dans la visibilité de chaque ville du réseau pour que les propriétaires viennent à vous.',
          'C’est aussi notre intérêt : notre réseau ne grandit que si nos concierges réussissent.',
        ],
      },
      { type: 'citation', texte: 'Notre réseau ne grandit que si nos concierges réussissent.' },
    ],
  },
];

export const pageConcierge = (slug: string) => PAGES_CONCIERGE.find((p) => p.slug === slug);
