<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe  @change="onChange">
      <van-swipe-item ><img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt=""></van-swipe-item>
      <van-swipe-item ><img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt=""></van-swipe-item>
      <van-swipe-item ><img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt=""></van-swipe-item>
      <van-swipe-item ><img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt=""></van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/{{size}}</div>
    </van-swipe>
    <!-- 底部按钮 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
// 底部加车模块
import Vue from "vue";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";

Vue.use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
// 底部加车模块

//轮播图
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
//轮播图

export default {
  components: {},
  name: "Detail",
  methods: {},
  data() {
    return {
        current: 0,
        size:4
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
};
</script>
    
<style lang="stylus" scoped></style>

