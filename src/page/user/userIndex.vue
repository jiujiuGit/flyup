<template>
	<div id="mine">
		<el-container>
			<el-aside width="200px">
				<el-menu height="100%" default-active="1" @select="mineTabIndex">
					<el-menu-item index="1"> <i class="iconfont icon-UAV"></i>我的飞机</el-menu-item>
					<el-menu-item index="2"><i class="iconfont icon-attention"></i>我的关注</el-menu-item>
					<el-menu-item index="3"><i class="iconfont icon-haoyou"></i>我的好友</el-menu-item>
					<el-menu-item index="4"><i class="iconfont icon-renwu"></i>我的飞行任务</el-menu-item>
					<el-menu-item index="5"><i class="iconfont icon-qunfenggerenziliao"></i>个人资料</el-menu-item>
				</el-menu>
			</el-aside>
			<el-main>
				<div id="my-UAV" v-if="tabIndex == 1">
					<el-row :gutter="20">
						<!--<el-col :span="6" v-for="item in uavList" :key="item">-->
							<!--<el-card>-->
								<!--<div class="img"><img src="../../assets/banner1.jpg" alt=""></div>-->
								<!--<div style="padding: 14px;">-->
									<!--<p class="UAV-name">{{item.brand}}，型号 {{item.model}}</p>-->
                  <!--<p class="align-left fliedTime">飞行次数：{{item.fliedtime}}</p>-->
									<!--<div class=" clearfix">-->
										<!--<time class="time">购入时间：{{item.buytime}}</time>-->
										<!--<el-button type="text" class="deleteUAV"><i class="iconfont icon-shanchu"></i></el-button>-->
									<!--</div>-->
								<!--</div>-->
							<!--</el-card>-->
						<!--</el-col>-->
            <el-col :span="6" v-for="(item,key) in 6" :key="item">
              <el-card>
                <div class="img"><img src="../../assets/banner1.jpg" alt=""></div>
                <div style="padding: 14px;">
                  <p class="UAV-name">大疆无人机，型号 HQ-0{{item}}</p>
                  <p class="align-left fliedTime">飞行次数：{{item}}</p>
                  <div class=" clearfix">
                    <time class="time">购入时间：2018-03-1{{item}}</time>
                    <el-button type="text" class="deleteUAV"><i class="iconfont icon-shanchu"></i></el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
					</el-row>
				</div>
				<div id="my-follow" v-if="tabIndex == 2">
					<el-row :gutter="20">
						<!--<el-col :span="6" v-for="item in FocusPhotoList" :key="item">-->
							<!--<el-card>-->
								<!--<div class="img"><img :src="item.defaultImgUrl" alt=""></div>-->
								<!--<div style="padding: 14px;">-->
									<!--<p class="UAV-name">{{item.title}}</p>-->
                  <!--<p class="align-left"><img src="" alt=""> <span>作者信息</span></p>-->
									<!--<div class=" bottom clearfix">-->

										<!--<time class="time">2020.02.10</time>-->
										<!--<el-button type="text" class="deleteUAV" @click="unfollow"><i class="iconfont icon-xin xinActive"></i></el-button>-->
									<!--</div>-->
								<!--</div>-->
							<!--</el-card>-->
						<!--</el-col>-->
            <el-col :span="6" v-for="(item,key) in 5" :key="item">
              <el-card>
                <div class="img"><img src="../../assets/banner1.jpg" alt=""></div>
                <div style="padding: 14px;">
                  <p class="UAV-name">今天是第{{item}}次飞行</p>
                  <p class="align-left"><img src="" alt=""> <span>作者信息</span></p>
                  <div class=" bottom clearfix">

                    <time class="time">2020.02.10</time>
                    <el-button type="text" class="deleteUAV" @click="unfollow"><i class="iconfont icon-xin xinActive"></i></el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
					</el-row>
				</div>
				<div id="my-friends" v-if="tabIndex == 3">
					<el-row :gutter="20">
						<!--<el-col :span="8" v-for="(item,key) in friendsList" :key="key">
							<el-card>
								<div class="img"><img src="../../assets/banner1.jpg" alt=""></div>
								<div style="padding: 14px;">
									<p class="UAV-name">{{item.userName}}</p>
									<div class="friend-bottom clearfix">
										<p>拥有{{item.userName}}台无人机的土豪</p>
										<p>最近上线：{{item.lastFlyRecord.flyTime}}</p>
										<p>完成{{item.flyRecord.length}}次飞行任务，最近一次从北京到上海</p>
										<time class="time">2020.02.10</time>
										<el-button type="text" class="deleteUAV"><i class="iconfont icon-shanchu"></i></el-button>
									</div>
								</div>
							</el-card>
						</el-col>-->
            <el-col :span="8" v-for="(item,key) in 7" :key="key">
              <el-card>
                <div class="img"><img src="../../assets/banner1.jpg" alt=""></div>
                <div style="padding: 14px;">
                  <p class="UAV-name">一枝花</p>
                  <div class="friend-bottom clearfix">
                    <p>拥有{{item}}台无人机</p>
                    <p>最近上线：2018-04-2{{item}}</p>
                    <p>完成{{item}}次飞行任务，最近一次从北京到上海</p>
                    <time class="time">2020.02.10</time>
                    <el-button type="text" class="deleteUAV"><i class="iconfont icon-shanchu"></i></el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
					</el-row>
				</div>
				<div id="my-records" v-if="tabIndex == 4">
					<div class="flex-box records-filter">
						<el-input placeholder="起点"></el-input>
						<i>到</i>
						<el-input placeholder="终点"></el-input>
						<el-date-picker>

						</el-date-picker>
					</div>
					<ul class="records-list">
						<li class="flex-box  records-item" v-for="item in 10" :key="item">
							<div class="records-left">
								<p class="record-location"><span class="iconfont  icon-didian"></span>上海</p>
								<p class="record-title">第{{item}}次飞</p>
								<p>恩恩 感觉还不错</p>
							</div>
							<div class="records-right flex-shrink-0">
								<p class="record-time">2019.01.10 12:12:00</p>
								<div class="flex-box records-right-footer">
									<p class="flex-shrink-0 coordinate">坐标：<span>31.244508,121.319275 到  31.244508,121.319275</span></p>
									<p class="flex-shrink-0">120分钟</p>
									<p class="flex-shrink-0">无人机1</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div id="my-info" v-if="tabIndex == 5">
					<div>
						<img src="../../assets/header.jpg" alt="">
					</div>
					<div class="my-info-msg" v-if="infoEdit == false">
						<p>昵称：啾啾</p>
						<p>姓名：皮卡丘</p>
						<p>身份证：172733920020048</p>
						<p>家庭住址：上海市浦东新区康桥东路700号</p>
						<p>邀评人：皮卡乒</p>
						<el-button class="editBtn" type="danger" plain @click="editInfo">编辑</el-button>
					</div>
					<el-form v-if="infoEdit == true" class="my-info-form" size="medium " label-width="100px">
						<el-form-item label="昵称" required>
							<el-input>
							</el-input>
						</el-form-item>
						<el-form-item label="姓名" required>
							<el-input>
							</el-input>
						</el-form-item>
						<el-form-item label="身份证" required>
							<el-input>
							</el-input>
						</el-form-item>
						<el-form-item label="家庭住址" required>
							<el-input>
							</el-input>
						</el-form-item>
						<el-form-item label="邀评人(选填)">
							<el-input>
							</el-input>
						</el-form-item>
						<el-form-item class="my-info-operate">
							<el-button @click="quit">取消</el-button>
							<el-button type="primary" @click="onSubmit">保存</el-button>

						</el-form-item>
					</el-form>
				</div>
			</el-main>
		</el-container>
	</div>
</template>

<style>
	#mine {
		height: 100%;
    min-height: 500px;
	}
  #mine .el-container{
    height: 100%;
    min-height: 500px;
  }

	#mine .el-menu {
		height: 100%;
	}

	.img img {
		height: 200px;
	}

	#mine .el-card__body {
		padding: 0;
	}

	#mine .el-col {
		margin-bottom: 20px;
	}

	.clearfix {
		text-align: left;
	}

	.clearfix .time {
		color: #909399;
		line-height: 30px;
		font-size: 12px;
	}

	.UAV-name {
		font-size: 14px;
		font-weight: bolder;
		text-align: left;
	}
  .fliedTime{
    padding-top: 10px;
  }

	.deleteUAV {
		float: right;
	}

	.xinActive {
		color: red;
	}

	.records-filter {
		justify-content: flex-start;
		border-bottom: 1px solid gainsboro;
		padding-bottom: 20px;
	}

	.records-filter .el-input {
		width: 150px;
	}

	.records-filter i {
		line-height: 40px;
		margin: 0 10px;
	}

	.records-filter .el-date-editor--date {
		margin-left: 20px;
	}

	.records-item {
		text-align: left;
		border-bottom: 1px dashed gainsboro;
		padding: 20px 0;
		position: relative;
	}

	.record-title {
		font-size: 16px;
		font-weight: bolder;
		line-height: 50px;
	}

	.record-location {
		color: #909399;
	}

	.icon-didian {
		color: #5B79FB;
	}

	.records-right {
		/*position: relative;*/
		margin-right: 50px;
	}

	.records-right-footer {
		position: absolute;
		bottom: 0;
	}

	.records-right-footer>p {
		margin-left: 20px;
	}

	.record-time {
		position: absolute;
		right: 50px;
	}

	.records-right-footer {
		position: absolute;
		bottom: 10px;
		right: 50px;
	}

	.coordinate>span {
		color: #909399;
	}

	#my-info {
		position: relative;
	}

	#my-info img {
		width: 100px;
		height: 100px;
		position: absolute;
		left: 10px;
	}

	.my-info-form,
	.my-info-msg {
		position: absolute;
		left: 200px;
		width: 500px;
	}

	.my-info-operate {
		margin-top: 40px;
	}

	.my-info-msg>p {
		text-align: left;
		vertical-align: middle;
		font-size: 14px;
		color: #606266;
		line-height: 40px;
		padding: 0 12px 0 0;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		margin-top: 20px;
	}

	.editBtn {
		/*    position: absolute;
    right: 10px;
    top: 10px;
    background-color: white;*/
	}

	.friend-bottom>p:first-of-type {
		margin-top: 10px;
	}

	.friend-bottom>p {
		padding: 3px;
		color: #909399;
	}
</style>

<script>
	export default({
		data() {
			let tabIndex = 1;
			let infoEdit = false;
			let uavList = [];
			let FocusPhotoList = [];
			let friendsList = [];
			return {
				tabIndex,
				infoEdit,
        uavList,
        FocusPhotoList,
        friendsList,
			}
		},
		mounted: function() {
			/*this.$api.post('/forum/getnoflyzoneinfo', 'a=1&b=2', function(res) {
			})*/
			this.getMyUAV();  //获取我的无人机列表
      this.getFocusPhoto(); //获取我的关注列表
      this.getMyFriends(); //获取好友列表
		},
		methods: {

		  getMyUAV:function () {
        const that = this;
        that.$api.get('api/myplane/list/','',res=>{
            that.uavList = res.data.result.data;
        })
      },

      getFocusPhoto:function () {
        const that = this;
        that.$api.get('api/myfocusphoto/list/','',res=>{
          that.FocusPhotoList = res.data.result.data;
        })
      },
      getMyFriends:function () {
        const that = this;
        this.$api.get('api/myfriends/list/','',res=>{
            that.friendsList = res.data.result.data;
        })
      },
			mineTabIndex: function(key, keyPath) {
				this.tabIndex = key;
			},
			onSubmit: function() {
				this.$router.push({
					'path': 'error'
				})
			},
			editInfo: function() {
				this.infoEdit = true
			},
			quit: function() {
				this.infoEdit = false;
			},
			unfollow: function() {
				/* this.$alert(this.contents, this.title, {
				   confirmButtonText: this.confirmTitle,
				   callback: function() {
				     // 这里是回调函数，因为作为一个组件，是个个地方都通用的，只是提供外部访问接口
				     _this.$emit('callConfirm');
				   }
				 });        */
			}
		}
	})
</script>
