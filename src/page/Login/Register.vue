<template>
  <div class="register">
    <van-nav-bar
      title="注册"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="registerform">
      <div class="inp">
        <input type="text" placeholder="请输入手机号" class="phoneNum" maxlength="11"  v-model="phoneNum" @blur="useNameBlur" @input="useNameChange">
        <span v-if="phoneErr">{{phoneErrMsg}}</span>
      </div>
      <div class="inp">
        <input type="text" placeholder="请输入验证码" maxlength="6">
        <van-button plain round type="warning" class="get" size="mini">获取验证码</van-button>
      </div>
      <div class="inp">
        <input type="password" placeholder="password" maxlength="12" v-model="password" @input="passwordChange">
        <span v-if="passErr">{{passErrMsg}}</span>
      </div>
    
    
    <div class="read">
      <van-checkbox class="check" icon-size=".25rem" v-model="checked"></van-checkbox><p>已阅读并同意<span>《用户服务协议》</span></p>
    </div>
     <van-button :disabled="disable" round type="warning" class="login-btn">注册</van-button>
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
      disable:true,
      phoneErr:null,
      passErr:null,
      phoneNum:'',
      password:'',
      phoneErrMsg:'',
      passErrMsg:''
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
    useNameChange(){
      if(this.phoneNum.length===11){
        
        //正则判断
        if(/^1[3578]\d{9}$/.test(this.phoneNum)){
          this.phoneErr = false
        }else{
          this.phoneErr=true
          this.phoneErrMsg='请输入正确手机号'
        }
        
      }else if(this.phoneNum.length===0){
        this.phoneErr=true
        this.phoneErrMsg='手机号不能为空'
      }else{
        this.phoneErr=true
        this.phoneErrMsg='请输入11位手机号'
      }
    },
    useNameBlur(){
      if(!this.phoneErr){
        //如果手机号不为空，且通过正则判断，则发起axios请求检测手机号是否存在
        console.log('axios请求')
      }
      
    },
    passwordChange(){
      console.log('改变')
      let count = 0;
      if(this.password.length>=6){
        if(/\d+/.test(this.password)&&/[a-zA-Z]+/.test(this.password)){
          this.passErr=false
          
        }else{
          this.passErr=true
          this.passErrMsg='必须包含数字和字母'
        }
      }else{
        this.passErr=true
        this.passErrMsg='请输入6位以上密码'
      }
    }
  },
  updated(){
    if(this.passErr===false&&this.phoneErr===false){
      this.disable=false
    }
  }
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
        >span 
          position absolute
          left 4rem
          top .6rem
          color red
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
          color blue
      .login-btn
        margin-top .6rem
        height 1.1rem
        width 100%
    

         
</style>
