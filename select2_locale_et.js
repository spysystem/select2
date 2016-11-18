/**
 * select2old Estonian translation.
 *
 * Author: Kuldar Kalvik <kuldar@kalvik.ee>
 */
(function ($) {
    "use strict";

    $.fn.select2old.locales['et'] = {
        formatNoMatches: function () { return "Tulemused puuduvad"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Sisesta " + n + " täht" + (n == 1 ? "" : "e") + " rohkem"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Sisesta " + n + " täht" + (n == 1? "" : "e") + " vähem"; },
        formatSelectionTooBig: function (limit) { return "Saad vaid " + limit + " tulemus" + (limit == 1 ? "e" : "t") + " valida"; },
        formatLoadMore: function (pageNumber) { return "Laen tulemusi.."; },
        formatSearching: function () { return "Otsin.."; }
    };

    $.extend($.fn.select2old.defaults, $.fn.select2old.locales['et']);
})(jQuery);
