// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import axios from './util/http'
import routers  from './router'
import VueRouter from  'vue-router'
//import VueAMap from 'AMap';
import {Popover,Tabs,TabPane,TableColumn,Table,Message,FormItem,Form,DatePicker,Collapse,CollapseItem,Card,Col,Row,Pagination,MessageBox,CarouselItem,Carousel,Checkbox,MenuItemGroup,Submenu,Menu,MenuItem, Button, Select ,Input,Container,Header,Main,Aside,Footer} from 'element-ui';
import 'babel-polyfill'
import api from './util/http'
require('./mock.js');

Vue.prototype.$api = api;
Vue.use(VueRouter);
//Vue.use(VueAMap);//高德地图
/*
VueAMap.initAMapApiLoader({
  key: '356ec1cdaf47c4af5a0989957e11a68f',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4',
  resizeEnable:true
});
*/

const router = new VueRouter({
  mode: 'history',
  routes: routers
})
//Vue.use(router);
Vue.config.productionTip = false;

// Vue.prototype.
// Vue.use(Message);

Vue.use(Popover);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(TableColumn);
Vue.use(Table);
Vue.use(FormItem);
Vue.use(Form);
Vue.use(DatePicker);
Vue.use(Collapse);
Vue.use(CollapseItem);
//Vue.use(MessageBox);
Vue.use(Card);
Vue.use(Col);
Vue.use(Row);
Vue.use(Pagination);
Vue.use(CarouselItem);
Vue.use(Carousel);
Vue.use(Checkbox);
Vue.use(Button);
Vue.use(Select);
Vue.use(Input);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Footer);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.prototype.$axios = axios;
Vue.prototype.$message = Message;
Vue.prototype.$messageBox = MessageBox;
/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
