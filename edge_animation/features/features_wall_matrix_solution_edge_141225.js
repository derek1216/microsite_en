/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            '\'Segoe UI\', \'Lucida Grande\', Arial, \'Microsoft JhengHei\', 微軟正黑體, \'Microsoft YaHei\', 微軟雅黑體, Tahoma, PMingLiU, 新細明體, simhei, sans-serif, \'Trebuchet MS\', \'Lucida Sans Unicode\', Verdana': '',
            '"Segoe UI Light", "Segoe UI", \'Lucida Grande\', Arial, \'Microsoft JhengHei\', 微軟正黑體, \'Microsoft YaHei\', 微軟雅黑體, Tahoma, PMingLiU, 新細明體, simhei, sans-serif, \'Trebuchet MS\', \'Lucida Sans Unicode\', Verdana': '',
            'Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, \'Microsoft JhengHei\', 微軟正黑體, \'Heiti TC\', \'Microsoft YaHei\', 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, \'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, \'ＭＳ Ｐゴシック\', \'Malgun Gothic\', Dotum, Gulim, \'Trebuchet MS\', \'Lucida Grande\', Verdana, Arial, sans-serif': ''        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
       
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'ball_red',
                            type: 'group',
                            rect: ['493px', '13px', '722', '923', 'auto', 'auto'],
                            opacity: 0,
                            transform: [[],[],[],['0.5','0.5']],
                            c: [
                            {
                                id: 'features2_ball_red',
                                type: 'image',
                                rect: ['0px', '0px', '722px', '923px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"features2_ball_red.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'w1',
                                type: 'text',
                                rect: ['167px', '317px', 'auto', 'auto', 'auto', 'auto'],
                                text: "Video-wall Processing",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "300", "none", "", "break-word", "nowrap"],
                                textShadow: ["rgba(0,0,0,1.00)", 1, 3, 15],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            }]
                        },
                        {
                            id: 'ball_green',
                            type: 'group',
                            rect: ['3px', '554px', '722', '923', 'auto', 'auto'],
                            opacity: 0,
                            c: [
                            {
                                id: 'features2_ball_green',
                                type: 'image',
                                rect: ['0px', '0px', '722px', '923px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"features2_ball_green.png",'0px','0px']
                            },
                            {
                                id: 'w2',
                                type: 'text',
                                rect: ['182px', '316px', 'auto', 'auto', 'auto', 'auto'],
                                text: "Optimum Reliability",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "300", "none", "", "break-word", "nowrap"],
                                textShadow: ["rgba(0,0,0,1.00)", 1, 3, 15],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            }]
                        },
                        {
                            id: 'ball_blue',
                            type: 'group',
                            rect: ['983px', '554px', '722', '923', 'auto', 'auto'],
                            opacity: 0.5,
                            c: [
                            {
                                id: 'features2_ball_blue',
                                type: 'image',
                                rect: ['0px', '0px', '722px', '923px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"features2_ball_blue.png",'0px','0px']
                            },
                            {
                                id: 'w3',
                                type: 'text',
                                rect: ['218px', '316px', 'auto', 'auto', 'auto', 'auto'],
                                text: "Seamless Switch",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "300", "none", "", "break-word", "nowrap"],
                                textShadow: ["rgba(0,0,0,1.00)", 1, 3, 15],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            }]
                        },
                        {
                            id: 'ball_white',
                            type: 'ellipse',
                            rect: ['596px', '401px', '522px', '522px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 1,
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            boxShadow: ["", 0, 0, 40, 10, "rgba(255,255,255,1.00)"]
                        },
                        {
                            id: 'ball_yellow',
                            type: 'group',
                            rect: ['493px', '300px', '722', '923', 'auto', 'auto'],
                            opacity: 0,
                            transform: [[],[],[],['0.8','0.8']],
                            c: [
                            {
                                id: 'features2_ball_yellow',
                                type: 'image',
                                rect: ['0px', '0px', '722px', '923px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"features2_ball_yellow.png",'0px','0px']
                            },
                            {
                                id: 'w4',
                                type: 'text',
                                rect: ['152px', '246px', 'auto', 'auto', 'auto', 'auto'],
                                text: "Modular Matrix Solution",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [40, "px"], "rgba(0,0,0,1.00)", "300", "none", "", "break-word", "nowrap"],
                                textShadow: ["rgba(255,255,255,1.00)", 1, 1, 2],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'w4_s_all',
                                type: 'group',
                                rect: ['218px', '316px', '320', '135', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'w4_s',
                                    type: 'text',
                                    rect: ['27px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: 0.73504273504273,
                                    text: "Seamless Switch<br>Video-wall Processing<br>Optimum Reliability",
                                    align: "left",
                                    font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [30, "px"], "rgba(0,0,0,1.00)", "300", "none", "", "break-word", "nowrap"],
                                    textStyle: ["", "", "45px", ""],
                                    textShadow: ["rgba(255,255,255,1.00)", 1, 1, 1],
                                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                                },
                                {
                                    id: 'bullet',
                                    type: 'ellipse',
                                    rect: ['0px', '20px', '10px', '10px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    opacity: 0.6,
                                    fill: ["rgba(0,0,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'bulletCopy',
                                    type: 'ellipse',
                                    rect: ['0px', '66px', '10px', '10px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    opacity: 0.6,
                                    fill: ["rgba(0,0,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'bulletCopy2',
                                    type: 'ellipse',
                                    rect: ['0px', '111px', '10px', '10px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    opacity: 0.6,
                                    fill: ["rgba(0,0,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1710px', '1500px', 'auto', 'auto'],
                            sizeRange: ['null','1710px','undefined','undefined'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 8912,
                    autoPlay: true,
                    data: [
                        [
                            "eid1036",
                            "scaleX",
                            88,
                            1000,
                            "easeInOutQuad",
                            "${ball_green}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1104",
                            "scaleX",
                            2123,
                            1335,
                            "easeInOutQuad",
                            "${ball_green}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1236",
                            "scaleX",
                            6068,
                            1335,
                            "easeInOutQuad",
                            "${ball_green}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid1089",
                            "top",
                            2123,
                            1335,
                            "easeInOutQuad",
                            "${ball_blue}",
                            '554px',
                            '314px'
                        ],
                        [
                            "eid1227",
                            "top",
                            6068,
                            1335,
                            "easeInOutQuad",
                            "${ball_blue}",
                            '314px',
                            '554px'
                        ],
                        [
                            "eid1115",
                            "scaleY",
                            2990,
                            595,
                            "easeInQuad",
                            "${ball_yellow}",
                            '0.8',
                            '0.9'
                        ],
                        [
                            "eid1120",
                            "scaleY",
                            3585,
                            974,
                            "easeOutQuad",
                            "${ball_yellow}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid1201",
                            "scaleY",
                            5750,
                            974,
                            "easeOutQuad",
                            "${ball_yellow}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1200",
                            "scaleY",
                            6724,
                            595,
                            "easeInQuad",
                            "${ball_yellow}",
                            '0.9',
                            '0.8'
                        ],
                        [
                            "eid1074",
                            "left",
                            2123,
                            1335,
                            "easeInOutQuad",
                            "${ball_green}",
                            '3px',
                            '493px'
                        ],
                        [
                            "eid1234",
                            "left",
                            6068,
                            1335,
                            "easeInOutQuad",
                            "${ball_green}",
                            '493px',
                            '3px'
                        ],
                        [
                            "eid1041",
                            "scaleY",
                            180,
                            1000,
                            "easeInOutQuad",
                            "${ball_blue}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1095",
                            "scaleY",
                            2123,
                            1335,
                            "easeInOutQuad",
                            "${ball_blue}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1229",
                            "scaleY",
                            6068,
                            1335,
                            "easeInOutQuad",
                            "${ball_blue}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid1040",
                            "opacity",
                            180,
                            1000,
                            "easeInOutQuad",
                            "${ball_blue}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1116",
                            "opacity",
                            2123,
                            1335,
                            "easeInOutQuad",
                            "${ball_blue}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1137",
                            "opacity",
                            3458,
                            318,
                            "easeInOutQuad",
                            "${ball_blue}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid1233",
                            "opacity",
                            6068,
                            318,
                            "easeInOutQuad",
                            "${ball_blue}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid1232",
                            "opacity",
                            6386,
                            1335,
                            "easeInOutQuad",
                            "${ball_blue}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1038",
                            "scaleY",
                            88,
                            1000,
                            "easeInOutQuad",
                            "${ball_green}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1105",
                            "scaleY",
                            2123,
                            1335,
                            "easeInOutQuad",
                            "${ball_green}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1237",
                            "scaleY",
                            6068,
                            1335,
                            "easeInOutQuad",
                            "${ball_green}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid1055",
                            "top",
                            2123,
                            1335,
                            "easeInOutQuad",
                            "${ball_red}",
                            '13px',
                            '314px'
                        ],
                        [
                            "eid1240",
                            "top",
                            6068,
                            1335,
                            "easeInOutQuad",
                            "${ball_red}",
                            '314px',
                            '13px'
                        ],
                        [
                            "eid1153",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${ball_white}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1155",
                            "opacity",
                            2990,
                            468,
                            "easeInOutQuad",
                            "${ball_white}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1160",
                            "opacity",
                            3458,
                            318,
                            "easeInOutQuad",
                            "${ball_white}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1206",
                            "opacity",
                            5750,
                            318,
                            "easeInOutQuad",
                            "${ball_white}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1205",
                            "opacity",
                            6068,
                            468,
                            "easeInOutQuad",
                            "${ball_white}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1187",
                            "opacity",
                            2990,
                            595,
                            "easeInOutQuad",
                            "${ball_yellow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1188",
                            "opacity",
                            4559,
                            0,
                            "easeInOutQuad",
                            "${ball_yellow}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1202",
                            "opacity",
                            5750,
                            595,
                            "easeInOutQuad",
                            "${ball_yellow}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1247",
                            "opacity",
                            7319,
                            0,
                            "easeInOutQuad",
                            "${ball_yellow}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1248",
                            "opacity",
                            8912,
                            0,
                            "easeInOutQuad",
                            "${ball_yellow}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1039",
                            "scaleX",
                            180,
                            1000,
                            "easeInOutQuad",
                            "${ball_blue}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1094",
                            "scaleX",
                            2123,
                            1335,
                            "easeInOutQuad",
                            "${ball_blue}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1228",
                            "scaleX",
                            6068,
                            1335,
                            "easeInOutQuad",
                            "${ball_blue}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid1031",
                            "scaleX",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${ball_red}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1106",
                            "scaleX",
                            2123,
                            1335,
                            "easeInOutQuad",
                            "${ball_red}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1241",
                            "scaleX",
                            6068,
                            1335,
                            "easeInOutQuad",
                            "${ball_red}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid1088",
                            "left",
                            2123,
                            1335,
                            "easeInOutQuad",
                            "${ball_blue}",
                            '983px',
                            '493px'
                        ],
                        [
                            "eid1226",
                            "left",
                            6068,
                            1335,
                            "easeInOutQuad",
                            "${ball_blue}",
                            '493px',
                            '983px'
                        ],
                        [
                            "eid1035",
                            "opacity",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${ball_red}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1140",
                            "opacity",
                            2123,
                            1335,
                            "easeInOutQuad",
                            "${ball_red}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1141",
                            "opacity",
                            3458,
                            318,
                            "easeInOutQuad",
                            "${ball_red}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid1244",
                            "opacity",
                            6068,
                            318,
                            "easeInOutQuad",
                            "${ball_red}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid1243",
                            "opacity",
                            6386,
                            1335,
                            "easeInOutQuad",
                            "${ball_red}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1114",
                            "scaleX",
                            2990,
                            595,
                            "easeInQuad",
                            "${ball_yellow}",
                            '0.8',
                            '0.9'
                        ],
                        [
                            "eid1121",
                            "scaleX",
                            3585,
                            974,
                            "easeOutQuad",
                            "${ball_yellow}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid1199",
                            "scaleX",
                            5750,
                            974,
                            "easeOutQuad",
                            "${ball_yellow}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1198",
                            "scaleX",
                            6724,
                            595,
                            "easeInQuad",
                            "${ball_yellow}",
                            '0.9',
                            '0.8'
                        ],
                        [
                            "eid1181",
                            "top",
                            2990,
                            595,
                            "easeInOutQuad",
                            "${ball_yellow}",
                            '300px',
                            '314px'
                        ],
                        [
                            "eid1197",
                            "top",
                            5750,
                            595,
                            "easeInOutQuad",
                            "${ball_yellow}",
                            '314px',
                            '300px'
                        ],
                        [
                            "eid1037",
                            "opacity",
                            88,
                            1000,
                            "easeInOutQuad",
                            "${ball_green}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1138",
                            "opacity",
                            2123,
                            1335,
                            "easeInOutQuad",
                            "${ball_green}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1139",
                            "opacity",
                            3458,
                            318,
                            "easeInOutQuad",
                            "${ball_green}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid1239",
                            "opacity",
                            6068,
                            318,
                            "easeInOutQuad",
                            "${ball_green}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid1238",
                            "opacity",
                            6386,
                            1335,
                            "easeInOutQuad",
                            "${ball_green}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1047",
                            "left",
                            2123,
                            0,
                            "easeInOutQuad",
                            "${ball_red}",
                            '493px',
                            '493px'
                        ],
                        [
                            "eid1051",
                            "left",
                            3458,
                            0,
                            "easeInOutQuad",
                            "${ball_red}",
                            '493px',
                            '493px'
                        ],
                        [
                            "eid1224",
                            "left",
                            6068,
                            0,
                            "easeInOutQuad",
                            "${ball_red}",
                            '493px',
                            '493px'
                        ],
                        [
                            "eid1225",
                            "left",
                            7403,
                            0,
                            "easeInOutQuad",
                            "${ball_red}",
                            '493px',
                            '493px'
                        ],
                        [
                            "eid1075",
                            "top",
                            2123,
                            1335,
                            "easeInOutQuad",
                            "${ball_green}",
                            '554px',
                            '314px'
                        ],
                        [
                            "eid1235",
                            "top",
                            6068,
                            1335,
                            "easeInOutQuad",
                            "${ball_green}",
                            '314px',
                            '554px'
                        ],
                        [
                            "eid1032",
                            "scaleY",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${ball_red}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1107",
                            "scaleY",
                            2123,
                            1335,
                            "easeInOutQuad",
                            "${ball_red}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1242",
                            "scaleY",
                            6068,
                            1335,
                            "easeInOutQuad",
                            "${ball_red}",
                            '0.9',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("features_wall_matrix_solution_edgeActions.js");
})("features_wall_matrix_solution");
