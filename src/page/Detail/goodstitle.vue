<template>
    <div>
        <h2>
            <p>{{vipPrice}}</p>
            <span>会员专享</span>
        </h2>
        <p>{{price}}</p>
        <h3>{{productName}}</h3>
        <p>{{description}}</p>
    </div>
</template>



<script>
    export default{
        data(){
            return{
                price:89,
                vipPrice:75,
                productName:`苹果手机`,
                description:`正品保障`
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
        height 1.2rem
        p
            font-weight 600
            font-size .8rem
            margin-right  .2rem
        span
            font-weight 500
            font-size .24rem
            height 50%
            background  #fae4d7
            border-radius  .15rem
    p
        font-size .4rem
        margin-left .2rem
    h3
        font-size .6rem
        font-weight 500
        margin-left .2rem





</style>