/**
 * select2old German translation
 */
(function ($) {
    "use strict";

    $.fn.select2old.locales['de'] = {
        formatNoMatches: function () { return "Keine Übereinstimmungen gefunden"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Bitte " + n + " Zeichen mehr eingeben"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Bitte " + n + " Zeichen weniger eingeben"; },
        formatSelectionTooBig: function (limit) { return "Sie können nur " + limit + " Eintr" + (limit === 1 ? "ag" : "äge") + " auswählen"; },
        formatLoadMore: function (pageNumber) { return "Lade mehr Ergebnisse…"; },
        formatSearching: function () { return "Suche…"; },
        formatMatches: function (matches) { return matches + " Ergebnis " + (matches > 1 ? "se" : "") + " verfügbar, zum Navigieren die Hoch-/Runter-Pfeiltasten verwenden."; }
    };

    $.extend($.fn.select2old.defaults, $.fn.select2old.locales['de']);
})(jQuery);
