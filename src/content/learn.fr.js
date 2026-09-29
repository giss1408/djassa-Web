/**
 * Learning-area copy, French.
 *
 * Split out of fr.js because this one section carries as much text as the rest
 * of the page: ten annotated screens, a control table and the revenue lines.
 * It is merged into the `learn` key of the main dictionary, so the FR/EN parity
 * check in content/index.js still walks it.
 *
 * Sources for every claim, and nothing outside them:
 * * `djassa-App-retailer/lib/` and `djassa-App-user/lib/` for what the screens
 *   do and why (the screen mocks are reconstructions of that code).
 * * `djassa-BE/Architecture/SECURITY.md` for the control matrix and its honest
 *   per-control status — "Prototype", "Partiel" and "À faire" are that
 *   document's words, not a softening of them.
 * * `djassa-BE/docs/BUSINESS-MODEL.md` and
 *   `djassa-BE/docs/optimization_claude_djassa.md` for the revenue lines and
 *   the per-outlet arithmetic, which that document itself labels illustrative.
 */
export const learnFr = {
  kicker: '02 / Démonstration',
  title: 'Deux applications.',
  titleEm: 'Un seul événement.',
  lede:
    'Le commerçant enregistre une vente. Le client paie et gagne des points. Les deux gestes écrivent le même flux d’événements — celui dont un prêteur a besoin et que personne ne produit aujourd’hui en Côte d’Ivoire.',
  howTo:
    'Choisissez une application, puis avancez écran par écran. Chaque écran est commenté sur trois axes : la force du concept qu’il porte, le contrôle de sécurité qu’il applique, et la ligne de revenu qu’il alimente.',
  fidelity:
    'Écrans reconstitués depuis le code des deux applications Flutter, en français comme dans le produit — y compris l’absence d’accents dans l’application commerçant, qui est un choix documenté pour les écrans bon marché. Montants, noms de commerce et numéros sont des exemples.',

  apps: [
    {
      id: 'retailer',
      label: 'Commerçant',
      file: 'djassa-App-retailer',
      tag: 'Hors ligne d’abord',
      pitch:
        'Conçue pour un étal en plein soleil sur un téléphone d’entrée de gamme : contraste élevé, cibles de 48 dp minimum, aucune police d’icônes embarquée, rien qui attende le réseau.',
    },
    {
      id: 'user',
      label: 'Client',
      file: 'djassa-App-user',
      tag: 'Paiement et fidélité',
      pitch:
        'Conçue pour la vie de quartier : trouver son maquis ou sa pharmacie de garde, payer au comptoir par mobile money, et voir ses points monter chez chaque commerçant.',
    },
  ],

  axes: {
    strength: 'Force du concept',
    security: 'Sécurité',
    roi: 'Revenu',
  },
  screenLabel: 'Écran',
  ofLabel: 'sur',
  prev: 'Écran précédent',
  next: 'Écran suivant',
  mockLabel: 'Reconstitution de l’écran',

  screens: {
    retailer: [
      {
        id: 'signin',
        name: 'Connexion',
        summary:
          'Identifiant et mot de passe : le seul mécanisme que le backend expose aujourd’hui. Le concept prévoit à la place une identité Tier 0 ancrée sur le numéro mobile money.',
        strength:
          'Aucune friction inutile à l’entrée. Personne ne passe un contrôle d’identité complet pour enregistrer une vente : le niveau de vérification suit le risque de la fonction, jamais l’inverse.',
        security:
          'Le jeton signé décide de tout ce qui suit, et l’identité de l’utilisateur n’est jamais lue dans le corps d’une requête. Autocomplétion et suggestions sont désactivées, parce qu’un téléphone de marché passe de main en main.',
        roi:
          'Aucune ligne directe, et c’est voulu. Ce que cet écran protège, c’est le temps d’intégration — l’une des économies unitaires que le pilote doit mesurer.',
      },
      {
        id: 'home',
        name: 'Accueil',
        summary:
          'Trois réponses, dans cet ordre : combien j’ai encaissé aujourd’hui, est-ce que quelque chose est encore bloqué sur ce téléphone, et où j’enregistre la vente suivante.',
        strength:
          'Le chiffre du jour est délibérément l’objet le plus grand de l’écran : c’est ce que le commerçant ouvre l’application pour voir. C’est aussi l’écran qui vend l’abonnement — on ne présente pas un logiciel, on montre au commerçant son propre argent.',
        security:
          'La file d’attente est annoncée en mots plutôt qu’en spinner : « 2 en attente d’envoi », « Envoyée », « Refusée ». Un commerçant qui ne sait pas ce qui a quitté son téléphone ne confiera pas sa comptabilité à l’application. L’état est porté par un mot, jamais par une couleur seule.',
        roi:
          'Ligne 3 — abonnement commerçant. La conversion se joue au jour 30, quand cet écran a accumulé assez d’activité pour valoir un prix, et non au jour 0.',
      },
      {
        id: 'record',
        name: 'Enregistrer une vente',
        summary:
          'Un montant, une catégorie, un client optionnel. Rien n’attend le réseau : la confirmation arrive dès que la ligne est écrite sur le disque, et la synchronisation se fait derrière.',
        strength:
          'C’est l’habitude unique sur laquelle tout le reste est bâti. Fidélité, historique de revenus, tontine, indicateur de fiabilité et export de crédit sont cinq lectures du même événement, pas cinq projets successifs.',
        security:
          'Le téléphone ne nomme pas le commerce : le backend déduit le point de vente du compte connecté, ce qui retire au client la possibilité de désigner à quelle entreprise une vente appartient. Le montant saisi est réaffiché formaté avant enregistrement, comme garde-fou contre un chiffre mal tapé.',
        roi:
          'Alimente la métrique maîtresse : la part des ventes réelles effectivement enregistrée. Toutes les lignes de revenu en dépendent et aucune ne survit si ce nombre est bas.',
      },
      {
        id: 'deals',
        name: 'Mes bons plans',
        summary:
          'Les offres du commerçant telles que les clients les verront, et le moyen d’en publier une. Cinq au maximum en même temps.',
        strength:
          'L’offre relie les deux applications sans budget média : elle pousse le commerçant vers l’application client, et l’application client vers le comptoir. Chaque côté rend l’autre plus utile.',
        security:
          'La mise en avant payante n’est jamais auto-attribuée : seul un endpoint d’administration peut la poser. Un commerçant ne peut pas se sponsoriser lui-même, et le placement sponsorisé est affiché comme tel côté client.',
        roi:
          'Ligne 2 — placement d’offre mis en avant. C’est la trésorerie la plus rapide : un commerçant local achète de la publicité bien plus volontiers qu’un abonnement logiciel, et c’est une vente unique plutôt qu’un engagement mensuel.',
      },
      {
        id: 'newdeal',
        name: 'Nouveau bon plan',
        summary:
          'Trois questions — quoi, combien de moins, combien de temps — et un aperçu exact de ce que le client verra avant publication.',
        strength:
          'Une durée à choisir plutôt qu’un calendrier : un commerçant pense « pour une semaine », pas « jusqu’au 14 ». Le produit parle la langue du comptoir, ce qui est la condition pour que l’habitude tienne.',
        security:
          'Titre, pourcentage et prix sont validés sur le téléphone puis au serveur. Un prix promo supérieur au prix normal est refusé avant publication, donc aucune offre incohérente n’atteint les clients.',
        roi:
          'Un enregistrement de placement — offre, période, prix, date de paiement, statut — reste à construire pour qu’un créneau expire et puisse être facturé. C’est exactement la dette qui sépare la ligne 2 d’un revenu réel.',
      },
    ],

    user: [
      {
        id: 'home',
        name: 'Accueil',
        summary:
          'Le point d’entrée quotidien : les points, les quatre choses pour lesquelles on ouvre l’application, et un aperçu de ce qui se passe autour — qui est de garde, où manger, ce qui a été payé.',
        strength:
          'La pharmacie de garde est la seule fonction à traction urgente quotidienne, sans API officielle et sans concurrent qui détienne la donnée. Elle fait venir le client ; le paiement et les points le retiennent.',
        security:
          'Chaque bloc charge indépendamment : un appel lent ne vide pas la page et n’invente pas de contenu. L’écran ne montre que les points et les paiements du compte connecté.',
        roi:
          'Acquisition. La garde est aussi le seul actif de cet écran qui puisse plausiblement être sponsorisé — et son coût réel est la saisie hebdomadaire à la main de la rotation officielle, à budgéter honnêtement plutôt qu’à passer sous silence.',
      },
      {
        id: 'scan',
        name: 'Scanner',
        summary:
          'Étape 1 du paiement : lire le QR code affiché par le commerçant et le faire vérifier par le serveur. La saisie manuelle du code reste possible si la caméra est refusée.',
        strength:
          'Payer occupe le bouton central de la barre, comme dans les applications mobile money : c’est le geste qui fait exister tout le reste, puisqu’il gagne les points du client et construit l’historique du commerçant.',
        security:
          'Rien de ce qui est lu dans le QR n’est affiché ni cru au-delà du code lui-même. Le code part au serveur, et l’écran suivant montre le commerçant que le serveur désigne. Un autocollant contrefait ne peut donc pas afficher un nom de confiance.',
        roi:
          'Ligne 1 — partage du revenu de paiement avec l’agrégateur agréé. C’est la première ligne recommandée : elle s’encaisse d’elle-même, sans relance mensuelle, et suit directement la métrique maîtresse.',
      },
      {
        id: 'pay',
        name: 'Confirmer le paiement',
        summary:
          'Qui vous encaisse, quel montant, avec quel portefeuille. Deux confirmations — cet écran puis une feuille de récapitulatif — avant qu’un franc ne bouge.',
        strength:
          'Les points annoncés avant le paiement sont l’incitation qui achète le changement de comportement : payer par téléphone au comptoir plutôt que tendre des espèces. C’est le vrai rôle de la fidélité dans ce dispositif, et il doit être mesuré comme tel.',
        security:
          'L’argent va du portefeuille du client à celui du commerçant via un prestataire agréé : Djassa ne détient jamais de fonds, et l’écran le dit. Si la requête expire, « Réessayer » renvoie la même clé d’idempotence, le serveur répond avec le paiement d’origine, et le formulaire se verrouille pour empêcher un nouveau montant sous l’ancienne clé.',
        roi:
          'Lignes 1 et 5. Le rapprochement des règlements du prestataire avec le registre interne n’est pas encore implémenté : c’est un prérequis explicite avant tout usage financier réel.',
      },
      {
        id: 'receipt',
        name: 'Reçu',
        summary:
          'Le résultat en mots d’abord — réussi, refusé ou en attente — avec le montant, la référence, le portefeuille utilisé et les points gagnés.',
        strength:
          'La preuve est immédiate et lisible des deux côtés du comptoir : le client voit ses points, le commerçant voit la vente. Un seul événement, deux bénéfices, et c’est la démonstration la plus courte du concept.',
        security:
          'Les états d’un paiement sont explicites — créé, en attente, réussi, refusé, annulé, contesté — et seule une transition autorisée est acceptée. Une signature valide ne suffit jamais à créditer de l’argent : horodatage dans la fenêtre, forme du message, montant, devise et idempotence en base sont vérifiés d’abord.',
        roi:
          'Chaque reçu réussi est une ligne d’événement confirmée par l’agrégateur. La part du chiffre déclaré qui a été confirmée ainsi est précisément ce qu’un analyste crédit veut voir, et personne ne la produit aujourd’hui en Côte d’Ivoire.',
      },
      {
        id: 'loyalty',
        name: 'Ma fidélité',
        summary:
          'Les points par commerce, la progression vers la récompense suivante, et l’historique de ce qui a été gagné ou utilisé, chez qui.',
        strength:
          'Les points se comptent chez chaque commerçant : un maquis ne finance pas les points gagnés à la pharmacie voisine. À l’échelle du pilote, un pool partagé au niveau du quartier est la correction envisagée, avec une table de règlement entre commerçants.',
        security:
          'Les points ne s’échangent pas contre de l’argent, et c’est écrit sur l’écran plutôt que caché dans des conditions générales. Le client voit son propre historique et rien d’autre.',
        roi:
          'Rétention — et un passif à surveiller autant qu’un actif. L’engagement de points doit être plafonné, sinon la promesse finit par coûter plus que la vente qu’elle a produite.',
      },
    ],
  },

  chain: {
    kicker: 'De bout en bout',
    title: 'Le même événement,',
    titleEm: 'lu six fois.',
    lede:
      'Ce que les dix écrans ci-dessus font ensemble. Chaque étape a un propriétaire, et Djassa n’est jamais celui qui détient l’argent.',
    steps: [
      { owner: 'Application client', text: 'Le client scanne le QR code affiché au comptoir.' },
      { owner: 'Backend Djassa', text: 'Le serveur vérifie le code et renvoie le commerçant qu’il désigne, avec le montant demandé.' },
      { owner: 'Prestataire agréé', text: 'L’argent passe du portefeuille du client à celui du commerçant. Djassa ne s’interpose pas dans le flux de fonds.' },
      { owner: 'Backend Djassa', text: 'Le rappel du prestataire est signé, horodaté, idempotent, et enregistré avant tout accusé de réception.' },
      { owner: 'Les deux applications', text: 'Un événement, deux lectures : les points du client d’un côté, le chiffre du commerçant de l’autre.' },
      { owner: 'Phase 5 — partenaire agréé', text: 'Sur consentement explicite et révocable, une attestation de revenus part vers une institution agréée.' },
    ],
    note:
      'Le commerçant peut aussi déclarer une vente en espèces depuis son téléphone. Les deux sources vivent dans le même flux avec une étiquette explicite — confirmé par l’agrégateur, ou déclaré par le commerçant. Un partenaire qui audite l’export trouvera la distinction ; la ranger dans une seconde table serait la perdre.',
  },

  security: {
    kicker: 'Ce que la sécurité protège',
    title: 'Les contrôles,',
    titleEm: 'et où nous en sommes.',
    lede:
      'Les écrans ci-dessus appliquent des contrôles réels. D’autres sont documentés comme requis et ne sont pas faits. Nous publions les deux, parce qu’un partenaire régulé vérifiera de toute façon — et parce que la seule crédibilité disponible à ce stade est l’exactitude.',
    columns: ['Contrôle', 'Ce qu’il empêche', 'État'],
    rows: [
      {
        control: 'Signature et anti-rejeu des rappels prestataire',
        prevents: 'Qu’un message forgé, modifié ou rejoué crédite un paiement.',
        state: 'Prototype',
        tone: 'proto',
      },
      {
        control: 'Idempotence en base sous concurrence',
        prevents: 'Qu’un client soit débité deux fois parce qu’il a réessayé après un délai d’attente.',
        state: 'Prototype',
        tone: 'proto',
      },
      {
        control: 'Propriété de ressource dérivée du jeton',
        prevents: 'Qu’un compte lise, modifie ou exporte les données d’un autre.',
        state: 'Partiel',
        tone: 'partial',
      },
      {
        control: 'Rôles et permissions explicites',
        prevents: 'Qu’un commerçant s’attribue une mise en avant payante ou atteigne des données clients qui ne le concernent pas.',
        state: 'Partiel',
        tone: 'partial',
      },
      {
        control: 'Rapprochement des règlements',
        prevents: 'Qu’un écart entre le rapport du prestataire et le registre interne passe inaperçu.',
        state: 'À faire',
        tone: 'todo',
      },
      {
        control: 'Sessions courtes et révocables',
        prevents: 'Qu’un jeton volé reste valable jusqu’à son expiration naturelle.',
        state: 'À faire',
        tone: 'todo',
      },
      {
        control: 'Vérification progressive Tier 0 / 1 / 2',
        prevents: 'Qu’un contrôle d’identité lourd bloque un usage sans risque — et qu’un export de crédit se fasse sans contrôle.',
        state: 'Conception',
        tone: 'design',
      },
      {
        control: 'Secrets hors du code, avec rotation',
        prevents: 'Qu’une clé de signature fuite par une image, un dépôt ou un journal de build.',
        state: 'Manifestes',
        tone: 'partial',
      },
    ],
    note:
      'Le backend est un prototype et nous le documentons comme tel, à l’intérieur comme à l’extérieur. Il ne doit pas traiter de trafic financier réel avant que l’identité, l’autorisation par ressource, le rapprochement et la revue réglementaire ne soient en place.',
    linkLabel: 'Voir aussi l’état réel du build',
  },

  roi: {
    kicker: 'Ce que les écrans rapportent',
    title: 'Six lignes,',
    titleEm: 'ordonnées par vitesse d’encaissement.',
    lede:
      'Classées par rapidité de trésorerie et par nombre de dépendances externes. Aucune ne suppose l’approbation d’un crédit, et la commission d’apport partenaire — la plus grosse à terme — n’a pas sa place dans une prévision de première année.',
    illustrativeLabel: 'Illustratif',
    mathTitle: 'Un point de vente, deux façons de le monétiser',
    math: [
      { value: '3 000 000 F', label: 'encaissés par mois et par point de vente', detail: '40 ventes/jour × 2 500 F, maquis type' },
      { value: '30 000 F', label: 'par point de vente et par mois', detail: '1 % du volume, partagé avec l’agrégateur agréé' },
      { value: '5 000 – 10 000 F', label: 'abonnement réellement acceptable', detail: 'Ce que le même commerçant accepterait de payer en espèces' },
    ],
    mathVerdict:
      'Le partage du revenu de paiement rapporte plausiblement trois à six fois l’abonnement que le même commerçant accepterait — et il s’encaisse tout seul, sans relance et sans événement de résiliation. Il tombe à zéro quand le commerçant n’en retire rien, ce qui rend l’argumentaire honnête et l’objection petite.',
    mathSource: 'Chiffres illustratifs, non contractuels. Source : notes d’optimisation internes, à revérifier avec les commerçants du pilote.',
    linesTitle: 'Ordre des lignes de revenu',
    lines: [
      {
        step: '01',
        title: 'Partage du revenu de paiement',
        body: 'Commission sur les frais de service de l’agrégateur agréé, qui règle directement le portefeuille du commerçant. Djassa ne touche jamais les fonds.',
        depends: 'Intégration de l’agrégateur',
        state: 'Recommandée en premier',
        tone: 'first',
      },
      {
        step: '02',
        title: 'Placement d’offre mis en avant',
        body: 'Créneau payant déjà présent dans le code, attribuable uniquement par un administrateur, et déjà affiché comme sponsorisé côté client.',
        depends: 'Enregistrement de placement à construire',
        state: 'Presque prête',
        tone: 'near',
      },
      {
        step: '03',
        title: 'Abonnement commerçant',
        body: 'Mensuel par point de vente, converti au jour 30 sur l’écran qui montre au commerçant son propre argent. Encaissé par mobile money récurrent.',
        depends: 'Activité réelle accumulée',
        state: 'À convertir',
        tone: 'near',
      },
      {
        step: '04',
        title: 'Packs de messages de réactivation',
        body: 'Coût de message répercuté de façon transparente, plus une marge. Le canal est déjà celui choisi pour les notifications.',
        depends: 'Fonction campagnes, phase 2',
        state: 'Plus tard',
        tone: 'later',
      },
      {
        step: '05',
        title: 'Frais d’orchestration de tontine',
        body: 'Pourcentage transparent par cotisation, sur un flux de fonds opéré par un prestataire agréé.',
        depends: 'Agrégateur réel et avis juridique',
        state: 'Plus tard',
        tone: 'later',
      },
      {
        step: '06',
        title: 'Commission d’apport partenaire',
        body: 'Payée par un prêteur ou un organisme d’épargne agréé pour un apport qualifié et consenti. La plus grosse ligne à terme, la plus dépendante aussi.',
        depends: 'Accord signé, revue réglementaire, autorisation par ressource',
        state: 'Hors année 1',
        tone: 'blocked',
      },
    ],
    refuseTitle: 'Ce que nous refusons de monétiser',
    refuse: [
      { title: 'Facturer au client le fait de payer', body: 'L’espèce gagnerait immédiatement, et la fonction qui porte tout le reste mourrait.' },
      { title: 'Convertir les points en argent', body: 'Interdit jusqu’à l’existence d’un partenaire agréé, et hors de notre périmètre même après.' },
      { title: 'Vendre des données de transaction identifiables', body: 'La donnée se construit avec le consentement de la personne concernée ; elle ne se revend pas.' },
      { title: 'Devenir le prêteur', body: 'Ni dépôt détenu, ni crédit accordé, ni promesse d’approbation. Le partenaire agréé garde ce rôle.' },
    ],
    moatTitle: 'Le vrai fossé',
    moat:
      'La part du chiffre déclaré par un commerçant qui a été confirmée par l’agrégateur est un fossé plus solide que le programme de fidélité — et personne en Côte d’Ivoire ne la produit aujourd’hui. Elle ne s’achète pas : elle s’accumule, un événement à la fois, ce qui donne aussi au commerçant une raison de pousser ses clients vers le paiement numérique.',
    gateNote:
      'Rien de tout cela ne justifie une expansion : aucun second corridor avant que le premier n’ait démontré ses seuils d’économie unitaire.',
    gateLink: 'Voir les seuils du modèle',
  },
}
