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
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cm1164_back',
                            type: 'image',
                            rect: ['73px', '183px', '1058px', '221px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cm1164_back.png",'0px','0px']
                        },
                        {
                            id: 'line_all_5',
                            type: 'group',
                            rect: ['118px', '290px', '78', '131', 'auto', 'auto'],
                            c: [
                            {
                                id: 'linev_a4Copy6',
                                type: 'rect',
                                rect: ['-14px', '27px', '42px', '3', 'auto', 'auto'],
                                borderRadius: ["0px", "0px", "0px", "0px"],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['0.78571']]
                            },
                            {
                                id: 'linev_a4Copy11',
                                type: 'rect',
                                rect: ['110px', '27px', '42px', '3', 'auto', 'auto'],
                                borderRadius: ["0px", "0px", "0px", "0px"],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['0.78571']]
                            },
                            {
                                id: 'lineh_a1Copy',
                                type: 'rect',
                                rect: ['auto', '45px', '254px', '3', '-118px', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],[],[],['0.49607']]
                            },
                            {
                                id: 'linev_a4Copy4',
                                type: 'rect',
                                rect: ['38px', '62px', '62px', '3', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['0.53225']]
                            },
                            {
                                id: 'round_4Copy',
                                type: 'ellipse',
                                rect: ['63px', '79px', '13', '13', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(0,240,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'round_line4Copy4',
                                type: 'ellipse',
                                rect: ['0px', '0px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            },
                            {
                                id: 'round_line4Copy2',
                                type: 'ellipse',
                                rect: ['124px', '0px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            }]
                        },
                        {
                            id: 'Text3Copy2',
                            type: 'text',
                            rect: ['82px', '391px', '210px', '42', 'auto', 'auto'],
                            text: "Power Socket/<br>Power Switch",
                            align: "center",
                            font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "26px", ""]
                        },
                        {
                            id: 'line_all_4Copy11',
                            type: 'group',
                            rect: ['367px', '235px', '14', '214', 'auto', 'auto'],
                            c: [
                            {
                                id: 'linev_a4Copy24',
                                type: 'rect',
                                rect: ['-28px', 'auto', '71px', '3', 'auto', '60px'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['2.29578']]
                            },
                            {
                                id: 'round_line4Copy19',
                                type: 'ellipse',
                                rect: ['0px', '58px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            },
                            {
                                id: 'round_4Copy14',
                                type: 'ellipse',
                                rect: ['1px', '232px', '13', '13', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(0,240,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        },
                        {
                            id: 'Text4Copy4',
                            type: 'text',
                            rect: ['245px', '493px', '254px', '60px', 'auto', 'auto'],
                            text: "IR Receiver<br> (Extension)",
                            align: "center",
                            font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [18, "px"], "rgba(255,255,255,1)", "300", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "26px", ""]
                        },
                        {
                            id: 'line_all_5Copy',
                            type: 'group',
                            rect: ['398px', '292px', '78', '131', 'auto', 'auto'],
                            c: [
                            {
                                id: 'linev_a4Copy14',
                                type: 'rect',
                                rect: ['-14px', '27px', '42px', '3', 'auto', 'auto'],
                                borderRadius: ["0px", "0px", "0px", "0px"],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['0.78571']]
                            },
                            {
                                id: 'linev_a4Copy13',
                                type: 'rect',
                                rect: ['143px', '27px', '42px', '3', 'auto', 'auto'],
                                borderRadius: ["0px", "0px", "0px", "0px"],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['0.78571']]
                            },
                            {
                                id: 'lineh_a1Copy3',
                                type: 'rect',
                                rect: ['auto', '45px', '254px', '3', '-135px', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],[],[],['0.62992']]
                            },
                            {
                                id: 'linev_a4Copy12',
                                type: 'rect',
                                rect: ['52px', '62px', '62px', '3', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['0.53225']]
                            },
                            {
                                id: 'round_4Copy4',
                                type: 'ellipse',
                                rect: ['77px', '79px', '13', '13', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(0,240,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'round_line4Copy9',
                                type: 'ellipse',
                                rect: ['0px', '0px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            },
                            {
                                id: 'round_line4Copy8',
                                type: 'ellipse',
                                rect: ['157px', '0px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            }]
                        },
                        {
                            id: 'Text3Copy3',
                            type: 'text',
                            rect: ['389px', '393px', '210px', '42', 'auto', 'auto'],
                            text: "Console Port Section",
                            align: "center",
                            font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "26px", ""]
                        },
                        {
                            id: 'line_all_4Copy12',
                            type: 'group',
                            rect: ['679px', '98px', '14', '214', 'auto', 'auto'],
                            c: [
                            {
                                id: 'linev_a4Copy27',
                                type: 'rect',
                                rect: ['367px', '75px', '42px', '3', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90']]
                            },
                            {
                                id: 'linev_a4Copy26',
                                type: 'rect',
                                rect: ['-140px', '75px', '42px', '3', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90']]
                            },
                            {
                                id: 'lineh_a1Copy6',
                                type: 'rect',
                                rect: ['auto', 'auto', '254px', '3', '-248px', '158px'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],[],[],['2']]
                            },
                            {
                                id: 'linev_a4Copy25',
                                type: 'rect',
                                rect: ['106px', '21px', '62px', '3', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90']]
                            },
                            {
                                id: 'round_line4Copy21',
                                type: 'ellipse',
                                rect: ['-126px', '96px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            },
                            {
                                id: 'round_line4Copy20',
                                type: 'ellipse',
                                rect: ['382px', '96px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            },
                            {
                                id: 'round_4Copy15',
                                type: 'ellipse',
                                rect: ['131px', '-20', '13', '13', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(0,240,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        },
                        {
                            id: 'Text3Copy',
                            type: 'text',
                            rect: ['712px', '33px', '210px', '42', 'auto', 'auto'],
                            text: "KVM Port Section",
                            align: "center",
                            font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "26px", ""]
                        },
                        {
                            id: 'line_all_4Copy',
                            type: 'group',
                            rect: ['200px', '149px', '14', '214', 'auto', 'auto'],
                            c: [
                            {
                                id: 'linev_a4Copy7',
                                type: 'rect',
                                rect: ['-46px', '30px', '105px', '3', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['1.22857']]
                            },
                            {
                                id: 'round_line4Copy16',
                                type: 'ellipse',
                                rect: ['0px', '96px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            },
                            {
                                id: 'round_4Copy11',
                                type: 'ellipse',
                                rect: ['0px', '-44px', '13', '13', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(0,240,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['83px', '36px', '210px', '42', 'auto', 'auto'],
                            text: "Grounding <br>Terminal",
                            align: "center",
                            font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "26px", ""]
                        },
                        {
                            id: 'line_all_4Copy9',
                            type: 'group',
                            rect: ['329px', '98px', '14', '214', 'auto', 'auto'],
                            c: [
                            {
                                id: 'linev_a4Copy22',
                                type: 'rect',
                                rect: ['-46px', '64px', '105px', '3', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['0.57142']]
                            },
                            {
                                id: 'round_line4Copy17',
                                type: 'ellipse',
                                rect: ['0px', '96px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            },
                            {
                                id: 'round_4Copy12',
                                type: 'ellipse',
                                rect: ['0px', '30px', '13', '13', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(0,240,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        },
                        {
                            id: 'Text3Copy5',
                            type: 'text',
                            rect: ['298px', '32px', '210px', '42', 'auto', 'auto'],
                            text: "Daisy Chain <br>Control In/Out <br>Ports",
                            align: "left",
                            font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "26px", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1200px', '600px', 'auto', 'auto'],
                            sizeRange: ['null','1200px','undefined','undefined'],
                            overflow: 'hidden',
                            fill: ["rgba(14,15,15,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("anatomy_cm1164_rear_edgeActions.js");
})("anatomy_cm1164_rear");
