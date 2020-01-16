<template>
    <div id="body">
        <!-- 背景图 -->
        <figure>
        <!-- 搜索 -->
            <div id="seek" @click="toSearch">
                <van-icon name="search" />
                 新春大促销
            </div>

        </figure>
        <!-- 每日福利 -->
        <ul id="weal">
            <li id="weal-li"> 
                <img src="../../assets/img/Icon1.jpg" alt="" id="weal-img">
                每日福利 
            </li>
            <li id="weal-li"> 
                <img src="../../assets/img/Icon2.jpg" alt="" id="weal-img">
                热销榜单 
            </li>
            <li id="weal-li"> 
                <img src="../../assets/img/Icon3.jpg" alt="" id="weal-img">
                皮噜甄选 
            </li>
            <li id="weal-li"> 
                <img src="../../assets/img/Icon4.jpg" alt="" id="weal-img">
                吐槽树洞
            </li>
            <li id="weal-li"> 
                <img src="../../assets/img/Icon5.jpg" alt="" id="weal-img">
                超级会员
            </li>
        </ul>
        <!-- 全球奶粉 -->
        <ul id="global">
            <li id="global-li1">
                <p id="global-p">
                    全球奶粉
                </p>
                <img src="../../assets/img/quanqiu.jpg" alt="" id="global-img1">
            </li>
            <li id="global-li2">
                <p id="global-p">
                    尿不湿
                </p>
                <img src="../../assets/img/niaobushi.jpg" alt="" id="global-img2">
            </li>
        </ul>
        <!-- 营养辅食 -->
        <ul id="food">
            <li id="food-li1">
                <p id="food-p">
                    营养辅食
                </p>
                <img src="../../assets/img/food.jpg" alt="" id="food-img1">
            </li>
            <li id="food-li2">
                <p id="food-p">
                    宝宝洗护
                </p>
                 <img src="../../assets/img/baby.jpg" alt="" id="food-img2">
            </li>
        </ul>
        <HomepageVideo></HomepageVideo>
        <HomepageCommodity></HomepageCommodity>
    </div>
</template>

<script>

import HomepageVideo from './HomepageVideo'
import HomepageCommodity from './HomepageCommodity'
import { Icon } from 'vant'

export default {
    name: 'Homepage',
    components: {
        [Icon.name]: Icon,
        HomepageVideo,
        HomepageCommodity
    },
    methods: {
        toSearch () {
            this.$router.history.push('/search')
        }
    }
}
</script>

<style lang="stylus" scoped>
    // #body 
    //     background rgb(245,245,245)
    //背景图片
    figure 
        width 100%
        height 3.4rem
        background url(../../assets/img/mainpic.jpg) no-repeat 0 0/100% auto
        overflow hidden
        //搜索框
        #seek
            display flex
            align-items center
            width 7rem
            height .6rem
            background rgba(0,0,0,.25)
            border-radius .3rem
            margin 0 auto
            margin-top .3rem
            line-height .6rem
            text-indent .5rem
            color #fff

    //每日福利
        #weal
            width 100%
            height 2.4rem
            display flex
            flex-direction row 
            align-items center
            justify-content center
            margin 0 auto
            background rgb(245,245,245)

            
            #weal-li
                list-style none
                width 20%
                text-align center
            #weal-img
                margin 0 auto
        //全球奶粉
        #global
            width 100%
            height 2.06rem
            display flex
            align-items center
            justify-content center
            background rgb(245,245,245)
            li
                display flex
                align-items center
                justify-content space-evenly
            #global-li1
                list-style none
                width 3.4rem
                height 2.05rem
                background: rgb(253, 246, 229);
                margin-right .24rem
                
            #global-li2
                list-style none
                width 3.4rem
                height 2.05rem
                background: rgb(251, 242, 244);
            //全球奶粉标题
            #global-p
                font-size .3rem

            //全球奶粉图片
            #global-img1
                width 1.4rem
                height 1.2rem
                margin-top .3rem
            //尿不湿图片
            #global-img2
                width 1.4rem
                height 1.2rem
                margin-top .3rem
                

        //营养辅食
        #food
            width 100%
            height 2.3rem
            display flex
            align-items center
            justify-content center
            padding-top .24rem
            background rgb(245,245,245)
            padding-bottom .2rem
            li
                display flex
                align-items center
                justify-content space-evenly
            #food-li1
                list-style none
                width 3.4rem
                height 2.05rem
                background: rgb(250, 252, 238);
                margin-right .24rem
                
                
            #food-li2
                list-style none
                width 3.4rem
                height 2.05rem
                background: rgb(247, 248, 253);
            //营养辅食标题
            #food-p
                font-size .3rem
            //营养辅食图片
            #food-img1
                width 1.4rem
                height 1.2rem
                margin-top .3rem
            //宝宝洗护图片
            #food-img2
                width 1.4rem
                height 1.2rem
                margin-top .3rem
                 
            
            
            

            

</style>