$(function () {
    $(function () {
        $('.inner-content-div2').slimScroll({
            height: '400px' //设置显示的高度
        });
    })

    $('.nav_title ul li').click(function () {
        $(this).siblings().removeClass('action');
        $(this).addClass('action');

    })

    allChart1(vm.allChart1Data,vm.statistics.name);
    allChart2(vm.allChart2Data,vm.statistics.name);
    allChart3(vm.allChart3Data);
    shopChart3(vm.shopChart3Data,vm.statistics.name);
    shopChart2(vm.shopChart2Data);
    shopChart1(vm.shopChart1Data);
})


var vm = new Vue({
    el: '#step',
    data: {
        staff:[{
            value:1,
            name:'2131'
        },{
            value:2,
            name:'ergege'
        },{
            value:3,
            name:'2131'
        },{
            value:4,
            name:'ergege'
        },],
        shop:[{
            value:1,
            name:'2131'
        },{
            value:2,
            name:'ergege'
        },{
            value:3,
            name:'2131'
        },{
            value:4,
            name:'ergege'
        },],
        statistics:{
            name:'员工1',
            proNum:1222,
            orderNum:234,
            return:23444,
            sales:'2342万元',
            cost:'43565万元',
            profit:'564654万元',
            aveProfit:'56%',
        },
        statisticsShop:{
            name:'加盟商',
            orderNum:234,
            sales:'2342万元',
            cost:'43565万元',
            profit:'564654万元',
            aveProfit:'56%',
        },
        statisticsProfit:{
            percentage:'348937万元',
            profit:'564654万元',
            allProfit:'2387654万元',
        },
        allChart1Data:[12, 32, 91],
        allChart2Data:[66, 23, 87],
        allChart3Data:65,
        shopChart1Data:85,
        shopChart2Data:25,
        shopChart3Data:[80, 35, 58],

    },
    methods:{

    }

})