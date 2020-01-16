<template>
  <div>
    <img src="../../assets/img/login_logo.jpg" alt="">
    <div class="box">
      <van-button round type="primary" class="button" color="rgb(126,174,107)">微信快速登录</van-button>
      <van-button round type="default" class="button" is-link @click="showPopup" >手机号登录/注册</van-button>
    </div>
    <!-- <div class="popupbox"> -->
      <!-- 弹出框 -->
      <van-popup v-model="show" position="bottom" :style="{ height: '97%' }" class="pop">
        <!-- 表单 -->
        <img src="../../assets/img/login_logo.jpg" alt="">
        <div class="form">
          <div>
            <input type="text" class="inp" placeholder="请输入手机号">
          </div>
          <div>
            <input type="text" class="inp" placeholder="请输入密码">
            <van-button plain round type="warning" class="forgetpass">忘记密码</van-button>
          </div>
        </div>
        <van-button :disabled="disable" round type="primary" class="login-btn">登录</van-button>
        <div class="orther">
          <router-link to="">验证码登录</router-link>
          <router-link to="">新用户注册</router-link>
        </div>
        <!-- 其它方式登录 -->
        <div>
        <div class="orther-login">
          <div class="line-text">其他方式登录</div>
        </div>
          


        </div>
      </van-popup>
    <!-- </div> -->
  </div>
</template>
<script>
import { Button } from 'vant';
import { Popup } from 'vant';
export default {
  data() {
    return {
      show: false,
      tel:'',
      password:'',
      disable:true
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  },  
  components:{
    [Button.name]:Button,
    [Popup.name]:Popup,
    // [Field.name]:Field,
    // [Cell.name]:Cell,
    // [CellGroup.name]:CellGroup,
  }
}
</script>
<style lang="stylus" scoped>
  div
    display flex
    flex-direction column
    align-items center
    .pop
      border-top-left-radius .2rem
      border-top-right-radius .2rem
    img
      margin-top .50rem
      height 2.4rem
      width 2.4rem
      overflow hidden
    .box
      margin-top 1.8rem
      .button
        height 1rem
        width 6.5rem
        margin-bottom .6rem
        font-size .34rem
    .form
      margin-top .5rem
      width 85%
      div 
        width 100%
        border-bottom 0.01rem #ccc solid
        position relative
        .inp   
          width 100%
          font-size .26rem
          margin-bottom .25rem
          margin-top .5rem
        .forgetpass
          position absolute
          right 0
          bottom .1rem
    .login-btn
      height 1rem
      width 6.5rem
      margin-top .6rem
      margin-bottom  .6rem
    .orther
      width 85%
      font-size .22rem
      display flex
      flex-direction row
      justify-content space-between
      a
        color #333
    .orther-login
      height 2.8rem
      width 100%
      position fixed
      bottom 0 
      .line-text
        font-size .26rem
        color #ddd
        padding 0 .4rem 0 
        line-height .02rem
        text-align center
        border-left 2.5rem solid #ddd
        border-right 2.5rem solid #ddd

      
        
    
</style>