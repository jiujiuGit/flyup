/**
 * Created by Administrator on 2018/3/2.
 */
import axios from 'axios'
import Qs from 'qs'

import store from '../store'


function apiAxios(method, url, params,success,failure) {
  const  baseUrl='http://193.112.12.121:8088/';
  axios({
    method: method,
    url: baseUrl+url,
    data: params,
    responseType: 'json',
    transformRequest: [function (data) {
      data = Qs.stringify(data);
      return data;
    }],
  })
    .then(function (res) {

      if(res.data.status == 200){
        success(res);
      }else {
      }

    })
    .catch(function (err) {
        console.log(err);
    })
}

function externalInterface(method, url, params,success,failure) {
  axios({
    method: method,
    url: url,
    data: params,
    responseType: 'json',
    transformRequest: [function (data) {
      data = Qs.stringify(data);
      return data;
    }],
  })
    .then(function (res) {
      success(res);

    })
    .catch(function (err) {
      console.log(err);
    })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  externalGet: function (url, params, success, failure) {
    return externalInterface('GET', url, params, success, failure)
  },
  externalPost: function (url, params, success, failure) {
    return externalInterface('POST', url, params, success, failure)
  },

}
