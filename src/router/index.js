import Vue from 'vue'
//import Router from 'vue-router'


//Vue.use(Router);
import home from '../page/home/home.vue'
import login from '../page/login/login.vue'
import flightAssistant from '../page/flightAssistant/assistantIndex.vue'
import forum from '../page/forum/forumIndex.vue'
import forumDetail from '../page/forum/forumDetail.vue'
import flyRecord from '../page/forum/flyRecord.vue'
import forbiddenArea from '../page/forum/forbiddenArea.vue'
import lawsRegulations from '../page/forum/lawsRegulations.vue'
import gallery from '../page/gallery/galleryIndex.vue'
import galleryDetail from '../page/gallery/galleryDetail.vue'
import user from '../page/user/userIndex.vue'
import nonExistent from '../page/error/404.vue'
import authority from '../page/error/403.vue'
import error from '../page/error/error.vue'
const  routers = [
  {path: '/', redirect: '/login'},
  { path: '/login', component: login },
  { path: '/flightAssistant', component: flightAssistant},
  { path: '/forum', component: forum},
  { path: '/forumDetail', component: forumDetail},
  { path: '/forbiddenArea', component: forbiddenArea},
  { path: '/flyRecord', component: flyRecord},
  { path: '/lawsRegulations', component: lawsRegulations},
  { path: '/gallery', component: gallery},
  { path: '/galleryDetail', component: galleryDetail},
  { path: '/home', component: home},
  { path: '/userIndex', component: user},
  { path: '/nonExistent', component: nonExistent},
  { path: '/authority', component: authority},
  { path: '/error', component: error},
];

export default routers
