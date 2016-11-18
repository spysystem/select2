/**
 * select2old Portuguese (Portugal) translation
 */
(function ($) {
    "use strict";

    $.fn.select2old.locales['pt-PT'] = {
        formatNoMatches: function () { return "Nenhum resultado encontrado"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Introduza " + n + " car" + (n == 1 ? "ácter" : "acteres"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Apague " + n + " car" + (n == 1 ? "ácter" : "acteres"); },
        formatSelectionTooBig: function (limit) { return "Só é possível selecionar " + limit + " elemento" + (limit == 1 ? "" : "s"); },
        formatLoadMore: function (pageNumber) { return "A carregar mais resultados…"; },
        formatSearching: function () { return "A pesquisar…"; }
    };

    $.extend($.fn.select2old.defaults, $.fn.select2old.locales['pt-PT']);
})(jQuery);
