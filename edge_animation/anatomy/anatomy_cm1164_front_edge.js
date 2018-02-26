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
                            id: 'cm1164_front',
                            type: 'image',
                            rect: ['73px', '182px', '1058px', '221px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cm1164_front.png",'0px','0px']
                        },
                        {
                            id: 'line_all_5',
                            type: 'group',
                            rect: ['278', '290px', '78', '131', 'auto', 'auto'],
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
                                rect: ['50px', '27px', '42px', '3', 'auto', 'auto'],
                                borderRadius: ["0px", "0px", "0px", "0px"],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['0.78571']]
                            },
                            {
                                id: 'lineh_a1Copy',
                                type: 'rect',
                                rect: ['auto', '45px', '254px', '3', '-88px', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],[],[],['0.25972']]
                            },
                            {
                                id: 'linev_a4Copy4',
                                type: 'rect',
                                rect: ['8px', '62px', '62px', '3', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['0.53225']]
                            },
                            {
                                id: 'round_4Copy',
                                type: 'ellipse',
                                rect: ['33px', '79px', '13', '13', 'auto', 'auto'],
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
                                rect: ['64px', '0px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            }]
                        },
                        {
                            id: 'Text3Copy2',
                            type: 'text',
                            rect: ['144px', '391px', '210px', '42', 'auto', 'auto'],
                            text: "Port Selection<br>Pushbuttons",
                            align: "right",
                            font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "26px", ""]
                        },
                        {
                            id: 'line_all_4Copy5',
                            type: 'group',
                            rect: ['404px', '231px', '14', '214', 'auto', 'auto'],
                            c: [
                            {
                                id: 'linev_a4Copy5',
                                type: 'rect',
                                rect: ['-32px', 'auto', '79px', '3', 'auto', '51px'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['2.29578']]
                            },
                            {
                                id: 'round_4Copy5',
                                type: 'ellipse',
                                rect: ['1px', '252px', '13', '13', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(0,240,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'round_line4Copy5',
                                type: 'ellipse',
                                rect: ['0px', '58px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            }]
                        },
                        {
                            id: 'Text4Copy',
                            type: 'text',
                            rect: ['282px', '509px', '254px', '60px', 'auto', 'auto'],
                            text: "Mode Selection <br>Pushbutton",
                            align: "center",
                            font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [18, "px"], "rgba(255,255,255,1)", "300", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "26px", ""]
                        },
                        {
                            id: 'line_all_5Copy',
                            type: 'group',
                            rect: ['468px', '290px', '78', '131', 'auto', 'auto'],
                            c: [
                            {
                                id: 'linev_a4Copy14',
                                type: 'rect',
                                rect: ['-13px', '27px', '42px', '3', 'auto', 'auto'],
                                borderRadius: ["0px", "0px", "0px", "0px"],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['0.78571']]
                            },
                            {
                                id: 'linev_a4Copy13',
                                type: 'rect',
                                rect: ['49px', '27px', '42px', '3', 'auto', 'auto'],
                                borderRadius: ["0px", "0px", "0px", "0px"],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['0.78571']]
                            },
                            {
                                id: 'lineh_a1Copy3',
                                type: 'rect',
                                rect: ['auto', '45px', '254px', '3', '-88px', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],[],[],['0.25972']]
                            },
                            {
                                id: 'linev_a4Copy12',
                                type: 'rect',
                                rect: ['8px', '62px', '62px', '3', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['0.53225']]
                            },
                            {
                                id: 'round_4Copy4',
                                type: 'ellipse',
                                rect: ['33px', '79px', '13', '13', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(0,240,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'round_line4Copy9',
                                type: 'ellipse',
                                rect: ['1px', '0px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            },
                            {
                                id: 'round_line4Copy8',
                                type: 'ellipse',
                                rect: ['63px', '0px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            }]
                        },
                        {
                            id: 'Text3Copy3',
                            type: 'text',
                            rect: ['464px', '391px', '210px', '42', 'auto', 'auto'],
                            text: "Port Selection<br>Pushbuttons",
                            align: "left",
                            font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "26px", ""]
                        },
                        {
                            id: 'line_all_4Copy4',
                            type: 'group',
                            rect: ['667px', '231px', '14', '214', 'auto', 'auto'],
                            c: [
                            {
                                id: 'linev_a4Copy15',
                                type: 'rect',
                                rect: ['-32px', 'auto', '79px', '3', 'auto', '51px'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['2.29578']]
                            },
                            {
                                id: 'round_line4Copy10',
                                type: 'ellipse',
                                rect: ['0px', '58px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            },
                            {
                                id: 'round_4Copy6',
                                type: 'ellipse',
                                rect: ['1px', '252px', '13', '13', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(0,240,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['545px', '509px', '254px', '60px', 'auto', 'auto'],
                            text: "Select Pushbutton",
                            align: "center",
                            font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [18, "px"], "rgba(255,255,255,1)", "300", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "26px", ""]
                        },
                        {
                            id: 'line_all_4Copy6',
                            type: 'group',
                            rect: ['762px', '231px', '14', '214', 'auto', 'auto'],
                            c: [
                            {
                                id: 'linev_a4Copy16',
                                type: 'rect',
                                rect: ['-28px', 'auto', '71px', '3', 'auto', '105px'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90']]
                            },
                            {
                                id: 'round_line4Copy11',
                                type: 'ellipse',
                                rect: ['0px', '58px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            },
                            {
                                id: 'round_4Copy7',
                                type: 'ellipse',
                                rect: ['1px', '140px', '13', '13', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(0,240,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        },
                        {
                            id: 'Text4Copy2',
                            type: 'text',
                            rect: ['640px', '391px', '254px', '60px', 'auto', 'auto'],
                            text: "Direction/<br>Function <br>Pushbuttons",
                            align: "center",
                            font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [18, "px"], "rgba(255,255,255,1)", "300", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "26px", ""]
                        },
                        {
                            id: 'line_all_5Copy2',
                            type: 'group',
                            rect: ['847px', '290px', '78', '131', 'auto', 'auto'],
                            c: [
                            {
                                id: 'linev_a4Copy19',
                                type: 'rect',
                                rect: ['-16px', '28px', '45px', '3', 'auto', 'auto'],
                                borderRadius: ["0px", "0px", "0px", "0px"],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['0.78571']]
                            },
                            {
                                id: 'linev_a4Copy18',
                                type: 'rect',
                                rect: ['18px', '28px', '45px', '3', 'auto', 'auto'],
                                borderRadius: ["0px", "0px", "0px", "0px"],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['0.78571']]
                            },
                            {
                                id: 'lineh_a1Copy4',
                                type: 'rect',
                                rect: ['auto', '45px', '261px', '3', '-76px', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],[],[],['0.14173']]
                            },
                            {
                                id: 'linev_a4Copy17',
                                type: 'rect',
                                rect: ['-11px', '119px', '69px', '3', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['2.11291']]
                            },
                            {
                                id: 'round_line4Copy13',
                                type: 'ellipse',
                                rect: ['0px', '0px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            },
                            {
                                id: 'round_line4Copy12',
                                type: 'ellipse',
                                rect: ['34px', '0px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            },
                            {
                                id: 'round_4Copy8',
                                type: 'ellipse',
                                rect: ['18px', '194px', '13', '13', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(0,240,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        },
                        {
                            id: 'Text3Copy4',
                            type: 'text',
                            rect: ['768px', '509px', '210px', '42', 'auto', 'auto'],
                            text: "Console Audio <br>Ports",
                            align: "center",
                            font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "26px", ""]
                        },
                        {
                            id: 'line_all_4Copy7',
                            type: 'group',
                            rect: ['931px', '231px', '14', '214', 'auto', 'auto'],
                            c: [
                            {
                                id: 'linev_a4Copy20',
                                type: 'rect',
                                rect: ['-28px', 'auto', '71px', '3', 'auto', '105px'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90']]
                            },
                            {
                                id: 'round_line4Copy14',
                                type: 'ellipse',
                                rect: ['0px', '58px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            },
                            {
                                id: 'round_4Copy9',
                                type: 'ellipse',
                                rect: ['1px', '140px', '13', '13', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(0,240,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        },
                        {
                            id: 'Text4Copy3',
                            type: 'text',
                            rect: ['899px', '391px', '254px', '60px', 'auto', 'auto'],
                            text: "USB 2.0 <br>Peripheral Port",
                            align: "left",
                            font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [18, "px"], "rgba(255,255,255,1)", "300", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "26px", ""]
                        },
                        {
                            id: 'line_all_4Copy8',
                            type: 'group',
                            rect: ['1080px', '231px', '14', '214', 'auto', 'auto'],
                            c: [
                            {
                                id: 'linev_a4Copy21',
                                type: 'rect',
                                rect: ['-33px', 'auto', '80px', '3', 'auto', '72px'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['2.97182']]
                            },
                            {
                                id: 'lineh_a1Copy5',
                                type: 'rect',
                                rect: ['auto', '23px', '254px', '3', '-91px', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],[],[],['0.23622']]
                            },
                            {
                                id: 'round_line4Copy15',
                                type: 'ellipse',
                                rect: ['-66px', '18px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            },
                            {
                                id: 'round_4Copy10',
                                type: 'ellipse',
                                rect: ['0px', '252px', '13', '13', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(0,240,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        },
                        {
                            id: 'Text4Copy4',
                            type: 'text',
                            rect: ['958px', '509px', '254px', '60px', 'auto', 'auto'],
                            text: "IR Receiver",
                            align: "center",
                            font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [18, "px"], "rgba(255,255,255,1)", "300", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "26px", ""]
                        },
                        {
                            id: 'line_all_4Copy3',
                            type: 'group',
                            rect: ['667px', '98px', '14', '214', 'auto', 'auto'],
                            c: [
                            {
                                id: 'linev_a4Copy3',
                                type: 'rect',
                                rect: ['-38px', '50px', '89px', '3', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90']]
                            },
                            {
                                id: 'round_4Copy3',
                                type: 'ellipse',
                                rect: ['0px', '0px', '13', '13', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(0,240,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'round_line4Copy3',
                                type: 'ellipse',
                                rect: ['0px', '96px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            }]
                        },
                        {
                            id: 'Text3Copy',
                            type: 'text',
                            rect: ['569px', '33px', '210px', '42', 'auto', 'auto'],
                            text: "OSD (Esc)<br>Pushbutton",
                            align: "center",
                            font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                            textStyle: ["1px", "", "26px", ""]
                        },
                        {
                            id: 'line_all_4',
                            type: 'group',
                            rect: ['403px', '98px', '14', '214', 'auto', 'auto'],
                            c: [
                            {
                                id: 'linev_a4Copy2',
                                type: 'rect',
                                rect: ['112px', '75px', '42px', '3', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90']]
                            },
                            {
                                id: 'linev_a4Copy',
                                type: 'rect',
                                rect: ['-140px', '75px', '42px', '3', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90']]
                            },
                            {
                                id: 'lineh_a1',
                                type: 'rect',
                                rect: ['auto', 'auto', '254px', '3', '-120px', '158px'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'linev_a4',
                                type: 'rect',
                                rect: ['-25px', '21px', '62px', '3', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.50)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90']]
                            },
                            {
                                id: 'round_4',
                                type: 'ellipse',
                                rect: ['0px', '-20', '13', '13', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(0,240,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'round_line4',
                                type: 'ellipse',
                                rect: ['-126px', '96px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            },
                            {
                                id: 'round_line4Copy',
                                type: 'ellipse',
                                rect: ['127px', '96px', '10', '10', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,151,0,0)"],
                                stroke: [2,"rgba(0,240,255,1.00)","solid"]
                            }]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['305px', '33px', '210px', '42', 'auto', 'auto'],
                            text: "Port Status LEDs",
                            align: "center",
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("anatomy_cm1164_front_edgeActions.js");
})("anatomy_cm1164_front");
