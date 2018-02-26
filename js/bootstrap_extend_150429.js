(function($) {
    $.fn.extend({
        navCollapseToggle: function() {

            var group = "." + $(this).attr("toggleGroup");
            $(".navCollapseToggle").removeClass("in").css({"height": "0px"});

        }
    });
    $.extend({
        ismobile: function() {
            var mobiles = new Array
                    (
                            "midp", "j2me", "avant", "docomo", "novarra", "palmos", "palmsource",
                            "240x320", "opwv", "chtml", "pda", "windows ce", "mmp/",
                            "blackberry", "mib/", "symbian", "wireless", "nokia", "hand", "mobi",
                            "phone", "cdm", "up.b", "audio", "sie-", "sec-", "samsung", "htc",
                            "mot-", "mitsu", "sagem", "sony", "alcatel", "lg", "eric", "vx",
                            "NEC", "philips", "mmm", "xx", "panasonic", "sharp", "wap", "sch",
                            "rover", "pocket", "benq", "java", "pt", "pg", "vox", "amoi",
                            "bird", "compal", "kg", "voda", "sany", "kdd", "dbt", "sendo",
                            "sgh", "gradi", "jb", "dddi", "moto", "iphone", "android",
                            "iPod", "incognito", "webmate", "dream", "cupcake", "webos",
                            "s8000", "bada", "googlebot-mobile"
                            )

            var ua = navigator.userAgent.toLowerCase();

            var isMobile = false;
            for (var i = 0; i < mobiles.length; i++) {
                if (ua.indexOf(mobiles[i]) > 0) {
                    isMobile = true;
                    break;
                }
            }
            return isMobile;
        },
        headFixed: function(headId, targetId) {

            if (!$.ismobile()) {
                var headHeight = $("#" + headId).height();
                var fixed = false;

                $(window).scroll(function() {
                    if ($(this).scrollTop() > headHeight) {
                        if (!fixed) {
                            fixed = true;
                            $("#pmenu_block").addClass("fixedTop").css({"top": "-80px"}).animate({top: 0}, 400);
                            $("#pmenu_box").css("border-top", "4px solid #165086");
                            $("#pmenu_content .highline").css("top", "-14px");
                        }
                    } else {
                        fixed = false;
                        $("#pmenu_block").removeClass("fixedTop");
                        $("#pmenu_box").css("border-top", "0px solid #165086");
                        $("#pmenu_content .highline").css("top", "-11px");
                    }
                });
            }
        }, highlights: function(top, left) {
            var curUrl = document.URL;
            var targetStr = "";
            if (curUrl.indexOf("?") == -1) {
                targetStr = "Features";
            } else {
                var goToPage = curUrl.split('?');
                var ToPage = goToPage[1].split('_');
                targetStr = ToPage[0];
            }
            //alert(targetStr);
            $(".highlights").each(function() {
                $("a[href*='" + targetStr + "']", this).parents("li").addClass("actived");
                var target = $(this);
                var active = $(".actived a", this);
                var activeLiWidth = $(active).width();
                var activeLiLeft = $(active).position().left;
                $("li", this).last().after("<li style='left:" + activeLiLeft + "px;top:" + top + "px;margin-left:" + left + "px;width:" + activeLiWidth + "px' class='highline'>&nbsp;</li>");
                $("li", this).mouseenter(function() {
                    $(".highline", target).stop().animate({"left": $(this).position().left, "width": $("a", this).width()}, 1000, "easeOutQuint");
                });
                $("li", this).mouseleave(function() {
                    $(".highline", target).stop().animate({"left": $(active).position().left, "width": $(active).width()}, 400);
                });
            });
        }, SectionSpy: function(SectionListArr) {
            if (!$.ismobile() && !($.isIE() == 8 || $.isIE() == 7)) {
                var spyStr = '<ol class="sectionNav carousel-indicators">';
                $.each(SectionListArr, function(i) {
                    spyStr += '<li style="" title="' + SectionListArr[i] + '" data-toggle="tooltip"  data-placement="left"></li>';
                });
                spyStr += '</ol>';
                $("body").append(spyStr);

                //分頁使用的提示標籤
                $("[data-toggle=tooltip]").tooltip();

                var tooltipLeft = "";
                $("[data-toggle=tooltip]").hover(function() {
                    if (tooltipLeft == "") {
                        tooltipLeft = $('.tooltip').position().left;
                    }
                    $('.tooltip').css("width", "100px").css('left', parseInt(tooltipLeft) - 50 + 'px')
                });

                $(window).scroll(function() {
                    $.each($("section"), function(i, v) {
                        $(".sectionNav .active").removeClass("active");
                        if ($.isScrolledIntoViewOverWindow($(this), 0)) {
                            $(".sectionNav li").eq(i).addClass("active");
                            return false;
                        }
                        $(".sectionNav li").eq(i).addClass("active");
                    });
                });

                $(".sectionNav li").click(function() {
                    $('html, body').animate({
                        scrollTop: $("section").eq($(this).index()).offset().top
                    }, 1000);
                });
            }
        },
        //當物件高度到達視窗可視範圍內，回傳true且畫面已經大過視窗
        isScrolledIntoViewOverWindow: function(elem, fixedElemTop) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            //因為視窗縮放會影響物件高度，故要乘於scale
//            var s = $(elem).css("transform");
//            var s1 = s.split("(");
//            if (s1[1] != undefined) {
//                var s2 = s1[1].split(",");
//                var s3 = s2[0]; // 抓scale;
//                var actElemHeight = s3 * $(elem).height();//console.log("a"+s3);
//            } else {
//                var actElemHeight = $(elem).height();//console.log("b");
//            }
            var actElemHeight = $(elem).height();
            var elemTop = $(elem).offset().top - 300;
            var elemBottom = elemTop + actElemHeight-200;
            //console.log(elemTop + "," + elemBottom + "," + docViewTop + "," + docViewBottom + ",");
            return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
                    && (elemBottom <= docViewBottom));
        }, addFBShare: function(url) {
            if (!$.ismobile()) {
                var html = '<div id="fbshare" style=" position: fixed;z-index: 9999; top: 40%;left:5px;">' +
                        '<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2F' + url + '%2F&amp;width&amp;layout=box_count&amp;action=like&amp;show_faces=true&amp;share=true&amp;height=65" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:94px;width:60px;" allowTransparency="true"></iframe> ' +
                        '</div>'
                $("body").append(html);
            }

        }, isIE: function() {
            var myNav = navigator.userAgent.toLowerCase();
            return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
        },
        derektest: function() {
            alert("derek");
        }


    })
})(jQuery);