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
                            id: 'tv_wall',
                            type: 'group',
                            rect: ['-60px', '1', '1058', '1090', 'auto', 'auto'],
                            opacity: 0,
                            c: [
                            {
                                id: 'features_tv_wall_1',
                                type: 'image',
                                rect: ['0px', '0px', '1058px', '1090px', 'auto', 'auto'],
                                opacity: 1,
                                fill: ["rgba(0,0,0,0)",im+"features_tv_wall_1.png",'0px','0px']
                            },
                            {
                                id: 'features_tv_screen_4',
                                type: 'image',
                                rect: ['0px', '0px', '1058px', '1090px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"features_tv_screen_4.png",'0px','0px']
                            },
                            {
                                id: 'features_tv_screen_3',
                                type: 'image',
                                rect: ['0px', '0px', '1058px', '1090px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"features_tv_screen_3.png",'0px','0px']
                            },
                            {
                                id: 'features_tv_screen_2',
                                type: 'image',
                                rect: ['0px', '0px', '1058px', '1090px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"features_tv_screen_2.png",'0px','0px']
                            },
                            {
                                id: 'features_tv_screen_13',
                                type: 'image',
                                rect: ['0px', '-1px', '1058px', '1090px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"features_tv_screen_1.png",'0px','0px']
                            },
                            {
                                id: 'features_tv_screen_all',
                                type: 'image',
                                rect: ['0px', '0px', '1058px', '1090px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"features_tv_screen_all.png",'0px','0px']
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1058px', '819px', 'auto', 'auto'],
                            sizeRange: ['null','1058px','undefined','undefined'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 7591,
                    autoPlay: true,
                    data: [
                        [
                            "eid941",
                            "opacity",
                            1153,
                            261,
                            "linear",
                            "${features_tv_screen_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid954",
                            "opacity",
                            3297,
                            258,
                            "linear",
                            "${features_tv_screen_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid945",
                            "filter.contrast",
                            2414,
                            261,
                            "linear",
                            "${features_tv_screen_4}",
                            '1',
                            '2'
                        ],
                        [
                            "eid946",
                            "filter.contrast",
                            2675,
                            239,
                            "linear",
                            "${features_tv_screen_4}",
                            '2',
                            '1'
                        ],
                        [
                            "eid974",
                            "filter.contrast",
                            4606,
                            728,
                            "linear",
                            "${features_tv_screen_all}",
                            '1',
                            '2'
                        ],
                        [
                            "eid975",
                            "filter.contrast",
                            5335,
                            665,
                            "linear",
                            "${features_tv_screen_all}",
                            '2',
                            '1'
                        ],
                        [
                            "eid947",
                            "opacity",
                            2414,
                            261,
                            "linear",
                            "${features_tv_screen_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid956",
                            "opacity",
                            4088,
                            258,
                            "linear",
                            "${features_tv_screen_4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid981",
                            "opacity",
                            0,
                            500,
                            "easeOutCubic",
                            "${tv_wall}",
                            '0',
                            '1'
                        ],
                        [
                            "eid942",
                            "filter.contrast",
                            1750,
                            261,
                            "linear",
                            "${features_tv_screen_3}",
                            '1',
                            '2'
                        ],
                        [
                            "eid943",
                            "filter.contrast",
                            2011,
                            239,
                            "linear",
                            "${features_tv_screen_3}",
                            '2',
                            '1'
                        ],
                        [
                            "eid944",
                            "opacity",
                            1750,
                            261,
                            "linear",
                            "${features_tv_screen_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid955",
                            "opacity",
                            3769,
                            258,
                            "linear",
                            "${features_tv_screen_3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid970",
                            "opacity",
                            550,
                            261,
                            "linear",
                            "${features_tv_screen_13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid971",
                            "opacity",
                            2841,
                            258,
                            "linear",
                            "${features_tv_screen_13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid984",
                            "left",
                            0,
                            500,
                            "easeOutCubic",
                            "${tv_wall}",
                            '-60px',
                            '0px'
                        ],
                        [
                            "eid968",
                            "filter.contrast",
                            550,
                            261,
                            "linear",
                            "${features_tv_screen_13}",
                            '1',
                            '2'
                        ],
                        [
                            "eid969",
                            "filter.contrast",
                            811,
                            239,
                            "linear",
                            "${features_tv_screen_13}",
                            '2',
                            '1'
                        ],
                        [
                            "eid976",
                            "opacity",
                            4606,
                            728,
                            "linear",
                            "${features_tv_screen_all}",
                            '0',
                            '1'
                        ],
                        [
                            "eid977",
                            "opacity",
                            6750,
                            648,
                            "linear",
                            "${features_tv_screen_all}",
                            '1',
                            '0'
                        ],
                        [
                            "eid978",
                            "opacity",
                            7591,
                            0,
                            "linear",
                            "${features_tv_screen_all}",
                            '0',
                            '0'
                        ],
                        [
                            "eid939",
                            "filter.contrast",
                            1153,
                            261,
                            "linear",
                            "${features_tv_screen_2}",
                            '1',
                            '2'
                        ],
                        [
                            "eid940",
                            "filter.contrast",
                            1414,
                            239,
                            "linear",
                            "${features_tv_screen_2}",
                            '2',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("features_banner_edgeActions.js");
})("features_banner");
