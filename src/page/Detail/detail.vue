<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe @change="onChange">
      <van-swipe-item>
        <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt />
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/{{size}}</div>
    </van-swipe>
    <!-- 商品描述 -->
    <goodsTitle />
    <!-- 规格 -->
    <van-cell title="可选规格" is-link @click="ChangeShow" />
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :hide-stock="sku.hide_stock"
      :message-config="messageConfig"
    />
    <!-- 列表详情 -->
    <van-tabs v-model="activeName">
        <van-tab title="图文详情" name="a">内容 1</van-tab>
        <van-tab title="商品参数" name="b">内容 2</van-tab>
    </van-tabs>
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
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Swipe,
  SwipeItem,
  Sku,
  Cell,
  CellGroup,
  Tab, 
  Tabs,
} from "vant";

import goodsTitle from "./goodstitle";

export default {
  name: "Detail",
  methods: {},
  data() {
    return {
      current: 0,
      size: 4,
      show: false,
      activeName: 'a',
      sku: {
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "https://img.yzcdn.cn/1p.jpg" // 用于预览显示的规格类目图片
              },
              {
                id: "1215",
                name: "蓝色",
                imgUrl: "https://img.yzcdn.cn/2.jpg",
                previewImgUrl: "https://img.yzcdn.cn/2p.jpg"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "30349", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "" // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 商品标题
        title: "测试商品",
        // 默认商品 sku 缩略图
        picture: "https://img.yzcdn.cn/1.jpg"
      },
      messageConfig: {
        uploadImg: () => {
          return new Promise(resolve => {
            setTimeout(
              () =>
                resolve(
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                ),
              1000
            );
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placeholder 配置
        placeholderMap: {
          text: "xxx",
          tel: "xxx"
        }
      }
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    ChangeShow() {
      this.show = !this.show;
    }
  },
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Sku.name]: Sku,
    [Cell.name]: Cell,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    goodsTitle
  }
};
</script>

<style lang="stylus" scoped>
  .custom-indicator 
      position: absolute;
      right: 0.1rem;
      bottom: 0.1rem;
      padding: 0.04rem 0.1rem;
      color: #fff;
      font-size: 0.24rem;
      background: rgba(0, 0, 0, 0.1);


  .van-button 
      font-size: 0.24rem;

  .van-swipe
      height 6rem
      img
          width 100%
  .van-cell 
    margin-left .2rem
    font-size .28rem
    width 7rem
    padding 0 

  .van-tabs
    height 1rem
    .van-hairline--top-bottom
      height .8rem
      .van-tab__text
        font-size .2rem

</style>

