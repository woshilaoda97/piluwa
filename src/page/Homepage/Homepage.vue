<template>
    <div>
        <!-- 背景图 -->
        <figure>
        <!-- 搜索 -->
            <div id="seek">双十一大促销</div>

        </figure>
        <!-- 每日福利 -->
        <ul id="weal">
            <li id="weal-li"> 
                <img src="../../assets/img/Icon1.jpg" alt="" id="weal-img">
                每日福利 
            </li>
            <li id="weal-li"> 
                <img src="../../assets/img/Icon2.jpg" alt="" id="weal-img">
                热销榜 
            </li>
            <li id="weal-li"> 
                <img src="../../assets/img/Icon3.jpg" alt="" id="weal-img">
                皮噜甄选 
            </li>
            <li id="weal-li"> 
                <img src="../../assets/img/Icon4.jpg" alt="" id="weal-img">
                会员中心 
            </li>
        </ul>
        <!-- 全球奶粉 -->
        <ul id="global">
            <li id="global-li1">
                <img src="../../assets/img/quanqiu.jpg" alt="" id="global-img1">
            </li>
            <li id="global-li2">
                <img src="../../assets/img/niaobushi.jpg" alt="" id="global-img2">
            </li>
        </ul>
        <!-- 营养辅食 -->
        <ul id="food">
            <li id="food-li1">
                <img src="../../assets/img/food.jpg" alt="" id="food-img1">
            </li>
            <li id="food-li2">
                 <img src="../../assets/img/baby.jpg" alt="" id="food-img2">
            </li>
        </ul>


        
    </div>
</template>

<script>
export default {
    name: 'Homepage',
    created () {
        // this
    }
}
</script>

<style lang="stylus" scoped>
    //背景图片
    figure 
        position absolute
        width 100%
        height 3.4rem
        background url(../../assets/img/mainpic.jpg) no-repeat 0 0/100% auto
        overflow hidden
        //搜索框
        #seek
            width 7rem
            height .6rem
            background #ccc
            border-radius .3rem
            opacity 0.6
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
            
            #weal-li
                list-style none
                width 25%
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

            #global-li1
                list-style none
                width 3.4rem
                height 2.05rem
                background: rgb(252, 245, 228);
                margin-right .24rem
                
            #global-li2
                list-style none
                width 3.4rem
                height 2.05rem
                background: rgb(251, 243, 243);
            //全球奶粉图片
            #global-img1
                width 1.4rem
                height 1.2rem
                margin-left 2rem
                margin-top .6rem
            //尿不湿图片
            #global-img2
                width 1.4rem
                height 1.2rem
                margin-left 2rem
                margin-top .6rem
                

        //营养辅食
        #food
            width 100%
            height 2.06rem
            display flex
            align-items center
            justify-content center
            margin-top .24rem

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
                background: rgb(246, 247, 250);
            //营养辅食图片
            #food-img1
                width 1.4rem
                height 1.2rem
                margin-left 2rem
                margin-top .6rem
            //宝宝洗护图片
            #food-img2
                width 1.4rem
                height 1.2rem
                margin-left 2rem
                margin-top .6rem
                 
            
            
            

            

</style>