(function($) {
    $.fn.extend({
    });
    $.extend({
        chgMobiSizebk: function(id, targetHeight, sectionHeight, wordObj, picObj) {
            var targetId = "#" + id;
            $(targetId + "_word_1").attr("top", $(targetId + "_word_1").css("top")).attr("left", $(targetId + "_word_1").css("left"));
            $(targetId + "_pic_1").attr("top", $(targetId + "_pic_1").css("top")).attr("left", $(targetId + "_pic_1").css("left"));
            $.edgeResize(id, targetHeight, sectionHeight, wordObj, picObj);
            $(window).resize(function() {
                $.edgeResize(id, targetHeight, sectionHeight, wordObj, picObj);
            });
        },
        //改變edge物件layout
        edgeResize: function(Id, targetHeight, sectionHeight, wordObj, picObj, isBlock, index) {
            var targetId = "#" + Id;
            //視窗縮小到多小寬度時要改變layout
            var chgWidthSize = 966;

            if (isBlock) {
                var word = "block";
                var pic = "block";
            } else {
                var word = "word";
                var pic = "pic";
            }
            var controlWord = $(targetId + "_" + word + "_" + index);
            var controlPic = $(targetId + "_" + pic + "_" + index);
            //alert($(window).width());
            if ($(window).width() > chgWidthSize) {
                $(controlWord).css({"transform": "scale(1)"}).css("top", $(controlWord).attr("top")).css("left", $(controlWord).attr("left"));
                if (!isBlock) {
                    $(controlPic).css({"transform": "scale(1)"}).css("top", $(controlPic).attr("top")).css("left", $(controlPic).attr("left"));
                }
            } else {
                $(controlWord).css({"transform": "scale(" + wordObj.Scale + ")"}).css("top", wordObj.top).css("left", wordObj.left).css("width", wordObj.width);
                if (!isBlock) {
                    $(controlPic).css({"transform": "scale(" + picObj.Scale + ")"}).css("top", picObj.top).css("left", picObj.left);
                }

                var sec1 = sectionHeight * $(window).width() / 670;

                $(targetId).parents("section").css("height", sec1 + "px");
                $(targetId).css("height", targetHeight);
            }
        },
        //控制edge物件縮放
        chgMobiSize: function(id, targetHeight, sectionHeight, wordArr, picArr, isBlock) {
            var targetId = "#" + id;
            if (isBlock) {
                var word = "block";
                var pic = "block";
            } else {
                var word = "word";
                var pic = "pic";
            }

            for (var n = 0; n < wordArr.length; n++) {
                var index = n + 1;
                var controlWord = $(targetId + "_" + word + "_" + index);
                var controlPic = $(targetId + "_" + pic + "_" + index);
                $(controlWord).attr("top", $(controlWord).css("top")).attr("left", $(controlWord).css("left"));
                if (!isBlock) {
                    $(controlPic).attr("top", $(controlPic).css("top")).attr("left", $(controlPic).css("left"));
                }
                //alert(sectionHeight+"dddderek");
                $.edgeResize(id, targetHeight, sectionHeight, wordArr[n], picArr[n], isBlock, index);
            }

            $(window).resize(function() {
                //console.log($(window).width());
                for (var n = 0; n < wordArr.length; n++) {
                    var indexn = n + 1;
                    $.edgeResize(id, targetHeight, sectionHeight, wordArr[n], picArr[n], isBlock, indexn);
                }
            });

        },
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
        //當物件高度到達視窗可視範圍內，回傳true
        isScrolledIntoView: function(elem) {
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
            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + actElemHeight;
            //console.log(elemTop + "," + elemBottom + "," + docViewTop + "," + docViewBottom + ",");
            return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
                    && (elemTop >= docViewTop));
        },
        //依照視窗scroll位置，控制edge是否撥放
        scrolledIntoView: function(sym, targetSection) {
            //if (!$.ismobile()) {
            console.log("a123123");
            if ($("body section").index(targetSection) == "0") {
                $(targetSection + " .Animation").each(function() {
                    var animateName = $(this).attr("data-Animation") + ' animated';
                    $(this).show().removeClass(animateName).addClass(animateName).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass(animateName);
                    });
                });
            }

            $(window).on("scroll", function(e) {
                if ($.isScrolledIntoView($(targetSection))) {
                    if (!($(targetSection).hasClass("data-repeat"))) {
                        $(targetSection).addClass("data-repeat");
                        sym.play();
                        $(targetSection + " .Animation").each(function() {
                            var animateName = $(this).attr("data-Animation") + ' animated';
                            $(this).show().removeClass(animateName).addClass(animateName).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                $(this).removeClass(animateName);
                            });
                        });
                    }
                } else {
                    $(targetSection).removeClass("data-repeat");
                    sym.stop();
                }
            });
            //}
        },
        carouselRebulid: function() {
            $.carouselReplay();
            $(".carousel-control").click(function() {
                $(".carousel-inner").each(function() {
                    var target = $(this);
                    $(".item", this).not(".active").each(function(i, v) {
                        $(".flow-wrapper", this).height($(".active", target).height());
                        $(".center-wrapper", this).height($(".active .center-wrapper", target).height()).width($(".active .center-wrapper", target).width());
                        var s = $(".active .center-wrapper div:eq(0)", target).css("transform");
                        var s1 = s.split("(");
                        if (s1[1] != undefined) {
                            var s2 = s1[1].split(",");
                            var scale = s2[0];
                        } else {
                            var scale = 1;
                        }
                        $(".center-wrapper div:eq(0)", this).css({"transform": "scale(" + scale + ")"});
                    });
                });

            });
        },
        carouselReplay: function() {
//            $(".carousel-control").click(function() {
//                $(this).parent(".carousel").slid(function() {
//                    alert("as");
//                });
//                var target = $(this).parent(".carousel").find(".center-wrapper div:eq(0)");
//                $.Edge.symbol.get($(target)).play(0);
//            });
            $('.carousel').each(function() {
                $(this).bind('slid.bs.carousel', function(e) {
                    var targetParent = $(this);//.parent();
                    var target = $(".active .center-wrapper div:eq(0)", targetParent);
                    //alert($(target).attr("class"));
                    $.Edge.symbol.get($(target)).play(0);
                });
            });
        },
        derektest: function() {
            alert("derek");
        }
    })
})(jQuery);/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


