<template>
  <div class="error-container">
    <img src="../../assets/404.png" alt="">
    <p class="error-hint">抱歉，您访问的页面不存在</p>
    <el-button type="primary" @click="back">返回主页</el-button>
  </div>
</template>

<style>

  .error-container{
    margin-top: 100px;
  }
  .error-container img{
    width: 200px;
    height: 200px;
  }
.error-hint{
  line-height: 50px;
  font-size: 16px;
  color: #909399;
}
</style>

<script>
  export default({
    data(){
      return{}
    },
    methods:{
      back:function(){
        this.$router.push({'path':'home'})
      }
    }
  })
</script>
