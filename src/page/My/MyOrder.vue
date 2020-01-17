<template>
    <div class="order">
        <div class="order-top">
            <p>我的订单</p>
            <div class="order-top-right">
                <span>查看所有订单</span>
                <van-icon name="arrow" />
            </div>
        </div>
        <van-grid :column-num="5">
            <van-grid-item icon="coupon" text="待付款" class="van-grid-item"/>
            <van-grid-item icon="send-gift" text="代发货" class="van-grid-item"/>
            <van-grid-item icon="todo-list" text="待收货" class="van-grid-item"/>
            <van-grid-item icon="comment" text="待评价" class="van-grid-item"/>
            <van-grid-item icon="balance-list" text="退款" class="van-grid-item"/>
        </van-grid>
    </div>
</template>

<script>
import { Icon, Grid, GridItem } from 'vant';

export default {
    name: "MyOrder",
    components: {
        [Icon.name]     : Icon,
        [Grid.name]     : Grid,
        [GridItem.name] : GridItem,
    }
}
</script>

<style lang="stylus">
    .order
        display flex
        flex-direction column
        height 2.4rem
        margin-top .68rem
        background #fff
        border-radius .05rem
        padding .2rem
    .order-top
        display flex
        justify-content space-between
        align-items center
        margin-bottom .3rem
        border-bottom  0rem 
        p
            font-size .28rem
            font-weight bold
            color #242625
        .order-top-right
            display flex
            align-items center
            span 
                font-size .22rem
                color #a2a0a1   

    .van-grid-item
        height 1.55rem
        .van-grid-item__icon
            font-size .5rem
            color #f98842
        .van-grid-item__content--center
            justify-content space-between
        .van-grid-item__text
            font-size .26rem
        .van-hairline::after
            border 0rem
    .van-hairline--top::after 
        border-top 0rem
</style>