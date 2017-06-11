function nextDay(d, dow){
    d.setDate(d.getDate() + (dow+(7-d.getDay())) % 7);
    return d;
}

var dayOfWeek = {
sunday: 0, monday: 1, tuesday: 2,
wednesday: 3, thursday: 4, friday: 5, saturday: 6
};

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    });

    var currentDate = new Date();
    var nextEventStartDate = nextDay(currentDate, dayOfWeek.wednesday);
    var nextEventStartDateTime = new Date(nextEventStartDate.setHours(18, 0, 0, 0));

    $('#countdown-timer')
        .html(nextEventStartDateTime.toISOString());

    $('#countdown-timer').countDown({
        with_separators: false,
        with_seconds: false,
        with_hh_leading_zero: false,
        with_mm_leading_zero: false
    });

})(jQuery); // End of use strict
