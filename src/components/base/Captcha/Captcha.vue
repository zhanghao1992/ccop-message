<template>
  <div class="">
    <img class="captcha" :src="src" @click="switchCaptcha">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        src: ''
      }
    },
    created() {
      this.switchCaptcha()
    },
    mounted() {
      setTimeout(() => {
        this.$http.get('/node/test').then((json) => {})
        this.getPublicKey()
      }, 80)
    },
    methods: {
      switchCaptcha() {
        this.src = `/node_common/captcha?${new Date().getTime()}`
      },
      getPublicKey() {
        this.$http.get('/node_common/getPuplicKey').then((json) => {
          const res = json.data
          if (res.code === 0) {
            if (res.response.puplicKey === '') {
              console.log(res)
              // window.location.reload()
            } else {
              this.$emit('setPublicKeyHandle', res.response.puplicKey)
            }
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .captcha {
    width: 160px;
    height: 100%;
  }
</style>
