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
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'VM1600_all',
                            type: 'group',
                            rect: ['543', '-3px', '848', '979', 'auto', 'auto'],
                            c: [
                            {
                                id: 'solution_diagram_vm1600_hole_shadow',
                                type: 'image',
                                rect: ['0px', '3px', '847px', '976px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"solution_diagram_vm1600_hole_shadow.png",'0px','0px']
                            },
                            {
                                id: 'power_fan',
                                type: 'image',
                                rect: ['0px', '3px', '847px', '976px', 'auto', 'auto'],
                                opacity: 0,
                                fill: ["rgba(0,0,0,0)",im+"solution_diagram_power_fan.png",'0px','0px']
                            },
                            {
                                id: 'card-8_hdmi',
                                type: 'image',
                                rect: ['-531px', '737px', '523px', '299px', 'auto', 'auto'],
                                opacity: 0,
                                fill: ["rgba(0,0,0,0)",im+"solution_diagram_card_hdmi.png",'0px','0px']
                            },
                            {
                                id: 'card-7_dvi',
                                type: 'image',
                                rect: ['-507px', '688px', '523px', '299px', 'auto', 'auto'],
                                opacity: 0,
                                fill: ["rgba(0,0,0,0)",im+"solution_diagram_card_dvi.png",'0px','0px']
                            },
                            {
                                id: 'mask_line3_vm1600',
                                type: 'image',
                                rect: ['1px', '3px', '847px', '976px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"solution_diagram_vm1600_line_3.png",'0px','0px']
                            },
                            {
                                id: 'card-6_hdmi',
                                type: 'image',
                                rect: ['-483px', '638px', '523px', '299px', 'auto', 'auto'],
                                opacity: 0,
                                fill: ["rgba(0,0,0,0)",im+"solution_diagram_card_hdmi.png",'0px','0px']
                            },
                            {
                                id: 'card-5_dvi',
                                type: 'image',
                                rect: ['-459px', '589px', '523px', '299px', 'auto', 'auto'],
                                opacity: 0,
                                fill: ["rgba(0,0,0,0)",im+"solution_diagram_card_dvi.png",'0px','0px']
                            },
                            {
                                id: 'mask_line1_vm1600',
                                type: 'image',
                                rect: ['0px', '0px', '847px', '976px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"solution_diagram_vm1600_line.png",'0px','0px']
                            },
                            {
                                id: 'card-4_hdmi',
                                type: 'image',
                                rect: ['-431px', '520px', '523px', '299px', 'auto', 'auto'],
                                opacity: 0,
                                fill: ["rgba(0,0,0,0)",im+"solution_diagram_card_hdmi.png",'0px','0px']
                            },
                            {
                                id: 'card-3_dvi',
                                type: 'image',
                                rect: ['-419px', '468px', '523px', '299px', 'auto', 'auto'],
                                opacity: 0,
                                fill: ["rgba(0,0,0,0)",im+"solution_diagram_card_dvi.png",'0px','0px']
                            },
                            {
                                id: 'mask_line2_vm1600',
                                type: 'image',
                                rect: ['1px', '2px', '847px', '976px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"solution_diagram_vm1600_line_2.png",'0px','0px']
                            },
                            {
                                id: 'card-2_hdmi',
                                type: 'image',
                                rect: ['-395px', '420px', '523px', '299px', 'auto', 'auto'],
                                opacity: 0,
                                fill: ["rgba(0,0,0,0)",im+"solution_diagram_card_hdmi.png",'0px','0px']
                            },
                            {
                                id: 'card-1_dvi',
                                type: 'image',
                                rect: ['-370px', '372px', '523px', '299px', 'auto', 'auto'],
                                opacity: 0,
                                fill: ["rgba(0,0,0,0)",im+"solution_diagram_card_dvi.png",'0px','0px']
                            },
                            {
                                id: 'mask_top_vm1600',
                                type: 'image',
                                rect: ['0px', '3px', '847px', '976px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"solution_diagram_vm1600_hole_top.png",'0px','0px']
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1390px', '1036px', 'auto', 'auto'],
                            sizeRange: ['null','1390px','undefined','undefined'],
                            overflow: 'hidden',
                            fill: ["rgba(14,15,15,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 6165,
                    autoPlay: true,
                    data: [
                        [
                            "eid871",
                            "left",
                            2205,
                            1865,
                            "easeInOutQuad",
                            "${card-4_hdmi}",
                            '-431px',
                            '91px'
                        ],
                        [
                            "eid884",
                            "top",
                            4070,
                            1605,
                            "easeInOutQuad",
                            "${card-6_hdmi}",
                            '638px',
                            '307px'
                        ],
                        [
                            "eid923",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${card-3_dvi}",
                            '0',
                            '0'
                        ],
                        [
                            "eid911",
                            "opacity",
                            2080,
                            750,
                            "easeInOutQuad",
                            "${card-3_dvi}",
                            '0',
                            '1'
                        ],
                        [
                            "eid921",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${card-1_dvi}",
                            '0',
                            '0'
                        ],
                        [
                            "eid900",
                            "opacity",
                            1515,
                            750,
                            "easeInOutQuad",
                            "${card-1_dvi}",
                            '0',
                            '1'
                        ],
                        [
                            "eid872",
                            "top",
                            2205,
                            1865,
                            "easeInOutQuad",
                            "${card-4_hdmi}",
                            '520px',
                            '240px'
                        ],
                        [
                            "eid895",
                            "left",
                            4300,
                            1865,
                            "easeInOutQuad",
                            "${card-8_hdmi}",
                            '-531px',
                            '91px'
                        ],
                        [
                            "eid859",
                            "top",
                            2080,
                            1605,
                            "easeInOutQuad",
                            "${card-3_dvi}",
                            '468px',
                            '218px'
                        ],
                        [
                            "eid877",
                            "left",
                            3860,
                            1605,
                            "easeInOutQuad",
                            "${card-5_dvi}",
                            '-459px',
                            '91px'
                        ],
                        [
                            "eid883",
                            "left",
                            4070,
                            1605,
                            "easeInOutQuad",
                            "${card-6_hdmi}",
                            '-483px',
                            '91px'
                        ],
                        [
                            "eid896",
                            "top",
                            4300,
                            1865,
                            "easeInOutQuad",
                            "${card-8_hdmi}",
                            '737px',
                            '355px'
                        ],
                        [
                            "eid889",
                            "left",
                            4215,
                            1605,
                            "easeInOutQuad",
                            "${card-7_dvi}",
                            '-507px',
                            '91px'
                        ],
                        [
                            "eid846",
                            "left",
                            1910,
                            1605,
                            "easeInOutQuad",
                            "${card-2_hdmi}",
                            '-395px',
                            '91px'
                        ],
                        [
                            "eid926",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${card-5_dvi}",
                            '0',
                            '0'
                        ],
                        [
                            "eid913",
                            "opacity",
                            3860,
                            750,
                            "easeInOutQuad",
                            "${card-5_dvi}",
                            '0',
                            '1'
                        ],
                        [
                            "eid835",
                            "left",
                            1515,
                            1605,
                            "easeInOutQuad",
                            "${card-1_dvi}",
                            '-370px',
                            '91px'
                        ],
                        [
                            "eid927",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${card-6_hdmi}",
                            '0',
                            '0'
                        ],
                        [
                            "eid914",
                            "opacity",
                            4070,
                            750,
                            "easeInOutQuad",
                            "${card-6_hdmi}",
                            '0',
                            '1'
                        ],
                        [
                            "eid924",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${card-4_hdmi}",
                            '0',
                            '0'
                        ],
                        [
                            "eid912",
                            "opacity",
                            2205,
                            750,
                            "easeInOutQuad",
                            "${card-4_hdmi}",
                            '0',
                            '1'
                        ],
                        [
                            "eid890",
                            "top",
                            4215,
                            1605,
                            "easeInOutQuad",
                            "${card-7_dvi}",
                            '688px',
                            '331px'
                        ],
                        [
                            "eid930",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${power_fan}",
                            '0',
                            '0'
                        ],
                        [
                            "eid798",
                            "opacity",
                            1000,
                            915,
                            "linear",
                            "${power_fan}",
                            '0',
                            '1'
                        ],
                        [
                            "eid847",
                            "top",
                            1910,
                            1605,
                            "easeInOutQuad",
                            "${card-2_hdmi}",
                            '420px',
                            '194px'
                        ],
                        [
                            "eid878",
                            "top",
                            3860,
                            1605,
                            "easeInOutQuad",
                            "${card-5_dvi}",
                            '589px',
                            '283px'
                        ],
                        [
                            "eid928",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${card-7_dvi}",
                            '0',
                            '0'
                        ],
                        [
                            "eid916",
                            "opacity",
                            4215,
                            750,
                            "easeInOutQuad",
                            "${card-7_dvi}",
                            '0',
                            '1'
                        ],
                        [
                            "eid858",
                            "left",
                            2080,
                            1605,
                            "easeInOutQuad",
                            "${card-3_dvi}",
                            '-419px',
                            '91px'
                        ],
                        [
                            "eid836",
                            "top",
                            1515,
                            1605,
                            "easeInOutQuad",
                            "${card-1_dvi}",
                            '372px',
                            '170px'
                        ],
                        [
                            "eid929",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${card-8_hdmi}",
                            '0',
                            '0'
                        ],
                        [
                            "eid917",
                            "opacity",
                            4300,
                            750,
                            "easeInOutQuad",
                            "${card-8_hdmi}",
                            '0',
                            '1'
                        ],
                        [
                            "eid922",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${card-2_hdmi}",
                            '0',
                            '0'
                        ],
                        [
                            "eid910",
                            "opacity",
                            1910,
                            750,
                            "easeInOutQuad",
                            "${card-2_hdmi}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("solution_diagram_edgeActions.js");
})("solution_diagram_vm1600");
