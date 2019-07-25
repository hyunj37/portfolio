$(document).ready(function () {
    
    var ht = $(window).height();
    $("section").eq(0).height(ht);

    $(window).on("resize", function () {
        var ht = $(window).height();
        $("section").eq(0).height(ht);
    });

    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        var section_top1 = $('section').eq(0).offset().top - 100;
        var section_top2 = $('section').eq(1).offset().top*0.5;

        if (scroll >= section_top1 && scroll < section_top2) {
            $('section').eq(0).addClass("star_show");
        }else {
            $('section').eq(0).removeClass("star_show");
        }

    });
});