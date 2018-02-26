<?
$agent = $_SERVER['HTTP_USER_AGENT'];
if (strpos($agent, "MSIE 8.0") || strpos($agent, "MSIE 7.0")) {
    //header("HTTP/1.1 301 Moved Permanently");
    //header("Location: /data/microsite/control_system_ie/");
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>ATEN CM1164</title>
        <meta property="og:image" content="http://www.aten.com/ext_data/global_en/CM1164/images/cm1164_facebook.jpg"/>
        <link rel="image_src" type="image/jpeg" href="http://www.aten.com/ext_data/global_en/CM1164/images/cm1164_facebook.jpg" />
        <meta name="description" 
              content="The CM1164 is the perfect solution for a wide range of applications including traffic control, data monitoring, public surveillance, video editing and more.">

        <meta name="keywords" 
              content="CM1164, cm1164,">
        <meta name="author" content="">

        <!-- Le styles -->
        <?
        $includeurl = $_SERVER[REQUEST_URI];
        #echo $includeurl;
        if (strpos($includeurl, '?') !== false) {
            $keywords = explode("?", $includeurl);
            echo '<link href="css/' . $keywords[1] . '.css" rel="stylesheet">';
        } else {
            echo '<link href="css/Features.css" rel="stylesheet">';
        }
        ?>
        <link href="css/bootstrap.css" rel="stylesheet">
        <link href="/ext_libraries/css/jquery.cookiebar.css" rel="stylesheet">
        <link href="css/bootstrap-responsive.css" rel="stylesheet">
        <link href="css/cssReset.css" rel="stylesheet">
        <link href="css/animate.css" rel="stylesheet">
        <link href="css/menu.css" rel="stylesheet">
        <link href="css/2015.css" rel="stylesheet" type="text/css" /><!--  字體樣式定義,大小粗細 -->
        <link href="css/font_rbt.css" rel="stylesheet" type="text/css" /><!--  webfont 字型定義 -->
        <link href="css/glyphicons.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" type="text/css" href="css/bootstrap-lightbox.css" />
        <script src="js/jquery-1.9.1.js"></script>
        <script src="/ext_libraries/js/jquery1.10.3/js/jquery-ui-1.10.3.custom.min.js"></script>
        <script src="js/edge_extend.js"></script>
        <script src="js/bootstrap.js"></script>
        <script src="js/bootstrap_extend.js"></script>
        <script type="text/javascript" charset="utf-8" src="edge_includes/edge.5.0.0.min.js"></script>
        
        <script type="text/javascript" src="js/bootstrap-lightbox.min.js"></script>


        <!--Adobe Edge Runtime-->

        <!--end Adobe Edge Runtime-->

        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->

        <!--[if lt IE 9]>
          <script src="js/html5shiv.js"></script>
        <script src="/ext_libraries/js/jquery1.10.3/js/jquery-ui-1.10.3.custom.min.js"></script>
        
        <![endif]-->

        <style>
            .ui-loader-default{
                display:none;
            }
            h1{
                font-size: 5em;
                font-family: arial,helvetica;
                color: #fff;
                margin:0;
            }
            .intro p{
                color: #fff;
            }

            /* Centered texts in each section
            * --------------------------------------- 
            .section{
                text-align:center;
            }
			*/


            /* Overwriting styles for the navigation dots (to place it where we want)
            * --------------------------------------- */
            .fp-slidesNav.bottom{
                bottom: 25px;
            }

            /* Bottom menu
            * --------------------------------------- */
            #infoMenu li a {
                color: #fff;
            }

            #section2 h1{
                color: #333;
            }

            /*   .carousel,.item,.active{height:100%;}*/
            .carousel-inner{height:100%;}
        </style>
    </head>

    <body>




        <div id="header" > <!--頁首延展-start -->
            <div id="header_blue"> <!--頁首藍條背景-start -->
                <div id="header_allblue" > <!--頁首淺藍+深藍區塊-start --> 

                    <div id="header_dblue"  > <!--頁首深藍-start --> 
                    </div><!--頁首藍條深藍-結束 -->
                    <div id="header_lblue" > <!--頁首淺藍-start --> 
                    </div><!--頁首藍條淺藍-結束 --> 

                </div><!--頁首淺藍+深藍區塊-結束 -->  
            </div><!--頁首藍條背景-結束 -->
            <div class="nav-pcblock" style="">
                <div class="container">
                    <ul class="nav-pc">
                        <li class="actived"><a class="ui-link" href="/redirectpage.php?paths=aten-info/media-center/press-release/" target="_blank">NEWS CENTER<span class="arrow">&gt;</span></a></li>
                        <li><a class="ui-link" href="/redirectpage.php?paths=market-and-solutions/" target="_blank">MARKETS & SOLUTIONS<span class="arrow">&gt;</span></a></li>
                        
                        <li><a class="ui-link" href="/redirectpage.php?paths=products/" target="_blank">PRODUCTS<span class="arrow">&gt;</span></a></li>
                        <li><a class="ui-link" href="/redirectpage.php?paths=resources/" target="_blank">RESOURCES<span class="arrow">&gt;</span></a></li>
                        <li><a class="ui-link" href="/redirectpage.php?paths=support-and-downloads/" target="_blank">SUPPORT<span class="arrow">&gt;</span></a></li>
                    </ul>

                </div>
            </div>
            <div class="navbar">

                <div class="container"  id="header_content">
                    <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-head">
                        <i class="gicon-white gicon_show_lines"></i>
                        <!--
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        -->

                    </button>
                    <a class="brand aten_logo" href="/redirectpage.php?paths=/" target="_self" style="">&nbsp;</a>
                    <div class="nav-collapse collapse nav-head navCollapseToggle" id="tmenu"  >
                        <div class="visible-desktop openNev" style="padding: 0px; position: relative; right: 53px; top: 20px;">
                           <a style="position: absolute; padding: 10px 35px 16px 0px;top: -10px;" href="#"><span class="iconOpen"></span></a>
                        </div>
                        <ul class="nav hidden-desktop">
                            <li class="actived"><a href="/redirectpage.php?paths=aten-info/media-center/press-release/" target="_blank">NEWS CENTER</a></li>
                            <li><a href="/redirectpage.php?paths=market-and-solutions/" target="_blank" class="ui-link">MARKETS & SOLUTIONS</a></li>
                            
                            <li><a href="/redirectpage.php?paths=products/" target="_blank">PRODUCTS</a></li>
                            <li><a href="/redirectpage.php?paths=resources/" target="_blank">RESOURCES</a></li>
                            <li><a href="/redirectpage.php?paths=support-and-downloads/" target="_blank">SUPPORT</a></li>
                        </ul>
                    </div>
                    <!--/.nav-collapse -->
                </div>
            </div>
        </div>
        <div id="pmenu_block">
            <div id="pmenu_box" class="navbar">
                <div class="container">
                    <span class="brandname brand" href="#" style="white-space: nowrap"><a href="/products/productItem.php?model_no=CM1164#.VV6by0ZBnDQ" target="_blank">CM1164</a></span>
                    <!--<div id="pmenu_content" style="height:56px;">-->
                    <div id="pmenu_content" style="height:56px;">

                        <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-function">
                            <i class="gicon-white gicon_arrow_down"></i>
                        </button>

                        <div id="pmenu" class="nav-function collapse nav-collapse navCollapseToggle">
                            <nav class="row">
                                <ul class="nav highlights" style="left:10px\9;">
                                    <!-- menu 第一層 start--><!-- class="navigation"此定義為html上方的java script使用,不在 css文件裡 -->
                                    <li><a href="?Features" target="_self" data-ie8img="overview" style="text-align:right\9;">Features</a></li>
                                    
                                    <li><a href="?Anatomy" target="_self" >Anatomy</a></li>
                                    <li><a href="?Application" target="_self">Application</a></li>
                                    <li><a data-url="https://youtu.be/2a-hVKoPhRE" data-toggle="lightbox" href="#demoLightbox" target="_blank" class="Button_Lightbox">Video</a></li>
                                    <li><a href="?Contactus" target="_self">Contact Us</a></li>
                                </ul>
                            </nav>
                            <!-- menu 第一層 end--> 
                        </div><!--pmenu-end --> 
                    </div>
                </div><!--pmenu_content-end --> 
            </div><!--pmenu_box-end --> 
        </div><!--pmenu_block-end --> 
        <!-------------------------------------------------------------------- 內容區 (含 Left, Middle, Right) ---------------------------------------------------------->

        <div style="" id="content"> <!--content -start -->
       
        
            <?
            $includeurl = $_SERVER[REQUEST_URI];
            #echo $includeurl;
            if (strpos($includeurl, '?') !== false) {
                $keywordss = explode("?", $includeurl);
                $keywords = $keywordss[1];
                include_once($keywords . ".php");
            } else {
                $keywords = "Features";
                include_once("Features.php");
                
            }
            ?>
            
            
             <!--Video-->
            <div style="z-index: 10000;position: fixed; width: 855px; height: 574px; top: 0px; left: 50%; margin-left: -427.5px; display: none;" id="demoLightbox" class="lightbox hide fade" tabindex="-1" role="dialog" aria-hidden="true">
                <div style="width: 998px; height: 662px;" class="lightbox-content">
                    <img src="images/large.png" style="width:1px;width:1px">
                    <iframe width="998" height="662" src="http://www.youtube.com/embed/2a-hVKoPhRE?rel=0&wmode=opaque&cc_load_policy=1;vq=hd1080" frameborder="0" allowfullscreen></iframe>

                </div>
                <div class="" style="text-align: right;" > <img class="LightboxClose" src="images/close.png"></div>
            </div>
            <!--Video end-->



        </div><!--content -end --> 

        <!------------------------------------------ 底部 ICON 區 --------------------------------------->

        <div class="icon_block noEdge data-repeat" id="bottom_bg"> <!--bottom_bg 範圍-start -->
            <div class="container">


                <div class="row-fluid icon_subblock Animation" data-animation="zoomIn">

                    <!--ICON_1 -->    
                    <div class="span4 icon_content">
                        <a class="IconAnimation ui-link" target="_blank" href="/products/productItem.php?model_no=CM1164#.VV6by0ZBnDQ">
                            <div class="row-fluid">

                                <div class="span3 icon_img">
                                    <img class="icon" alt="icon" src="images/icon_product.png" data-iconanimation="bounceIn">
                                </div>

                                <div class="span7 icon_txt">
                                    <div class="row-fluid icontitle">
                                        Product Specifics
                                    </div>
                                    <div class="row-fluid page_txt_s">
                                        Learn more about this solution on the product page.
                                    </div>                  
                                </div>

                            </div>
                        </a>
                    </div>


                    <!--ICON_2 -->  
                    <div class="span4 icon_content">
                        <a class="IconAnimation ui-link" target="_self" href="?Contactus">
                            <div class="row-fluid">

                                <div class="span3 icon_img">
                                    <img class="icon" alt="icon" src="images/icon_contact.png" data-iconanimation="bounceIn">
                                </div>

                                <div class="span7 icon_txt">
                                    <div class="row-fluid icontitle">
                                        Contact Us
                                    </div>
                                    <div class="row-fluid page_txt_s">
                                        Questions? Click to submit an inquiry.
                                    </div>                  
                                </div>

                            </div>
                        </a>
                    </div>


                    <!--ICON_3 -->  
                    <div class="span4 icon_content">
                        <a class="IconAnimation ui-link" target="_blank" href="/redirectpage.php?paths=where-to-buy/">
                            <div class="row-fluid">

                                <div class="span3 icon_img">
                                    <img alt="icon" src="images/icon_buy.png" class="icon" data-iconanimation="bounceIn">
                                </div>

                                <div class="span7 icon_txt">
                                    <div class="row-fluid icontitle">
                                        Where to Buy
                                    </div>
                                    <div class="row-fluid page_txt_s">
                                        Get in contact with an ATEN sales representative in your area.
                                    </div>                  
                                </div>

                            </div>
                        </a>
                    </div>



                </div>
                <div class="row-fluid bottom_bgline">
                    &nbsp;
                </div>


            </div>

        </div>

        <!------------------------------------------ 頁尾區 --------------------------------------->

        <div id="bottom_bg" class="navbar noEdge"> <!--bottom_bg 範圍-start -->
            <div class="container">
                <div id="bottom_block" class="bottom_links_txt bottom_all" > <!--bottom_block 範圍-start -->

                    <div class="row-fluid navbar">
                        <div class="span4 ">
                            <a id="bottom_title_block" class="bottom_links_title" data-toggle="collapse" data-target=".nav-about">
                                <span>About Us</span>
                                <img alt="icon_arrow" src="images/arrowb_down.png" class="icon_arrow">
                            </a>
                            <div class=" nav-collapse nav-about collapse footGA">
                                <ul>
                                    <li>
                                        <a target="_blank" href="/about/about_company.php?cst=cp">About ATEN</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="/redirectpage.php?paths=contact-us/inquiries/">Contact Us</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="/redirectpage.php?paths=partner-center/">Partner Center</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a target="_self" href="/redirectpage.php?paths=aten-info/csr/preface-by-ceo/">CSR</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="/redirectpage.php?paths=aten-info/investor-relations/corporate-governance/company-structure-and-responsibilities/">Investor Relations</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="/redirectpage.php?paths=where-to-buy/"> Where to Buy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="span6 ">
                            <a id="bottom_title_block" class="bottom_links_title" data-toggle="collapse" data-target=".nav-prd">
                                <span>More Product info</span>
                                <img alt="icon_arrow" src="images/arrowb_down.png" class="icon_arrow">
                            </a>
                            <div class="collapse nav-collapse nav-prd footGA">

                                <ul>

                                    <li>
                                        <a target="_blank" href="/products/productFind.php?psid=2011011814481&catid=12#LCD KVM Switches+">LCD KVM Switches</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="/products/productFind.php?psid=2011011814481&catid=12#KVM over IP Switches+">KVM over IP Switches</a>
                                    </li>

                                    <li>
                                        <a target="_blank" href="/products/productFind.php?psid=2011011814481&catid=12#KVM Extenders+">KVM Extenders</a>
                                    </li>
                                </ul>
                                <ul>

                                    <li>
                                        <a target="_blank" href="/products/productFind.php?psid=2011011814481&catid=12#Rack KVM Switches+">Rack KVM</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="/products/productFind.php?psid=2011011814481&catid=12#Desktop KVM Switches+">Desktop KVM Switches</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="/products/productFind.php?r=6428&catid=15&catagory=Video_Matrix_Switches#Video Matrix Switches+">Video Matrix Switches</a>
                                    </li>

                                </ul>
                                <ul>
                                    <li>
                                        <a target="_blank" href="/products/productFind.php?psid=20110118160729001&catid=15#Video Switches+">Video Switches</a>
                                    </li>

                                    <li>
                                        <a target="_blank" href="/products/productFind.php?psid=20110118160729001&catid=15#Video Splitters+">Video Splitters</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="/products/productFind.php?r=6428&catid=15&catagory=Video_Extenders#Video Extenders+">Video Extenders</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="span2">                           
                            <a id="bottom_title_block" class="bottom_links_title" data-toggle="collapse" data-target=".nav-Community">
                                <span>Follow Us</span>
                                <img alt="icon_arrow" src="images/arrowb_down.png" class="icon_arrow">
                            </a>
                            <div id="social" class=" nav-collapse nav-Community collapse">
                                <ul class="social_icon_all">
                                    <li class="icon_social" style="">
                                        <a data-gaName="facebook" target="_blank" href="https://www.facebook.com/ATEN.International?v=wall"><img src="images/icon_facebook.png"></a>
                                    </li>
                                    <li class="icon_social">
                                        <a data-gaName="youtube" target="_blank" href="https://www.youtube.com/user/atenweb"><img src="images/icon_youtube.png"></a>
                                    </li>
                                    
                                    <li class="icon_social">
                                        <a data-gaName="LinkedIn" target="_blank" href="https://www.linkedin.com/company/aten"><img src="images/icon_linkedin.png"></a>
                                    </li>
                                    
                                    
                                    <li class="icon_social">
                                        <a data-gaName="Twitter" target="_blank" href="https://twitter.com/ATEN_Int"><img src="images/icon_twitter.png"></a>
                                    </li>
                                    
                                    
                                    <li class="icon_social">
                                        <a data-gaName="Google_Plus" target="_blank" href="https://plus.google.com/u/0/b/115777527855529380703/115777527855529380703/posts"><img src="images/icon_google_plus.png"></a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="links_bottom" > <!--links_bottom 灰條陰影-start -->  
                    </div><!--links_bottom 灰條陰影-end -->

                </div><!--bottom_bg 範圍-end --> 
            </div>

            <!--以下此段用意讓靠近瀏覽器底部的 bottom 區塊能自行充滿底部以下區域-end -->
            <div id="copyright">
                &copy; <a href="/redirectpage.php?paths=/" target="_self">ATEN</a> INTERNATIONAL Co., Ltd. All rights reserved.
            </div><!-- copyright -->


            <!--以下此段用意讓靠近瀏覽器底部的 bottom 區塊能自行充滿底部以下區域-end -->
            <div style=" position: fixed; width:100%; height: 100%; background-color:#fff;">&nbsp;</div> 


        </div><!--bottom end-->
        <? include_once($_SERVER["DOCUMENT_ROOT"]."/ext_libraries/analyticstracking.php") ?>
        <script>

            $(function () {
                //在head裡的nav和分類開啟時，自動關閉另一個nav
                $('.navCollapseToggle').on('show.bs.collapse', function () {
                    $(this).navCollapseToggle();
                });
                //移動scroll時，固定head nav
                //$.headFixed("head id","fixed target id");
                $.headFixed("header", "pmenu_block");
                //在head nav中的藍光標
                //$.highlights(top,left);
                $.highlights("-11", "15");
                $.addFBShare("www.aten.com/data/microsite/cm1164");
            });
        </script>
        <script>
            $(function () {
                $(window).resize(function () {
                    console.log($(window).width());
                });
                if ($.isIE() == 8 || $.isIE() == 7) {
                    $(".Animation").show();
                    $(".container").show();
                    $(".container").prev(".swipe-wrap").children(".bg").css("position", "absolute").addClass("NoEdge");
                    $(".edgeDownLevel-features_banner").css("background-color", "transparent");

                    $(".edgeBlock").each(function (i) {
                        $(this).html("<img src='images/<? echo $keywords; ?>/Poster_" + i + ".png' />");
                    });
                }

                $(".openNev").click(function () {
                    $(" .iconOpen", this).toggleClass("iconClose");
                    //$(".nav-pcblock").toggle("blind");
                    $(".nav-pcblock").toggleClass("actived");
                    if ($(".nav-pcblock").hasClass("actived")) {
                        //$(".nav-pcblock").css("height", "370px");
                    } else {
                        // $(".nav-pcblock").css("height", "0px");
                    }

                });

                //因應fullpage的getTableHeight所以第一個section要往下138
                //$("#section_1").css("margin-top", "138px");


                $(".LightboxClose").click(function () {
                    $(".modal-backdrop").trigger("click");
                });

                if (!$.ismobile()) {
                    //非行動裝置
                    $(window).on("scroll", function (e) {
                        $(".noEdge").each(function () {
                            var targetSection = "#" + $(this).attr("id");
                            if ($.isScrolledIntoViewOverWindow($(targetSection), 400)) {
                                if (!($(targetSection).hasClass("data-repeat"))) {
                                    $(targetSection).addClass("data-repeat");
                                    $(targetSection + " .Animation").each(function () {
                                        var animateName = $(this).attr("data-Animation") + ' animated';
                                        $(this).show().removeClass(animateName).addClass(animateName).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                            $(this).removeClass(animateName);
                                        });
                                    });
                                }
                            } else {

                                //$(targetSection).removeClass("data-repeat");
                            }

                        });
                    });

                    if ($("#section_1").hasClass("noEdge")) {
                        $("#section_1 .Animation").each(function () {
                          
                            var animateName = $(this).attr("data-Animation") + ' animated';
                            $(this).show().removeClass(animateName).addClass(animateName).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                $(this).removeClass(animateName);
                            });
                        });
                    }
                } else {
                    //行動裝置
                    $(".Animation").show();

                    $(".Button_Lightbox").each(function () {
                        if ($(this).attr("data-url") != "") {
                            $(this).attr("data-toggle", "");
                            $(this).attr("href", "#");
                        }
                    });

                    $(".Button_Lightbox").click(function () {
                        if ($(this).attr("data-url") != "") {
                            var targetUrl = $(this).attr("data-url");
                            window.open(targetUrl, '_blank');
                        }
                    });

                }

                $(".IconAnimation").each(function () {
                    $(this).mouseenter(function () {
                        var animateName = $(this).find(".icon").attr("data-IconAnimation") + ' animated';
                        $(this).find(".icon").show().removeClass(animateName).addClass(animateName).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                            $(this).removeClass(animateName);
                        });
                    });
                    $(this).mouseleave(function () {

                    });
                });



                $('.carousel').on('slid', function () {
                    if (!$(this).hasClass("notAutoAnimation")) {
                        var targetSection = "#" + $(this).parents("section").attr("id");
                        $(targetSection).find(".Animation").not(".noRepeat").hide();

                        $(targetSection).addClass("data-repeat");
                        $(targetSection + " .Animation").each(function () {
                            if (!$(this).hasClass("noRepeat")) {
                                var animateName = $(this).attr("data-Animation") + ' animated';
                                $(this).show().removeClass(animateName).addClass(animateName).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                    $(this).removeClass(animateName);
                                });
                            }
                        });
                    }
                });

                //bootstrap carousel when finger swipe
//                $(".carousel").swiperight(function () {
//                    $(this).carousel('prev');
//                });
//                $(".carousel").swipeleft(function () {
//                    $(this).carousel('next');
//                });

                //when mouse enter to img
                $(".goto").mouseenter(function () {
                    $("img", this).addClass("zoomIn");
                    $("figcaption", this).addClass("hover");
                    $(".imgBlockTitle",this).addClass("TitleHoverColor");
                });

                $(".goto").mouseleave(function () {
                    $("img", this).removeClass("zoomIn");
                    $("figcaption", this).removeClass("hover");
                    $(".imgBlockTitle",this).removeClass("TitleHoverColor");
                });

                //設定GA
                $("#pmenu a,#tmenu a").click(function () {
                    recordGA("header", $(this).text());
                });

                $("#header_content .brand").click(function () {
                    recordGA("header", "corpHomepage");
                });

                $("#bottom_block .footGA a").click(function () {
                    recordGA("header", $(this).text());
                });

                $("#social a").click(function () {
                    recordGA("footer", $(this).attr("data-gaName"));
                });

                function recordGA(pos, targetName) {
                    _gaq.push(['_trackEvent', 'Microsite-CM1164', pos, targetName]);
                }
            });
        </script>

    </script>
</body>
</html>
