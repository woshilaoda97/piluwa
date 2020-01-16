<template>
    <div class="mylist">
        <van-cell title="邀请我的用户" is-link />
        <van-cell title="我的消息" is-link />
        <van-cell title="我要合作" is-link />
        <van-cell title="会员中心" is-link />
    </div>
</template>

<script>
import { Cell, CellGroup } from 'vant';

export default {
    name: 'MyList',
    components: {
        [Cell.name]      : Cell,
        [CellGroup.name] : CellGroup,
    }
}
</script>

<style lang="stylus">
    .mylist
        margin-top .3rem
    .van-cell
        display flex
        align-items center
        height 1rem
        font-size .3rem
    .van-cell__title
        color #000
    .van-icon
        font-size .3rem
</style>