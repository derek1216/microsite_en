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
                            id: 'features_tv_wall_1',
                            type: 'image',
                            rect: ['0px', '1px', '1058px', '1090px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"features_tv_wall_1.png",'0px','0px']
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
                    duration: 370,
                    autoPlay: true,
                    data: [
                        [
                            "eid918",
                            "opacity",
                            0,
                            180,
                            "linear",
                            "${features_tv_wall_1}",
                            '1',
                            '0.51'
                        ],
                        [
                            "eid919",
                            "opacity",
                            180,
                            190,
                            "linear",
                            "${features_tv_wall_1}",
                            '0.51',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("features_banner_edgeActions.js");
})("features_banner");
