<template>
  <div class="register">
    <van-nav-bar
      title="标题"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="registerform">
      <div class="inp">
        <input type="text" placeholder="请输入手机号" class="phoneNum">
      </div>
      <div class="inp">
        <input type="text" placeholder="请输入验证码" >
        <van-button plain round type="warning" class="get" size="mini" >获取验证码</van-button>
      </div>
      <div class="inp">
        <input type="password" placeholder="password" >
      </div>
    
    
    <div class="read">
      <van-checkbox class="check" icon-size=".25rem" v-model="checked"></van-checkbox><p>已阅读并同意<span>《用户服务协议》</span></p>
    </div>
     <van-button :disabled="disable" round type="warning" class="login-btn">登录</van-button>
    </div>
  </div>
  
</template>
<script>
import { Button } from "vant"
import { Checkbox } from 'vant'
import { NavBar } from 'vant'

export default {
  data() {
    return {
      checked:true,
      disable:true
    }
  },
  components:{
    [Button.name]: Button,
    [Checkbox.name]:Checkbox,
    [NavBar.name]:NavBar
  },
  methods: {
    onClickLeft() {
      console.log('返回');
      this.$router.push("login")
    },
  },
}
</script>
<style lang="stylus" scoped>
    .registerform
      margin auto
      margin-top: 0.3rem;
      width: 85%; 
      overflow hidden
      .inp
        width: 100%;
        border-bottom: 0.01rem #ccc solid;
        position: relative;
        
        input
          width: 100%;
          font-size: 0.3rem;
          margin-bottom: 0.25rem;
          margin-top: 0.5rem;
        input::-webkit-input-placeholder
          color #bbb
        .get
          position: absolute;
          right: 0;
          bottom: 0.1rem;
          font-size .2rem

      .read
        margin-top .5rem 
        display flex
        flex-direction row
        align-items center
        // justify-content  center
        .check
          margin-right .2rem
        span 
          color red
      .login-btn
        margin-top .6rem
        height 1.1rem
        width 100%
    

         
</style>
