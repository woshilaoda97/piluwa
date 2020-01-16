<template>
  <div class="shop">
    <div class="shop-list">
      <ul>
        <li>
          <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt />
           <span>旗舰店</span>
        </li>
         <li>
          <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt />
           <span>旗舰店</span>
        </li>
         <li>
          <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt />
           <span>旗舰店</span>
        </li>
         <li>
          <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt />
           <span>旗舰店</span>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
export default {
    
};
</script>
<style lang="stylus" scoped>
  .shop 
      padding .1rem
      height 100%
      .shop-list 
              margin-bottom .3rem
              ul
                display flex 
                flex-wrap wrap
                li
                  width 30%
                  margin-right .1rem
                  margin-bottom .2rem
                  img 
                    width .65rem
                    height .65rem
                    margin-bottom .1rem
                    span 
                       font-size .12rem
                       color #111
                       text-align center 
      
</style>