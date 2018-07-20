<template>
  <div class="gallery-container">
    <!--<el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
        <img src="../../assets/banner1.jpg" alt="">
      </el-carousel-item>
    </el-carousel>-->
    <el-row  :gutter="20">
      <!--<el-col :span="6" v-for="(item,key) in sharePhoto"  >
          <div class="gallery-item"  @click="galleryDetail(key)">
            <img :src="item.imgUrl" alt="">
            <div class="picInfo">
              <p class="gallery-name" >{{item.title}}</p>
              <p class="gallery-des">{{item.summary}}</p>
              <div class="flex-box">
                <p class="gallery-time">{{item.created_at}}</p>
                <p class="gallery-eyes flex-item-1"><span class="iconfont icon-yanjing"></span><span style="margin-left: 5px">{{item.likeNum}}</span></p>
                <p class="gallery-xin xin-active"><span class="iconfont icon-xin"></span></p>
              </div>
            </div>
          </div>
      </el-col>-->

      <el-col :span="6" v-for="item in 9"  >
        <div class="gallery-item"  @click="galleryDetail">
          <img src="../../assets/banner1.jpg" alt="">
          <div class="picInfo">
            <p class="gallery-name" >图库{{item}}</p>
            <p class="gallery-des">图库简单描述{{item}}</p>
            <div class="flex-box">
              <p class="gallery-time">2018-02-1{{itme}}</p>
              <p class="gallery-eyes flex-item-1"><span class="iconfont icon-yanjing"></span><span style="margin-left: 5px">{{item}}</span></p>
              <p class="gallery-xin xin-active"><span class="iconfont icon-xin"></span></p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
 <!--   <ul class="picList flex-box">
      <li class="gallery-item flex-shrink-0">

      </li>
    </ul>-->
  </div>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .gallery-container{
    margin: 0 100px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .picList{
    margin: 20px 100px;
    flex-wrap: wrap;
  }
  .gallery-item{
    margin-bottom: 30px;
    border: 1px solid gainsboro;
    text-align: left;
    background-color: white;
    border-radius: 5px;

  }
  .gallery-item>img{
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
  .picInfo{
    padding: 5px;
  }
  .picInfo p{
    padding: 5px 0;
  }
  .gallery-des{
    color: #9da0a4;
  }
  .gallery-time{
    font-size: 12px;
    color: #9da0a4;
  }
  .gallery-eyes{
    color: #9da0a4;
    margin-left: 10px;
  }
  .xin-active{
    color: red;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<script>
  export default({
      data(){
         return{
             sharePhoto:[]
         }
      },
    mounted:function () {
        this.getGalleryList();//图库列表
    },
    methods:{
      getGalleryList:function () {
        const that = this;
        that.$api.get('api/sharephoto/list/','',res=>{
          that.sharePhoto = res.data.result.data;
//          console.log(JSON.stringify(that.sharePhoto))
        })
      },
      galleryDetail:function () {

        this.$router.push({'path':'galleryDetail'})
      }
    }
  })
</script>
