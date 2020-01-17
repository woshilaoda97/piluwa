<template>
    <div id="goodstitle">
        <h2>
            <p><span class="samll">¥</span>{{vipPrice}}.00</p>
            <span class="vip">会员专享</span>
        </h2>
        <span class="title"> 现货 </span>
        <h3>{{productName}}</h3>
        <p class="describe">{{description}}</p>
    </div>
</template>



<script>
    export default{
        data(){
            return{
                vipPrice:75,
                productName:`日本进口一级帮宝适拉拉裤大包装 S72 片`,
                description:`适用于4岁以上`
            }
        },
        computed:{
           
        },
        name:'goodsTitle',
    }
</script>


<style lang="stylus" scoped>
    h2
        color #c86a24;
        display flex
        padding .2rem
        height .9rem
        p
            font-weight 600
            font-size .4rem
            margin-right  .2rem
            .samll
                font-size .2rem
        .vip
            font-weight 500
            font-size .22rem
            height .36rem
            width 1.2rem
            background rgb(226,111,45)
            border-radius  .15rem
            line-height .36rem
            text-align center
            margin-top .1rem
            color #fff

    .title
        font-size .23rem
        height .36rem
        width 2rem
        background rgb(226,111,45)
        line-height .36rem
        display inline
        margin-left .2rem
        color #fff
        padding-left .1rem

    .describe
        font-size .23rem
        margin-left .2rem
        color #999
        margin-top .25rem


    h3
        font-size .28rem
        font-weight 500
        margin-left .2rem
        display inline-block





</style>