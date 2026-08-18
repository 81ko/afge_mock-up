(function () {
  "use strict";
  var items = [
    {theme:"70",france:"Soixante-dix",suisse:"Septante",english:"Seventy",trivia:"🇧🇪 ベルギーでも « Septante »。🇨🇦 カナダと🇸🇳 セネガルはフランスと同じです。"},
    {theme:"80",france:"Quatre-vingts",suisse:"Huitante",english:"Eighty",trivia:"🇨🇭 ジュネーブ州などはフランスと同じですが、ヴォー州などでは « Huitante » を使います。"},
    {theme:"90",france:"Quatre-vingt-dix",suisse:"Nonante",english:"Ninety",trivia:"🇧🇪 ベルギーでも « Nonante » を使います。計算しなくてよいので論理的です。"},
    {theme:"朝食",france:"Petit-déjeuner",suisse:"Déjeuner",english:"Breakfast",trivia:"🇨🇦 カナダや🇧🇪 ベルギーも « Déjeuner »。フランス式の教育制度を持つ🇸🇳 セネガルは « Petit-déjeuner » です。"},
    {theme:"昼食",france:"Déjeuner",suisse:"Dîner",english:"Lunch",trivia:"🇨🇦 カナダでも昼食を « Dîner » と呼びます。"},
    {theme:"夕食",france:"Dîner",suisse:"Souper",english:"Dinner / Supper",trivia:"🇨🇦 カナダでも夕食は « Souper »。夜にスープを飲む伝統に由来します。"},
    {theme:"携帯電話",france:"Portable / Smartphone",suisse:"Natel",english:"Mobile phone / Cell phone",trivia:"🇨🇦 カナダでは « Cellulaire »、🇧🇪 ベルギーでは « GSM » と呼びます。"},
    {theme:"ビニール袋",france:"Sac en plastique",suisse:"Cornet",english:"Plastic bag",trivia:"🇸🇳 セネガルなどのアフリカ圏では « Sachet »、🇨🇦 カナダは単に « Sac » と呼びます。"},
    {theme:"ドライヤー",france:"Sèche-cheveux",suisse:"Fœhn",english:"Hair dryer",trivia:"アルプスに吹くフェーン現象の風が語源です。🇨🇦 カナダでは « Séchoir »。"},
    {theme:"モップ（床拭き）",france:"Serpillière",suisse:"Panosse",english:"Mop / Floor cloth",trivia:"🇨🇦 カナダ（ケベック州）では « Vadrouille » と言います。"},
    {theme:"ATM（現金自動機）",france:"Distributeur / DAB",suisse:"Bancomat",english:"ATM / Cash machine",trivia:"🇨🇦 カナダでは « Guichet automatique » です。"},
    {theme:"高校",france:"Lycée",suisse:"Gymnase / Collège",english:"High school",trivia:"🇨🇦 カナダでは « École secondaire » など、地域で教育機関の呼び方が異なります。"},
    {theme:"つまずく",france:"Trébucher",suisse:"S’encoubler",english:"To stumble / Trip",trivia:"🇨🇦 カナダでは « S’enfarger » という独自表現を使います。"},
    {theme:"散らかっている状態",france:"Bazar / Désordre",suisse:"Chenit",english:"Mess / Clutter",trivia:"« Faire du chenit »（散らかす）のように使います。🇨🇦 カナダでは « Bordel » も使われます。"},
    {theme:"掃除をする",france:"Faire le ménage",suisse:"Poutzer",english:"To clean / Do the housework",trivia:"🇨🇭 ドイツ語の影響を受けた言葉です。« Faire la poutze » とも言います。"},
    {theme:"セール・特売",france:"Promotion / Soldes",suisse:"Action",english:"Sale / Special offer",trivia:"お店の値札によく « En action » と書かれています。🇨🇦 カナダでは « En spécial »。"},
    {theme:"レシート",france:"Ticket de caisse",suisse:"Quittance",english:"Receipt",trivia:"🇨🇦 カナダでは « Facture » や « Reçu » と言います。"},
    {theme:"バスタオル",france:"Serviette de bain",suisse:"Linge",english:"Bath towel",trivia:"🇫🇷 フランスで « Linge » は一般的に洗濯物を指すため、勘違いされやすい単語です。"},
    {theme:"キッチンペーパー",france:"Essuie-tout / Sopalin",suisse:"Papier ménage",english:"Paper towel / Kitchen roll",trivia:"🇫🇷 « Sopalin » は商品名が一般化したものです。🇨🇦 カナダでは « Essuie-tout »。"},
    {theme:"良い意味で期待を裏切られる",france:"Être agréablement surpris",suisse:"Déçu en bien",english:"To be pleasantly surprised",trivia:"🇨🇭 直訳すると「良い方向にがっかりした」となる、スイス独特の表現です。"},
    {theme:"バカ・マヌケ",france:"Idiot / Imbécile",suisse:"Bobet",english:"Fool / Idiot",trivia:"愛嬌のある響きです。🇨🇦 カナダでは « Cave » や « Épais » というスラングを使います。"},
    {theme:"さようなら / やあ",france:"Salut / Ciao",suisse:"Adieu",english:"Hi / Bye",trivia:"🇫🇷 フランスで « Adieu » は永遠の別れですが、🇨🇭 スイスでは親しい間の挨拶にも使います。"},
    {theme:"（別れ際の）幸運を祈るよ",france:"Bonne continuation",suisse:"Tout de bon",english:"All the best",trivia:"手紙の結びや、お店を出る時にも使われる温かいスイスの表現です。"},
    {theme:"チューインガム",france:"Chewing-gum",suisse:"Chiclette",english:"Chewing gum",trivia:"🇨🇦 カナダでは単に « Gomme » と呼ぶことが多いです。"},
    {theme:"はい、どうぞ / どういたしまして",france:"Voilà / Je vous en prie",suisse:"Service !",english:"Here you are / You’re welcome",trivia:"お店でお釣りを受け取る時などに « Service ! » と返してくれます。"},
    {theme:"水たまり",france:"Flaque d’eau",suisse:"Gouille",english:"Puddle",trivia:"雨上がりに子どもが « Gouille » で遊んだりします。"},
    {theme:"チューする（挨拶など）",france:"Faire la bise",suisse:"Faire un bec",english:"To give a kiss",trivia:"🇨🇦 カナダでも « Donner un bec » という同じ表現を使います。"},
    {theme:"市長",france:"Maire",suisse:"Syndic",english:"Mayor",trivia:"🇨🇭 ヴォー州やフリブール州で使われます。🇨🇦 カナダや🇸🇳 セネガルはフランスと同じ « Maire »。"},
    {theme:"不動産屋",france:"Agence immobilière",suisse:"Régie",english:"Real estate agency",trivia:"🇨🇭 スイスでアパートを探す時は « Régie » の看板を探します。"},
    {theme:"バインダー（文具）",france:"Classeur",suisse:"Fédéral",english:"Ring binder",trivia:"🇨🇭 連邦を意味する « Fédéral » という名前がついた、スイスならではの文房具表現です。"}
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
