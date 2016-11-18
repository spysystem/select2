/**
 * select2old Vietnamese translation.
 *
 * Author: Long Nguyen <olragon@gmail.com>, Nguyen Chien Cong
 */
(function ($) {
    "use strict";

    $.fn.select2old.locales['vi'] = {
        formatNoMatches: function () { return "Không tìm thấy kết quả"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Vui lòng nhập nhiều hơn " + n + " ký tự"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Vui lòng nhập ít hơn " + n + " ký tự"; },
        formatSelectionTooBig: function (limit) { return "Chỉ có thể chọn được " + limit + " lựa chọn"; },
        formatLoadMore: function (pageNumber) { return "Đang lấy thêm kết quả…"; },
        formatSearching: function () { return "Đang tìm…"; }
    };

    $.extend($.fn.select2old.defaults, $.fn.select2old.locales['vi']);
})(jQuery);

