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
    <!-- 商品描述 -->
    <goodsTitle/>

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

import Vue from "vue";
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Swipe, SwipeItem } from "vant";
import goodsTitle from './goodstitle'


export default {
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
  },
  components: {
     [GoodsAction.name]       : GoodsAction,
     [GoodsActionIcon.name]   : GoodsActionIcon,
     [GoodsActionButton.name] : GoodsActionButton,
     [Swipe.name]             : Swipe,
     [SwipeItem.name]         : SwipeItem,
     goodsTitle
  },
};
</script>

<style lang="stylus" scoped>
    .custom-indicator
        position absolute
        right .1rem
        bottom .1rem
        padding .04rem .1rem
        color #fff
        font-size .24rem
        background rgba(0, 0, 0, 0.1)
    .van-button
        font-size .24rem
</style>

