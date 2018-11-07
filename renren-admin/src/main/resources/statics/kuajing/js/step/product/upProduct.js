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
        prolist:[{
            num:'123473445',
            imgUrl:'../../statics/kuajing/img/img1.jpg',
            accNum:'青干院三组(意大利)',
            category:'Ameublement et Décoration',
            type:'Home.Home',
            date:'2018/05/24 10:26',
            state:'成功'
        },{
            num:'123473445',
            imgUrl:'../../statics/kuajing/img/img2.jpg',
            accNum:'青干院三组(德国)',
            category:'Vasen',
            type:'Home.Home',
            date:'2018/05/24 10:26',
            state:'成功'
        },{
            num:'123473445',
            imgUrl:'../../statics/kuajing/img/img1.jpg',
            accNum:'青干院三组(意大利)',
            category:'Ameublement et Décoration',
            type:'Home.Home',
            date:'2018/05/24 10:26',
            state:'成功'
        },{
            num:'123473445',
            imgUrl:'../../statics/kuajing/img/img2.jpg',
            accNum:'青干院三组(德国)',
            category:'Vasen',
            type:'Home.Home',
            date:'2018/05/24 10:26',
            state:'成功'
        },{
            num:'123473445',
            imgUrl:'../../statics/kuajing/img/img1.jpg',
            accNum:'青干院三组(意大利)',
            category:'Ameublement et Décoration',
            type:'Home.Home',
            date:'2018/05/24 10:26',
            state:'成功'
        },{
            num:'123473445',
            imgUrl:'../../statics/kuajing/img/img2.jpg',
            accNum:'青干院三组(德国)',
            category:'Vasen',
            type:'Home.Home',
            date:'2018/05/24 10:26',
            state:'成功'
        },{
            num:'123473445',
            imgUrl:'../../statics/kuajing/img/img1.jpg',
            accNum:'青干院三组(意大利)',
            category:'Ameublement et Décoration',
            type:'Home.Home',
            date:'2018/05/24 10:26',
            state:'成功'
        },{
            num:'123473445',
            imgUrl:'../../statics/kuajing/img/img2.jpg',
            accNum:'青干院三组(德国)',
            category:'Vasen',
            type:'Home.Home',
            date:'2018/05/24 10:26',
            state:'成功'
        },{
            num:'123473445',
            imgUrl:'../../statics/kuajing/img/img1.jpg',
            accNum:'青干院三组(意大利)',
            category:'Ameublement et Décoration',
            type:'Home.Home',
            date:'2018/05/24 10:26',
            state:'成功'
        }]
    }
})