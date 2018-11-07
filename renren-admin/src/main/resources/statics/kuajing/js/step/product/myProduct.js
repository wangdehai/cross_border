
$(function () {
    // 筛选区域
    $('.screen>div.audit ul li').click(function () {
        $('.screen>div.audit ul li').removeClass('action');
        $(this).addClass('action');
    })
    $('.screen>div.shelve ul li').click(function () {
        $('.screen>div.shelve ul li').removeClass('action');
        $(this).addClass('action');
    })
    $('.screen>div.type ul li').click(function () {
        $('.screen>div.type ul li').removeClass('action');
        $(this).addClass('action');
    });
    // 全选
    $('.radiobox').click(function () {
        if($('.radiobox').attr("data-checked") == 'true'){
            $(this).addClass('action');
            $('.pro_list .item').addClass('action');
            $('.radiobox').attr("data-checked",'false');
        }else{
            $(this).removeClass('action');
            $('.pro_list .item').removeClass('action');
            $('.radiobox').attr("data-checked",'true');
        }
    })
    // 商品单机选中
    $('.pro_list .item').click(function () {
        $(this).toggleClass('action');
    })
    $('.pro_list .item h3 a').click(function () {
        console.log(11111);
    })


})

window.onload = function () {
    // 批量修改
    $('.updata').click(function () {
        console.log(11111);
        vm.updateFunc();
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
        proList:[{
            imgurl:'../../statics/kuajing/img/img1.jpg',
            dec:'高帮帆布鞋女冬加绒学生韩版百搭棉鞋2018新款 学生韩版百搭棉鞋2018新款',
            date:'2018-10-11',
            num:20183747,
            price:100
        },{
            imgurl:'../../statics/kuajing/img/img2.jpg',
            dec:'加绒英伦黑色小皮鞋秋冬女2018新款百搭复古学院风',
            date:'2018-10-17',
            num:20183747,
            price:80
        },{
            imgurl:'../../statics/kuajing/img/img1.jpg',
            dec:'高帮帆布鞋女冬加绒学生韩版百搭棉鞋2018新款',
            date:'2018-10-11',
            num:20183747,
            price:100
        },{
            imgurl:'../../statics/kuajing/img/img2.jpg',
            dec:'加绒英伦黑色小皮鞋秋冬女2018新款百搭复古学院风',
            date:'2018-10-17',
            num:20183747,
            price:80
        },{
            imgurl:'../../statics/kuajing/img/img1.jpg',
            dec:'高帮帆布鞋女冬加绒学生韩版百搭棉鞋2018新款',
            date:'2018-10-11',
            num:20183747,
            price:100
        },
            {
            imgurl:'../../statics/kuajing/img/img2.jpg',
            dec:'加绒英伦黑色小皮鞋秋冬女2018新款百搭复古学院风',
            date:'2018-10-17',
            num:20183747,
            price:80
        },
            {
                imgurl:'../../statics/kuajing/img/img1.jpg',
                dec:'高帮帆布鞋女冬加绒学生韩版百搭棉鞋2018新款',
                date:'2018-10-11',
                num:20183747,
                price:100
            },{
                imgurl:'../../statics/kuajing/img/img2.jpg',
                dec:'加绒英伦黑色小皮鞋秋冬女2018新款百搭复古学院风',
                date:'2018-10-17',
                num:20183747,
                price:80
            },{
                imgurl:'../../statics/kuajing/img/img1.jpg',
                dec:'高帮帆布鞋女冬加绒学生韩版百搭棉鞋2018新款',
                date:'2018-10-11',
                num:20183747,
                price:100
            },{
                imgurl:'../../statics/kuajing/img/img2.jpg',
                dec:'加绒英伦黑色小皮鞋秋冬女2018新款百搭复古学院风',
                date:'2018-10-17',
                num:20183747,
                price:80
            },{
                imgurl:'../../statics/kuajing/img/img1.jpg',
                dec:'高帮帆布鞋女冬加绒学生韩版百搭棉鞋2018新款',
                date:'2018-10-11',
                num:20183747,
                price:100
            },{
                imgurl:'../../statics/kuajing/img/img2.jpg',
                dec:'加绒英伦黑色小皮鞋秋冬女2018新款百搭复古学院风',
                date:'2018-10-17',
                num:20183747,
                price:80
            }
        ],
        value9:'',
        screenData:{
            auditAll:234,
            shelveAll:33,
            typeAll:55
        },
        statistics:{
            proNum:342,
            via:200,
            variant:100,
            allVariant:300
        }
    },
    methods:{
        updateFunc:function () {

            layer.open({
                type: 2,
                title: false,
                content: ['update.html',0], //这里content是一个普通的String
                skin: 'openClass',
                area: ['900px', '500px'],
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