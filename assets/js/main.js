(function () {
  "use strict";

  /* ---------- Mobile nav ---------- */
  var openBtn = document.getElementById("navBurger");
  var closeBtn = document.getElementById("mpClose");
  var panel = document.querySelector(".mobile-panel");
  function openPanel() {
    panel.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closePanel() {
    panel.classList.remove("open");
    document.body.style.overflow = "";
  }
  if (openBtn && panel) {
    openBtn.addEventListener("click", openPanel);
    if (closeBtn) closeBtn.addEventListener("click", closePanel);
    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closePanel);
    });
  }

  /* ---------- Shared navigation additions ---------- */
  var inPages = /\/pages\//.test(window.location.pathname);
  var localRoot = inPages ? "../" : "";
  var localPages = localRoot + "pages/";
  var assetRoot = localRoot + "assets/";
  document.querySelectorAll('[data-i18n="nav-partenaires"], a[href$="#partenaires"]').forEach(function (link) { link.setAttribute("href", localPages + "partenaires.html"); });
  document.querySelectorAll('[data-i18n="nav-evenements"]').forEach(function (link) {
    link.setAttribute("href", localPages + "evenements.html");
  });
  document.querySelectorAll('[data-i18n="nav-adherer"]').forEach(function (link) {
    link.setAttribute("href", localPages + "adherer.html");
  });
  document.querySelectorAll('[data-i18n="nav-don"], [data-i18n="footer-l8"], a[href^="mailto:info@afge.ch?subject=Don"]').forEach(function (link) {
    link.setAttribute("href", localPages + "faire-un-don.html");
  });
  document.querySelectorAll('[data-i18n="dd-entreprise"]').forEach(function (label) {
    var link = label.closest("a");
    if (!link || link.parentElement.querySelector(".nav-exam-prep-link")) return;
    var examLink = document.createElement("a");
    examLink.className = "nav-exam-prep-link";
    examLink.href = localPages + "preparation-aux-examens.html";
    examLink.innerHTML = '<span>Préparation aux examens</span><small>DELF-DALF · TEF · TCF</small>';
    link.insertAdjacentElement("afterend", examLink);
  });
  document.querySelectorAll('.mobile-panel [data-i18n="dd-entreprise"]').forEach(function (label) {
    var link = label.closest("a");
    if (!link || panel.querySelector(".mp-exam-prep")) return;
    var examLink = document.createElement("a");
    examLink.className = "mp-sub mp-exam-prep";
    examLink.href = localPages + "preparation-aux-examens.html";
    examLink.textContent = "Préparation aux examens";
    link.insertAdjacentElement("afterend", examLink);
  });
  document.querySelectorAll('a[href*="afge.ch/nos-actualites"]').forEach(function (link) {
    link.setAttribute("href", localPages + "actualites.html");
    link.removeAttribute("target");
    link.removeAttribute("rel");
  });
  document.querySelectorAll(".nav-dropdown").forEach(function (dropdown) {
    if (!dropdown.querySelector('[data-i18n="nav-alliance"]')) return;
    var menu = dropdown.querySelector(".dd-menu");
    var about = menu && menu.querySelector('[data-i18n="nav-qui"]');
    var faq = menu && menu.querySelector('[data-i18n="nav-faq"]');
    if (!menu || !about) return;
    if (faq) {
      faq.remove();
    }
    if (!menu.querySelector(".nav-news-link") && !menu.querySelector('[data-i18n="nav-news"]') && !menu.querySelector('a[href*="actualites"]')) {
      var news = document.createElement("a");
      news.className = "nav-news-link";
      news.href = localPages + "actualites.html";
      news.innerHTML = '<span data-i18n="nav-news">Actualités</span><small>La vie de l’AFGE</small>';
      about.insertAdjacentElement("afterend", news);
    }
    if (!menu.querySelector('.nav-quiz-link')) {
      var quizLink = document.createElement("a");
      quizLink.className = "nav-quiz-link";
      quizLink.href = localPages + "quiz-francais-suisse.html";
      quizLink.innerHTML = '<span>Quiz français de Suisse</span><small>30 expressions à découvrir</small>';
      var partnerLink = menu.querySelector('a[href*="partenaires"]');
      if (partnerLink) partnerLink.insertAdjacentElement("afterend", quizLink);
      else about.insertAdjacentElement("afterend", quizLink);
    }
    var navLinks = dropdown.parentElement;
    if (navLinks && !navLinks.querySelector(":scope > .nav-faq-standalone")) {
      var standaloneFaq = document.createElement("a");
      standaloneFaq.className = "nav-faq-standalone";
      standaloneFaq.href = localPages + "faq.html";
      standaloneFaq.setAttribute("data-i18n", "nav-faq");
      standaloneFaq.textContent = "FAQ";
      dropdown.insertAdjacentElement("afterend", standaloneFaq);
    }
  });
  var desktopNav = document.querySelector("nav.mainnav .wrap");
  var navCta = desktopNav && desktopNav.querySelector(".nav-cta");
  if (desktopNav && navCta && !desktopNav.querySelector(".nav-utilities")) {
    var utilities = document.createElement("div");
    utilities.className = "nav-utilities";
    utilities.innerHTML = '<a href="https://afge.ch/panier-achat/" target="_blank" rel="noopener" aria-label="Panier" title="Panier"><img src="' + assetRoot + 'img/icons/shopping-cart.svg" alt="" aria-hidden="true"></a>' +
      '<a href="https://afge.ch/mon-compte-client/" target="_blank" rel="noopener" aria-label="Compte" title="Compte"><img src="' + assetRoot + 'img/icons/user-round.svg" alt="" aria-hidden="true"></a>';
    desktopNav.insertBefore(utilities, navCta);
  }
  if (panel && !panel.querySelector(".mp-new-links")) {
    var existingMobileFaq = panel.querySelector('[data-i18n="nav-faq"]');
    if (existingMobileFaq) existingMobileFaq.remove();
    var existingMobileNews = panel.querySelector('[data-i18n="nav-news"]');
    if (existingMobileNews) existingMobileNews.remove();
    var mobileExtras = document.createElement("div");
    mobileExtras.className = "mp-new-links";
    mobileExtras.innerHTML = '<a href="' + localPages + 'faq.html" data-i18n="nav-faq">FAQ</a>' +
      '<a href="' + localPages + 'actualites.html" data-i18n="nav-news">Actualités</a>' +
      '<a href="' + localPages + 'quiz-francais-suisse.html">Quiz français de Suisse</a>' +
      '<a class="mobile-utility-icon" href="https://afge.ch/panier-achat/" target="_blank" rel="noopener" aria-label="Panier" title="Panier"><img src="' + assetRoot + 'img/icons/shopping-cart.svg" alt="" aria-hidden="true"></a>' +
      '<a class="mobile-utility-icon" href="https://afge.ch/mon-compte-client/" target="_blank" rel="noopener" aria-label="Compte" title="Compte"><img src="' + assetRoot + 'img/icons/user-round.svg" alt="" aria-hidden="true"></a>';
    var mobileAbout = panel.querySelector('[data-i18n="nav-qui"]');
    if (mobileAbout) mobileAbout.insertAdjacentElement("afterend", mobileExtras);
  }

  /* ---------- Social media icons ---------- */
  document.querySelectorAll("footer.site-footer").forEach(function (footer) {
    if (footer.querySelector(".footer-social-icons")) return;
    var social = document.createElement("div");
    social.className = "footer-social-icons";
    social.setAttribute("aria-label", "Réseaux sociaux");
    social.innerHTML = '<a class="social-icon social-instagram" href="https://www.instagram.com/alliance_francaise.geneve/" target="_blank" rel="noopener" aria-label="Instagram de l’Alliance Française de Genève" title="Instagram"><span class="sr-only">Instagram</span></a>' +
      '<a class="social-icon social-linkedin" href="https://ch.linkedin.com/company/alliance-fran%C3%A7aise-gen%C3%A8ve" target="_blank" rel="noopener" aria-label="LinkedIn de l’Alliance Française de Genève" title="LinkedIn"><span aria-hidden="true">in</span><span class="sr-only">LinkedIn</span></a>';
    var footBottom = footer.querySelector(".foot-bottom");
    if (footBottom) footBottom.appendChild(social);
    else footer.querySelector(".wrap").appendChild(social);
  });

  /* ---------- i18n (FR default, JA toggle) ---------- */
  var dict = window.AFGE_I18N || {};
  dict["nav-news"] = dict["nav-news"] || { ja: "ニュース" };
  dict["nav-cart"] = dict["nav-cart"] || { ja: "カート" };
  dict["nav-account"] = dict["nav-account"] || { ja: "アカウント" };
  var frenchOverrides = window.AFGE_FR_OVERRIDES || {};
  Object.keys(frenchOverrides).forEach(function (key) {
    document.querySelectorAll('[data-i18n="' + key + '"]').forEach(function (el) {
      el.innerHTML = frenchOverrides[key];
    });
  });

  /* ---------- Full destination details ---------- */
  var destinationDetails = window.AFGE_DESTINATION_DETAILS || {};
  var destinationOrder = ["paris", "lyon", "bordeaux", "montpellier", "nice", "normandie", "strasbourg", "savoie", "toulouse", "pays-basque", "aix-marseille"];
  document.querySelectorAll(".dest-card").forEach(function (card, index) {
    var city = destinationOrder[index];
    var detail = destinationDetails[city];
    if (!detail) return;
    card.setAttribute("data-city", city);
    var disclosure = document.createElement("details");
    disclosure.className = "destination-detail";
    var partnerLink = detail.partner ? '<a href="' + detail.partner + '" target="_blank" rel="noopener">Site du partenaire ↗</a>' : "";
    disclosure.innerHTML = '<summary><span>Découvrir le séjour en détail</span><span class="detail-plus" aria-hidden="true">＋</span></summary>' +
      '<div class="destination-detail-body"><h3>' + detail.title + '</h3>' + detail.html +
      '<div class="destination-detail-links">' + partnerLink + '<a href="' + detail.source + '" target="_blank" rel="noopener">Voir la page officielle AFGE ↗</a></div>' +
      '<div class="destination-detail-contact"><strong>Des questions sur ce séjour ?</strong><p>Formalités, niveau de langue, prix, devis ou vie locale : notre équipe vous accompagne pour préparer votre immersion.</p><a href="#contact" class="btn btn-primary btn-sm">Nous contacter</a></div></div>';
    card.appendChild(disclosure);
  });

  function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!el.hasAttribute("data-fr-original")) {
        el.setAttribute("data-fr-original", el.innerHTML);
      }
      if (lang === "ja" && dict[key] && dict[key].ja) {
        el.innerHTML = dict[key].ja;
      } else {
        el.innerHTML = el.getAttribute("data-fr-original");
      }
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (!el.hasAttribute("data-fr-ph")) {
        el.setAttribute("data-fr-ph", el.getAttribute("placeholder") || "");
      }
      if (lang === "ja" && dict[key] && dict[key].ja) {
        el.setAttribute("placeholder", dict[key].ja);
      } else {
        el.setAttribute("placeholder", el.getAttribute("data-fr-ph"));
      }
    });
    document.documentElement.setAttribute("lang", lang === "ja" ? "ja" : "fr");
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    try {
      localStorage.setItem("afge-lang", lang);
    } catch (e) {}
  }

  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  var saved = null;
  try {
    saved = localStorage.getItem("afge-lang");
  } catch (e) {}
  if (saved === "ja") applyLang("ja");

  /* ---------- Interactive France map (séjours linguistiques) ---------- */
  var pins = document.querySelectorAll(".map-hotspot");
  if (pins.length) {
    var panels = document.querySelectorAll(".map-info");
    var selectCity = function (city) {
      pins.forEach(function (p) {
        p.classList.toggle("active", p.getAttribute("data-city") === city);
      });
      panels.forEach(function (p) {
        p.classList.toggle("active", p.getAttribute("data-city") === city);
      });
    };
    pins.forEach(function (pin) {
      var city = pin.getAttribute("data-city");
      pin.addEventListener("mouseenter", function () {
        selectCity(city);
      });
      pin.addEventListener("focus", function () {
        selectCity(city);
      });
      pin.addEventListener("click", function () {
        selectCity(city);
      });
    });
  }
})();
