<template>
    <div id="goodwrap-background">
        <div id="goodwrap" @click="jump">
            <img src="" alt="" id="goodwrap-img">
            <p id="goodwrap-title">
                日本进口一级帮宝适拉拉裤大包装 S72片
            </p>
            <p id="goodwrap-price">
                ¥115.00
            </p>
            <p id="goodwrap-original">
                ¥125.00
            </p>
        </div>
    </div>
</template>

<script>
export default {
    
    name : 'GoodWrap',
    
    methods: {
        jump(){
            this.$router.push(`/detail/${this}`)
        }
    },
}
</script>

<style lang="stylus" >
    #goodwrap-background
        background rgb(245,245,245)
        overflow hidden
    #goodwrap
        width 3.6rem
        height 5.38rem
        background #fff 
        border-radius .1rem
        box-sizing border-box
        padding-top .3rem 
        margin .1rem
        
        #goodwrap-img
            width 2.3rem
            height 2.3rem
            background skyblue 
            margin 0 auto
            margin-bottom  .3rem 
        #goodwrap-title
            padding 0 .2rem
        #goodwrap-price
            padding 0 .2rem
        #goodwrap-original
            padding 0 .2rem




</style>