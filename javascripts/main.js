jQuery(document).ready(function($) {
    var wh = $(window).height();
    var ww = $(window).width();
    var diff = (wh - 240) / 2;

    if (wh > ww) {
        wh = wh + "px";
        ww = ww + "px";
        $("#logo").css({
            width: wh,
            height: wh
        });
    }
    else {
        wh = wh + "px";
        ww = ww + "px";
        $("#logo").css({
            width: ww,
            height: ww
        });
    }
    var logoCenterMargin = diff + "px auto" + diff + "px auto";
    $("#logo").animate({
        width: "240",
        height: "240",
        margin: logoCenterMargin,
    }, 500, "easeOutBack", function() {
        $("#logo-z").animate({opacity: 1}, 500);
    });

    window.setTimeout(function() {
        $("#logo").animate({
            margin: "60px auto 20px auto",
        }, 500);
        $(".container").fadeIn(1000, function() {
            
        });
    }, 1000)

});
