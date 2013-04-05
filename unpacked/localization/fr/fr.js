MathJax.Hub.Insert(MathJax.Localization.strings.fr,{
  isLoaded: true,
  domains: {
    "_": {
      isLoaded: true,
      strings: {

        CookieConfig:
          "MathJax a trouvé un cookie de configuration utilisateur qui inclut "+
          "du code à exécuter. Souhaitez vous l'exécuter?\n\n"+
          "(Choisissez Annuler sauf si vous avez créé ce cookie vous-même",

        MathProcessingError:
          "Erreur de traitement de la formule mathématique",

        MathProcessingErrorHTML:
          ["[Erreur de traitement de la formule mathématique]"],

        MathErrorHTML:
          ["[Erreur dans la formule mathématique]"],

        LoadFile: "Téléchargement %1",

        Loading: "Téléchargement",

        LoadFailed: "Échec du téléchargement de %1",

        ProcessMath: "Traitement des formules: %1%%",

        Processing: "Traitement",

        TypesetMath: "Composition des formules: %1%%",

        Typesetting: "Composition",

        MathJaxNotSupported:
          "Votre navigateur ne supporte pas MathJax"

      }
    },
    MathMenu: {},
    FontWarnings: {},
    "v1.0-warning": {},
    TeX: {},
    MathML: {},
    "HTML-CSS": {}
  },

  plural: function(n) {
    if (0 <= n && n < 2) {return 1} // one
    return 2; // other
  },

  number: function(n) {
    return String(n).replace(".", ","); // replace dot by comma
  }

});

MathJax.Ajax.loadComplete("[MathJax]/localization/fr/fr.js");
