$(function () {
    $(function () {
        $('.inner-content-div2').slimScroll({
            height: '400px' //设置显示的高度
        });
    })

    // 语言选项卡
    $('.layui-tab-title li').click(function () {
        $('.layui-tab-title li').removeClass('layui-this');
        $(this).addClass('layui-this');
    })

    // 产品相册图片鼠标移动上去
    $('.imgItem').mouseover(function () {
        $(this).css('opacity','.5');
        $(this).parent().find('i').css('display','inline-block');
        $('i.imgDel').mouseover(function () {
            $(this).prev().css('opacity','.5');
            $(this).css('display','inline-block');
        })
        $('i.imgDel').click(function () {
            $(this).parent().remove();
        })
    })
    $('.imgItem').mouseout(function () {
        $(this).css('opacity','1');
        $(this).parent().find('i').css('display','none');
    })

    // 产品回收站
    $('.proStation').click(function () {
        vm.prostation();
    })
})


var vm = new Vue({
    el: '#step',
    data: {
        proStation:[{
            url:'../../statics/kuajing/img/img1.jpg'
        },{
            url:'../../statics/kuajing/img/img2.jpg'
        },{
            url:'../../statics/kuajing/img/img1.jpg'
        },{
            url:'../../statics/kuajing/img/img2.jpg'
        },{
            url:'../../statics/kuajing/img/img1.jpg'
        },{
            url:'../../statics/kuajing/img/img2.jpg'
        },{
            url:'../../statics/kuajing/img/img1.jpg'
        },{
            url:'../../statics/kuajing/img/img2.jpg'
        },{
            url:'../../statics/kuajing/img/img1.jpg'
        },{
            url:'../../statics/kuajing/img/img2.jpg'
        },],
        variantList:[]
    },
    methods:{
        prostation:function () {
            layer.open({
                type: 1,
                title: false,
                content: $('#proStation'), //这里content是一个普通的String
                skin: 'openClass',
                area: ['800px', '500px'],
                shadeClose: true,
                scrollbar:false,
                btn: ['<i class="layui-icon layui-icon-refresh"></i> 恢复','取消'],
                btn1: function (index) {


                },
                btn2: function (index) {


                }
            });
        }
    }

})