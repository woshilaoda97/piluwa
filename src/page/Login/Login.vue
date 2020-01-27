<template>
  <div>
    <img src="../../assets/img/login_logo.jpg" alt />
    <div class="box">
      <van-button round type="primary" class="button" color="rgb(126,174,107)" @click="loolshow">微信快速登录</van-button>
      <van-button round type="default" class="button" is-link @click="showPopup">手机号登录/注册</van-button>
    </div>
    <Password />
    <!-- 弹出框 -->
    <!-- <van-popup v-model="show" position="bottom" :style="{ height: '97%' }" class="pop">
      
      <img src="../../assets/img/login_logo.jpg" alt />
      <div class="form">
        <div>
          <input type="text" class="inp" placeholder="请输入手机号" />
        </div>
        <div>
          <input type="text" class="inp" placeholder="请输入密码" />
          <van-button plain round type="warning" class="forgetpass" size="mini">忘记密码</van-button>
        </div>
      </div>
      <van-button :disabled="disable" round type="primary" class="login-btn">登录</van-button>
      <div class="orther">
        <router-link to>验证码登录</router-link>
        <router-link to>新用户注册</router-link>
      </div>
      
        <div class="orther-login">
          <div class="line-text">其他方式登录</div>
          <ul>
            <li>
              <a>
                <span class="iconfont icon-weixin1"></span>
                <span>微信登录</span>
              </a>
            </li>
            <li>
              <a>
                <span class="iconfont icon-QQ1"></span>
                <span>微信登录</span>
              </a>
            </li>
            <li>
              <a>
                <span class="iconfont icon-weibo-"></span>
                <span>微信登录</span>
              </a>
            </li>
          </ul>
        </div>
      
    </van-popup> -->
    
  </div>
</template>
<script>
import Password from "./Password"
// import { Button } from "vant";
// import { Popup } from "vant";
import {SupBus} from "../../components/MixinComponents"
export default {
  mixins:[SupBus],
  data() {
    return {
      show: false,
      tel: "",
      password: "",
    };
  },
  methods: {
    showPopup() {
      this.bus.$emit("showChange",true);
    },
    loolshow(){
      console.log(this.show)
    }
  },
  components: {
    // [Button.name]: Button,
    // [Popup.name]: Popup
    Password
  },
  created () {
    this.bus.$on("showChange", (v)=>{
      console.log("father",v)
      this.show = v
    })
  }
};
</script>
<style lang="stylus" scoped>
// @import '../../assets/font/iconfont.css';
div 
  display: flex;
  flex-direction: column;
  align-items: center;

  .pop 
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
  

  >>> img  
    margin-top: 0.8rem;
    height: 2.4rem;
    width: 2.4rem;
    overflow: hidden;
  

  .box 
    margin-top: 1.8rem;

    .button 
      height: 1.1rem;
      width: 6.5rem;
      margin-bottom: 0.6rem;
      font-size: 0.3rem;

  .form 
    margin-top: 0.5rem;
    width: 85%;

    div 
      width: 100%;
      border-bottom: 0.01rem #ccc solid;
      position: relative;

      .inp 
        width: 100%;
        font-size: 0.26rem;
        margin-bottom: 0.25rem;
        margin-top: 0.5rem;
      

      .forgetpass 
        position: absolute;
        right: 0;
        bottom: 0.1rem;
        font-size .2rem
      

  .login-btn 
    height: 1rem;
    width: 6.5rem;
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
  

  .orther 
    width: 85%;
    font-size: 0.22rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    a 
      color: #333;
    

  .orther-login 
    height: 2.8rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    
    .line-text 
      font-size: 0.26rem;
      color: #ddd;
      padding: 0 0.4rem 0;
      line-height: 0.02rem;
      text-align: center;
      border-left: 2.5rem solid #ddd;
      border-right: 2.5rem solid #ddd;

    ul
      height 2rem
      width 100%
      font-size .26rem
      display flex
      flex-direction row
      justify-content center
      align-items  center
      a
        display flex
        flex-direction column
        align-items center
    .iconfont 
      height 1.2rem
      width 1.2rem
      font-size: 0.6rem;
      text-align center
      line-height 1.2rem
    .iconfont.icon-weixin1
      color green
    .iconfont.icon-QQ1
      color skyblue
    .iconfont.icon-weibo-
      color orange
    
  




</style>