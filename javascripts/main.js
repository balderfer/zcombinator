function slideAlert(el) {
    $(el).slideDown(200);
}

function disableButton(el) {
    $(el).addClass('disable');
}

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
            $(window).scroll(function(event) {
                var count = 0;
                var newclass;
                var element;
                $(".pic").each(function(index, el) {
                    if (index > count) {
                        count = index;
                    }
                    newclass = "pic" + index;
                    $(el).addClass(newclass);
                });
                for (var i = 0; i <= count; i++) {
                    element = ".pic" + i;
                    var position = $(element).offset();
                    var posTop = position.top - $(window).scrollTop() + $(element).height() + 100;
                    if (i <= 1) {
                        if (posTop < $(window).height()) {
                            $(element).delay(i * 100).animate({opacity: 1}, 500);
                            $(element).parent().children('p').animate({opacity: 1}, 500);
                        }
                    }
                    else if (i <= 4) {
                        if (posTop < $(window).height()) {
                            $(element).delay((i - 2) * 100).animate({opacity: 1}, 500);
                            $(element).parent().children('p').animate({opacity: 1}, 500);
                        }
                    }
                    else if (i <= 7) {
                        if (posTop < $(window).height()) {
                            $(element).delay((i - 5) * 100).animate({opacity: 1}, 500);
                            $(element).parent().children('p').animate({opacity: 1}, 500);
                        }
                    }
                }
            });
        });
    }, 1000);

});

