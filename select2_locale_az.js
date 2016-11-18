/**
 * select2old Azerbaijani translation.
 *
 * Author: Farhad Safarov <farhad.safarov@gmail.com>
 */
(function ($) {
    "use strict";

     $.fn.select2old.locales['az'] = {
        formatMatches: function (matches) { return matches + " nəticə mövcuddur, hərəkət etdirmək üçün yuxarı və aşağı düymələrindən istifadə edin."; },
        formatNoMatches: function () { return "Nəticə tapılmadı"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return n + " simvol daxil edin"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return n + " simvol silin"; },
        formatSelectionTooBig: function (limit) { return "Sadəcə " + limit + " element seçə bilərsiniz"; },
        formatLoadMore: function (pageNumber) { return "Daha çox nəticə yüklənir…"; },
        formatSearching: function () { return "Axtarılır…"; }
    };

    $.extend($.fn.select2old.defaults, $.fn.select2old.locales['az']);
})(jQuery);
