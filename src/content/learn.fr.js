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
 * * `djassa-BE/docs/business/BUSINESS-MODEL.md` (value equation) and
 *   `djassa-BE/docs/business/MARKET.md` § 9 (merchant fees) for the revenue
 *   lines and the per-outlet arithmetic, labelled illustrative.
 */
export const learnFr = {
  kicker: '02 / Démonstration',
  title: 'Deux applications.',
  titleEm: 'Un seul événement.',
  lede:
    'Le commerçant enregistre une vente. Le client paie et gagne des points. Les deux gestes écrivent le même flux d’événements, tout comme un paiement Wave que le commerçant reçoit déjà, capturé automatiquement. Ce flux est la preuve dont un prêteur a besoin.',
  howTo:
    'Choisissez une application, puis avancez écran par écran. Chaque écran est commenté sur trois axes : la force du concept qu’il porte, le contrôle de sécurité qu’il applique, et la ligne de revenu qu’il alimente.',
  fidelity:
    'Écrans reconstitués depuis le code des deux applications Flutter (branche integration), en français comme dans le produit — y compris l’absence d’accents dans l’application commerçant, qui est un choix documenté pour les écrans bon marché. Montants, noms de commerce et numéros sont des exemples.',

  apps: [
    {
      id: 'retailer',
      label: 'Commerçant',
      file: 'djassa-App-retailer',
      tag: 'Hors ligne d’abord',
      pitch:
        'Le même style que l’application client, pour qu’elles forment un seul produit, mais conçue pour un étal en plein soleil sur un téléphone d’entrée de gamme : cibles de 52 dp, texte de 15 sp minimum, état de synchronisation en mots plus une icône, rien qui attende le réseau.',
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
          'Ligne 1 — abonnement commerçant, la première ligne recommandée. La conversion se joue au jour 30, quand cet écran a accumulé assez d’activité pour valoir un prix, et non au jour 0. Formules et paiements sont tenus dans un registre de facturation en ajout seul ; pendant le pilote, le virement mobile money est saisi à la main.',
      },
      {
        id: 'record',
        name: 'Enregistrer une vente',
        summary:
          'Un montant, une catégorie, un client optionnel. Rien n’attend le réseau : la confirmation arrive dès que la ligne est écrite sur le disque, et la synchronisation se fait derrière. Avec le numéro du client, vérifié sur le téléphone tant qu’il est encore là, une vente en espèces lui rapporte les points du commerce ; la liste affiche alors « +25 pts », et l’écran Points client lui remet sa récompense. Sans application client.',
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
          'La mise en avant payante n’est jamais auto-attribuée : seul un administrateur peut vendre un placement, qui prend fin avec sa période. Un commerçant ne peut pas se sponsoriser lui-même, et le placement sponsorisé est affiché comme tel côté client.',
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
          'Chaque placement est désormais enregistré — offre, période, prix, statut de paiement, vendeur — et expire de lui-même. Les créneaux sont plafonnés par commune et par catégorie : c’est la rareté qui leur donne de la valeur.',
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
          'Aucun frais pour le client, jamais. Ce parcours Djassa sert de solution de repli pour les commerçants dont le Wave n’est pas capturé automatiquement : son partage de revenu est une ligne mineure (4) et ne doit jamais coûter au commerçant plus cher que son QR Wave aujourd’hui.',
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
          'Lignes 4 et 5. Le rapprochement des règlements du prestataire avec le registre interne n’est pas encore implémenté : c’est un prérequis explicite avant tout usage financier réel.',
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
          'Chaque reçu réussi est un événement confirmé par le prestataire, exactement comme un paiement Wave capturé sur le QR du commerçant. La part du chiffre confirmée ainsi est ce qu’un analyste crédit veut voir.',
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
      'La source privilégiée ne demande aucune application : un paiement sur le QR Wave du commerçant est capturé automatiquement et rapporte des points au client. Les ventes en espèces se déclarent depuis le téléphone. Chaque source vit dans le même flux avec une étiquette explicite — confirmé par le prestataire, ou déclaré par le commerçant. Un partenaire qui audite l’export trouvera la distinction ; la ranger dans une seconde table serait la perdre.',
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
      'Classées selon qu’elles suivent directement la valeur apportée au commerçant, et par nombre de dépendances externes. Aucune ne prélève sur chaque vente plus que ce que le commerçant paie aujourd’hui, aucune ne suppose l’approbation d’un crédit, et la commission d’apport partenaire — la plus grosse à terme — n’a pas sa place dans une prévision de première année.',
    illustrativeLabel: 'Illustratif',
    mathTitle: 'Un point de vente : pourquoi nous nous appuyons sur Wave au lieu de le remplacer',
    math: [
      { value: '3 000 000 F', label: 'encaissés par mois et par point de vente', detail: '40 ventes/jour × 2 500 F, maquis type' },
      { value: '≈ 70 000 F', label: 'surcoût mensuel si les paiements étaient détournés', detail: '60 % payés en mobile money : ~3 % + 50 F par vente via un agrégateur, contre ~1 % sur son propre Wave' },
      { value: '5 000 – 10 000 F', label: 'hypothèse d’abonnement', detail: 'Peu, face à la marge que rapportent les clients qui reviennent' },
    ],
    mathVerdict:
      'Prendre une part des paiements obligerait le commerçant à passer sur un rail plus cher, ce qui lui coûterait plus que l’abonnement et plus que ce que la fidélité rapporte. Djassa se branche donc sur le QR Wave que le commerçant utilise déjà, et fait payer ce qu’il ajoute : des clients qui reviennent, et la preuve de son activité.',
    mathSource: 'Chiffres illustratifs, non contractuels. Frais : Kolonell 2026 (Wave ~1 %, CinetPay ~3 % + 50 F). À revérifier avec les commerçants du pilote.',
    linesTitle: 'Ordre des lignes de revenu',
    lines: [
      {
        step: '01',
        title: 'Abonnement commerçant',
        body: 'Mensuel par point de vente, avec une formule gratuite plafonnée. Converti au jour 30 sur l’écran qui montre au commerçant son chiffre et les clients revenus. Encaissé par mobile money récurrent.',
        depends: 'Capture automatique Wave et activité réelle',
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
        title: 'Packs de messages de réactivation',
        body: 'Faire revenir les clients perdus. Coût de message répercuté de façon transparente, plus une marge, sur le canal déjà choisi pour les notifications.',
        depends: 'Fonction campagnes, phase 2',
        state: 'Plus tard',
        tone: 'later',
      },
      {
        step: '04',
        title: 'Partage du revenu de paiement',
        body: 'Ligne mineure, sur les seuls paiements du parcours Djassa, là où le prestataire agréé l’autorise. Jamais plus cher que ce que le commerçant paie sur son propre Wave.',
        depends: 'Accord agrégateur au niveau du tarif Wave ou en dessous',
        state: 'Mineure',
        tone: 'later',
      },
      {
        step: '05',
        title: 'Frais d’orchestration de tontine',
        body: 'Pourcentage transparent par cotisation, sur un flux de fonds opéré par un prestataire agréé.',
        depends: 'Prestataire réel et avis juridique',
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
      { title: 'Rendre le paiement plus cher', body: 'Aucun frais pour le client, et jamais plus pour le commerçant que son propre Wave. Sinon l’espèce gagne aussitôt, et l’événement qui porte tout le reste disparaît.' },
      { title: 'Convertir les points en argent', body: 'Interdit jusqu’à l’existence d’un partenaire agréé, et hors de notre périmètre même après.' },
      { title: 'Vendre des données de transaction identifiables', body: 'La donnée se construit avec le consentement de la personne concernée ; elle ne se revend pas.' },
      { title: 'Devenir le prêteur', body: 'Ni dépôt détenu, ni crédit accordé, ni promesse d’approbation. Le partenaire agréé garde ce rôle.' },
    ],
    moatTitle: 'Le vrai fossé',
    moat:
      'La part du chiffre d’un commerçant confirmée par un prestataire de paiement, qu’elle soit capturée sur son propre Wave ou payée via Djassa, est un fossé plus solide que le programme de fidélité. Elle ne s’achète pas : elle s’accumule un événement à la fois sans demander au commerçant de changer sa façon d’encaisser, et la fidélité donne à ses clients une raison de payer en numérique.',
    gateNote:
      'Rien de tout cela ne justifie une expansion : aucun second corridor avant que le premier n’ait démontré ses seuils d’économie unitaire.',
    gateLink: 'Voir les seuils du modèle',
  },
}
