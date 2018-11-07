$(function () {
    $('.inner-content-div2').slimScroll({
        height: '370px' //设置显示的高度
    });

    $('.changeType').focus(function () {
        vm.fenleiTankuang();
    })
    


})

window.onload = function () {

    function fenlei() {
        var data = vm.leven1;
        // 分类弹框
        var html1 = $('<div></div>');
        var html2 = $('<div class="some-content-related-div" style="width: 100%;margin: 0 auto;"></div>');
        var html3 = $('<div class="inner-content-div2"></div>');
        var ul = $('<ul></ul>');
        var _html = '';
        // data.forEach(function (index,item) {
        //     _html = '<li id="'+item.id+'">'+item.value+'</li>';
        // })
        for(var i = 0;i<data.length;i++){
            var index = i;
            _html += '<li id="'+data[index].id+'" onclick="fenlei()">'+data[index].value+'</li>';
        }
        ul.append(_html);
        html3.append(ul);
        html2.append(html3);
        html1.append(html2);
        $('#fenleiTankuang div.con').append(html1);
        $('.inner-content-div2').slimScroll({
            height: '270px' //设置显示的高度
        });
    }

}


// 分页器
layui.use('laypage', function(){
    var laypage = layui.laypage;

    //执行一个laypage实例
    laypage.render({
        elem: 'page', //注意，这里的 test1 是 ID，不用加 # 号
        count: 50, //数据总数，从服务端得到
        prev:'<i class="layui-icon layui-icon-left"></i>',
        next:'<i class="layui-icon layui-icon-right"></i>',
        layout:['prev', 'page', 'next','limit','skip'],
        jump: function(obj, first){
            //obj包含了当前分页的所有参数，比如：
            console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
            console.log(obj.limit); //得到每页显示的条数

            //首次不执行
            if(!first){
                //do something
            }
        }
    });
});


var vm = new Vue({
    el:'#step',
    data:{
        marketplace:[{
            value:3116,
            country:'IT',
            language:'意大利语',
            currency:'欧元',
            name:'baijing(意大利)'
        },{
            value:3115,
            country:'ES',
            language:'西班牙语',
            currency:'欧元',
            name:'baijing(西班牙)'
        },{
            value:3114,
            country:'DE',
            language:'德语',
            currency:'欧元',
            name:'baijing(德国)'
        },{
            value:3113,
            country:'UK',
            language:'英语',
            currency:'英镑',
            name:'baijing(英国)'
        },{
            value:3112,
            country:'FR',
            language:'法语',
            currency:'欧元',
            name:'baijing(法国)'
        }],
        leven1:[{
            ifTwo:'true',
            id:111,
            value:'厨房预算Küche & Haushalt'
        },{
            ifTwo:'true',
            id:111,
            value:'商业工业科学Gewerbe, Industrie & Wi'
        },{
            ifTwo:'true',
            id:111,
            value:'电子照片Elektronik & Foto'
        },{
            ifTwo:'true',
            id:111,
            value:'手表Uhren'
        },{
            ifTwo:'true',
            id:111,
            value:'厨房预算Küche & Haushalt'
        },{
            ifTwo:'true',
            id:111,
            value:'商业工业科学Gewerbe, Industrie & Wi'
        },{
            ifTwo:'true',
            id:111,
            value:'电子照片Elektronik & Foto'
        },{
            ifTwo:'true',
            id:111,
            value:'手表Uhren'
        },{
            ifTwo:'true',
            id:111,
            value:'厨房预算Küche & Haushalt'
        },{
            ifTwo:'true',
            id:111,
            value:'商业工业科学Gewerbe, Industrie & Wi'
        },{
            ifTwo:'true',
            id:111,
            value:'电子照片Elektronik & Foto'
        },{
            ifTwo:'true',
            id:111,
            value:'手表Uhren'
        },{
            ifTwo:'true',
            id:111,
            value:'厨房预算Küche & Haushalt'
        },{
            ifTwo:'true',
            id:111,
            value:'商业工业科学Gewerbe, Industrie & Wi'
        },{
            ifTwo:'true',
            id:111,
            value:'电子照片Elektronik & Foto'
        },{
            ifTwo:'true',
            id:111,
            value:'手表Uhren'
        }]
    },
    methods:{
        fenleiTankuang:function () {
            var con = $('.fenleiCon');
            $('#fenleiTankuang div.con').append(con);
            $('.fenleiCon ul li').click(function () {
                vm.fenlei();
            })

            // 分类弹框
            layer.open({
                type: 1,
                title: false,
                content: $('#fenleiTankuang'), //这里content是一个普通的String
                skin: 'openClass',
                area: ['800px', '500px'],
                shadeClose: true,
                btn: ['确定','取消'],
                btn1: function (index) {


                },
                btn2: function (index) {

                    $('#fenleiTankuang div.con>div.qita').remove();
                }
            });
        },
        fenlei:function () {
            var data = vm.leven1;
            // 分类弹框
            var html1 = $('<div class="qita"></div>');
            var html2 = $('<div class="some-content-related-div" style="width: 100%;margin: 0 auto;"></div>');
            var html3 = $('<div class="inner-content-div2"></div>');
            var ul = $('<ul></ul>');
            var _html = '';
            // data.forEach(function (index,item) {
            //     _html = '<li id="'+item.id+'">'+item.value+'</li>';
            // })
            for(var i = 0;i<data.length;i++){
                var index = i;
                _html += '<li id="'+data[index].id+'">'+data[index].value+'</li>';
            }
            ul.append(_html);
            html3.append(ul);
            html2.append(html3);
            html1.append(html2);
            $('#fenleiTankuang div.con').append(html1);
            $('.inner-content-div2').slimScroll({
                height: '270px' //设置显示的高度
            });
            $('.inner-content-div2 ul li').click(function () {
                $(this).parent().parent().parent().parent().parent().nextAll().remove();
                vm.fenlei();
            })
            // this.fenlei();
        }
    }
})