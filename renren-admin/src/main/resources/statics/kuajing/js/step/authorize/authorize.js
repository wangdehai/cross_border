$(function () {

})

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
    el: '#step',
    data: {
        authorizeList:[{
            shopName:'安徽省宣杭食品',
            account:'****idouye@yeah.net',
            country:'法国/英国/德国/西班牙/意大利',
            date:'2018/10/15 11:25',
        },{
            shopName:'安徽省宣杭食品',
            account:'****idouye@yeah.net',
            country:'法国/英国/德国/西班牙/意大利',
            date:'2018/10/15 11:25',
        },{
            shopName:'安徽省宣杭食品',
            account:'****idouye@yeah.net',
            country:'法国/英国/德国/西班牙/意大利',
            date:'2018/10/15 11:25',
        },{
            shopName:'安徽省宣杭食品',
            account:'****idouye@yeah.net',
            country:'法国/英国/德国/西班牙/意大利',
            date:'2018/10/15 11:25',
        },{
            shopName:'安徽省宣杭食品',
            account:'****idouye@yeah.net',
            country:'法国/英国/德国/西班牙/意大利',
            date:'2018/10/15 11:25',
        }]
    },
    methods:{

    }

})