(function () {
  "use strict";

  function section(title, body) {
    return '<section class="destination-detail-section"><h4>' + title + '</h4>' + body + '</section>';
  }
  function p(text) { return '<p>' + text + '</p>'; }
  function list(items) { return '<ul>' + items.map(function (item) { return '<li>' + item + '</li>'; }).join('') + '</ul>'; }

  window.AFGE_DESTINATION_DETAILS = {
    paris: {
      title: "Séjours Linguistiques à Paris",
      source: "https://afge.ch/sejours-linguistiques-a-paris/",
      partner: "https://www.alliancefr.org/",
      html: p("Partir en séjours linguistiques à Paris, c’est s’offrir une expérience où la langue française se mêle à une effervescence culturelle incomparable. En partenariat avec l’Alliance Française de Paris, l’AFGE vous propose de perfectionner vos compétences linguistiques au sein d’une institution de renommée mondiale.") +
        p("Étudiant·e, professionnel·le ou passionné·e de culture, vous bénéficiez d’un accompagnement personnalisé par des enseignant·e·s certifié·e·s. Entre les cours et les balades au bord de la Seine, vous découvrez le patrimoine historique et artistique parisien.") +
        section("Trois formules au choix", list([
          "<strong>Séjour à la carte :</strong> programme collectif de 2 semaines, disponible toute l’année, avec suggestions personnalisées.",
          "<strong>Escales parisiennes :</strong> immersion de 2 semaines proposée quatre fois par an, avec activités quotidiennes.",
          "<strong>Séjour parisien Premium :</strong> expérience VIP tout inclus d’une semaine, avec cours sur mesure et visites hors des sentiers battus."
        ])) +
        section("Pédagogie, culture et hébergement", list([
          "Cours intensifs le matin, de 9 h à 13 h, soit 36 heures sur 2 semaines, ou cours thématiques pour la formule Premium.",
          "Montmartre, Le Marais, dégustations, Arc de Triomphe, Opéra Garnier et croisières sur la Seine.",
          "Excursions possibles à Versailles, Chantilly ou Giverny.",
          "Famille d’accueil à Paris ou Versailles ; hôtel 4 étoiles ou plus pour le séjour Premium."
        ]))
    },
    lyon: {
      title: "Séjours Linguistiques à Lyon",
      source: "https://afge.ch/sejours-linguistiques-a-lyon/",
      partner: "https://www.aflyon.org/",
      html: p("Partir en séjours linguistiques à Lyon, c’est choisir de vivre la langue française au cœur d’une métropole classée au patrimoine mondial de l’UNESCO. Ces séjours sont proposés en partenariat étroit avec l’Alliance Française de Lyon. Des programmes sur mesure allient apprentissage rigoureux et découvertes mémorables de la troisième ville de France.") +
        section("Pourquoi choisir Lyon pour un séjour linguistique ?", p("Lyon, capitale de la gastronomie et ville lumière, offre un cadre idéal pour une progression rapide en français. Le partenariat permet de bénéficier de l’expertise d’une institution fondée en 1984, membre du réseau international des Alliances Françaises.") + p("L’enseignement est dispensé par une équipe pédagogique hautement qualifiée, engagée dans le succès de chaque personne et spécialiste des contextes multiculturels.")) +
        section("Une offre pédagogique adaptée à chaque profil", p("Les séjours s’appuient sur le Cadre Européen Commun de Référence pour les Langues. La pédagogie communicative et actionnelle garantit une mise en pratique immédiate des connaissances.") + list([
          "<strong>Cours de français général :</strong> renforcement des compétences globales à tous les niveaux.",
          "<strong>Préparation aux examens :</strong> DELF, DALF et TCF.",
          "<strong>Programmes pour groupes :</strong> parcours thématiques pour établissements scolaires ou entreprises."
        ])) +
        section("Culture lyonnaise et activités", list([
          "<strong>Gastronomie :</strong> ateliers pâtisserie, dégustations et repas dans des bouchons lyonnais.",
          "<strong>Patrimoine :</strong> Vieux-Lyon, croisières sur la Saône et village médiéval d’Oingt.",
          "<strong>Hébergement :</strong> famille d’accueil pour favoriser les échanges quotidiens."
        ]) + p("Les tarifs sont modulables selon les cours, les activités et l’hébergement choisis."))
    },
    bordeaux: {
      title: "Séjours Linguistiques à Bordeaux",
      source: "https://afge.ch/sejours-linguistiques-a-bordeaux/",
      html: p("Laissez-vous séduire par l’élégance de la capitale girondine grâce à des séjours organisés avec l’Alliance Française de Bordeaux. Classée au patrimoine mondial de l’UNESCO, la ville offre un cadre prestigieux et dynamique pour perfectionner le français en immersion totale.") + p("Chaque participant·e effectue un test de positionnement avant d’intégrer un groupe adapté. L’hébergement s’organise en famille d’accueil ou dans une structure hôtelière partenaire.") +
        section("Les informations clés", list([
          "<strong>Rythme :</strong> minimum 1 semaine, avec 4 heures de cours quotidiennes.",
          "<strong>Public :</strong> scolaires, adultes et retraité·e·s dès 16 ans, ou dès 14 ans accompagné·e.",
          "<strong>Hébergement :</strong> famille d’accueil ou structure hôtelière partenaire.",
          "<strong>Transport :</strong> billets gérés par l’Alliance pour les groupes ; réservation individuelle pour les autres séjours.",
          "<strong>Activités :</strong> programme à la carte pour les individuels, activités culturelles et touristiques pour les groupes.",
          "Les tarifs varient selon la saison, le logement et les activités."
        ]))
    },
    montpellier: {
      title: "Séjours Linguistiques à Montpellier",
      source: "https://afge.ch/sejours-linguistiques-a-montpellier/",
      html: p("Laissez-vous séduire par le dynamisme et la douceur de vivre du Sud de la France. Ville millénaire tournée vers l’avenir, Montpellier offre un cadre idéal pour perfectionner le français en immersion totale, en partenariat avec l’Alliance Française de Montpellier.") +
        section("Ce qu’il faut retenir", list([
          "<strong>Programmes :</strong> séjours individuels ou en groupe.",
          "<strong>Public et niveaux :</strong> adultes et jeunes dès 16 ans, de A1 à C1 ; C2 en cours individuel.",
          "<strong>Hébergement :</strong> famille d’accueil, résidence étudiante ou résidence hôtelière.",
          "<strong>Culture et loisirs :</strong> centre historique, sorties à la mer, Nîmes et Saint-Guilhem-le-Désert.",
          "<strong>Offre personnalisable :</strong> tarif modulable selon la durée, l’intensité des cours et le logement."
        ]))
    },
    nice: {
      title: "Séjours Linguistiques à Nice",
      source: "https://afge.ch/sejours-linguistiques-a-nice/",
      html: p("Découvrez une expérience d’apprentissage unique en partenariat avec l’Alliance Française de Nice. Ces programmes permettent aux apprenant·e·s de tous horizons de progresser en français tout en profitant du cadre exceptionnel de la Côte d’Azur.") +
        section("Les informations clés", list([
          "<strong>Public :</strong> programmes dès 16 ans, accessibles à partir du niveau A1.1 ou A1.2 selon la formule.",
          "<strong>Standard :</strong> 12,5 heures par semaine, de 9 h à 11 h 30 du lundi au vendredi.",
          "<strong>Intensif :</strong> 20 heures par semaine, de 9 h à 13 h du lundi au vendredi.",
          "<strong>Super intensif :</strong> 26 heures par semaine, avec 6 heures d’ateliers de pratique orale et écrite les lundis, mardis et jeudis.",
          "Les tarifs varient selon la saison, le logement et les activités choisis."
        ]))
    },
    normandie: {
      title: "Séjours Linguistiques en Normandie",
      source: "https://afge.ch/sejours-linguistiques-en-normandie/",
      html: p("Entre les falaises d’Étretat, les plages du Débarquement et le patrimoine médiéval de Rouen ou Caen, la Normandie offre un cadre paisible et stimulant. Les séjours équilibrent matinées d’apprentissage intensif et après-midi de découverte culturelle.") +
        section("Les informations clés", list([
          "<strong>Rythme :</strong> 20 heures par semaine, de 9 h à 13 h du lundi au vendredi.",
          "<strong>Public :</strong> individuels dès 16 ans ; groupes scolaires dès 10 ans avec accompagnateur.",
          "<strong>Options :</strong> cours collectifs, cours particuliers et préparation DELF, DALF ou DFP.",
          "<strong>Programmes de groupes :</strong> peinture, cuisine ou littérature, pour un minimum de 10 personnes.",
          "<strong>Réservation :</strong> jusqu’à une semaine avant pour les individuels ; 3 à 4 mois d’anticipation pour les groupes.",
          "Devis sur mesure incluant cours, activités et hébergement."
        ]))
    },
    strasbourg: {
      title: "Séjours Linguistiques à Strasbourg",
      source: "https://afge.ch/sejours-linguistiques-a-strasbourg/",
      html: p("Plongez au cœur de la capitale européenne et découvrez l’Alsace avec l’Alliance Française Strasbourg Europe. Canaux, cathédrale et institutions européennes composent un cadre cosmopolite pour apprendre en immersion.") +
        section("Les informations clés", list([
          "<strong>Public :</strong> cours à partir de 16 ans.",
          "<strong>Offre pédagogique :</strong> français général intensif ou extensif et ateliers de perfectionnement, de 9 h à 13 h du lundi au vendredi.",
          "<strong>Culture :</strong> programmes de découverte de l’Alsace et des institutions européennes.",
          "<strong>Famille d’accueil :</strong> demi-pension annoncée à 40 € par nuitée.",
          "<strong>Résidence hôtelière :</strong> studio pour 1 à 4 personnes, sur devis.",
          "Un service d’aide au logement est proposé au tarif annoncé de 35 €."
        ]))
    },
    savoie: {
      title: "Séjours Linguistiques en Savoie",
      source: "https://afge.ch/sejours-linguistiques-en-savoie/",
      partner: "https://bourgetmyfrench.com/",
      html: p("Près de Genève, les séjours conçus par Bourget My French s’adressent aux adultes qui souhaitent vivre la langue au quotidien. L’approche de Valentine Chetail mêle exigence pédagogique, découvertes culturelles et rencontres humaines dans un cadre naturel ressourçant.") + p("En individuel ou en petit groupe, l’immersion sur mesure ancre le français dans des situations réelles et authentiques.") +
        section("En résumé", list([
          "<strong>Public :</strong> adultes, du niveau A1 au C1.",
          "<strong>Format :</strong> pratique active en individuel ou petit groupe, centrée sur l’oral.",
          "<strong>Programme Essentiel :</strong> 8 heures de cours, moments de vie avec les hôtes et activités de découverte ; dès 1 230 CHF membre AFGE ou 1 300 CHF non-membre pour 6 jours.",
          "<strong>Programme Intensif :</strong> 15 heures de cours, demi-pension ou pension complète et activités adaptées ; dès 1 830 CHF membre ou 1 900 CHF non-membre."
        ]))
    },
    toulouse: {
      title: "Séjours Linguistiques à Toulouse",
      source: "https://afge.ch/sejours-linguistiques-a-toulouse/",
      html: p("Entre patrimoine historique et dynamisme aéronautique, les séjours organisés avec l’Alliance Française Toulouse offrent aux apprenant·e·s de plus de 16 ans une progression rapide dans un cadre authentique et convivial.") + p("Chaque séjour est personnalisable, avec hébergement en famille d’accueil ou en résidence partenaire.") +
        section("Trois parcours thématiques", list([
          "<strong>Immersion France :</strong> langue et culture.",
          "<strong>Douce France :</strong> séjour itinérant clé en main.",
          "<strong>Curriculum France :</strong> découverte de l’enseignement supérieur français."
        ])) +
        section("En résumé", list([
          "Dès 16 ans, avec autorisation parentale pour les mineur·e·s.",
          "Pratique active en individuel ou petit groupe pour favoriser l’oral.",
          "Tarifs modulables selon les cours, le logement et les activités."
        ]))
    },
    "pays-basque": {
      title: "Séjours Linguistiques au Pays Basque",
      source: "https://afge.ch/sejours-linguistiques-au-pays-basque/",
      html: p("En partenariat avec Be My Guest, vivez le français au plus près de celles et ceux qui le font vibrer. Entre océan et montagnes, le Pays Basque associe culture, gastronomie et pratique intensive de la langue.") + p("Sarah vous accueille dans sa maison traditionnelle du XVIIIe siècle à Saint-Martin-de-Seignanx, à dix minutes de Bayonne. L’immersion en solo ou en duo est adaptée à vos besoins et à vos envies.") +
        section("Une immersion entièrement personnalisée", list([
          "Cours sur mesure pour améliorer efficacement les compétences linguistiques.",
          "Repas partagés à la maison et au restaurant.",
          "Préparation de recettes traditionnelles et découvertes gastronomiques.",
          "Chambre spacieuse et salle de bain privée.",
          "Grand jardin avec piscine."
        ]))
    },
    "aix-marseille": {
      title: "Séjours Linguistiques à Aix-Marseille",
      source: "https://afge.ch/sejours-linguistiques-a-aix-marseille/",
      html: p("Vivez une expérience au cœur du Sud de la France avec l’Alliance Française Aix-Marseille Provence. Choisissez le charme historique d’Aix-en-Provence ou le dynamisme méditerranéen de Marseille pour une immersion totale.") +
        section("Marseille", list([
          "<strong>Cours sur mesure :</strong> français général du A1 au C1, cours thématiques ou français sur objectifs spécifiques.",
          "<strong>Culture :</strong> Le Panier, Vieux-Port, MuCEM et Notre-Dame de la Garde.",
          "<strong>Excursions :</strong> Arles, Avignon, Camargue ou Monaco.",
          "<strong>Hébergement :</strong> famille ou résidence dès 18 ans ; auberge de jeunesse dès 16 ans."
        ])) +
        section("Aix-en-Provence", list([
          "Cours Mirabeau, marchés colorés et traces de Cézanne.",
          "Calissons, dégustations de vins et fromages locaux.",
          "Famille d’accueil ou résidence hôtelière dès 18 ans."
        ]) + p("Les tarifs sont modulables selon la formule choisie."))
    }
  };
}());
