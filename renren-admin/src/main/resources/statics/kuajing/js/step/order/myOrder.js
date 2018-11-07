window.onload = function (ev) {
    var rows = document.getElementsByTagName('tr');//取得行
    for(var i=0 ;i<rows.length; i++)
    {
        if(i != 0){
            rows[i].onmouseover = function(){//鼠标移上去,添加一个类'hilite'
                this.className += 'hilite';
            }
            rows[i].onmouseout = function(){//鼠标移开,改变该类的名称
                this.className = this.className.replace('hilite','');
            }
        }

    }

    // 添加订单
    $('.addBtn').click(function () {
        console.log(1111);
        vm.addOrder();
    })

    // 鼠标移入图片放大
    $('table tr td.imgtd img').mouseover(function () {
        console.log(111111);
        var _src = $(this).attr('src');
        console.log(_src);
        var _top = $(this).offset().top + 25 - 150;
        var _left = $(this).offset().left;
        var _width = $(this).width();
        var left = _left + _width;
        var img = $('<img class="bigImg" >');
        img.attr('src',_src);
        $('.bigImgDiv').css({
            'display':'inline-block',
            'top': _top+'px',
            'left':left+'px',
        });
        $('.bigImgDiv').append(img);
    })
    $('table tr td.imgtd img').mouseout(function () {
        $('img.bigImg').remove();
        $('.bigImgDiv').css('display','none');
    })
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
        value9:'',
        screenData:{
            auditAll:234,
            shelveAll:33,
            typeAll:55
        },
        prolist:[{
            id:'123473445',
            country:'美国',
            country1:'../../statics/kuajing/img/american.png',
            orderNum:'2364256284732341',
            imgUrl:'../../statics/kuajing/img/img1.jpg',
            shop:'青干院三组(德国)',
            price:123414,
            cost:2342,
            profit:3453534,
            stateNum:1,
            state:'待付款',
            international:'YT1829821203004840',
            domestic:'70006066684423',
            data:'2018-10-18 08:52'
        },{
            id:'123473445',
            country:'意大利',
            country1:'../../statics/kuajing/img/italy.png',
            orderNum:'2364256284732341',
            imgUrl:'../../statics/kuajing/img/img2.jpg',
            shop:'青干院三组(德国)',
            price:123414,
            cost:2342,
            profit:3453534,
            stateNum:2,
            state:'取消',
            international:'YT1829821203004840',
            domestic:'70006066684423',
            data:'2018-10-18 08:52'
        },{
            id:'123473445',
            country:'美国',
            country1:'../../statics/kuajing/img/american.png',
            orderNum:'2364256284732341',
            imgUrl:'../../statics/kuajing/img/img1.jpg',
            shop:'青干院三组(德国)',
            price:123414,
            cost:2342,
            profit:3453534,
            stateNum:3,
            state:'已付款',
            international:'YT1829821203004840',
            domestic:'70006066684423',
            data:'2018-10-18 08:52'
        },{
            id:'123473445',
            country:'意大利',
            country1:'../../statics/kuajing/img/italy.png',
            orderNum:'2364256284732341',
            imgUrl:'../../statics/kuajing/img/img2.jpg',
            shop:'青干院三组(德国)',
            price:123414,
            cost:2342,
            profit:3453534,
            stateNum:4,
            state:'签收',
            international:'YT1829821203004840',
            domestic:'70006066684423',
            data:'2018-10-18 08:52'
        }],
        statistics:{
            orderAll:12324,
            orderNum:123,
            allPrice:32784523.2346,
            profit:3442763487,
            freight:21356,
            purchase:238175,
            refund:123,
            refundCost:-2378.23

        }
    },
    methods:{
        addOrder:function () {
            layer.open({
                type: 1,
                title: false,
                content: $('#addOrder'), //这里content是一个普通的String
                skin: 'openClass',
                area: ['400px', '220px'],
                shadeClose: true,
                btn: ['添加','取消'],
                btn1: function (index) {


                },
                btn2: function (index) {


                }
            });
        }
    }
})