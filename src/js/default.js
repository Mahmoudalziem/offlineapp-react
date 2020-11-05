import $ from 'jquery';
$(document).ready(function() {
    $(document).on(
        "click",
        "div.footer-back",
        function(e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 },
                "500"
            );
        }
    );

    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $(
                'meta[name="csrf-token"]'
            ).attr("content")
        },
    });

    setTimeout(function() {
        $(".preloader").fadeOut(300);
    }, 500);
});