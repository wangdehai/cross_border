window.onload = function (ev) {

    $('.inner-content-div2').slimScroll({
        height: '400px' //设置显示的高度
    });

    $('.okEdit input[type=text]').attr('disabled','true');
    $('.okEdit textarea').attr('disabled','true');
    $('input.edit').click(function () {
        if($(this).val() == '编辑'){
            $(this).val('保存');
            $(this).parent().parent().find('input').removeAttr("disabled");
            $(this).parent().parent().find('textarea').removeAttr("disabled");
            $(this).parent().parent().find('input[type=text]').css('border','1px solid #d8dce5');
            $(this).parent().parent().find('input.noedit').css('display','inline-block');
            if($(this).parent().parent().find('.logistics').length!=0){
                $(this).parent().parent().find('.logistics').attr('data-ok','false');
            }
        }else {
            $(this).val('编辑');
            $(this).parent().parent().find('input[type=text]').attr('disabled','true');
            $(this).parent().parent().find('textarea').attr('disabled','true');
            $(this).parent().parent().find('input[type=text]').css('border','1px solid transparent');
            $(this).parent().parent().find('input.noedit').css('display','none');
            if($(this).parent().parent().find('.logistics').length!=0){
                $(this).parent().parent().find('.logistics').attr('data-ok','true');
            }
        }

    })
    $('input.noedit').click(function () {
        $(this).prev().val('编辑');
        $(this).parent().parent().find('input[type=text]').attr('disabled','true');
        $(this).parent().parent().find('textarea').attr('disabled','true');
        $(this).parent().parent().find('input[type=text]').css('border','1px solid transparent');
        $(this).parent().parent().find('input.noedit').css('display','none');
        if($(this).parent().parent().find('.logistics').length!=0){
            $(this).parent().parent().find('.logistics').attr('data-ok','true');
        }
    })

    // 选项卡
    $('.layui-tab-title li').click(function () {
        var _index = $(this).index();
        $('.layui-tab-title li').removeClass('layui-this');
        $(this).addClass('layui-this');
        $('.layui-tab-content').removeClass('action');
        $('.layui-tab-content').eq(_index).addClass('action');
    })

    $('a.logistics').mouseover(function () {
        console.log(1111);
        if($(this).attr('data-ok') == 'true'){
            var _val = $(this).val();
            var _top = $(this).offset().top;
            var _left = $(this).offset().left - 130;
            var _height = $(this).height();
            var top = _top + _height-8;
            $('.logisticsDiv').css({
                'display':'inline-block',
                'top':top+'px',
                'left':_left+'px'
            })
        }

    })

    $('a.logistics').mouseout(function () {
        console.log(444)
        if($(this).attr('data-ok') == 'true'){
            $('.logisticsDiv').css({
                'display':'none',
            })
        }

    })

    // 添加国际运单
    $('.addguojiyundan').click(function () {
        vm.addorder()
    })
    // 国际运单明细
    $('.detailsOrderA').click(function () {
        vm.detailsorder();
    })


}


var vm = new Vue({
    el:'#step',
    data:{
        orderDetails:{
            imgUrl:'../../statics/kuajing/img/img1.jpg',
            dec:'SHASHA Vorhänge 3D 2 Panel Eyelet Ring Top Anti-UV-Thermal Blackout Print Persönlichkeit Vorhänge, Einschließlich Haken und Premium Roman Ringe - Azure Sternenhimmel,W360cmH270cm',
            sku:'BAI-SHASHA-1397653-10 ',
            asin:'ygfyggvuh',
            num:1,
            value:1,
            price:1234,
            state:'同步成功 未发货',
            xiaoshouNum:'123213',
            shop:'baijing(德国)',
            orderdetails:{
                rate:0.223,
                price:123

            }
        },
        guojilogistics:[{
            value:1,
            name:'中美专线(特惠)[USZXR]'
        },{
            value:2,
            name:'中美专线(标快)[USZMTK]'
        },{
            value:3,
            name:'云途中欧专线挂号[EUDDP]'
        }],
        intLog:{
            num:123123,
            num1:123214,
            circuit:'10 nicolson drive ',
            date:'2018-10-26'
        },
        remark:[{
            title:'dskus',
            con:'shdgbsidvbl'
        }],
        operationLog:[{
            date:'2018-10-28',
            con:'时间发货：深刻搭街坊世界杯s'
        },{
            date:'2018-10-28',
            con:'时间发货：深刻搭街坊世界杯s'
        },{
            date:'2018-10-28',
            con:'时间发货：深刻搭街坊世界杯s'
        }],
        addyundanhao:'123424',
        addzhuizonghao:'34564',
        logistics:{
            express:'百事快递',
            expressNum:'1233434453',
            logisticsInf:[{
                con:'【太原市】 【太原长亲分部】 的张金光（15110338639） 正在第1次派件, 请保持电话畅通,并耐心等待',
                date:'2018-10-11'
            },{
                con:'【金华市】 【兰溪】（0579-88903278） 的 兰溪市场部 （13357033008） 已揽收',
                date:'2018-10-11',
            },{
                con:'【金华市】 快件离开 【兰溪】 发往 【太原中转】',
                date:'2018-10-11',
            }]
        }
    },
    methods:{
        addorder:function () {

            layer.open({
                type: 1,
                title: false,
                content: $('#addorder'), //这里content是一个普通的String
                skin: 'openClass',
                area: ['900px', '500px'],
                shadeClose: true,
                btn: ['添加','取消'],
                btn1: function (index) {


                },
                btn2: function (index) {


                }
            });

        },
        detailsorder:function () {
            layer.open({
                type: 1,
                title: false,
                content: $('#detailsorder'), //这里content是一个普通的String
                skin: 'openClass',
                area: ['900px', '500px'],
                shadeClose: true,
                btn: ['保存备注','取消'],
                btn1: function (index) {


                },
                btn2: function (index) {


                }
            });
        }
    }
})