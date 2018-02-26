

<style>
    .Animation {
        display: block;
    }
</style>
<script>
    if ($.isIE() != 8 && $.isIE() != 7) {
       AdobeEdge.loadComposition('anatomy_cm1164_front', 'anatomy_cm1164_front', {
            scaleToFit: "width",
            centerStage: "horizontal",
            minW: "null",
            maxW: "1200px",
            width: "1200px",
            height: "600px",
            htmlRoot: "edge_animation/anatomy/"
        }, {"dom": []}, {
            dom: [
            ],
            style: {
                '${symbolSelector}': {
                    isStage: true,
                    rect: [undefined, undefined, '1920px', '1100px'],
                    fill: ["rgba(255,255,255,1)"]
                }
            }
        });
         AdobeEdge.loadComposition('anatomy_cm1164_rear', 'anatomy_cm1164_rear', {
            scaleToFit: "width",
            centerStage: "horizontal",
            minW: "null",
            maxW: "1200px",
            width: "1200px",
            height: "600px",
            htmlRoot: "edge_animation/anatomy/"
        }, {"dom": []}, {
            dom: [
            ],
            style: {
                '${symbolSelector}': {
                    isStage: true,
                    rect: [undefined, undefined, '1920px', '1100px'],
                    fill: ["rgba(255,255,255,1)"]
                }
            }
        });
   }

</script>
<section id="section_1" style="position:relative; z-index:9997;" class="noEdge">
    <div id="myCarousel2" class="carousel slide" style="margin-bottom:0px; " data-interval="false">

        <div class="swipe-wrap">
            <div class="bg" style="height:1500px; background-color:#40484a; background-image: radial-gradient(ellipse farthest-corner at 50% 81% , #697172 0%, #131B1D 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(10%,#373f40), color-stop(100%,#697172)); /* Chrome,Safari4+ */ background: -webkit-linear-gradient(top, #373f40 10%,#767e7f 100%); /* Chrome10+,Safari5.1+ */ "> </div>
        </div>
        <!-- Carousel items -->
        <div class="carousel-inner" style="height:1100px\9">



            <!--第一幕--class=active >> active 判斷為第一幕-->
            <div class="active item sub_feature1">

                <div class="container" style="position:relative; z-index:9998; ">
                

       <!-- 下方 menu_extrab --扣掉每一頁第一個 Section 上方,被 Menu 吃掉的背景內容高度,共用不可刪除  -->   
           <div class="menu_extrab"></div>
                
                    <div class="section_block">
                        <div class="row-fluid" style="position: relative;z-index: 9999;">
                            <div class="span12 page_title color_greeng3 wordscale " style="text-align:center\9; margin:0px auto\9;">
                                <span>CM1164 Front View</span>
                            </div>
                        </div>
                        <div class="row-fluid" style="position: relative;z-index: 9999;">
                            <div class="span12 imgEdge edgeBlock" style="position: relative;z-index: 9999;">
                                <!--edge 崁在這裡 !!-->
                                <div id="edge_anatomy_cm1164_front" class="anatomy_cm1164_front"></div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <!--第一幕-end-->




            <!--第二幕-->
            <div class="item sub_feature2">
                <div class="container" style="position:relative; z-index:9998; ">
                
                
     <!-- 下方 menu_extrab --扣掉每一頁第一個 Section 上方,被 Menu 吃掉的背景內容高度,共用不可刪除  -->   
           <div class="menu_extrab"></div>
                
                
                    <div class="section_block">
                        <div class="row-fluid" style="position: relative;z-index: 9999;">
                            <div class="span12 page_title color_greeng3 wordscale " style="text-align:center\9; margin:0px auto\9;">
                                <span>CM1164 Rear View</span>
                            </div>
                        </div>
                        <div class="row-fluid" style="position: relative;z-index: 9999;">
                            <div class="span12 imgEdge edgeBlock" style="position: relative;z-index: 9999;">
                                <!--edge 崁在這裡 !!-->
                                <div id="edge_anatomy_cm1164_rear" class="anatomy_cm1164_rear"></div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <!--第二幕_end-->
        </div>

        <!-- arrow_start 箭頭 -->
        <a style="z-index:9998;" class="carousel-control left" href="#myCarousel2" data-slide="prev"><img src="images/arrow-left.png"></a>
        <a style="z-index:9998;" class="carousel-control right" href="#myCarousel2" data-slide="next"><img src="images/arrow-right.png"></a>
        <!-- arrow_end 箭頭 -->
    </div>
</section>







<script>
    $(function() {
        var SectionList = ["VM1600", "I/O Board", "Specifications"];
        //$.SectionSpy(SectionList);
    });
</script>