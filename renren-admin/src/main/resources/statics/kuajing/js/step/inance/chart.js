function allChart1(d,t) {
    var dom = document.getElementById("allChart1");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    var Color = ['#28bfff', '#adf2ff', '#ff747b', '#ffc7af',
        '#9972ff', '#d4c5ff'
    ];

    option = {
        title:{
            text:t,
            textStyle: {
                fontSize: '14',
                color:'#666',
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },

        tooltip: {
            show: "true",
            trigger: 'item',
            formatter: '{b}<br />{a0}: {c0}%',
            backgroundColor: 'rgba(0,0,0,0.7)', // 背景
            padding: [8, 10], //内边距
            extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#32346c',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd ',
                    type:'dashed'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#bac0c0',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
            },
        },
        yAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitArea: {
                show: false
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#bac0c0',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
            },
            data:['新增产品数','订单数','退货情况']
        },
        series: [{
            name: '',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
                        var colorList = [];
                        for (var i = 3; i > 0; i--) {
                            colorList.push({
                                type: 'bar',
                                colorStops: [{
                                    offset: 0,
                                    color: Color[i*2 - 2] // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: Color[i*2 - 1] // 100% 处的颜色
                                }],
                                globalCoord: false, // 缺省为 false

                            });
                        }

                        return colorList[params.dataIndex]
                    },
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: d
        }

        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function allChart2(d,t) {
    var dom = document.getElementById("allChart2");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    var Color = ['#28bfff', '#adf2ff', '#ff747b', '#ffc7af',
        '#9972ff', '#d4c5ff'
    ];

    option = {
        title:{
            text:t,
            textStyle: {
                fontSize: '14',
                color:'#666',
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },

        tooltip: {
            show: "true",
            trigger: 'item',
            formatter: '{b}<br />{a0}: {c0}%',
            backgroundColor: 'rgba(0,0,0,0.7)', // 背景
            padding: [8, 10], //内边距
            extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#32346c',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd ',
                    type:'dashed'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#bac0c0',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
            },
        },
        yAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitArea: {
                show: false
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#bac0c0',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
            },
            data:['销售额','成本','利润']
        },
        series: [{
            name: '',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
                        var colorList = [];
                        for (var i = 3; i > 0; i--) {
                            colorList.push({
                                type: 'bar',
                                colorStops: [{
                                    offset: 0,
                                    color: Color[i*2 - 2] // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: Color[i*2 - 1] // 100% 处的颜色
                                }],
                                globalCoord: false, // 缺省为 false

                            });
                        }

                        return colorList[params.dataIndex]
                    },
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: d
        }

        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function allChart3(d) {
    var dom = document.getElementById("allChart3");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    var Color = ['#28bfff', '#adf2ff', '#ff747b', '#ffc7af',
        '#9972ff', '#d4c5ff'
    ];


    var shadowColor = '#374b86';
    var value = d;
    option = {
        title: {
            text: `${value}%`,
            subtext: '平均利润率',
            left: 'center',
            top: 'center',//top待调整
            textStyle: {
                color: '#666',
                fontSize: 30,
                fontFamily: 'DINAlternate-Bold'
            },
            subtextStyle: {
                color: '#666',
                fontSize: 15,
                fontFamily: 'PingFangSC-Regular',
                top: 'center'
            },
            itemGap: -30//主副标题间距
        },
        series: [{
            name: 'pie1',
            type: 'pie',
            clockWise: true,
            radius: ['70px', '75px'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: value,
                name: 'completed',
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        borderColor: {
                            colorStops: [{
                                offset: 0,
                                color: '#adf2ff' || '#00cefc' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#28bfff' || '#367bec' // 100% 处的颜色
                            }]
                        },
                        color: { // 完成的圆环的颜色
                            colorStops: [{
                                offset: 0,
                                color: '#adf2ff' || '#00cefc' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#28bfff' || '#367bec' // 100% 处的颜色
                            }]
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: 'gap',
                value: 100 - value,
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        color: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgba(0, 0, 0, 0)',
                        borderWidth: 0
                    }
                }
            }]
        }]
    }

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function shopChart3(d,t) {
    var dom = document.getElementById("shopChart3");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    var Color = ['#28bfff', '#adf2ff', '#ff747b', '#ffc7af',
        '#9972ff', '#d4c5ff'
    ];

    option = {
        title:{
            text:t,
            textStyle: {
                fontSize: '14',
                color:'#666',
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },

        tooltip: {
            show: "true",
            trigger: 'item',
            formatter: '{b}<br />{a0}: {c0}%',
            backgroundColor: 'rgba(0,0,0,0.7)', // 背景
            padding: [8, 10], //内边距
            extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#32346c',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd ',
                    type:'dashed'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#bac0c0',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
            },
        },
        yAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitArea: {
                show: false
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#bac0c0',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
            },
            data:['销售额','成本','利润']
        },
        series: [{
            name: '',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
                        var colorList = [];
                        for (var i = 3; i > 0; i--) {
                            colorList.push({
                                type: 'bar',
                                colorStops: [{
                                    offset: 0,
                                    color: Color[i*2 - 2] // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: Color[i*2 - 1] // 100% 处的颜色
                                }],
                                globalCoord: false, // 缺省为 false

                            });
                        }

                        return colorList[params.dataIndex]
                    },
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: d
        }

        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function shopChart2(d) {
    var dom = document.getElementById("shopChart2");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    var Color = ['#28bfff', '#adf2ff', '#ff747b', '#ffc7af',
        '#9972ff', '#d4c5ff'
    ];


    var shadowColor = '#374b86';
    var value = d;
    option = {
        title: {
            text: `${value}%`,
            subtext: '平均利润率',
            left: 'center',
            top: 'center',//top待调整
            textStyle: {
                color: '#666',
                fontSize: 30,
                fontFamily: 'DINAlternate-Bold'
            },
            subtextStyle: {
                color: '#666',
                fontSize: 15,
                fontFamily: 'PingFangSC-Regular',
                top: 'center'
            },
            itemGap: -30//主副标题间距
        },
        series: [{
            name: 'pie1',
            type: 'pie',
            clockWise: true,
            radius: ['70px', '75px'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: value,
                name: 'completed',
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        borderColor: {
                            colorStops: [{
                                offset: 0,
                                color: '#adf2ff' || '#00cefc' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#28bfff' || '#367bec' // 100% 处的颜色
                            }]
                        },
                        color: { // 完成的圆环的颜色
                            colorStops: [{
                                offset: 0,
                                color: '#adf2ff' || '#00cefc' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#28bfff' || '#367bec' // 100% 处的颜色
                            }]
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: 'gap',
                value: 100 - value,
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        color: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgba(0, 0, 0, 0)',
                        borderWidth: 0
                    }
                }
            }]
        }]
    }

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function shopChart1(d) {
    var dom = document.getElementById("shopChart1");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    var Color = ['#28bfff', '#adf2ff', '#ff747b', '#ffc7af',
        '#9972ff', '#d4c5ff'
    ];


    var shadowColor = '#374b86';
    var value = d;
    option = {
        title: {
            text: `${value}%`,
            subtext: '平均利润率',
            left: 'center',
            top: 'center',//top待调整
            textStyle: {
                color: '#666',
                fontSize: 30,
                fontFamily: 'DINAlternate-Bold'
            },
            subtextStyle: {
                color: '#666',
                fontSize: 15,
                fontFamily: 'PingFangSC-Regular',
                top: 'center'
            },
            itemGap: -30//主副标题间距
        },
        series: [{
            name: 'pie1',
            type: 'pie',
            clockWise: true,
            radius: ['70px', '75px'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: value,
                name: 'completed',
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        borderColor: {
                            colorStops: [{
                                offset: 0,
                                color: '#adf2ff' || '#00cefc' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#28bfff' || '#367bec' // 100% 处的颜色
                            }]
                        },
                        color: { // 完成的圆环的颜色
                            colorStops: [{
                                offset: 0,
                                color: '#adf2ff' || '#00cefc' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#28bfff' || '#367bec' // 100% 处的颜色
                            }]
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: 'gap',
                value: 100 - value,
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        color: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgba(0, 0, 0, 0)',
                        borderWidth: 0
                    }
                }
            }]
        }]
    }

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}


