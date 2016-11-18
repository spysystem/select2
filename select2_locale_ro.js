/**
 * select2old Romanian translation.
 */
(function ($) {
    "use strict";

    $.fn.select2old.locales['ro'] = {
        formatNoMatches: function () { return "Nu a fost găsit nimic"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Vă rugăm să introduceți incă " + n + " caracter" + (n == 1 ? "" : "e"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Vă rugăm să introduceți mai puțin de " + n + " caracter" + (n == 1? "" : "e"); },
        formatSelectionTooBig: function (limit) { return "Aveți voie să selectați cel mult " + limit + " element" + (limit == 1 ? "" : "e"); },
        formatLoadMore: function (pageNumber) { return "Se încarcă…"; },
        formatSearching: function () { return "Căutare…"; }
    };

    $.extend($.fn.select2old.defaults, $.fn.select2old.locales['ro']);
})(jQuery);
