$(function() {

    let header = $("#header"),
        introHeight = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    // Fixed Header
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    })

    function checkScroll(scrollOffset){
        if (scrollOffset >= introHeight) {
            header.addClass("header--fixed");
        }
        else {
            header.removeClass("header--fixed");
        }
    }

    // Smooth Scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this), 
        blockId = $this.data("scroll"),
            blockPosition = $(blockId).offset().top;
        
        $("#nav a").removeClass("active");
        $("#nav").removeClass("active");
        $("#nav_toggle").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockPosition - 30
        }, 500);
    });


    // Nav Toggle
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    // Collapse
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this), 
        blockId = $this.data("collapse");

        $("[data-collapse]").removeClass("active");
        $(this).toggleClass("active");
    });

    // Slider
    $("[data-slider]").slick({
        infinity: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});