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
                            id: 'features2_wall_setup_0',
                            type: 'image',
                            rect: ['0px', '0px', '734px', '574px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"features2_wall_setup_0.png",'0px','0px']
                        },
                        {
                            id: 'features2_wall_setup_1',
                            type: 'image',
                            rect: ['0px', '0px', '734px', '574px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"features2_wall_setup_1.png",'0px','0px']
                        },
                        {
                            id: 'features2_wall_setup_2',
                            type: 'image',
                            rect: ['0px', '0px', '734px', '574px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"features2_wall_setup_2.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '734px', '574px', 'auto', 'auto'],
                            sizeRange: ['null','734px','undefined','undefined'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5526,
                    autoPlay: true,
                    data: [
                        [
                            "eid996",
                            "opacity",
                            2318,
                            555,
                            "easeOutCubic",
                            "${features2_wall_setup_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1010",
                            "opacity",
                            4182,
                            555,
                            "easeOutCubic",
                            "${features2_wall_setup_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1013",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${features2_wall_setup_0}",
                            '1',
                            '1'
                        ],
                        [
                            "eid999",
                            "opacity",
                            959,
                            461,
                            "easeOutCubic",
                            "${features2_wall_setup_0}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1003",
                            "opacity",
                            2318,
                            258,
                            "easeOutCubic",
                            "${features2_wall_setup_0}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1001",
                            "opacity",
                            2576,
                            297,
                            "easeOutCubic",
                            "${features2_wall_setup_0}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1006",
                            "opacity",
                            4182,
                            258,
                            "easeOutCubic",
                            "${features2_wall_setup_0}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1007",
                            "opacity",
                            4440,
                            297,
                            "easeOutCubic",
                            "${features2_wall_setup_0}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1014",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${features2_wall_setup_1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid987",
                            "opacity",
                            750,
                            670,
                            "easeOutCubic",
                            "${features2_wall_setup_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid993",
                            "opacity",
                            2318,
                            555,
                            "easeOutCubic",
                            "${features2_wall_setup_1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1005",
                            "opacity",
                            4182,
                            555,
                            "easeOutCubic",
                            "${features2_wall_setup_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1011",
                            "opacity",
                            5526,
                            0,
                            "linear",
                            "${features2_wall_setup_1}",
                            '1',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("features_wall_setup_edgeActions.js");
})("features_wall_setup");
