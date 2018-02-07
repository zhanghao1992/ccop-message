<template>
  <el-main>
    <el-row style="margin:60px;">
      <el-col :span="6" :offset="5">
        <img src="../assets/images/login_banner.jpg" alt="">
      </el-col>
      <el-col :span="8">
        <el-form ref="loginForm" :model="loginForm" :rules="rules" label-width="100px" style="margin:40px;">
          <el-form-item label="用户名:" prop="name">
            <el-input ref="name" v-model="loginForm.name" placeholder="请输入登录名"></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入登录密码"></el-input>
          </el-form-item>
          <el-form-item class="captchaBox" label="图形验证码:" prop="captcha">
            <el-input v-model="loginForm.captcha" placeholder="请输入图形验证码"></el-input>
            <captcha ref="captcha" class="captcha" @setPublicKeyHandle="setPublicKeyHandle"></captcha>
          </el-form-item>
          <el-form-item class="messageBox" label="短信验证码:" prop="message">
            <el-input v-model="loginForm.message" placeholder="请输入短信验证码"></el-input>
            <div class="message">发送短信验证码</div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('loginForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-main>
</template>

<script type="text/ecmascript-6">
  //  import vueValidate from './vueValidate'
  import Captcha from '@/components/base/Captcha/Captcha'
  import {
    mapGetters, mapActions, mapMutations
  } from 'vuex'
  import jsencrypt from 'jsencrypt'

  export default {
    data() {
      return {
        loginForm: {
          name: '',
          password: '',
          captcha: '',
          encryptedCaptcha: '',
          message: ''
        },
        rules: {
          name: [
            {
              required: true, message: '输入登录名', trigger: 'blur'
            },
            {
              required: true, message: '输入登录名', trigger: 'blur'
              // min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'
            }
          ],
          password: [
            {
              required: true, message: '输入密码', trigger: 'blur'
            }
//            {validator: vueValidate.validatePass, trigger: 'blur'}
//          {pattern: /^1[34578]\d{9}$/, message: '目前只支持中国大陆的手机号码', trigger: 'blur'}
          ],
          captcha: [
            {
              required: true, message: '输入图形验证码', trigger: 'blur'
            }
          ],
          message: [
            {
              // required: true, message: '输入短信验证码', trigger: 'blur'
            }
          ]
        },
        publicKey: ''
      }
    },
    computed: {
      ...mapGetters(['captcha'])
    },
    methods: {
      onSubmit() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            const encrypt = new jsencrypt.JSEncrypt()
            // 图形验证码明文
            const captchaValue = this.loginForm.captcha
            //  密码加密传输
            encrypt.setPublicKey(this.publicKey)
            this.loginForm.encryptedCaptcha = encrypt.encrypt(captchaValue)
            this.$http.post('/node/login', {
              name: this.loginForm.name,
              password: this.loginForm.password,
              encryptedCaptcha: this.loginForm.encryptedCaptcha
            }).then(json => {
              const res = json.data
              if (res.code === 0) {
//                const WL = window.localStorage
//                WL.setItem('userInfo', JSON.stringify(this.ruleForm))
//                this.setUser(res.)
                this.$router.push('/index/panel')
              } else {
                this.$refs.captcha.switchCaptcha()
                this.$notify.error({
                  title: '错误',
                  message: res.msg
                })
              }
            })
          } else {
            return false
          }
        })
      },
      setPublicKeyHandle(key) {
        this.publicKey = key
      },
      // 同步操作store
      ...mapMutations(['SET_USER', 'EXIT']),
      // 异步操作store
      ...mapActions(['setUser', 'exit'])
    },
    components: {
      Captcha
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
    line-height: 100%;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  body {
    background-color: #aaa;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .captchaBox, .messageBox {
    position: relative;
  }

  .captcha, .message {
    position: absolute;
    right: 3px;
    top: 0;
    height: 100%;
    padding: 2px;
    box-sizing: border-box;
  }

  .message {
    border-radius: 0 4px 4px 0;
    background-color: #409EFF;
    right: 0;
    color: #fff;
    width: 130px;
    text-align: center;
  }
</style>
