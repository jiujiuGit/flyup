<template>
	<div id="assistant">
		<el-container>
			<el-aside width="200px" height="100%">
				<el-menu index="1" @select="assistantSelect" default-active="1">
					<el-menu-item index="1"><i class="iconfont icon-qixiang"></i>气象查询</el-menu-item>
					<el-menu-item index="2"><i class="iconfont icon-jinfeiqu"></i>禁飞区查询</el-menu-item>
					<el-menu-item index="3"><i class="iconfont icon-falvshengmingfalv"></i>法律法规</el-menu-item>
				</el-menu>
			</el-aside>
			<el-main class="assitant-main">
				<div id="weather" v-if="tabIndex == 1">
					<div class="assistant-search">
						<el-input clearable placeholder="请输入城市" v-model="fbdSearchInput" class="input-with-select">
							<el-button slot="append" @click="weatherSearch">搜索</el-button>
						</el-input>
						<span class="iconfont icon-didian"></span> <span class="searchArea">{{area}}</span>
					</div>
					<el-tabs v-model="weatherRange" type="card">
						<el-tab-pane label="实时" name="actualTime">
							<div class="flex-box">
								<div>
									<img :src="weatherData.now.weather_pic" alt="">
									<p>{{weatherData.now.weather}}</p>
								</div>
								<div class="now-weather-detail">
									<p class="temperature">{{weatherData.now.temperature}}°C</p>
									<p><span class="iconfont icon-fengxiang"></span>{{weatherData.now.wind_direction}} {{weatherData.now.wind_power}}</p>
									<p> <span class="iconfont icon-shidu"></span>湿度：{{weatherData.now.sd}}</p>
									<p>{{weatherData.now.primary_pollutant}}</p>
									<!--<p>日出 <span class="iconfont icon-richu"></span>|日落 <span class="iconfont icon-riluo"></span>时间：{{weatherData.f1.sun_begin_end}}</p>-->
									<p>日出 | 日落时间：{{weatherData.f1.sun_begin_end}}</p>
								</div>

							</div>
							<div class="24h">
								<p class="t-f-title">未来24小时</p>
								<ul class="flex-box t-f-ul">
									<li class="weather-item t-f-weather-item" v-for="item in hourList">
										<div class="wather-date">
											<!--<p class="week">周一</p>-->
											<p class="datetime">{{item.time}}</p>
										</div>
										<div class="weater-detail">
											<!--<img :src="weatherData.f1.day_weather_pic" alt="">-->
											<p>{{item.weather}}</p>
											<p>{{item.temperature}}°C</p>
											<p>{{item.wind_direction}}</p>
											<p>{{item.wind_power}}</p>
										</div>
									</li>

								</ul>
							</div>
						</el-tab-pane>
						<el-tab-pane label="5天" name="fiveDays">
							<div id="table-weather">
								<ul class="flex-box">
									<li class="weather-item">
										<div class="wather-date">
											<!--<p class="week">周一</p>-->
											<p class="datetime">{{weatherData.f1.day}}</p>
										</div>
										<div class="weater-detail">
											<img :src="weatherData.f1.day_weather_pic" alt="">
											<p></p>
											<p>{{weatherData.f1.day_weather}}</p>
											<!--<p>{{weatherData.now.aqiDetail.quality}}</p>-->
											<!--<p>空气湿度：{{weatherData.now.sd}}</p>-->
											<p>{{weatherData.f1.night_air_temperature}}~{{weatherData.f1.day_air_temperature}}</p>
											<p>{{weatherData.f1.day_wind_direction}}</p>
											<p>{{weatherData.f1.day_wind_power}}</p>
										</div>
									</li>
									<li class="weather-item">
										<div class="wather-date">
											<!--<p class="week">周一</p>-->
											<p class="datetime">{{weatherData.f2.day}}</p>
										</div>
										<div class="weater-detail">
											<img :src="weatherData.f2.day_weather_pic" alt="">
											<p></p>
											<p>{{weatherData.f2.day_weather}}</p>
											<!--    <p>{{weatherData.now.aqiDetail.quality}}</p>
                          <p>空气湿度：{{weatherData.now.sd}}</p>-->
											<p>{{weatherData.f2.night_air_temperature}}~{{weatherData.f2.day_air_temperature}}</p>
											<p>{{weatherData.f2.day_wind_direction}}</p>
											<p>{{weatherData.f2.day_wind_power}}</p>
										</div>
									</li>
									<li class="weather-item">
										<div class="wather-date">
											<!--<p class="week">周一</p>-->
											<p class="datetime">{{weatherData.f3.day}}</p>
										</div>
										<div class="weater-detail">
											<img :src="weatherData.f3.day_weather_pic" alt="">
											<p></p>
											<p>{{weatherData.f3.day_weather}}</p>
											<!--<p>{{weatherData.now.aqiDetail.quality}}</p>
                      <p>空气湿度：{{weatherData.now.sd}}</p>-->
											<p>{{weatherData.f3.night_air_temperature}}~{{weatherData.f3.day_air_temperature}}</p>
											<p>{{weatherData.f3.day_wind_direction}}</p>
											<p>{{weatherData.f3.day_wind_power}}</p>
										</div>
									</li>
									<li class="weather-item">
										<div class="wather-date">
											<!--<p class="week">周一</p>-->
											<p class="datetime">{{weatherData.f4.day}}</p>
										</div>
										<div class="weater-detail">
											<img :src="weatherData.f4.day_weather_pic" alt="">
											<p></p>
											<p>{{weatherData.f4.day_weather}}</p>
											<!--   <p>{{weatherData.now.aqiDetail.quality}}</p>
                         <p>空气湿度：{{weatherData.now.sd}}</p>-->
											<p>{{weatherData.f4.night_air_temperature}}~{{weatherData.f4.day_air_temperature}}</p>
											<p>{{weatherData.f4.day_wind_direction}}</p>
											<p>{{weatherData.f4.day_wind_power}}</p>
										</div>
									</li>
									<li class="weather-item">
										<div class="wather-date">
											<!--<p class="week">周一</p>-->
											<p class="datetime">{{weatherData.f1.day}}</p>
										</div>
										<div class="weater-detail">
											<img :src="weatherData.f5.day_weather_pic" alt="">
											<p></p>
											<p>{{weatherData.f5.day_weather}}</p>
											<!-- <p>{{weatherData.now.aqiDetail.quality}}</p>
                       <p>空气湿度：{{weatherData.now.sd}}</p>-->
											<p>{{weatherData.f5.night_air_temperature}}~{{weatherData.f5.day_air_temperature}}</p>
											<p>{{weatherData.f5.day_wind_direction}}</p>
											<p>{{weatherData.f5.day_wind_power}}</p>
										</div>
									</li>

								</ul>
							</div>
						</el-tab-pane>
					</el-tabs>

					<!-- <el-table :data="weatherData" id="table-weather">
            <el-table-column label="第一天" prop="date" width="180">

            </el-table-column>
            <el-table-column label="第二天" prop="date" width="180">

            </el-table-column>
            <el-table-column label="第三天" prop="date" width="180">

            </el-table-column>
            <el-table-column label="第四天" prop="date" width="180">

            </el-table-column>
            <el-table-column label="第五天" prop="date" width="180">

            </el-table-column>
          </el-table>-->
				</div>
				<div id="forbidden" v-if="tabIndex == 2">
					<div class="assistant-search">
						<el-input clearable placeholder="请输入城市" v-model="fbdSearchInput" class="input-with-select">
							<el-button slot="append">搜索</el-button>
						</el-input>
					</div>
					<ul class="fbd-list">
						<!--<li class="fbd-item" v-for="(item,key) in forbiddenList" @click="forbiddenDetail(key)">
							<p class="fbd-item-title">{{item.title}}</p>
							<div class="flex-box">
								<p><span class="fbd-item-author">管理员</span>发布在...</p>
								<p class="fbd-item-time">{{item.publishDate}}</p>
							</div>
						</li>-->
            <li class="fbd-item"  @click="forbiddenDetail">
              <p class="fbd-item-title">浦东新区禁飞区</p>
              <div class="flex-box">
                <p><span class="fbd-item-author">管理员</span>发布在...</p>
                <p class="fbd-item-time">2017-01-20</p>
              </div>
            </li>
            <li class="fbd-item"  @click="forbiddenDetail">
              <p class="fbd-item-title">徐汇区禁飞区</p>
              <div class="flex-box">
                <p><span class="fbd-item-author">管理员</span>发布在...</p>
                <p class="fbd-item-time">2017-01-20</p>
              </div>
            </li>
            <li class="fbd-item"  @click="forbiddenDetail">
              <p class="fbd-item-title">杨浦区禁飞区</p>
              <div class="flex-box">
                <p><span class="fbd-item-author">管理员</span>发布在...</p>
                <p class="fbd-item-time">2017-01-20</p>
              </div>
            </li>
					</ul>
					<div class="block">
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
						</el-pagination>
					</div>
				</div>
				<div id="law" v-if="tabIndex == 3">
					<div class="assistant-search">
						<el-input clearable placeholder="请输入城市" v-model="fbdSearchInput" class="input-with-select">
							<el-button slot="append">搜索</el-button>
						</el-input>

					</div>
					<ul class="law-list">
						<!--<li class="law-item" v-for="(item,key) in lawList" @click="lawsRegulationsDtl(key)">
							<p class="law-item-title">{{item.title}}</p>
							<div class="flex-box">
								<p><span class="law-item-author">管理员</span>发布在...</p>
								<p class="law-item-time">{{item.publishTime}}</p>
							</div>
						</li>-->
            <li class="law-item" v-for="(item,key) in 5"  @click="lawsRegulationsDtl">
              <p class="law-item-title">禁飞区{{item}}</p>
              <div class="flex-box">
                <p><span class="law-item-author">管理员</span>发布在...</p>
                <p class="law-item-time">2018-01-22</p>
              </div>
            </li>
					</ul>
				</div>

			</el-main>
		</el-container>

	</div>
</template>

<style>
	#assistant .el-menu {
		height: 100%;
	}
	/*  .assitant-main{
    position: relative;
  }*/
	/* #forbidden,#law{
    display: none;
  }*/

	.assitant-main {
		padding: 20px 0;
	}

	#assistant {
		/*height: 500px;*/
		background-color: white;
	}

	.assistant-search {
		padding-left: 10px;
		background-color: white;
		z-index: 100;
    margin-top: 20px;
	}

	.assistant-search>div {
		width: 400px;
		text-align: right;
	}

	.fbd-list,
	.law-list {
		border-top: 1px solid gainsboro;
		margin-top: 10px;
		padding-left: 0;
	}

	.fbd-item,
	.law-item {
		border-bottom: 1px solid gainsboro;
		text-align: left;
		margin-left: 30px;
	}

	.fbd-item>div,
	.law-item>div {
		padding: 10px 0;
	}

	.fbd-item-title,
	.law-item-title {
		font-size: 16px;
		font-weight: bolder;
		padding: 20px 0;
	}

	.fbd-item-author,
	.law-item-author {
		color: #0b97c4;
		padding-right: 5px;
	}

	.fbd-item-time,
	.law-item-time {
		padding-left: 20px;
		color: #909399;
	}

	.t-f-title {
		margin-left: 40px;
		text-align: left;
		font-size: 24px;
		color: #0b97c4;
		/*line-height: 30px;*/
		padding: 10px 0 0 20px;
		/*padding-left: 40px;*/
		margin-top: 10px;
		border-top: 1px dashed gainsboro;
	}

	.t-f-ul {
		flex-wrap: wrap;
		margin-bottom: 20px;
	}

	#table-weather {
		margin: 30px 0 0 0;
	}

	.temperature {
		font-size: 30px;
	}

	.icon-didian,
	.searchArea {
		color: #0b97c4;
	}
	/* .cell{
    text-align: center;
  }*/

	.now-weather-detail {
		text-align: left;
		margin-left: 50px;
		line-height: 30px;
	}

	.weather-item {
		width: 200px;
		border-right: 1px solid gainsboro;
		border-bottom: 1px solid gainsboro;
		border-top: 1px solid gainsboro;
	}

	.t-f-weather-item {
		padding: 0 15px;
		background-color: #BCE3F5;
		margin-right: 20px;
		max-width: 150px;
		margin-bottom: 20px;
	}

	.weather-item:first-of-type {
		border-left: 1px solid gainsboro;
	}

	.wather-date {
		line-height: 30px;
	}

	.icon-fengxiang,
	.icon-shidu,
	.icon-richu,
	.icon-riluo {
		color: #1296db;
		font-size: 30px;
		padding-top: 10px;
		/*line-height: 26px;*/
	}

	.week {
		color: #303133;
		font-weight: bolder;
		font-size: 16px;
	}

	.datetime {
		color: #606266;
		border-bottom: 1px solid gainsboro;
	}

	.weater-detail>p {
		line-height: 30px;
	}
</style>

<script>
	export default({
		data() {
			let fbdSearchInput;
			let tabIndex = 1
			let weatherData;
			let weatherRange = 'actualTime';
			let hourList;
			let area;
			let forbiddenList = [];
			let lawList = [];
			return {
				fbdSearchInput,
				tabIndex,
				weatherData,
				weatherRange,
				hourList,
				area,
        forbiddenList,
        lawList
			}
		},
		computed: {
			/* dateTimeFilter:function () {
			   for(let i=0;i<this.hoursList.length;i++){
			       this.hou
			   }
			 }*/
		},
		mounted: function() {
			const that = this;
			const jsonStr = {
				showapi_appid: '61314',
				showapi_sign: '7132920f00ce4236be609a1f4c9edd79',
				from: '5',
				lng: '116.2278',
				lat: '40.242266',
				needMoreDay: "1"
			};
			this.$api.externalPost('http://route.showapi.com/9-5', jsonStr, function(res) { //通过坐标查询天气预报
				//        console.log(JSON.stringify(res.data.showapi_res_body.f1.day_weather))
//        console.log(JSON.stringify(res))
				that.weatherData = res.data.showapi_res_body
			});
			const tfJsonStr = {

				showapi_appid: '61314',
				showapi_sign: '7132920f00ce4236be609a1f4c9edd79',
				from: '5',
				lng: '116.2278',
				lat: '40.242266',
				needMoreDay: "1",
				area: '北京'
			}
			this.$api.externalPost('http://route.showapi.com/9-8', tfJsonStr, function(res) {  //id或名称查询24小时天气预报
        that.hourList = res.data.showapi_res_body.hourList;
			})



      this.getForbiddenList(); //获取禁飞区列表
      this.getLawList(); //获取禁飞区列表
		},
		methods: {
      getForbiddenList:function () {
        const that = this;
        that.$api.get('api/forbid/list/','',res=>{
//            console.log(JSON.stringify(res.data));
            that.forbiddenList = res.data.result.data;
        })
      },
      getLawList:function () {
        const that = this;
        that.$api.get('api/lawrule/list/','',res=>{
//          console.log(JSON.stringify(res.data));
          that.lawList = res.data.result.data;
        })
      },
			assistantSelect: function(key, keyPath) {
				const that = this;
				switch(key) {
					case "1":
						that.tabIndex = 1
						break;
					case "2":
						that.tabIndex = 2
						break;
					case "3":
						that.tabIndex = 3
						break;
				}
			},
			weatherSearch: function() {

				const that = this;
				//      console.log(this.fbdSearchInput)
				const tfJsonStr = {
					showapi_appid: '61314',
					showapi_sign: '7132920f00ce4236be609a1f4c9edd79',
					from: '5',
					lng: '116.2278',
					lat: '40.242266',
					needMoreDay: "1",
					area: this.fbdSearchInput
				};
				//      实时
				this.$api.externalPost('http://route.showapi.com/9-8', tfJsonStr,function(res) {
					that.hourList = res.data.showapi_res_body.hourList;
					that.area = res.data.showapi_res_body.area;
				})

				//      未来5天
				const jsonStr = {
					showapi_appid: '61314',
					showapi_sign: '7132920f00ce4236be609a1f4c9edd79',
					from: '5',
					area: this.fbdSearchInput,
					needMoreDay: "1"
				};

				this.$api.externalPost('http://route.showapi.com/9-2', jsonStr,function(res) {
					that.weatherData = res.data.showapi_res_body
				});
			},
			handleSizeChange: function() {

			},
			handleCurrentChange: function() {

			},
//      跳转到禁飞区详情
      forbiddenDetail:function(){
//        lawsRegulations
        this.$router.push({'path':'forbiddenArea'})
      },
      //      跳转到法律法规详情
      lawsRegulationsDtl:function(){
        this.$router.push({'path':'lawsRegulations'})
      }

		}
	})
</script>
