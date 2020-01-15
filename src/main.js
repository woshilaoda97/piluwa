import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

import App from './App.vue';
import Router from "vue-router";
import createRouter from "./router";
import createVuex from './vuex';

import './assets/flexble';
import './assets/styl/common.styl';
//将axios绑定到Vue实例
Vue.prototype.$axios = axios;
//注册路由/返回路由实例
Vue.use( Router );
//注册全局组件库Vant
Vue.use( Vuex );
const router = createRouter( Router );
const store = createVuex( Vuex );

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})