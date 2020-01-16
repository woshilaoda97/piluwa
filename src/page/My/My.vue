<template>
    <div class="container">
        <div class="bg">
            <div class="bg-top"></div>
        </div>
        <main>
            <MyHeader></MyHeader>
            <MyOrder></MyOrder>
            <MyList></MyList>
            <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
  <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
  <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
  <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
</van-goods-action>
        </main>
    </div>
</template>

<script>
import MyOrder from './MyOrder';
import MyHeader from './MyHeader';
import MyList from './MyList';

export default {
    components: {
        MyHeader,
        MyOrder,
        MyList,
    },
    name: 'My',
      methods: {
    onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    }
  }
}
</script>

<style lang="stylus" scoped>
    .container
        position relative
        main
            padding .7rem .3rem 0
    .bg 
        position fixed
        z-index -1
        width  100%
        height 100%
        background #f8f8f8
        .bg-top
            width  100%
            height 3rem
            background-image linear-gradient(45deg, #f9b27e , #e66524);
</style>