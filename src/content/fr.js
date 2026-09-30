/**
 * French copy. Source of truth for claims: djassa-BE/docs/business/{CONCEPT,
 * MARKET,BUSINESS-MODEL,ROADMAP,PARTNERS}.md.
 *
 * Every market figure carries its own source and date, because the research
 * notes explicitly warn that inclusion figures diverge by methodology
 * (58% World Bank vs. up to 84% local sector) and must never be published as a
 * single unsourced number.
 */
import { learnFr } from './learn.fr.js'

export const fr = {
  locale: 'fr-CI',
  meta: {
    title: 'Djassa — L’infrastructure de preuve du commerce de proximité',
    description:
      'Djassa transforme une seule habitude — enregistrer une vente vérifiée — en historique d’activité exploitable pour les commerçants indépendants d’Abidjan, et en passerelle consentie vers les institutions financières agréées.',
  },
  nav: {
    skip: 'Aller au contenu principal',
    home: 'Djassa — accueil',
    links: [
      { href: '#concept', label: 'Le concept' },
      { href: '#demo', label: 'La démo' },
      { href: '#marche', label: 'Le marché' },
      { href: '#these', label: 'La thèse' },
      { href: '#modele', label: 'Le modèle' },
      { href: '#execution', label: 'L’exécution' },
    ],
    cta: 'Dossier investisseur',
    langLabel: 'Passer en anglais',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
  },
  hero: {
    eyebrow: 'Inclusion financière — construite depuis le commerce local',
    title: 'Le progrès commence au coin de la rue.',
    intro:
      'En Côte d’Ivoire, 25 millions de comptes mobile money coexistent avec un taux de bancarisation de 31 %. L’accès existe ; la preuve d’activité manque. Djassa construit cette preuve à partir de ce qui se passe déjà au comptoir : le client qui paie avec son Wave, le commerçant qui encaisse. Et il en fait une raison pour le client de revenir.',
    primary: 'Lire la thèse d’investissement',
    secondary: 'Comprendre le concept',
    stage: {
      label: 'Stade actuel',
      value: 'Pré-pilote',
      detail: 'Backend et deux applications prototypes (commerçant, client). Pilote Abidjan : 5 à 10 commerçants, à lancer.',
    },
    card: {
      tag: 'DJASSA / TRANSACTION',
      line: 'qui · où · combien · quand',
      holder: 'COMMERÇANT VÉRIFIÉ',
      foot: 'ENREGISTRÉ HORS LIGNE · SYNCHRONISÉ SANS DOUBLON',
    },
    artLabels: {
      top: '01 — La confiance',
      topStrong: 'se construit',
      bottom: 'MOBILE MONEY',
      bottomStrong: '+ RELATION',
      stamp: 'Fait',
      stampStrong: 'ici',
      alt: 'Illustration : une transaction enregistrée devient la carte d’identité économique du commerçant',
    },
  },
  ticker: [
    'Abidjan d’abord',
    'Un seul geste',
    'Hors ligne par défaut',
    'Sur le Wave du commerçant',
    'Consentement explicite',
    'Aucun dépôt détenu',
  ],
  learn: learnFr,
  word: {
    kicker: 'Le nom',
    phonetic: '/dja.sa/',
    pos: 'nom masculin',
    origin: 'Nouchi — la langue de la rue à Abidjan',
    senses: [
      'Marché informel de rue : le marché spontané, au bord de la route ou dans le quartier, où l’on vend de tout, des habits de seconde main aux téléphones, souvent sans étal officiel ni autorisation.',
      'Par extension, la rue, le « quartier » : le monde de l’économie informelle et de la débrouille quotidienne — un milieu rude et vivant où l’on s’en sort grâce aux petits commerces, aux combines et au sens de la rue.',
    ],
    why: 'Nous avons pris ce nom parce que c’est exactement pour eux que nous construisons : les commerçants du djassa, dont l’activité quotidienne est bien réelle mais ne laisse aucune preuve.',
  },
  concept: {
    kicker: '01 / Le concept',
    title: 'Une seule habitude.',
    titleEm: 'Cinq usages.',
    lede:
      'La plupart des outils marchands échouent parce qu’ils demandent une nouvelle habitude à chaque fonctionnalité. Djassa n’en demande qu’une : enregistrer la vente. Tout le reste est une lecture différente du même événement.',
    body:
      'Quand le client paie avec le QR Wave que le commerçant utilise déjà, la vente est capturée automatiquement et le client gagne ses points : zéro geste nouveau, zéro frais en plus. Les ventes en espèces s’enregistrent d’un geste, même hors ligne. La fidélité, l’historique de revenus, le suivi de tontine, l’indicateur de fiabilité et l’export de crédit ne sont pas cinq chantiers successifs : ce sont cinq vues sur un flux d’événements unique, qui deviennent visibles à mesure qu’il s’accumule.',
    coreLabel: 'L’ÉVÉNEMENT',
    coreValue: 'transaction vérifiée',
    coreDetail: 'qui · où · combien · quand',
    nodes: [
      { title: 'Fidélité', detail: 'points attribués automatiquement', phase: 'Phase 1' },
      { title: 'Revenus', detail: 'historique d’activité exportable', phase: 'Phase 1' },
      { title: 'Tontine', detail: 'régularité des cotisations', phase: 'Phase 3' },
      { title: 'Fiabilité', detail: 'indicateur explicable', phase: 'Phase 4' },
      { title: 'Financement', detail: 'dossier transmis au partenaire agréé', phase: 'Phase 5' },
    ],
    note:
      'Conséquence de conception : toute fonctionnalité qui exigerait une deuxième habitude du commerçant est hors périmètre, sauf s’il n’existe aucun autre moyen d’obtenir le signal. Et aucun paiement ne doit coûter au commerçant plus cher qu’aujourd’hui.',
  },
  market: {
    kicker: '02 / Le marché',
    title: 'L’accès est résolu.',
    titleEm: 'L’usage ne l’est pas.',
    lede:
      'Le paradoxe ivoirien est documenté : le portefeuille numérique est quasi universel, mais épargner, emprunter ou prouver son activité reste hors de portée. C’est cet écart — pas l’accès au paiement — qui constitue le gisement.',
    stats: [
      { value: '25 M+', label: 'comptes mobile money actifs', sub: 'pour ~28–31 M d’habitants', source: 'BCEAO, 2024–2026' },
      { value: '2,72 M', label: 'points de paiement marchand', sub: '23,3 % des opérations mobile money (3,3 % en 2020)', source: 'BCEAO via Launch Base Africa, 2024' },
      { value: '31,2 %', label: 'taux de bancarisation strict', sub: '43,6 % avec la microfinance', source: 'Indicateurs nationaux, 2023' },
      { value: '2,9 M', label: 'clients de la microfinance', sub: '+14,3 % en un trimestre', source: 'APSFD-CI, T1 2026' },
      { value: '~20 %', label: 'du PIB porté par les PME', sub: '~23 % des emplois', source: 'Gouvernement ivoirien' },
      { value: '3 860', label: 'PME sous garantie publique', sub: '114,7 Md FCFA garantis, 24,5 % aux femmes', source: 'SGPME, avr. 2026' },
    ],
    gapTitle: 'Ce que l’écart signifie pour nous',
    gaps: [
      {
        title: 'La garantie physique bloque le crédit',
        body:
          'Les PME se heurtent à des exigences de garanties que la majorité ne peut satisfaire. La donnée alternative — historique de vente vérifié — est explicitement identifiée comme substitut partiel possible par les programmes publics.',
      },
      {
        title: 'Les bailleurs cherchent des relais d’exécution',
        body:
          'APIF, SGPME, GUDE-PME, GIZ, BEI, BII : un empilement d’initiatives qui cherchent des partenaires privés de distribution et de données plutôt que de tout opérer en interne. C’est une fenêtre, à condition de comprendre les mécanismes de garantie.',
      },
      {
        title: 'La tontine numérique reste vacante localement',
        body:
          'Des modèles validés existent au Sénégal et au Cameroun depuis 2015–2016. Aucun acteur ivoirien ne domine ce segment, malgré la maturité du mobile money local.',
      },
    ],
    sourceNote:
      'Les chiffres d’inclusion varient selon la source : 58 % (Banque mondiale, Global Findex 2025) contre jusqu’à 84 % selon le secteur fintech local, en raison de méthodologies et de périodes différentes. Nous publions chaque chiffre avec sa source plutôt qu’un agrégat unique, et nous revérifions avant tout usage contractuel.',
  },
  landscape: {
    kicker: '03 / Le positionnement',
    title: 'Là où le marché est déjà pris,',
    titleEm: 'nous n’allons pas.',
    lede:
      'L’écosystème ivoirien est structuré sur trois segments et vide sur un quatrième. Notre positionnement est une conséquence de cette lecture, pas une préférence.',
    columns: ['Segment', 'Acteurs établis', 'Notre position'],
    rows: [
      {
        segment: 'Finances personnelles grand public',
        players: 'Djamo — 17 M$ levés (2025), 4,5 Md$ de transactions traitées',
        stance: 'Évité',
        verdict: 'out',
        why: 'Leader régional établi. Aucun avantage pour un généraliste entrant.',
      },
      {
        segment: 'Paiement B2B et trésorerie PME',
        players: 'Julaya, Hub2 — 55 clients en infrastructure',
        stance: 'Évité',
        verdict: 'out',
        why: 'Marché déjà financé et structuré.',
      },
      {
        segment: 'Paiement marchand et agrégation',
        players: 'Wave (~1 % côté marchand, ~1 M de marchands QR), Orange Money, CinetPay',
        stance: 'Partenaire',
        verdict: 'partner',
        why: 'Nous nous branchons sur le QR que le commerçant utilise déjà. Nous ne lui vendons pas un paiement plus cher.',
      },
      {
        segment: 'Fidélité client, preuve d’activité marchande et tontine numérique',
        players: 'Aucun acteur ivoirien dominant',
        stance: 'Notre place',
        verdict: 'in',
        why: 'Segment vacant localement : les portefeuilles encaissent, mais aucun ne fait revenir le client. Aligné avec le chantier BCEAO sur le scoring alternatif.',
      },
    ],
  },
  thesis: {
    kicker: '04 / La thèse d’investissement',
    title: 'Commencer petit.',
    titleEm: 'Composer grand.',
    lede:
      'Djassa ne demande pas à un marché de croire à une super-app. Il résout d’abord un problème fréquent et monétisable pour le commerçant, puis réutilise la même infrastructure pour faire de l’inclusion financière une réalité progressive et mesurable.',
    cards: [
      {
        icon: '↗',
        label: 'Le wedge',
        title: 'Le commerçant paie pour une valeur visible.',
        body:
          'La fidélité fait revenir les clients : c’est ce que le commerçant voit chaque semaine, et ce pour quoi il paie, avant toute commission financière. Le premier client est celui qui utilise le produit chaque jour — pas un partenaire bancaire hypothétique.',
        proof: 'Premier revenu : abonnement mensuel par point de vente, payé en mobile money, avec une formule gratuite plafonnée. Prix testés pendant le pilote.',
      },
      {
        icon: '∞',
        label: 'L’avantage cumulatif',
        title: 'Chaque vente rend le produit plus utile.',
        body:
          'Plus l’événement est enregistré, plus l’historique devient fiable, les retours clients mesurables et les partenaires financiers intéressés. La donnée n’est pas revendue : elle est construite avec le consentement de la personne concernée. Ailleurs en Afrique, le crédit marchand fondé sur les données de paiement a été suivi de +36 % (Moniepoint) à +42 % (Kopo Kopo) de croissance des transactions.',
        proof: 'La complétude du flux est la barrière à l’entrée — elle ne se rachète pas, elle s’accumule.',
      },
      {
        icon: '◇',
        label: 'La discipline',
        title: 'Le capital suit la preuve.',
        body:
          'Chaque phase a une porte de sortie chiffrée : capture régulière, rétention, renouvellement payant, économie du support. Aucune expansion géographique avant qu’un corridor unique ne soit démontré.',
        proof: 'Un seul corridor validé avant d’ouvrir le deuxième pays de l’UEMOA.',
      },
    ],
    identity: {
      label: 'L’horizon plateforme',
      title: 'Une couche de confiance fédérée — hypothèse, pas promesse.',
      body:
        'Le flux d’événements et la vérification progressive pourraient fonder un service d’identité fédérée pour la Côte d’Ivoire : orchestration du consentement, normalisation des niveaux d’assurance, audit pour les institutions agréées. Djassa ne deviendrait pas propriétaire de l’identité nationale et ne copierait aucune base KYC d’opérateur.',
      guard:
        'Cette direction exige un programme juridique, de gouvernance et de sécurité distinct avec l’ARTCI, la BCEAO, les opérateurs et un conseil local qualifié. Nous la présentons comme une option stratégique en aval du produit marchand — jamais comme une capacité actuelle.',
    },
  },
  model: {
    kicker: '05 / Le modèle économique',
    title: 'Logiciel marchand d’abord,',
    titleEm: 'infrastructure financière ensuite.',
    lede:
      'L’abonnement marchand finance le produit. Les revenus partenaires n’arrivent qu’après un usage fiable, un consentement traçable, une réconciliation propre et un périmètre réglementaire confirmé.',
    streamsTitle: 'Ordre des revenus',
    streams: [
      { step: '01', title: 'Abonnement marchand', detail: 'Mensuel par point de vente, par paliers, avec une formule gratuite plafonnée. Revenu principal du MVP.', status: 'now' },
      { step: '02', title: 'Bons plans à la une et campagnes', detail: 'Emplacement sponsorisé dans l’app client ; messages refacturés en transparence.', status: 'now' },
      { step: '03', title: 'Contrats multi-points de vente', detail: 'Réseaux et associations de commerçants, tarifés séparément.', status: 'next' },
      { step: '04', title: 'Orchestration de paiement', detail: 'Revenu secondaire, jamais plus cher pour le commerçant que son Wave actuel.', status: 'next' },
      { step: '05', title: 'Apport d’affaires consenti', detail: 'Rémunéré par un partenaire agréé : crédit de stock, épargne, tontine.', status: 'later' },
      { step: '06', title: 'Services institutionnels', detail: 'Reporting et réconciliation pour institutions.', status: 'later' },
    ],
    statusLabels: { now: 'MVP', next: 'Après preuve', later: 'Après partenariat' },
    warning:
      'Le revenu d’apport d’affaires n’est pas la première hypothèse du modèle. Il dépend d’un accord partenaire, d’une revue réglementaire, du consentement de l’utilisateur et de résultats financiers mesurables.',
    economicsTitle: 'Ce que nous mesurons par commerçant',
    economics: [
      'Revenu récurrent mensuel',
      'Coût d’acquisition et durée d’onboarding',
      'Clients actifs par point de vente',
      'Taux de retour des clients identifiés',
      'Rétention à 30, 60 et 90 jours',
      'Coût des notifications par point de vente',
      'Coût de support par commerçant',
      'Marge brute par formule',
    ],
    gateTitle: 'Porte d’économie unitaire',
    gateLede: 'Aucune expansion géographique avant que le corridor pilote ne démontre :',
    gates: [
      'Un coût d’acquisition inférieur à douze mois de marge brute attendue',
      'Trois mois consécutifs de rétention ou de renouvellement',
      'Des coûts de support et de messagerie connus par point de vente actif',
      'Une amélioration du réachat que le commerçant comprend',
      'Un chemin vers une marge de contribution positive sans supposer de commission de crédit future',
    ],
  },
  metric: {
    kicker: '06 / La métrique maîtresse',
    title: 'Le signal avant le récit.',
    lede:
      'Une seule métrique gouverne toutes les autres : la part des transactions réelles d’un commerçant effectivement enregistrées dans Djassa. Si ce chiffre est bas, rien en aval ne fonctionne — ni la perception de la fidélité, ni l’indicateur, ni la conversation avec un prêteur.',
    headline: '% des ventes réelles enregistrées',
    headlineSub: 'La métrique que nous regardons avant toute décision de roadmap.',
    comparison: {
      good: { value: '1', label: 'commerçant qui enregistre 90 % de ses ventes pendant 60 jours' },
      bad: { value: '10', label: 'commerçants qui enregistrent 10 % de leurs ventes pendant une semaine' },
      verdict: 'Le premier cas est un résultat. Le second est du bruit de traction.',
    },
    targets: [
      { value: '60+', label: 'jours de capture régulière', detail: 'Durée minimale avant de tirer une conclusion' },
      { value: '30/60/90', label: 'jours de rétention suivis', detail: 'Rétention marchande, pas inscriptions' },
      { value: '1', label: 'corridor à valider', detail: 'Avant toute expansion géographique' },
    ],
  },
  roadmap: {
    kicker: '07 / L’exécution',
    title: 'La confiance',
    titleEm: 'avant la complexité.',
    lede:
      'Une phase n’est pas terminée quand le code est déployé, mais quand des utilisateurs réels l’ont validée. Chaque phase porte sa propre condition de sortie.',
    phases: [
      {
        id: '0',
        name: 'Découverte et conformité',
        state: 'current',
        stateLabel: 'En cours',
        goal: 'Confirmer que le problème, les utilisateurs, les partenaires et le périmètre légal sont réels.',
        items: [
          '5 à 10 entretiens commerçants',
          'Un accord de pilote restreint',
          'Un corridor, un segment, un canal d’acquisition',
          'Accès à l’API Wave Business pour la capture automatique',
          'Revue de la frontière identité/KYC avec le partenaire mobile money',
        ],
        exit: 'Un utilisateur pilote et un partenaire identifiés, aucun blocage non résolu sur le flux de données du MVP.',
      },
      {
        id: '1',
        name: 'MVP fidélité marchande',
        state: 'next',
        stateLabel: 'Suivant',
        goal: 'Enregistrer une activité utile et créer l’usage répété.',
        items: [
          'Capture automatique des paiements Wave existants',
          'Identité marchand et client par numéro (Tier 0)',
          'Points, récompenses et rapport hebdo « clients revenus »',
          'Ventes en espèces hors ligne, synchronisées sans doublon',
          'Exports sous contrôle de consentement',
        ],
        exit: 'Capture régulière mesurée, rétention marchande suivie, conversion payante observée.',
      },
      {
        id: '2',
        name: 'Opérations et réseau',
        state: 'planned',
        stateLabel: 'Planifié',
        goal: 'Rendre le produit marchand répétable dans le premier corridor avant toute complexité financière.',
        items: [
          'Bons plans, campagnes et relance des clients perdus',
          'Onboarding par association et parrainage',
          'Vérification progressive, là où le régulateur l’approuve',
          'Playbook d’onboarding et de support',
        ],
        exit: 'Les commerçants paient ou renouvellent ; l’économie d’acquisition et de support est comprise.',
      },
      {
        id: '3',
        name: 'Tontine numérique',
        state: 'planned',
        stateLabel: 'Planifié',
        goal: 'Aider les groupes existants à suivre cotisations et échéances.',
        items: [
          'Groupes fermés et contrôle d’appartenance',
          'Échéancier et rappels',
          'Traitement idempotent des webhooks',
          'Réconciliation et gestion des litiges',
        ],
        exit: 'Ne démarre pas avant la validation de la volonté de payer sur le produit marchand.',
      },
      {
        id: '4',
        name: 'Indicateur de fiabilité explicable',
        state: 'planned',
        stateLabel: 'Planifié',
        goal: 'Fournir un signal transparent fondé sur l’activité régulière.',
        items: [
          'Entrées de calcul documentées',
          'Explication visible par la personne concernée',
          'Procédure de correction et de recours',
          'Suivi des biais et des résultats',
        ],
        exit: 'Aucun partage tiers sans consentement et revue juridique.',
      },
      {
        id: '5',
        name: 'Services financiers partenaires',
        state: 'planned',
        stateLabel: 'Planifié',
        goal: 'Relier les utilisateurs éligibles à des partenaires d’épargne ou de crédit agréés.',
        items: [
          'Accord partenaire écrit',
          'Contrat de partage de données et de consentement',
          'Flux de fonds direct vers le prestataire agréé',
          'Suivi des apports et des résultats',
        ],
        exit: 'Djassa reste partenaire technologique et de distribution, sauf changement de statut réglementaire.',
      },
    ],
    verification: {
      title: 'Vérification progressive',
      lede:
        'Le niveau de vérification suit le risque de la fonctionnalité, jamais l’inverse. Personne ne traverse un contrôle d’identité complet pour cumuler des points.',
      columns: ['Niveau', 'Usage', 'Vérification minimale', 'Frontière de données'],
      tiers: [
        {
          tier: 'Tier 0',
          use: 'Fidélité et récompenses',
          check: 'Numéro de téléphone ou identifiant lié à l’opérateur',
          boundary: 'Aucun mouvement de fonds, aucun export de crédit',
        },
        {
          tier: 'Tier 1',
          use: 'Tontine ou épargne partenaire',
          check: 'Vérification téléphone + contrôle de vivacité léger, là où la loi l’autorise',
          boundary: 'La preuve biométrique sert à vérifier, pas à constituer une base d’identité',
        },
        {
          tier: 'Tier 2',
          use: 'Export d’historique vers un prêteur agréé',
          check: 'Tier 1 + pièce d’identité nationale et contre-vérification approuvée par le partenaire',
          boundary: 'Seuls les champs explicitement consentis, pour la finalité déclarée',
        },
      ],
      note:
        'Objectif anti-fraude : empêcher une personne de créer plusieurs comptes pour capter des récompenses ou fabriquer un historique — sans surveiller les usages à faible risque.',
    },
  },
  guardrails: {
    kicker: '08 / Nos lignes rouges',
    title: 'Utile avant d’être ambitieux.',
    lede:
      'Ces contraintes ne sont pas un avertissement légal ajouté en bas de page. Elles déterminent ce que nous construisons et ce que nous refusons de vendre.',
    never: [
      { title: 'Aucune promesse de prêt', body: 'Nous ne garantissons ni approbation, ni taux, ni rendement d’épargne.' },
      { title: 'Aucun dépôt détenu par Djassa', body: 'La custody, le crédit et le règlement passent par des institutions agréées.' },
      { title: 'Aucune donnée partagée sans consentement', body: 'Pas de revente de données personnelles ; finalité déclarée, champs limités, révocation possible.' },
      { title: 'Aucun score opaque', body: 'Toute personne concernée par un indicateur peut en voir les entrées et demander correction.' },
      { title: 'Aucun lancement panafricain', body: 'Un pays, un corridor, un segment à la fois — avec partenaire, support et plan de conformité locaux.' },
      { title: 'Aucune base biométrique réutilisable', body: 'Un résultat de vérification ponctuel suffit ; nous préférons une attestation émise par le prestataire.' },
    ],
  },
  status: {
    kicker: '09 / Où nous en sommes',
    title: 'Ce qui est construit, ce qui ne l’est pas.',
    lede:
      'Nous préférons une lecture exacte de l’avancement à une démonstration flatteuse. Voici l’état réel au moment de cette publication.',
    built: {
      label: 'Construit',
      items: [
        'App commerçant : ventes hors ligne synchronisées sans doublon, testée sur un vrai téléphone',
        'App client : maquis, pharmacies de garde, bons plans et points (prototype)',
        'Paiement par QR et fidélité en mode sandbox, sans argent réel',
        'Backend FastAPI : webhooks signés et idempotents, migrations, supervision',
        'Pipeline CI/CD avec contrôles de chaîne d’approvisionnement des images',
      ],
    },
    pending: {
      label: 'À durcir avant tout usage financier réel',
      items: [
        'Connexion par numéro (Tier 0) à la place du compte de démonstration',
        'Capture automatique des paiements Wave et historique unique par commerçant',
        'Prestataire de paiement réel et réconciliation',
        'Autorisation par ressource, secrets de production, revue de sécurité indépendante',
        'Accords partenaires écrits et revue réglementaire',
      ],
    },
    honesty:
      'L’implémentation actuelle est un prototype. Nous le documentons ainsi en interne comme en externe : aucun élément de cette page ne décrit une capacité en production.',
  },
  closing: {
    eyebrow: 'La prochaine étape est humaine',
    title: 'Construisons une économie qui se reconnaît.',
    body:
      'Nous cherchons trois types d’interlocuteurs : des commerçants d’Abidjan prêts à tester, une institution de microfinance intéressée par un pilote consenti et restreint, et des investisseurs qui acceptent qu’une expansion se mérite par la preuve.',
    asks: [
      { who: 'Commerçants', what: 'Un pilote de 5 à 10 points de vente à Abidjan, sur un corridor dense.' },
      { who: 'Institutions et partenaires', what: 'Une revue du flux de données, de la capture des paiements existants et du modèle d’apport consenti.' },
      { who: 'Investisseurs', what: 'Le dossier complet : économie unitaire, portes de sortie par phase, périmètre réglementaire.' },
    ],
    cta: 'Écrire à l’équipe',
    ctaSecondary: 'Demander le dossier',
  },
  footer: {
    rights: '© 2026 Djassa — Abidjan, Côte d’Ivoire',
    note: 'Un produit en construction, avec soin.',
    brandNote:
      'Djassa est un produit unique ; le nom « Dkassa », employé dans des notes anciennes, n’est plus utilisé. Le nom de marque définitif reste à confirmer juridiquement.',
    disclaimer:
      'Document d’information. Ne constitue ni une offre de services financiers, ni une sollicitation d’investissement. Les chiffres de marché sont cités avec leur source et doivent être revérifiés avant tout usage contractuel.',
    sourcesLabel: 'Sources citées',
    sources: 'Banque mondiale (Global Findex 2025) · GSMA · BCEAO · APSFD-CI · APIF-CI · SGPME · indicateurs nationaux 2023 · Launch Base Africa · CGAP · TechCabal',
  },
}
