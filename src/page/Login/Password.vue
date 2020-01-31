<template>
  <!-- <div> -->
  <van-popup v-model="show" position="bottom" :style="{ height: '97%' }" class="pop">
      <!-- 表单 -->
      <img src="../../assets/img/login_logo.jpg" alt />
      <div class="form">
        <div>
          <input type="text" class="inp" placeholder="请输入手机号" maxlength="11"/>
        </div>
        <div>
          <input type="password" class="inp" placeholder="请输入密码" maxlength="12"/>
          <van-button plain round type="warning" class="forgetpass" size="mini">忘记密码</van-button>
        </div>
      </div>
      <van-button :disabled="disable" round type="primary" class="login-btn">登录</van-button>
      <div class="orther">
        <router-link to="">验证码登录</router-link>
        <router-link to="/register">新用户注册</router-link>
      </div>
      <!-- 其它方式登录 -->
      
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
      
    </van-popup>
  <!-- </div> -->


</template>
<script>
import { Popup } from "vant";
import { SubBus } from "../../components/MixinComponents";


export default {
  mixins:[SubBus],
  data() {
    return {
      show:false,
      disable: true
    }
  },
  components: {
    [Popup.name]: Popup
  },
  created(){
    this.bus.$on("showChange",(v)=>{
      this.show = v
    })
  },
  updated (){
    this.bus.$emit('showChange', this.show)
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/font/iconfont.css';
div 
  display: flex;
  flex-direction: column;
  align-items: center;
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