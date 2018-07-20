<template>
  <div class="forum-dtl-container">
    <div class="detail-content">
      <div class="detail-article">
        <h1>来一组今天拍的美图</h1>
        <div class="praise-digest-displayorder">
          <p class="article-category">图库</p>
          <p class="praise-label"><span class="iconfont icon-zan"></span>155</p>
        </div>
        <div class="thread-status">
          <span >发表于4天前</span>
          <span class="views"><span class="iconfont icon-yanjing"></span>232</span>
          <span class="replies"><span class="iconfont icon-chakantiezihuifu"></span>32</span>
        </div>
        <div class="article-content" id="photo-article">
          <p class="align-left">秦岭，分为狭义上的秦岭和广义上的秦岭。
            狭义上的秦岭，仅限于陕西省南部、渭河与汉江之间的山地，东以灞河与丹江河谷为界，西止于嘉陵江 。而广义上的秦岭，是横贯中国中部的东西走向山脉。西起甘肃省临潭县北部的白石山，向东经天水南部的麦积山进入陕西。在陕西与河南交界处分为三支，北支为崤山，中支为熊耳山；南支为伏牛山。长约1600多千米，为黄河支流渭河与长江支流嘉陵江、汉水的分水岭。
            由于秦岭南北的温度、气候、地形均呈现差异性变化，因而秦岭-淮河一线成为了中国地理上最重要的南北分界线。
            （文字源自百度百科）</p>
          <img width="100%" style="width: 100%" src="https://bbs33.djicdn.com/data/attachment/forum/201805/10/195025rms9jma9ssi6quwq.jpg@!778w" alt="">
          <p class="center">所谓升格，也就是慢动作</p>
          <p class="center">随便吧随便写点</p>
          <div>
            <img src="https://bbs22.djicdn.com/data/attachment/forum/201805/10/105456x49jk4knz9n7jjcp.jpg@!778w" alt="">
          </div>
          <p class="center">当页面出现403了怎么办，如下图当页面出现403了怎么办，如下图：</p>
          <div>
            <img src="https://bbs55.djicdn.com/data/attachment/forum/201805/10/105456trsembewze7pr9rl.jpg@!778w" alt="">
          </div>
          <p class="center">当页面出现403了怎么办，画一个地图，如下图：</p>
          <div>
            <img src="https://bbs11.djicdn.com/data/attachment/forum/201805/10/105502xjjmew801x0b0jjj.jpg@!778w" alt="">
          </div>
          <div>
            <img src="https://bbs22.djicdn.com/data/attachment/forum/201805/10/105505q3jutjf31btddt1l.jpg@!778w" alt="">
          </div>
          <div>
            <img src="https://bbs22.djicdn.com/data/attachment/forum/201805/10/105459pb6qwe6ggqbts69a.jpg@!778w" alt="">
          </div>
          <div>
            <img src="https://bbs33.djicdn.com/data/attachment/forum/201805/10/105501otjaa2kj1yh2h2yh.jpg@!778w" alt="">
          </div>
          <p>人类的悲欢并不想通，我只是觉得他们吵闹</p>
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
          <a href="" class="flex-item-1"><h3 class="author-name ">Jon Snow</h3></a>
          <div>
            <div><img class="author-header" width="60px" height="60px" src="../../assets/logo.png" alt=""></div>
            <el-button plain>+好友</el-button>
          </div>
        </div>
        <div class="ahthor-uav">
          <p>拥有无人机：</p>
          <ul class="author-uav-list flex-box">
            <li class="auther-uav-item"><img width="40px" height="40px" src="../../assets/uav1.jpg" alt=""></li>
            <li class="auther-uav-item"><img width="40px" height="40px" src="../../assets/uav1.jpg" alt=""></li>
            <li class="auther-uav-item"><img width="40px" height="40px" src="../../assets/uav1.jpg" alt=""></li>
          </ul>
        </div>
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
  .forum-dtl-container>div{
    float: left;
  }
  .detail-content{
    /*padding: 20px;*/
    /*margin-left: 100px;*/
    width: 800px;
    /*background-color: white;*/
  }
  #photo-article img{
    width: 100% !important;
    max-width: 100%;
  }
  .detail-article{
    padding: 20px;
    background-color: white;
    margin-bottom: 20px;
  }
  .align-left{
    text-align: left;
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
    max-width: 100%;
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
<script type="text/ecmascript-6">

</script>
