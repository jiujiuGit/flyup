
<template>
  <div id="app">



    <el-container direction="vertical">
      <!--header部分-->
      <el-header v-if="$route.path == '/login'" class="login-header">
        <div class="login-header login-header-content">
          <p class="logoFont">InSkyLab</p>
          <div class="title">
            <p class="cn">杭州市无人驾驶航空器空中交通管理信息服务系统</p>
            <p class="en">CIVIL AVIATION ADMINISTRATION OF CHINA UNMANNED AIRCRAFT SYSTEM TRAFFIC MANAGEMENT INFORMATION SERVICE SYSTEM</p>
          </div>
        </div>
      </el-header>
      <el-header v-if="$route.path!='/login'" >
        <el-menu class="el-menu-demo" default-active="1" mode="horizontal" background-color="#00182E" text-color="#909399" active-text-color="white">
          <el-menu-item index="1" @click="home">首页</el-menu-item>
          <el-menu-item index="2" @click="gallery">图库</el-menu-item>
          <el-menu-item index="3" @click="flightAssistant">飞行助手</el-menu-item>
          <el-menu-item index="4" @click="forum">论坛</el-menu-item>

        </el-menu>
        <div class="user flex-box" index="5">
          <div class="userImg"></div>
          <p class="userText" @click="mine">我的</p>
        </div>
      </el-header>
      <!--container部分-->
      <el-main >
        <router-view></router-view>
      </el-main>
      <!--<el-main>-->
        <!---->
      <!--</el-main>-->


      <el-footer v-if="$route.path == '/login'" class="footer">

          <ul class="flex-box copyright">
            <li>法律</li>
            <li>帮助</li>
            <li>反馈</li>
            <li>等等</li>
            <li>页尾</li>
          </ul>

        <p class="copyright-tex">copyright@2018 inskylab出品</p>

      </el-footer>
    </el-container>



  </div>
</template>
<script>
  /* eslint-disable */
export default {
  data(){
    return{
      userName: "",
      password : ''
    }
  },
  mounted:function(){
console.log(this.$route.path)
  },
  methods:{
    home:function(){
      this.$router.push({"path":'home'})
    },
    flightAssistant:function(){
      this.$router.push({"path":'flightAssistant'})
    },
    forum:function(){
      this.$router.push({"path":'forum'})
    },
    gallery:function(){
      this.$router.push({"path":'gallery'})
    },
    mine:function(){
      this.$router.push({"path":'userIndex'})
    }
  }
}
</script>

<style>
  #app .el-container{
    height: 100%;
  }
  .login-header{
    padding: 10px 30px!important;
    height: auto!important;

  }
  .login-header-content{
    justify-content: center;
    position: relative;
  }
  .logoFont{
    position: absolute;
  }
  .en{
    text-align: center;
  }

  html,body{
    margin: 0;
    padding: 0;
    /*height: 100%;*/
  }
  .el-menu--horizontal{
    margin-left: 200px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-image: url("assets/u0.jpg");
    background-size: 100%;
    height: 100%;

    /*margin-top: 100px;*/
  }
  .el-header{
    background-color: #00182E;
  }
  .copyright{
    color: #909399;
    list-style: none;
    -webkit-padding-start: 0;
    justify-content: center;
    margin: 10px 0!important;
  }
  .cn{
    text-align: center;
  }
  footer{
    /*position: absolute;*/
    /*bottom: 0;*/
    /*text-align: center;*/
    /*width: 100%;*/
  }
  .copyright>li{
    width: 60px;
    text-align: center;
    /*font-size: 12px;*/
  }
  .copyright>li:hover{
    cursor: pointer;
  }
  /*.footer{*/
    /*overflow: hidden;*/
  /*}*/
  .copyright-tex{
    /*margin-left: 50px;*/
    text-align: right;
    bottom: 0;
  }
  .el-header{
    position: relative;
  }
  .user{
    position: absolute;
    top:10px;
    right: 150px;
  }
  .userImg{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: gray;
    background-image: url("assets/header.jpg");
    background-size: 100%;
  }
  .userText{
    margin-left: 10px;
    line-height: 40px;
    color: white;
    cursor: pointer;
  }
</style>
