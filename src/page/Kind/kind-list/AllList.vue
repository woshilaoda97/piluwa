<template>
  <div class="list">
    <ul>
      <li>
        <div class="imgbox">
            <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="">
            <h3>补水泡</h3>
            <span class="price">￥ 97.00 VIP</span>
            <span>￥ 119.00</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
   
}
</script>
<style lang="stylus" scoped>
   .list 
       background #ccc
       flex 1
       overflow auto 
       height 100%
       ul 
         padding .2rem
         display flex
         li 
           width 45%
           margin 0 0 .15rem .11rem
           .imgbox
                 height 1.5rem
                 display flex
                 justify-content center
                 align-items center
                 img 
                    width 100%
                    height 100%
                 h3 
                    font-size .14rem
                 .price 
                       color red 
                       font-size .16rem
                       font-weight bold
                 span 
                       margin .1rem 0 0 .1rem
          
       

</style>