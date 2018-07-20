<template>
  <div id="home">
    <div class="button-group">
      <input type="button" class="button" value="默认样式距离量测" @click="startRuler1"/>
      <input type="button" class="button" value="自定义样式距离量测" @click="startRuler2"/>
    </div>
    <el-container>

      <el-aside width="200px" height="100%">
        <el-menu index="1">
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont icon-information"></i>
              <span>禁飞区域信息 </span>

              <el-popover
                ref="forbiddenExplain"
                placement="top-start"
                title="禁飞区说明"
                width="200"
                trigger="hover"
                content="地图中默认展示当前视野内的禁飞区，用不同颜色的浮层表示。灰色浮层表示国家级禁飞区，绿色浮层表示省市级禁飞区，黄色浮层表示临时禁飞区。">
              </el-popover>
              <span class="iconfont icon-problem" v-popover:forbiddenExplain></span>
              <!--<span class="iconfont icon-problem" @mouseenter="forbiddenExplain" @mouseout="forbiddenExplainOut"></span>-->
            </template>
            <el-menu-item-group>
              <!--<el-menu-item index="1-1" v-for="(item,key) in forbiddenList" @click="forbiddenAreaDetail(key)">{{item.title}}</el-menu-item>-->
              <el-menu-item index="1-1" v-for="item in 5" @click="forbiddenAreaDetail">禁飞区{{item}}</el-menu-item>
              <!--<el-menu-item index="1-2">再改一次</el-menu-item>-->
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont icon-icon-test2"></i>
              <span>飞行记录分享</span>
            </template>
            <!--<p v-popover:forbiddenLayer>ew</p>-->
            <el-menu-item-group>
              <!--<el-menu-item @click="forumDetail(key)" v-for="(item,key) in flyRecordList" index="2-1">{{item.title}}</el-menu-item>-->
              <el-menu-item @click="forumDetail" v-for="item in 6" index="2-1">飞行记录{{item}}</el-menu-item>

            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-popover
          ref="popover5"
          placement="top"
          width="160"
          >
          <p>这是一段内容这是一段内容确定删除吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" >取消</el-button>
            <el-button type="primary" size="mini" >确定</el-button>
          </div>
        </el-popover>
        <div id="mapContainer"></div>

      </el-main>

    </el-container>


  </div>
</template>

<style>
  #home {
	height: 500px;
}

#home .el-container {
	height: 100%!important;
}

.el-aside {
	background-color: white;
}
#mapContainer{
  height: 100%;
}
.amap-icon>img{
  width: 30px;
  height: 30px;
}

#home .icon-problem {
	margin-left: 5px;
}
  .markerInfo{
    background-color: white;
    width: 200px;
    border: 1px solid gray;
  }
  .markerInfo p{
    padding: 10px;
    /*line-height: 30px;*/
    text-align: left;
    border-bottom: 1px solid gainsboro;

  }
</style>

<script type="text/ecmascript-6">

  export default({
    data(){
      return{
        infoWindow:12,   //窗体
        map:'',
        forbiddenList:[],
        flyRecordList:[],
        ruler2:'',
        ruler1:'',

      }
    },
    mounted:function(){
      const that = this;

      //      窗体信息
      AMapUI.loadUI(['overlay/SimpleInfoWindow'], function(SimpleInfoWindow) {
        that.infoWindow = new SimpleInfoWindow({

          infoTitle: '<strong>这里是标题</strong>',
          infoBody: '<p class="my-desc"><strong>这里是内容。</strong> <br/> 高德地图 JavaScript API，是由 JavaScript 语言编写的应用程序接口，' +
          '它能够帮助您在网站或移动端中构建功能丰富、交互性强的地图应用程序</p>',

          //基点指向marker的头部位置
          offset: new AMap.Pixel(0, -20)
        });

      })

//      初始化地图

      let map = new AMap.Map('mapContainer', {
        center: [121.475638,31.229141],
        resizeEnable: true,
        zoom: 10
      });
      console.log(1)
      this.map = map;

//      初始化测量工具
      map.plugin(["AMap.RangingTool"], function() {
        that.ruler1 = new AMap.RangingTool(map);
        AMap.event.addListener(that.ruler1, "end", function(e) {
          that.ruler1.turnOff();
        });
        var sMarker = {
          icon: new AMap.Icon({
            size: new AMap.Size(19, 31),//图标大小
            image: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b1.png"
          })
        };
        var eMarker = {
          icon: new AMap.Icon({
            size: new AMap.Size(19, 31),//图标大小
            image: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b2.png"
          }),
          offset: new AMap.Pixel(-9, -31)
        };
        var lOptions = {
          strokeStyle: "solid",
          strokeColor: "#FF33FF",
          strokeOpacity: 1,
          strokeWeight: 2
        };
        var rulerOptions = {startMarkerOptions: sMarker, endMarkerOptions: eMarker, lineOptions: lOptions};
        that.ruler2 = new AMap.RangingTool(map, rulerOptions);
      });



        AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
        map.addControl(new AMap.ToolBar());
        map.addControl(new AMap.Scale())
      });

//      正在移动的飞机
      AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function(PathSimplifier, $) {

        if (!PathSimplifier.supportCanvas) {
          alert('当前环境不支持 Canvas！');
          return;
        }

        var emptyLineStyle = {
          lineWidth: 0,
          fillStyle: null,
          strokeStyle: null,
          borderStyle: null
        };

        var pathSimplifierIns = new PathSimplifier({
          zIndex: 100,
          //autoSetFitView:false,
          map: map, //所属的地图实例

          getPath: function(pathData, pathIndex) {

            return pathData.path;
          },
          getHoverTitle: function(pathData, pathIndex, pointIndex) {

            return null;
          },
          renderOptions: {
            //将点、线相关的style全部置emptyLineStyle
            pathLineStyle: emptyLineStyle,
            pathLineSelectedStyle: emptyLineStyle,
            pathLineHoverStyle: emptyLineStyle,
            keyPointStyle: emptyLineStyle,
            startPointStyle: emptyLineStyle,
            endPointStyle: emptyLineStyle,
            keyPointHoverStyle: emptyLineStyle,
            keyPointOnSelectedPathLineStyle: emptyLineStyle
          }
        });

        window.pathSimplifierIns = pathSimplifierIns;

        pathSimplifierIns.setData([{
          name: '测试',
          path: [
            [121.536722,31.218765], [121.596083,31.242233], [121.554114,31.248408], [121.536722,31.218765]
          ]
        }]);

        //initRoutesContainer(d);

        function onload() {
          pathSimplifierIns.renderLater();
        }

        function onerror(e) {
          console.log('图片加载失败！');
        }

        var navg1 = pathSimplifierIns.createPathNavigator(0, {
          loop: true,
          speed: 100,
          pathNavigatorStyle: {
            width: 24,
            height: 24,
            //使用图片
//            content: PathSimplifier.Render.Canvas.getImageContent('http://192.168.1.6:8860/uav.gif', onload, onerror),
            content: PathSimplifier.Render.Canvas.getImageContent('http://140.143.138.11:8080/static/img/uav.gif', onload, onerror),
            strokeStyle: null,
            fillStyle: null,
            //经过路径的样式
            pathLinePassedStyle: {
              lineWidth: 2,
              strokeStyle: 'red',
              dirArrowStyle: {
                stepSpace: 15,
                strokeStyle: 'red'
              }
            }
          }
        });

        let $markerContent = $('<div class="markerInfo">'+
          '<p>上海两片云</p>'+
          '<p>大疆精灵pro2</p>'+
          '<p>飞行时间:600小时</p>'+
          '<p>活跃度：20</p>'+
        '</div>')
        navg1.marker = new AMap.Marker({
          offset: new AMap.Pixel(12, -10),
          content:$markerContent.get(0),
          map: map
        });
        navg1.on('move', function() {
          navg1.marker.setPosition(navg1.getPosition());
        });
        navg1.start();

      });


      this.getforbiddenArea();// 获取禁飞区列表
      this.getFlyRecord();//飞行过的标记
      this.staticForbiddenArea();//静态禁飞区

    },
    methods:{
      //静态禁飞区
      staticForbiddenArea:function () {
        const that = this;
        //      国家级禁飞区

        let nationalPolygonArr = new Array();//多边形覆盖物节点坐标数组
        nationalPolygonArr.push([121.5279285, 31.21515044]);
        nationalPolygonArr.push( [121.5993285, 31.20529044]);
        nationalPolygonArr.push([121.5993285, 31.21965044]);
        nationalPolygonArr.push([121.5273285, 31.21515044]);
        var  nationalPolygon = new AMap.Polygon({
          path: nationalPolygonArr,//设置多边形边界路径
          strokeColor: "#5D5A5A", //线颜色
          strokeOpacity: 0.2, //线透明度
          strokeWeight: 3,    //线宽
          fillColor: "black", //填充色
          fillOpacity: 0.35//填充透明度
        });
        nationalPolygon.setMap(that.map);
        AMap.event.addListener(nationalPolygon, "click", function(e){
          var clickPosition = [e.lnglat.getLng(),e.lnglat.getLat()]
          const windowHtml = ' <p>禁飞区起始时间：2018-03-10 至 2019-09-10</p>'+
            '<p>描述：目前该区域管制</p>'+
            '<p>级别：国家级禁飞区</p>'+
            '<p>发布时间：2018-04-20</p>'
          that.infoWindow.setInfoBody(windowHtml); //设置飞行记录窗体内容
          that.infoWindow.setInfoTitle('黄埔一区')
          that.infoWindow.open(that.map, clickPosition);
        })




//      省市区禁飞区
        var provincialPolygonArr = new Array();//多边形覆盖物节点坐标数组
        provincialPolygonArr.push([121.492167,31.222904]);
        provincialPolygonArr.push( [121.491232,31.209377]);
        provincialPolygonArr.push([121.508767,31.212836]);
        provincialPolygonArr.push([121.501581,31.223151]);
        provincialPolygonArr.push([121.492167,31.222904]);
        var  provincialPolygon = new AMap.Polygon({
          path: provincialPolygonArr,//设置多边形边界路径
          strokeColor: "#07C800", //线颜色
          strokeOpacity: 0.2, //线透明度
          strokeWeight: 3,    //线宽
          fillColor: "#07C800", //填充色
          fillOpacity: 0.35//填充透明度
        });
        provincialPolygon.setMap(that.map);
        AMap.event.addListener(provincialPolygon, "click", function(e){
          var clickPosition = [e.lnglat.getLng(),e.lnglat.getLat()]
          const windowHtml = ' <p>禁飞区起始时间：2018-03-10 至 2019-09-10</p>'+
            '<p>描述：静安区省市区级禁飞区简单描述</p>'+
            '<p>级别：省市区级禁飞区</p>'+
            '<p>发布时间：2018-04-20</p>'
          that.infoWindow.setInfoBody(windowHtml); //设置飞行记录窗体内容
          that.infoWindow.setInfoTitle('静安区禁飞区');
          that.infoWindow.open(that.map, clickPosition);
        })


        //      临时禁飞区


        var temporaryPolygonArr = new Array();//多边形覆盖物节点坐标数组
        temporaryPolygonArr.push([121.511929,31.187199]);
        temporaryPolygonArr.push( [121.548149,31.12292]);
        temporaryPolygonArr.push([121.586381,31.148389]);
        temporaryPolygonArr.push([121.572008,31.213145]);
        temporaryPolygonArr.push([121.511929,31.187199]);
        var  temporaryPolygon = new AMap.Polygon({
          path: temporaryPolygonArr,//设置多边形边界路径
          strokeColor: "#DB6700", //线颜色
          strokeOpacity: 0.2, //线透明度
          strokeWeight: 3,    //线宽
          fillColor: "#DB6700", //填充色
          fillOpacity: 0.35//填充透明度
        });
        temporaryPolygon.setMap(that.map);
        AMap.event.addListener(temporaryPolygon, "click", function(e){
          var clickPosition = [e.lnglat.getLng(),e.lnglat.getLat()]
          const windowHtml = ' <p>禁飞区起始时间：2018-03-10 至 2019-09-10</p>'+
            '<p>描述：浦东新区临时禁飞区简单描述</p>'+
            '<p>级别：临时禁飞区</p>'+
            '<p>发布时间：2018-04-20</p>'
          that.infoWindow.setInfoBody(windowHtml); //设置飞行记录窗体内容
          that.infoWindow.setInfoTitle('浦东新区临时禁飞区')
          that.infoWindow.open(that.map, clickPosition);
        })

      },
      //获取禁飞区列表
      getforbiddenArea:function () {

        const that = this;
        that.$api.get('api/forbid/list/','',res=>{
            that.forbiddenList = res.data.result.data;
         /* let nationalList = [];
          let provincialList = [];
          let temporary = [];*/
          const resData =  res.data.result.data;
          for(let i=0;i<res.data.result.data.length;i++){
            if(res.data.result.data[i].forbidLevel == "国家级禁飞区"){
              let nationalPolygonArr = [];//多边形覆盖物节点坐标数组
              for(let j=0;j<resData[i].latlng.length;j++){
                nationalPolygonArr.push([resData[i].latlng[j].lat,resData[i].latlng[j].lng]);
              }
              nationalPolygonArr.push([resData[i].latlng[0].lat,resData[i].latlng[0].lng]);

              var  nationalPolygon = new AMap.Polygon({
                path: nationalPolygonArr,//设置多边形边界路径
                strokeColor: "#5D5A5A", //线颜色
                strokeOpacity: 0.2, //线透明度
                strokeWeight: 3,    //线宽
                fillColor: "black", //填充色
                fillOpacity: 0.35//填充透明度
              });
              nationalPolygon.setMap(that.map);
              AMap.event.addListener(nationalPolygon, "click", function(e){
                var clickPosition = [e.lnglat.getLng(),e.lnglat.getLat()]
                const windowHtml = ' <p>禁飞区起始时间：'+resData[i].startTime+'至'+resData[i].endTime+'</p>'+
                  '<p>描述：'+resData[i].description+'</p>'+
                  '<p>级别：'+resData[i].forbidLevel+'</p>'+
                  '<p>发布时间：'+resData[i].publishDate+'</p>'
                that.infoWindow.setInfoBody(windowHtml); //设置飞行记录窗体内容
                that.infoWindow.setInfoTitle(resData[i].title)
                that.infoWindow.open(that.map, clickPosition);
              })
            }else if(res.data.result.data[i].forbidLevel == "省级禁飞区"){
              let provincialPolygonArr = [];//多边形覆盖物节点坐标数组
              for(let j=0;j<resData[i].latlng.length;j++){
                provincialPolygonArr.push([resData[i].latlng[j].lat,resData[i].latlng[j].lng]);
              }
              provincialPolygonArr.push([resData[i].latlng[0].lat,resData[i].latlng[0].lng]);

              var  provincialPolygon = new AMap.Polygon({
                path: provincialPolygonArr,//设置多边形边界路径
                strokeColor: "#07C800", //线颜色
                strokeOpacity: 0.2, //线透明度
                strokeWeight: 3,    //线宽
                fillColor: "#07C800", //填充色
                fillOpacity: 0.35//填充透明度
              });
              provincialPolygon.setMap(that.map);
              AMap.event.addListener(provincialPolygon, "click", function(e){
                var clickPosition = [e.lnglat.getLng(),e.lnglat.getLat()]
                const windowHtml = ' <p>禁飞区起始时间：'+resData[i].startTime+'至'+resData[i].endTime+'</p>'+
                  '<p>描述：'+resData[i].description+'</p>'+
                  '<p>级别：'+resData[i].forbidLevel+'</p>'+
                  '<p>发布时间：'+resData[i].publishDate+'</p>'
                that.infoWindow.setInfoBody(windowHtml); //设置飞行记录窗体内容
                that.infoWindow.setInfoTitle(resData[i].title)
                that.infoWindow.open(that.map, clickPosition);
              })
            }else if( res.data.result.data[i].forbidLevel == "民航禁飞区"){
              let temporaryPolygonArr = [];//多边形覆盖物节点坐标数组
              for(let j=0;j<resData[i].latlng.length;j++){
                temporaryPolygonArr.push([resData[i].latlng[j].lat,resData[i].latlng[j].lng]);
              }
              temporaryPolygonArr.push([resData[i].latlng[0].lat,resData[i].latlng[0].lng]);

              var  temporaryPolygon = new AMap.Polygon({
                path: temporaryPolygonArr,//设置多边形边界路径
                strokeColor: "#DB6700", //线颜色
                strokeOpacity: 0.2, //线透明度
                strokeWeight: 3,    //线宽
                fillColor: "#DB6700", //填充色
                fillOpacity: 0.35//填充透明度
              });
              temporaryPolygon.setMap(that.map);
              AMap.event.addListener(temporaryPolygon, "click", function(e){
                var clickPosition = [e.lnglat.getLng(),e.lnglat.getLat()]
                const windowHtml = ' <p>禁飞区起始时间：'+resData[i].startTime+'至'+resData[i].endTime+'</p>'+
                  '<p>描述：'+resData[i].description+'</p>'+
                  '<p>级别：'+resData[i].forbidLevel+'</p>'+
                  '<p>发布时间：'+resData[i].publishDate+'</p>'
                that.infoWindow.setInfoBody(windowHtml); //设置飞行记录窗体内容
                that.infoWindow.setInfoTitle(resData[i].title)
                that.infoWindow.open(that.map, clickPosition);
              })
            }
          }
        });
      },
      //获取飞行过的标记
      getFlyRecord:function () {
          const that = this;
        //     海量展示飞过的标记
        AMapUI.load(['ui/misc/PointSimplifier', 'lib/$'], function(PointSimplifier, $) {

          if (!PointSimplifier.supportCanvas) {
            alert('当前环境不支持 Canvas！');
            return;
          }

          var pointSimplifierIns = new PointSimplifier({
            map: that.map, //所属的地图实例

            getPosition: function(item) {

              if (!item) {
                return null;
              }
              const itemStr = item.lat+','+item.lng+','+item.index;
              var parts = itemStr.split(',');

              //返回经纬度
              return [parseFloat(parts[0]), parseFloat(parts[1])];
            },

            getHoverTitle: function(dataItem, idx) {
              return idx + ': ' + dataItem;
            },
            renderOptions: {
              //点的样式
              pointStyle: {
                //绘制点占据的矩形区域
                content: PointSimplifier.Render.Canvas.getImageContent(
//                  'http://10.9.4.102:8860/flag.png',
                'http://140.143.138.11:8080/static/img/flag.png',
                  function onload() {
                    pointSimplifierIns.renderLater();
                  },
                  function onerror(e) {
                    console.log(e)
                    console.log('图片加载失败！');
                  }),
                //宽度
                width: 19,
                //高度
                height: 31,
                //定位点为底部中心
                offset: ['-50%', '-100%'],
                fillStyle: null,
                strokeStyle: null
              }
            }
          });

          window.pointSimplifierIns = pointSimplifierIns;


          /*that.$api.get('api/flyrecord/list/','',res=>{
              that.flyRecordList = res.data.result.data;
            var data = res.data.result.data;
            let positionArr = []
            for(var i=0;i<res.data.result.data.length;i++){
              const obj = {
                index:i,
                lat:res.data.result.data[i].latlng.lat,
                lng:res.data.result.data[i].latlng.lng
              };
              positionArr.push(obj)
            }*/
            let positionArr = [{
              index:1,
              lat:121.530901,
              lng:31.216542
            },
              {
                index:2,
                lat:121.531908,
                lng:31.223089
              }
            ]
            pointSimplifierIns.setData(positionArr);
            pointSimplifierIns.on('pointClick', function(e, record) {
              var clickPosition = [record.data.lat,record.data.lng];
//              const flags = res.data.result.data;
              const flags = [{
                userName:"jiujiu",
                description:"一次飞行记录分享给大家",
                forumurl:'www.baidu.co',
                planeId:'大疆无人机',
                flyTime:'2018-02-17'
              },
                {
                  userName:"jiujiu",
                  description:"一次飞行记录分享给大家",
                  forumurl:'www.baidu.co',
                  planeId:'大疆无人机',
                  flyTime:'2018-02-17'
                }
              ]
              const flagIndex = record.data.index;
              const content = ''
              that.infoWindow.setInfoTitle("飞行记录");
              const windowHtml = ' <p>昵称：'+flags[0].userName+'</p>'+
                '<p>描述：'+flags[0].description+'</p>'+
                '<p>链接：'+flags[0].forumurl+'</p>'+
                '<p>无人机：'+flags[0].planeId+'</p>'+
                '<p>飞行时间：'+flags[0].flyTime+'</p>'
              that.infoWindow.setInfoBody(windowHtml); //设置飞行记录窗体内容
              that.infoWindow.open(that.map, clickPosition);
            });

            $('#loadingTip').remove();
            that.map.setZoomAndCenter(14, [121.475638,31.229141]);

          });


      },
//      飞行记录详情
      forumDetail:function () {
        this.$router.push({'path':'flyRecord'})
      },
//      禁飞区详情
      forbiddenAreaDetail:function (key) {
        this.$router.push({'path':'forbiddenArea'});
      },
      //启用默认样式测距
      startRuler1:function () {
        this.ruler2.turnOff();
        this.ruler1.turnOn();
      },
  //启用自定义样式测距
      startRuler2:function () {
        this.ruler1.turnOff();
        this.ruler2.turnOn();
      }
    }
  })
</script>
