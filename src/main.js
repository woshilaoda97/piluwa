import Vue from 'vue';
import App from './App.vue';
import Router from "vue-router";
import createRouter from "./router";

import './assets/flexble';
import './assets/styl/common.styl';

//注册路由/返回路由实例
Vue.use(Router);
const router = createRouter(Router);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})