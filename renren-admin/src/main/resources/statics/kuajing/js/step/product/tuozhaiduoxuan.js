window.onload = function (ev) {
    let moveSelected=$('#moveSelected')[0];
    let flag=false;//是搜开启拖拽的标志
    let oldLeft=0;//鼠标按下时的left,top
    let oldTop=0;
    var selectedList=[];//拖拽多选选中的块集合

    // 鼠标按下时开启拖拽多选，将遮罩定位并展现
    $(".pro_list").mousedown(function(event) {
        flag=true;
        moveSelected.style.top=event.pageY+'px';
        moveSelected.style.left=event.pageX+'px';
        oldLeft=event.pageX;
        oldTop=event.pageY;
        event.preventDefault(); // 阻止默认行为
        event.stopPropagation(); // 阻止事件冒泡
    });
    // 鼠标移动时计算遮罩的位置，宽 高
    $(".pro_list").mousemove(function(event) {
        if(!flag) return;//只有开启了拖拽，才进行mouseover操作
        if(event.pageX<oldLeft){//向左拖
            moveSelected.style.left=event.pageX+'px';
            moveSelected.style.width=(oldLeft-event.pageX)+'px';
        }else{
            moveSelected.style.width=(event.pageX-oldLeft)+'px';
        }
        if(event.pageY<oldTop){//向上
            moveSelected.style.top=event.pageY+'px';
            moveSelected.style.height=(oldTop-event.pageY)+'px';
        }else{
            moveSelected.style.height=(event.pageY-oldTop)+'px';
        }
        event.preventDefault(); // 阻止默认行为
        event.stopPropagation(); // 阻止事件冒泡
    });
    //鼠标抬起时计算遮罩的right 和 bottom，找出遮罩覆盖的块，关闭拖拽选中开关，清除遮罩数据
    $(".pro_list").mouseup(function(event) {
        moveSelected.style.bottom=Number(moveSelected.style.top.split('px')[0])+Number(moveSelected.style.height.split('px')[0]) + 'px';
        moveSelected.style.right=Number(moveSelected.style.left.split('px')[0])+Number(moveSelected.style.width.split('px')[0])+'px';
        findSelected();
        flag=false;
        clearDragData();
        event.preventDefault(); // 阻止默认行为
        event.stopPropagation(); // 阻止事件冒泡
    });
    $(".pro_list").mouseleave(function(event) {
        flag=false;
        moveSelected.style.width=0;
        moveSelected.style.height=0;
        moveSelected.style.top=0;
        moveSelected.style.left=0;
        event.preventDefault(); // 阻止默认行为
        event.stopPropagation(); // 阻止事件冒泡
    });
    function findSelected(){
        selectedList = [];
        let blockList=$('.pro_list').find('.item');
        $('.pro_list').find('.item').removeClass('action');
        $('.radiobox').removeClass('action');
        for(let i=0;i<blockList.length;i++){
            //计算每个块的定位信息
            let left=$(blockList[i]).offset().left;
            let right=$(blockList[i]).width()+left;
            let top=$(blockList[i]).offset().top;
            let bottom=$(blockList[i]).height()+top;
            //判断每个块是否被遮罩盖住（即选中）
            let leftFlag=moveSelected.style.left.split('px')[0]<=left && left<=moveSelected.style.right.split('px')[0];
            let rightFlag=moveSelected.style.left.split('px')[0]<=right && right<=moveSelected.style.right.split('px')[0];
            let topFlag=moveSelected.style.top.split('px')[0]<=top && top<=moveSelected.style.bottom.split('px')[0];
            let bottomFlag=moveSelected.style.top.split('px')[0]<=bottom && bottom<=moveSelected.style.bottom.split('px')[0];
            if((leftFlag || rightFlag) && (topFlag || bottomFlag)){
                selectedList.push(blockList[i]);
                $(blockList[i]).addClass('action');
            }
        }
        console.log(selectedList);
    }
    // $(".pro_list").click(function () {
    //         if(flag==false){
    //         $('.pro_list').find('.item').removeClass('action');
    //     }
    // })
    function clearDragData(){
        moveSelected.style.width=0;
        moveSelected.style.height=0;
        moveSelected.style.top=0;
        moveSelected.style.left=0;
        moveSelected.style.bottom=0;
        moveSelected.style.right=0;
    }
}
$(document).ready(function(){

});