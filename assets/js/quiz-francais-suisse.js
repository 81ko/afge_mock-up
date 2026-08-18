(function () {
  "use strict";
  var items = [
    {theme:"Le nombre 70",france:"Soixante-dix",suisse:"Septante",english:"Seventy",trivia:"🇧🇪 On dit également « septante » en Belgique. 🇨🇦 Au Canada et 🇸🇳 au Sénégal, l’usage est le même qu’en France."},
    {theme:"Le nombre 80",france:"Quatre-vingts",suisse:"Huitante",english:"Eighty",trivia:"🇨🇭 À Genève, on dit généralement « quatre-vingts », comme en France. « Huitante » est notamment employé dans le canton de Vaud."},
    {theme:"Le nombre 90",france:"Quatre-vingt-dix",suisse:"Nonante",english:"Ninety",trivia:"🇧🇪 « Nonante » est également utilisé en Belgique. Cette forme suit directement la logique décimale."},
    {theme:"Le petit-déjeuner",france:"Petit-déjeuner",suisse:"Déjeuner",english:"Breakfast",trivia:"🇨🇦 Au Canada et 🇧🇪 en Belgique, on dit aussi « déjeuner ». 🇸🇳 Au Sénégal, « petit-déjeuner » est courant comme en France."},
    {theme:"Le repas de midi",france:"Déjeuner",suisse:"Dîner",english:"Lunch",trivia:"🇨🇦 Au Canada, le repas de midi est également appelé « dîner »."},
    {theme:"Le repas du soir",france:"Dîner",suisse:"Souper",english:"Dinner / Supper",trivia:"🇨🇦 Au Canada aussi, le repas du soir est le « souper ». Le terme est lié à l’ancienne tradition de manger une soupe le soir."},
    {theme:"Le téléphone portable",france:"Portable / Smartphone",suisse:"Natel",english:"Mobile phone / Cell phone",trivia:"🇨🇦 Au Canada, on dit « cellulaire » ; 🇧🇪 en Belgique, on emploie souvent « GSM »."},
    {theme:"Le sac en plastique",france:"Sac en plastique",suisse:"Cornet",english:"Plastic bag",trivia:"🇸🇳 Au Sénégal et dans plusieurs pays d’Afrique francophone, on dit « sachet ». 🇨🇦 Au Canada, « sac » suffit souvent."},
    {theme:"Le sèche-cheveux",france:"Sèche-cheveux",suisse:"Fœhn",english:"Hair dryer",trivia:"Le mot évoque le fœhn, vent chaud et sec des Alpes. 🇨🇦 Au Canada, on dit souvent « séchoir »."},
    {theme:"La serpillière",france:"Serpillière",suisse:"Panosse",english:"Mop / Floor cloth",trivia:"🇨🇦 Au Québec, on emploie le mot « vadrouille »."},
    {theme:"Le distributeur de billets",france:"Distributeur / DAB",suisse:"Bancomat",english:"ATM / Cash machine",trivia:"🇨🇦 Au Canada, on parle de « guichet automatique »."},
    {theme:"L’établissement secondaire",france:"Lycée",suisse:"Gymnase / Collège",english:"High school",trivia:"🇨🇦 Au Canada, on rencontre notamment « école secondaire ». Le nom des établissements varie beaucoup selon les systèmes scolaires."},
    {theme:"Trébucher",france:"Trébucher",suisse:"S’encoubler",english:"To stumble / Trip",trivia:"🇨🇦 Au Canada, l’expression régionale « s’enfarger » est couramment employée."},
    {theme:"Le désordre",france:"Bazar / Désordre",suisse:"Chenit",english:"Mess / Clutter",trivia:"On dit par exemple « faire du chenit » pour parler du fait de mettre le désordre. 🇨🇦 Au Canada, « bordel » s’entend aussi dans un registre familier."},
    {theme:"Faire le ménage",france:"Faire le ménage",suisse:"Poutzer",english:"To clean / Do the housework",trivia:"🇨🇭 Ce mot est influencé par l’allemand. On dit également « faire la poutze »."},
    {theme:"Une promotion",france:"Promotion / Soldes",suisse:"Action",english:"Sale / Special offer",trivia:"Dans les magasins suisses, on voit souvent « en action » sur les étiquettes. 🇨🇦 Au Canada, on dit « en spécial »."},
    {theme:"Le reçu",france:"Ticket de caisse",suisse:"Quittance",english:"Receipt",trivia:"🇨🇦 Au Canada, on emploie « facture » ou « reçu »."},
    {theme:"La serviette de bain",france:"Serviette de bain",suisse:"Linge",english:"Bath towel",trivia:"🇫🇷 En France, « linge » désigne généralement le linge au sens large, ce qui peut créer des malentendus."},
    {theme:"Le papier absorbant",france:"Essuie-tout / Sopalin",suisse:"Papier ménage",english:"Paper towel / Kitchen roll",trivia:"🇫🇷 « Sopalin » est une marque devenue un nom courant. 🇨🇦 Au Canada, on dit « essuie-tout »."},
    {theme:"Une bonne surprise",france:"Être agréablement surpris",suisse:"Déçu en bien",english:"To be pleasantly surprised",trivia:"🇨🇭 Littéralement « déçu dans le bon sens », cette expression est particulièrement caractéristique du français de Suisse."},
    {theme:"Une personne peu maligne",france:"Idiot / Imbécile",suisse:"Bobet",english:"Fool / Idiot",trivia:"« Bobet » a une sonorité plutôt affectueuse. 🇨🇦 Au Canada, « cave » et « épais » sont des termes familiers."},
    {theme:"Saluer ou prendre congé",france:"Salut / Ciao",suisse:"Adieu",english:"Hi / Bye",trivia:"🇫🇷 En France, « adieu » évoque une séparation définitive. 🇨🇭 En Suisse, il peut servir de salutation quotidienne entre proches."},
    {theme:"Souhaiter une bonne continuation",france:"Bonne continuation",suisse:"Tout de bon",english:"All the best",trivia:"Cette formule chaleureuse s’emploie à la fin d’une lettre ou lorsque l’on quitte un commerce."},
    {theme:"Le chewing-gum",france:"Chewing-gum",suisse:"Chiclette",english:"Chewing gum",trivia:"🇨🇦 Au Canada, on dit souvent simplement « gomme »."},
    {theme:"Dire « voilà » ou remercier",france:"Voilà / Je vous en prie",suisse:"Service !",english:"Here you are / You’re welcome",trivia:"Dans un commerce, on peut entendre « Service ! » lorsque l’on vous rend la monnaie ou vous remet un achat."},
    {theme:"Une flaque d’eau",france:"Flaque d’eau",suisse:"Gouille",english:"Puddle",trivia:"Après la pluie, les enfants suisses peuvent aller jouer dans les « gouilles »."},
    {theme:"Embrasser pour saluer",france:"Faire la bise",suisse:"Faire un bec",english:"To give a kiss",trivia:"🇨🇦 Au Canada, on emploie aussi « donner un bec » pour dire embrasser."},
    {theme:"Le maire",france:"Maire",suisse:"Syndic",english:"Mayor",trivia:"🇨🇭 « Syndic » est notamment employé dans les cantons de Vaud et de Fribourg. 🇨🇦 Au Canada et 🇸🇳 au Sénégal, on dit « maire » comme en France."},
    {theme:"L’agence immobilière",france:"Agence immobilière",suisse:"Régie",english:"Real estate agency",trivia:"🇨🇭 Pour chercher un appartement en Suisse, il est utile de repérer les annonces et les enseignes des « régies »."},
    {theme:"Le classeur",france:"Classeur",suisse:"Fédéral",english:"Ring binder",trivia:"🇨🇭 Le nom « fédéral », qui évoque la Confédération, est une appellation typiquement suisse pour ce type de fourniture."}
  ];
  var order = items.slice();
  var index = 0;
  var revealed = false;
  var theme = document.getElementById("quizTheme");
  if (!theme) return;
  var france = document.getElementById("quizFrance");
  var suisse = document.getElementById("quizSuisse");
  var english = document.getElementById("quizEnglish");
  var trivia = document.getElementById("quizTrivia");
  var answer = document.getElementById("quizAnswer");
  var reveal = document.getElementById("quizReveal");
  var progress = document.getElementById("quizProgress");
  var meter = document.getElementById("quizMeter");
  function render() {
    var item = order[index];
    theme.textContent = item.theme;
    france.textContent = item.france;
    suisse.textContent = item.suisse;
    english.textContent = item.english;
    trivia.textContent = item.trivia;
    progress.textContent = "Question " + (index + 1) + " / " + order.length;
    meter.style.width = ((index + 1) / order.length * 100) + "%";
    revealed = false;
    answer.hidden = true;
    reveal.hidden = false;
    reveal.focus({preventScroll:true});
  }
  reveal.addEventListener("click", function () { revealed = true; answer.hidden = false; reveal.hidden = true; });
  document.getElementById("quizNext").addEventListener("click", function () { index = (index + 1) % order.length; render(); });
  document.getElementById("quizPrev").addEventListener("click", function () { index = (index - 1 + order.length) % order.length; render(); });
  document.getElementById("quizShuffle").addEventListener("click", function () {
    for (var i = order.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var tmp = order[i]; order[i] = order[j]; order[j] = tmp; }
    index = 0; render();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !revealed) reveal.click();
    if (event.key === "ArrowRight") document.getElementById("quizNext").click();
    if (event.key === "ArrowLeft") document.getElementById("quizPrev").click();
  });
  render();
}());
