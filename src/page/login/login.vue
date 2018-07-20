<template>
    <div >

       <div class="login-box">

         <el-menu :default-active="activeIndex" class="el-menu-demo" @select="loginWaySelect"  mode="horizontal">
           <el-menu-item index="1">
             账号密码登录
           </el-menu-item>
           <el-menu-item index="2">
             手机号码登录
           </el-menu-item>
         </el-menu>
         <div class="login-by-username" v-if="activeIndex == '1'">
           <el-input v-model="userName" placeholder="用户名"></el-input>
           <el-input v-model="password" placeholder="密码"></el-input>
         </div>
         <div class="login-by-tel" v-if="activeIndex == '2'">
           <el-input v-model="userName" placeholder="手机号"></el-input>
           <div class="flex-box">
             <el-input v-model="password" placeholder="验证码"></el-input>
             <el-button size="normal" class="getVerification">获取验证码</el-button>
           </div>
         </div>
         <div class="automatic-login flex-box">
           <el-checkbox class="flex-item-1" v-model="automaticChecked">自动登录</el-checkbox>
           <p class="forget-password">忘记密码</p>
         </div>
         <div class="flex-box login-btn">
           <el-button type="primary">登录</el-button>
         </div>

         <div class=" flex-box flex-justify-between tourist">
           <el-button class="flex-item-1" type="text" @click="toHome()">游客登录</el-button>
           <el-button class="flex-item-1" type="text" @click="toHome()">立即注册</el-button>
         </div>
         <div class="flex-box other-ways">
           <p class="login-memo">第三方平台登录</p>
           <div>
             <span class="iconfont icon-gongzhonghao"></span>
             <span class="iconfont icon-qq"></span>
           </div>
         </div>
       </div>

    </div>
</template>

<style>
  .login-header{
    background-color: white;
    padding: 20px 40px;

    }
  .title{
    text-align: left;
    margin-left: 20px;
    color:#153780;
  }
  .cn{
    font-size: 20px;
    font-weight: bolder;
    margin-bottom: 10px;
  }
    .logoFont{
        font-weight: bolder;
        font-size: 30px;
      line-height: 50px;
        color: #0b97c4;
    }
    .login-box .el-menu--horizontal{
      margin-left: 0;
      border-bottom: none;
      text-align: center;
      background-color:rgba(0,0,0,0)
    }
    .automatic-login{
      text-align: left;
      margin-top: 20px;
    }
    .login-box .el-menu-item{
      /*margin-left: 45px;*/
      width: 175px;
      text-align: center;
      background-color: rgba(0,0,0,0)!important;
    }
    .login-box .el-menu-item:hover{
      background-color: rgba(0,0,0,0)!important;
    }
    .login-box{
      background-color: white;
      padding: 10px 20px;
        width: 350px;
        margin: 0 auto;

      margin-top: 50px;
    }
    .getVerification{
      height: 40px;
      margin-top: 30px;
      margin-left: 10px;
    }
    .forget-password{
      margin: 0;
      font-size: 12px;
      color: #1890FF;
    }
    .login-box img{
        width: 100px;
        height: 100px;
    }
    .other-ways{
      justify-content: center;
    }
    .home-dis{
        font-size: 12px;
        color: #9da0a4;
      margin: 10px;
    }
    .login-box .el-input{
        margin-top: 30px;
    }
    .login-btn{
        margin: 20px 20px 0 20px;
        justify-content: space-between;
    }
    .login-btn>button{
      width: 100%;
    }
    .tourist{
      margin-top: 10px;
    }
    .login-memo{
      line-height: 24px;
    }
  .icon-gongzhonghao{
    color: #09BB07;
    margin: 0 10px;
    font-size: 24px;
  }
  .icon-qq{
    color: #0085F8;
    font-size: 24px;
  }
</style>

<script>
    export default {
        data(){
            return{
                userName: "",
                password : '',
                activeIndex:"1",
              automaticChecked:false
            }
        },
        mounted:function(){

        },
        methods:{
            toHome:function(){
                this.$router.push({'path':"home"});
            },
          loginWaySelect:function(key,keyPath){
            this.activeIndex = key;
          }
        }
    }
</script>
