/**

 @Name锛歭ayuiAdmin iframe鐗堝叏灞€閰嶇疆
 @Author锛氳搐蹇�
 @Site锛歨ttp://www.layui.com/admin/
 @License锛歀PPL锛坙ayui浠樿垂浜у搧鍗忚锛�
    
 */
 
layui.define(['laytpl', 'layer', 'element', 'util'], function(exports){
  exports('setter', {
    container: 'LAY_app' //瀹瑰櫒ID
    ,base: layui.cache.base //璁板綍闈欐€佽祫婧愭墍鍦ㄨ矾寰�
    ,views: layui.cache.base + 'tpl/' //鍔ㄦ€佹ā鏉挎墍鍦ㄧ洰褰�
    ,entry: 'index' //榛樿瑙嗗浘鏂囦欢鍚�
    ,engine: '.html' //瑙嗗浘鏂囦欢鍚庣紑鍚�
    ,pageTabs: true //鏄惁寮€鍚〉闈㈤€夐」鍗″姛鑳姐€俰frame鐗堟帹鑽愬紑鍚�
    
    ,name: 'layuiAdmin'
    ,tableName: 'layuiAdmin' //鏈湴瀛樺偍琛ㄥ悕
    ,MOD_NAME: 'admin' //妯″潡浜嬩欢鍚�
    
    ,debug: true //鏄惁寮€鍚皟璇曟ā寮忋€傚寮€鍚紝鎺ュ彛寮傚父鏃朵細鎶涘嚭寮傚父 URL 绛変俊鎭�

    //鑷畾涔夎姹傚瓧娈�
    ,request: {
      tokenName: false //鑷姩鎼哄甫 token 鐨勫瓧娈靛悕锛堝锛歛ccess_token锛夈€傚彲璁剧疆 false 涓嶆惡甯︺€�
    }
    
    //鑷畾涔夊搷搴斿瓧娈�
    ,response: {
      statusName: 'code' //鏁版嵁鐘舵€佺殑瀛楁鍚嶇О
      ,statusCode: {
        ok: 0 //鏁版嵁鐘舵€佷竴鍒囨甯哥殑鐘舵€佺爜
        ,logout: 1001 //鐧诲綍鐘舵€佸け鏁堢殑鐘舵€佺爜
      }
      ,msgName: 'msg' //鐘舵€佷俊鎭殑瀛楁鍚嶇О
      ,dataName: 'data' //鏁版嵁璇︽儏鐨勫瓧娈靛悕绉�
    }
    
    //鎵╁睍鐨勭涓夋柟妯″潡
    ,extend: [
      'echarts', //echarts 鏍稿績鍖�
      'echartsTheme' //echarts 涓婚
    ]
    
    //涓婚閰嶇疆
    ,theme: {
      //鍐呯疆涓婚閰嶈壊鏂规
      color: [{
        main: '#20222A' //涓婚鑹�
        ,selected: '#009688' //閫変腑鑹�
        ,alias: 'default' //榛樿鍒悕
      },{
        main: '#03152A'
        ,selected: '#3B91FF'
        ,alias: 'dark-blue' //钘忚摑
      },{
        main: '#2E241B'
        ,selected: '#A48566'
        ,alias: 'coffee' //鍜栧暋
      },{
        main: '#50314F'
        ,selected: '#7A4D7B'
        ,alias: 'purple-red' //绱孩
      },{
        main: '#344058'
        ,logo: '#1E9FFF'
        ,selected: '#1E9FFF'
        ,alias: 'ocean' //娴锋磱
      },{
        main: '#3A3D49'
        ,logo: '#2F9688'
        ,selected: '#5FB878'
        ,alias: 'green' //澧ㄧ豢
      },{
        main: '#20222A'
        ,logo: '#F78400'
        ,selected: '#F78400'
        ,alias: 'red' //姗欒壊
      },{
        main: '#28333E'
        ,logo: '#AA3130'
        ,selected: '#AA3130'
        ,alias: 'fashion-red' //鏃跺皻绾�
      },{
        main: '#24262F'
        ,logo: '#3A3D49'
        ,selected: '#009688'
        ,alias: 'classic-black' //缁忓吀榛�
      },{
        logo: '#226A62'
        ,header: '#2F9688'
        ,alias: 'green-header' //澧ㄧ豢澶�
      },{
        main: '#344058'
        ,logo: '#0085E8'
        ,selected: '#1E9FFF'
        ,header: '#1E9FFF'
        ,alias: 'ocean-header' //娴锋磱澶�
      },{
        header: '#393D49'
        ,alias: 'classic-black-header' //缁忓吀榛戝ご
      },{
        main: '#50314F'
        ,logo: '#50314F'
        ,selected: '#7A4D7B'
        ,header: '#50314F'
        ,alias: 'purple-red-header' //绱孩澶�
      },{
        main: '#28333E'
        ,logo: '#28333E'
        ,selected: '#AA3130'
        ,header: '#AA3130'
        ,alias: 'fashion-red-header' //鏃跺皻绾㈠ご
      },{
        main: '#28333E'
        ,logo: '#009688'
        ,selected: '#009688'
        ,header: '#009688'
        ,alias: 'green-header' //澧ㄧ豢澶�
      }]
      
      //鍒濆鐨勯鑹茬储寮曪紝瀵瑰簲涓婇潰鐨勯厤鑹叉柟妗堟暟缁勭储寮�
      //濡傛灉鏈湴宸茬粡鏈変富棰樿壊璁板綍锛屽垯浠ユ湰鍦拌褰曚负浼樺厛锛岄櫎闈炶姹傛湰鍦版暟鎹紙localStorage锛�
      ,initColorIndex: 0
    }
  });
});