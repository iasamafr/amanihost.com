// Données communes à tout le site. Modifier ici = modifié partout.
// Source de vérité éditoriale : document « Plateforme AmaniHost Network » (projet AMANI NETWORK).

export const SITE = {
  // PRÉPRODUCTION : true = site non indexé par Google (noindex + robots.txt bloquant). Passer à false au lancement.
  preprod: true,
  url: 'https://amanihost.com',
  marque: 'AmaniHost',
  signature: 'Votre villa, entre de bonnes mains.',
  complement: 'Un seul interlocuteur s’occupe de tout, de la première réservation au départ du dernier voyageur.',
  baseline: 'Le réseau de concierges de villas',
  email: 'contact@amanihost.com', // À CONFIRMER
  editeur: {
    // À COMPLÉTER : identité légale de l'éditeur pour les mentions légales
    raisonSociale: '[raison sociale à compléter]',
    siret: '[SIRET à compléter]',
    adresse: '[adresse à compléter]',
    directeurPublication: 'Simon Amaniera',
    hebergeur: 'Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis',
  },
};

export type Secteur = {
  slug: string;
  nom: string;
  departement: string;
  region: string; // libellé de regroupement dans le menu
  intro: string;
  title: string;
  description: string;
  communes: string[]; // communes prévues, dans l'ordre d'affichage
  ouvert: boolean; // true = rubriques communes en ligne
};

export const SECTEURS: Secteur[] = [
  {
    slug: 'golfe-de-saint-tropez',
    nom: 'Golfe de Saint-Tropez',
    departement: 'Var',
    region: 'Côte d’Azur',
    title: 'Conciergerie villas golfe de Saint-Tropez | AmaniHost',
    description: 'Gestion intégrale de villas dans le golfe de Saint-Tropez : Sainte-Maxime, Saint-Tropez, Ramatuelle, Gassin, Grimaud, La Croix-Valmer, Cavalaire.',
    intro: 'C’est ici qu’AmaniHost est né, à La Croix-Valmer. Chaque commune du golfe a ses villas, ses voyageurs et ses habitudes : les grandes propriétés de Ramatuelle ne se gèrent pas comme une villa familiale de Cavalaire. C’est pour cela qu’un concierge AmaniHost ne s’occupe que de sa commune.',
    communes: ['Saint-Tropez', 'Ramatuelle', 'Gassin', 'Grimaud', 'Sainte-Maxime', 'La Croix-Valmer', 'Cavalaire-sur-Mer'],
    ouvert: true,
  },
  {
    slug: 'cannes-antibes-mougins',
    nom: 'Cannes, Antibes, Mougins',
    departement: 'Alpes-Maritimes',
    region: 'Côte d’Azur',
    title: 'Conciergerie villas Cannes, Antibes, Mougins | AmaniHost',
    description: 'Conciergerie de villas à Cannes, Antibes, Mougins et Vallauris : gestion intégrale par un concierge AmaniHost installé sur place. Ouverture prochaine.',
    intro: 'Le premier marché de villas de location de la Côte d’Azur hors Paris : les villas du cap d’Antibes, les propriétés des collines de Mougins, et un calendrier rythmé par les grands événements cannois, qui remplissent les maisons bien au-delà de l’été.',
    communes: ['Cannes', 'Antibes', 'Mougins', 'Vallauris', 'Valbonne'],
    ouvert: false,
  },
  {
    slug: 'nice-riviera',
    nom: 'Nice et Riviera',
    departement: 'Alpes-Maritimes',
    region: 'Côte d’Azur',
    title: 'Conciergerie villas Nice et Riviera | AmaniHost',
    description: 'Conciergerie de villas entre Nice et Menton : Villefranche, Èze, Cap-d’Ail, Beausoleil, Menton. Gestion intégrale AmaniHost. Ouverture prochaine.',
    intro: 'De Nice à la frontière italienne, des villas accrochées aux corniches, face à la mer, à quelques minutes de Monaco. Une clientèle internationale présente presque toute l’année.',
    communes: ['Nice', 'Villefranche-sur-Mer', 'Èze', 'Cap-d’Ail', 'Beausoleil', 'Menton'],
    ouvert: false,
  },
  {
    slug: 'cassis-bandol-sanary',
    nom: 'Cassis, Bandol, Sanary',
    departement: 'Bouches-du-Rhône et Var',
    region: 'Provence',
    title: 'Conciergerie villas Cassis, Bandol, Sanary | AmaniHost',
    description: 'Conciergerie de villas à Cassis, La Ciotat, Bandol, Sanary et Saint-Cyr-sur-Mer : gestion intégrale par un concierge AmaniHost. Ouverture prochaine.',
    intro: 'Entre calanques et vignobles de Bandol, une côte de villas familiales très demandée par les voyageurs de Marseille, de Lyon et de l’étranger.',
    communes: ['Cassis', 'La Ciotat', 'Saint-Cyr-sur-Mer', 'Bandol', 'Sanary-sur-Mer'],
    ouvert: false,
  },
  {
    slug: 'tarentaise',
    nom: 'Tarentaise',
    departement: 'Savoie',
    region: 'Alpes',
    title: 'Conciergerie chalets Courchevel, Méribel, Val-d’Isère',
    description: 'Conciergerie de chalets en Tarentaise : Courchevel, Méribel, Les Belleville, Val-d’Isère, Tignes. Gestion intégrale AmaniHost. Ouverture prochaine.',
    intro: 'Les Trois Vallées, Val-d’Isère et Tignes : les chalets de location les plus chers des Alpes, une saison d’hiver intense et un été qui prend de l’ampleur.',
    communes: ['Courchevel', 'Méribel', 'Les Belleville', 'Val-d’Isère', 'Tignes'],
    ouvert: false,
  },
  {
    slug: 'mont-blanc-aravis',
    nom: 'Mont-Blanc et Aravis',
    departement: 'Haute-Savoie',
    region: 'Alpes',
    title: 'Conciergerie chalets Chamonix, Megève, Aravis | AmaniHost',
    description: 'Conciergerie de chalets à Chamonix, Megève, Saint-Gervais, La Clusaz et Le Grand-Bornand. Gestion intégrale AmaniHost. Ouverture prochaine.',
    intro: 'Deux saisons pleines, l’hiver pour le ski et l’été pour la montagne : des chalets loués une grande partie de l’année, au pied du mont Blanc ou dans les villages des Aravis.',
    communes: ['Chamonix', 'Megève', 'Saint-Gervais-les-Bains', 'La Clusaz', 'Le Grand-Bornand'],
    ouvert: false,
  },
  {
    slug: 'portes-du-soleil',
    nom: 'Portes du Soleil',
    departement: 'Haute-Savoie',
    region: 'Alpes',
    title: 'Conciergerie chalets Morzine, Les Gets, Châtel | AmaniHost',
    description: 'Conciergerie de chalets à Morzine, Les Gets, Châtel et Samoëns : gestion intégrale par un concierge AmaniHost. Ouverture prochaine.',
    intro: 'Un domaine skiable immense, une forte clientèle britannique, des chalets haut de gamme loués à la semaine tout l’hiver et de plus en plus l’été.',
    communes: ['Morzine', 'Les Gets', 'Châtel', 'Samoëns'],
    ouvert: false,
  },
  {
    slug: 'bassin-d-arcachon',
    nom: 'Bassin d’Arcachon',
    departement: 'Gironde',
    region: 'Atlantique',
    title: 'Conciergerie villas Cap-Ferret, Arcachon | AmaniHost',
    description: 'Conciergerie de villas au Cap-Ferret, à Arcachon, La Teste et Pyla : gestion intégrale par un concierge AmaniHost. Ouverture prochaine.',
    intro: 'Les villas de la presqu’île du Cap-Ferret, la ville d’hiver d’Arcachon, le Pyla : un marché de maisons familiales très recherché, où la saison se joue sur juillet et août.',
    communes: ['Lège-Cap-Ferret', 'Arcachon', 'La Teste-de-Buch', 'Andernos-les-Bains'],
    ouvert: false,
  },
  {
    slug: 'cote-basque',
    nom: 'Côte basque et sud des Landes',
    departement: 'Pyrénées-Atlantiques et Landes',
    region: 'Atlantique',
    title: 'Conciergerie villas Biarritz, côte basque | AmaniHost',
    description: 'Conciergerie de villas à Biarritz, Anglet, Saint-Jean-de-Luz, Hossegor et Seignosse. Gestion intégrale AmaniHost. Ouverture prochaine.',
    intro: 'Des villas basques face à l’océan, une clientèle de surfeurs, de familles et de voyageurs espagnols, et une saison plus longue qu’on ne le croit.',
    communes: ['Biarritz', 'Anglet', 'Saint-Jean-de-Luz', 'Hossegor', 'Seignosse'],
    ouvert: false,
  },
  {
    slug: 'corse-du-sud',
    nom: 'Corse du Sud',
    departement: 'Corse-du-Sud',
    region: 'Corse',
    title: 'Conciergerie villas Porto-Vecchio, Bonifacio | AmaniHost',
    description: 'Conciergerie de villas à Porto-Vecchio, Bonifacio, Zonza, Lecci et Figari : gestion intégrale par un concierge AmaniHost. Ouverture prochaine.',
    intro: 'Les villas de Porto-Vecchio, de Santa Giulia et de Palombaggia, les maisons de pierre de Bonifacio : un marché d’exception, concentré sur une saison courte et très demandée.',
    communes: ['Porto-Vecchio', 'Bonifacio', 'Zonza', 'Lecci', 'Figari'],
    ouvert: false,
  },
];

// Les trois partis pris du réseau (plateforme, section 02)
export const PILIERS = [
  {
    icone: 'piscine',
    titre: 'La villa, seulement la villa',
    texte: 'Nous ne gérons pas d’appartements. Une villa demande une autre attention : la piscine, le jardin, les équipements, des voyageurs qui restent à la semaine et attendent un niveau de service hôtelier.',
  },
  {
    icone: 'cle',
    titre: 'Nous prenons tout en charge',
    texte: 'De la mise en ligne au départ du dernier voyageur, un seul interlocuteur gère votre villa. Vous n’avez plus rien à coordonner, plus d’intervenants à relancer.',
  },
  {
    icone: 'regle',
    titre: 'Un concierge sur place',
    texte: 'Votre concierge vit dans votre commune. Il vient vous rencontrer, il connaît votre maison, il est là quand un voyageur arrive ou quand quelque chose ne va pas.',
  },
];

// Les questions des propriétaires au premier rendez-vous (plateforme, section 04)
export const QUESTIONS = [
  {
    q: 'Vous vous occupez de tout ?',
    r: 'Oui. C’est notre métier et notre seule formule : commercialisation, voyageurs, accueil, ménage, linge, entretien, comptes rendus. Vous n’avez qu’un interlocuteur, et il répond de l’ensemble.',
  },
  {
    q: 'Je gère déjà mes réservations. Pouvez-vous seulement faire l’accueil et le ménage ?',
    r: 'Notre formule est la gestion intégrale : c’est en tenant toute la chaîne que nous pouvons répondre de la qualité. Pour certaines maisons d’exception, une gestion partagée peut s’étudier, sur demande.',
  },
  {
    q: 'Combien ça coûte ?',
    r: 'Une commission sur les revenus locatifs, précisée par écrit après la visite de votre villa, sans frais cachés. La vraie question est ce qui vous reste : une villa bien louée et bien entretenue rapporte davantage et se dégrade moins.',
  },
  {
    q: 'Ma maison est exceptionnelle. Le service sera-t-il à la hauteur ?',
    r: 'C’est précisément pour ces maisons que nous existons. État des lieux détaillé à chaque séjour, inventaire, contrôle avant chaque arrivée, voyageurs vérifiés. Nous vous le montrons lors du rendez-vous, documents à l’appui.',
  },
];

// L'offre en quatre blocs (plateforme, section 06)
export const OFFRE = [
  {
    icone: 'annonce',
    verbe: 'Louer',
    titre: 'La commercialisation',
    points: ['Photos et annonces soignées', 'Prix ajustés à la saison et aux événements', 'Voyageurs vérifiés avant d’accepter', 'Échanges avant et pendant le séjour'],
  },
  {
    icone: 'cle',
    verbe: 'Accueillir',
    titre: 'Les séjours',
    points: ['Accueil en personne et visite de la villa', 'État des lieux d’entrée et de sortie', 'Caution prise à chaque séjour', 'Assistance pendant tout le séjour'],
  },
  {
    icone: 'linge',
    verbe: 'Entretenir',
    titre: 'La maison',
    points: ['Ménage et linge de qualité hôtelière', 'Piscine et jardin suivis', 'Petits travaux et artisans de confiance', 'Contrôle complet avant chaque arrivée'],
  },
  {
    icone: 'rapport',
    verbe: 'Rendre compte',
    titre: 'À vous',
    points: ['Compte rendu après chaque séjour', 'Revenus et interventions détaillés', 'Enregistrement du meublé et taxe de séjour', 'Un interlocuteur joignable toute l’année'],
  },
];

// La méthode : ce qui se passe entre deux voyageurs (montrer le soin, sans le proclamer)
export const METHODE = [
  { titre: 'Avant l’arrivée', texte: 'La villa est contrôlée pièce par pièce : ménage, linge, piscine, équipements, consommables. Rien n’est laissé au hasard du dernier passage.' },
  { titre: 'À l’arrivée', texte: 'Le concierge accueille les voyageurs sur place, leur fait visiter la maison, explique la piscine et les règles. Un état des lieux d’entrée est signé.' },
  { titre: 'Pendant le séjour', texte: 'Les voyageurs ont un contact joignable. Un souci est traité sur place, par quelqu’un qui connaît la maison.' },
  { titre: 'Au départ', texte: 'État des lieux de sortie et contrôle de l’inventaire avant de rendre la caution. Tout dommage est constaté, photographié et traité.' },
  { titre: 'Après', texte: 'Vous recevez un compte rendu du séjour : dates, montant, état de la villa, interventions éventuelles.' },
];

// Le parcours propriétaire : tout mène au rendez-vous
export const RENDEZ_VOUS = [
  { titre: 'Vous nous parlez de votre villa', texte: 'Quelques questions, deux minutes. Aucun engagement.' },
  { titre: 'Votre concierge vient vous rencontrer', texte: 'Chez vous, dans votre villa. Il fait le tour de la maison, écoute vos attentes et vous montre comment il travaille.' },
  { titre: 'Vous recevez une proposition écrite', texte: 'Ce qui est pris en charge, la commission, le calendrier. Vous décidez à tête reposée.' },
  { titre: 'Votre villa est entre de bonnes mains', texte: 'Mise en ligne, premiers voyageurs, premiers comptes rendus. Vous n’avez plus rien à gérer.' },
];

// Avis : pour la maquette, AVIS D'EXEMPLE à remplacer par de vrais avis voyageurs (Airbnb) avant la mise en ligne.
export const AVIS_SONT_DES_EXEMPLES = true;
export const AVIS: { texte: string; auteur: string; lieu: string; source: string; note: number }[] = [
  { texte: 'Accueil parfait, la villa était impeccable et exactement comme sur les photos. Un vrai suivi pendant tout le séjour.', auteur: 'Exemple', lieu: 'La Croix-Valmer', source: 'Airbnb', note: 5 },
  { texte: 'Un souci avec la piscine réglé dans la matinée. On sent que la maison est suivie de près.', auteur: 'Exemple', lieu: 'Cavalaire-sur-Mer', source: 'Airbnb', note: 5 },
  { texte: 'Linge de qualité, maison très propre, conseils précieux pour les plages et les restaurants.', auteur: 'Exemple', lieu: 'La Croix-Valmer', source: 'Airbnb', note: 5 },
];
