<template>
    <div class="header">
        <div class="avatar">
            <van-image
                round
                width="1.12rem"
                height="1.12rem"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                :style="{border:'.05rem solid #fff9d7'}"
            />
            <p>sdsd</p>
        </div> 

        <div class="icon-group">
            <div class="icon-top">
                <van-icon name="qr"/>
                <van-icon name="scan"/>
                <van-icon name="setting-o" />
            </div>
            <div class="icon-bottom">
                <van-icon name="service-o"/>客服
            </div>
        </div>
    </div>
</template>

<script>
import { Icon, Image } from 'vant';

export default {
    components: {
        [Icon.name]: Icon,
        [Image.name]: Image,
    }
}
</script>

<style lang="stylus">
    .header 
        display flex
        width 100%
        height 1.12rem
        justify-content space-between
    .icon-group
        display flex
        flex-direction column
        justify-content space-between
        
    .icon-top
        display flex
        justify-content space-between
        width 1.56rem
        height .4rem
        color #fff9d7
        .van-icon
            font-size .4rem
    .avatar
        display flex
        height 1.12rem
        align-items center
        p
            font-size .37rem
            color #fff9d7
            margin-left .15rem
    .icon-bottom
        display flex
        align-items center
        position relative
        left .75rem
        width 1.3rem
        line-height .5rem
        text-indent .08rem
        border-radius .25rem
        background-color rgba(0,0,0,0.3)
        color #fff9d7
        font-size .25rem
</style>