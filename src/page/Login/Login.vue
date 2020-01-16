<template>
  <div>
    <img src="../../assets/img/login_logo.jpg" alt="">
    <div class="box">
      <van-button round type="default" class="button">默认按钮</van-button>
      <van-button round type="primary" class="button" color="rgb(126,174,107)">默认按钮</van-button>
    </div>
    
  </div>
</template>
<script>
import { Button } from 'vant';
export default {
  components:{
    [Button.name]:Button
  }
}
</script>
<style lang="stylus" scoped>
  div
    display flex
    flex-direction column
    align-items center
    img
      margin-top .44rem
      height 2.4rem
      width 2.4rem
      overflow hidden
    .box
      margin-top 1.8rem
      .button
        height 1rem
        width 6.5rem
        margin-bottom .6rem

</style>