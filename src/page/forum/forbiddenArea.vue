<template>
  <div class="forum-dtl-container">
    <div class="detail-content">
      <div class="detail-article">
        <h1>上海两大机场明确无人机"禁飞区"：具体到街、镇</h1>
        <p class="forum-dtl-sketch">日前，上海市民用机场净空保护联席会议发布《关于上海民用机场障碍物限制面保护范围内严禁从事无人驾驶航空器放飞等行为的通告》（以下简称《通告》），浦东国际机场、虹桥机场均设障碍物限制面保护范围，限飞范围落实到了具体街、镇。</p>
        <div class="praise-digest-displayorder">
          <p class="article-category">禁飞区</p>
          <p class="praise-label"><span class="iconfont icon-zan"></span>155</p>
        </div>
        <div class="thread-status">
          <span >发表于4天前</span>
          <span class="views"><span class="iconfont icon-yanjing"></span>232</span>
          <span class="replies"><span class="iconfont icon-chakantiezihuifu"></span>32</span>
        </div>
        <div class="article-content">
          <p class="align-left"> <span class="iconfont icon-didian"></span> 上海市浦东新区</p>
          <h4 class="align-left">一、发布方</h4>
          <p class="align-left">上海市民用机场净空保护联席会</p>
          <h4 class="align-left">二、禁飞区范围</h4>
          <p class="align-left">东边界：长江南漕航道以西；<br>
            南边界：东大公路以北；<br>
            西边界：上海绕城高速（G1501）、大川公路连线以东；<br>
            北边界：上川路（东延长至海边）以南。<br>
            具体范围涉及浦东新区有关街镇：曹路镇、合庆镇、祝桥镇、川沙新镇、惠南镇、老港镇、万祥镇、书院镇、南汇新城镇等9个街镇的部分区域。</p>
          <h4 class="align-left">三、有效期</h4>
          <p class="align-left">
            2018-01-01 00:00:00   至   2019-01-01 12:00:00
          </p>
          <h4 class="align-left">四、发布事由</h4>
          <p class="align-left">
            《通告》强调，严禁任何单位、团体和个人在机场障碍物限制面保护范围内进行无人机、航空模型等未经批准的飞行活动，以及放飞影响飞行安全的鸟类、孔明灯，升放无人驾驶的自由气球、系留气球和其他升空物体。对实施上述违法行为的，由发现上述行为的机场管理机构和属地行政主管部门进行劝阻，公安机关可依法采取紧急处置措施；情节严重的，有关部门将依法给予罚款或治安管理处罚；涉嫌犯罪的，依法追究刑事责任。
          </p>
          <h4 class="align-left">四、禁飞区图示</h4>
          <img src="../../assets/nofly.jpg" alt="">
        </div>
        <div class="comment">

        </div>
      </div>
      <div class="detail-fastpost">
        <p class="fastpost-head"><span class="iconfont icon-chakantiezihuifu"></span>评论</p>
        <div class="fastpost-edit">
          <div class="faspost-btn">
            <span class="iconfont icon-tupian"></span>
          </div>
          <div class="edit-box">
            <textarea name="faspost" id="" cols="30" rows="10"></textarea>
          </div>
          <div class="fadpost-submit">
            <el-button type="primary">评论</el-button>
          </div>
        </div>
      </div>
      <div class="detail-fastpost-list">
        <ul>
          <li class="fastpost-item flex-box" v-for="n in 10">
            <div><img src="../../assets/uav1.jpg" alt=""></div>
            <div class="fastpost-center flex-item-1">
              <el-button type="text">啾啾</el-button><span class="fastpost-time"> 3天前</span>
              <!--<a>啾啾 </a><span>3天前</span>-->
              <div class="fastpost-item-content">
                <p>第{{n}}条评论</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="forum-right">
      <div class="author " >
        <div class="flex-box">
          <a href="" class="flex-item-1"><h3 class="author-name ">管理员</h3></a>
          <div>
            <div><img class="author-header" width="60px" height="60px" src="../../assets/logo.png" alt=""></div>
            <el-button plain>+好友</el-button>
          </div>
        </div>
    <!--    <div class="ahthor-uav">
          <p>拥有无人机：</p>
          <ul class="author-uav-list flex-box">
            <li class="auther-uav-item"><img width="40px" height="40px" src="../../assets/uav1.jpg" alt=""></li>
            <li class="auther-uav-item"><img width="40px" height="40px" src="../../assets/uav1.jpg" alt=""></li>
            <li class="auther-uav-item"><img width="40px" height="40px" src="../../assets/uav1.jpg" alt=""></li>
          </ul>
        </div>-->
        <div class="author-recently-articles">
          <p>最近文章</p>
          <ul>
            <li class="author-articles-item">
              <a href="">浦东新区第一条禁飞区说明</a>
            </li>
            <li class="author-articles-item">
              <a href="">今天第一次飞，感觉还不错</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
  .forum-dtl-container{
    width: 1200px;
    margin: 0 auto;
  }
  .forum-dtl-sketch{
    color: #909399;
    line-height: 30px;
  }
  /*.forbidden-area-location{}*/
  .forum-dtl-container>div{
    float: left;
  }
  .detail-content{
    /*padding: 20px;*/
    /*margin-left: 100px;*/
    width: 800px;
    /*background-color: white;*/
  }
  .detail-article{
    padding: 20px;
    background-color: white;
    margin-bottom: 20px;
  }
  .forum-dtl-container{

    /*width: 900px;*/

    /*margin-left: 10%;*/
  }
  .forum-right{
    padding: 20px;
    width: 300px;
    background-color: white;
    /*height: 20px;*/
    margin-left: 10px;
    /*  position: fixed;
      top: 80px;
      right: 100px;*/
    /*overflow: hidden;*/
  }
  .article-category{
    width: 90px;
    line-height: 30px;
    text-align: center;
    color: #eb7064;
    border: 1px solid gainsboro;
    background-color: #f6f6f6;

  }
  .praise-digest-displayorder{
    position: relative;
    padding: 20px 0;
    border-bottom: 1px solid gainsboro;
  }
  .praise-label{
    position: absolute;
    right: 0;
    bottom: 20px;
  }
  .thread-status{
    padding: 20px 0;
    text-align: left;
    font-size: 12px;
  }
  .views,.replies{
    float: right;
    margin-left: 15px;

  }
  .article-content{
    text-align: center;

  }
  .article-content img{
    margin: 20px 0;
    max-width: 200px;
  }
  .article-content>p{
    font-size: 16px;
    line-height: 24px;
  }
  .author{
    text-align: left;
  }
  .author-header{
    border-radius: 50%;
  }
  .auther-uav-item>img{
    border-radius: 50%;
  }
  .author-articles-item{
    font-size: 12px;
  }
  .detail-fastpost{
    background-color: white;
    padding: 0 20px 20px 20px;
  }
  .fastpost-head{
    line-height: 40px;
    text-align: left;
    border-bottom: 1px solid gainsboro;
  }
  .faspost-btn{
    padding: 10px 0;
    text-align: left;
  }
  .icon-tupian{
    font-size: 24px;
  }
  .edit-box,.edit-box>textarea{
    width: 100%;
  }
  .fastpost-edit{
    overflow: hidden;
  }
  .fadpost-submit{
    float: right;
  }
  .fastpost-item img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .detail-fastpost-list{
    background-color: white;
    text-align: left;
  }
  .fastpost-center{
    margin: 0 20px;
  }
  .fastpost-item{
    border-bottom: 1px solid gainsboro;
    padding: 30px 0;
  }
  .fastpost-item-content>p{
    padding: 20px 0;
    font-size: 16px;
    /*padding: 10px;*/
  }
  .fastpost-time{
    font-size: 12px;
    color: #909399;
    margin-left: 20px;
  }
</style>

<script>

</script>
