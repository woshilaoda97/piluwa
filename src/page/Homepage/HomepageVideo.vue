<template>
    <div>
        <van-cell title="精选视频" value="更多" is-link />
        <!-- 精选视频 -->
        <div id="video">
            <img src="../../assets/img/video1.png" alt="" id="video-img" @click="show">
            <img src="../../assets/img/video2.png" alt="" id="video-img">
        </div>
        
    </div>
</template>

<script>
import { Cell, CellGroup, Toast } from 'vant';
export default {
    name : 'HomepageVideo',
    components : {
        [Cell.name] : Cell,
        [CellGroup.name] : CellGroup,
    },
    methods : {
        show () {
            Toast ('抱歉，您还不是超级会员！')
        }
    }

}
</script>

<style lang="stylus" scoped>
    .van-cell__title  
        font-size .3rem
        span::before
            content 'i'
            color transparent
            background rgb(229,139,42)
            margin-right .1rem
    .van-cell:not(:last-child)::after
        border-bottom 0rem
    .van-cell__value
        font-size .25rem
    #video
        width 100%
        height 2.4rem
        display flex
        justify-content space-evenly
        #video-img
            width 3.6rem
            height 2.4rem
            display block
            border-radius .1rem
    .van-toast
        font-size .2rem !important
        line-height .2rem !important
    .van-toast__text
        font-size .2rem !important
        line-height .2rem !important
            
    
</style>