/**
 * Created by Administrator on 2018/4/12.
 */
/*const Mock = require('mockjs')*/
import Mock from 'mockjs'

const getnoflyzoneinfo = function(){
  const data = Mock.mock({
    'data|10-50':[{
      "id|+1":1,
      "title": "@ctitle(3,10)"	,//禁飞区名称
      "location":"@city()",//禁飞区归属城市
      "latitude|26-33.6":102.620655 ,//经度
      "longitude|99-112.6":30.920677,//纬度
      "validitybegin":"@datetime()",//有效期开始
      "validityend":"@datetime()",//有效期结束
      "reason":"@csentence(3,10)",//发布理由
      "from":"@csentence(3,10)",//发布方
      "content":"@csentence(10,40)",//禁飞区详细信息
    }]
  });
  return data;
};

//正在飞行的无人机列表

const getonlineplaneinfo = function(){
  const data = Mock.mock({
    'data|100-200':[{
      "id|+1":1, //飞机id号
      "brand":"@ctitle(3,10)"	,//品牌
      "model":"@ctitle(3,10)"	,//型号
      "buytime":"@datetime()",//购买时间
      "alias|+1":1,//归属人id
      "name":"@cname(3,10)",//归属人姓名
      "idcard|+1":1,//归属人身份证
      "phone":"@integer",//归属人手机号
      "location":{
        "latitude|26-33.6":102.620655 ,//经度
        "longitude|99-112.6":30.920677,//纬度
      }
    }]
  });
  return data;
};

//飞过的标记列表
const getrecordinfo = function(){
  const data = Mock.mock({
    'data|100-200':[{
      "id|+1":1, //飞机id号
      "brand":"@ctitle(3,10)"	,//品牌
      "model":"@ctitle(3,10)"	,//型号
      "buytime":"@datetime()",//购买时间
      "alias|+1":1,//归属人id
      "name":"@cname(3,10)",//归属人姓名
      "idcard|+1":1,//归属人身份证
      "phone":"@integer",//归属人手机号
      "location":{
        "latitude|26-33.6":102.620655 ,//经度
        "longitude|99-112.6":30.920677,//纬度
      }
    }]
  });
  return data;
};

Mock.mock('/forum/getnoflyzoneinfo','post',getnoflyzoneinfo);  //禁飞区
Mock.mock('/forum/getonlineplaneinfo','post',getonlineplaneinfo);//正在飞行的无人机列表
Mock.mock('/forum/getrecordinfo','post',getrecordinfo);//正在飞行的无人机列表
