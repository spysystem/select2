/**
* select2old Hebrew translation.
*
* Author: Yakir Sitbon <http://www.yakirs.net/>
*/
(function ($) {
    "use strict";

    $.fn.select2old.locales['he'] = {
        formatNoMatches: function () { return "לא נמצאו התאמות"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "נא להזין עוד " + n + " תווים נוספים"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "נא להזין פחות " + n + " תווים"; },
        formatSelectionTooBig: function (limit) { return "ניתן לבחור " + limit + " פריטים"; },
        formatLoadMore: function (pageNumber) { return "טוען תוצאות נוספות…"; },
        formatSearching: function () { return "מחפש…"; }
    };

    $.extend($.fn.select2old.defaults, $.fn.select2old.locales['he']);
})(jQuery);
