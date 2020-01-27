import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

import App from './App.vue';
import Router from "vue-router";
import createRouter from "./router";
import createVuex from './vuex';
import { Lazyload } from 'vant';//图片懒加载依赖

import './assets/flexble';
import './assets/styl/common.styl';
//将axios绑定到Vue实例
Vue.prototype.$axios = axios;
//注册路由/返回路由实例
Vue.use( Router );
//注册全局组件库Vant
Vue.use( Vuex );
Vue.use(Lazyload);//懒加载模块注册
const router = createRouter( Router );
const store = createVuex( Vuex );
//全局路由守卫
router.beforeEach((to,from,next)=>{
  window.console.log(to)
  if(to.path==='/login'||to.path==='/register'){
    next()
  }else{
    next('login')
    // next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})