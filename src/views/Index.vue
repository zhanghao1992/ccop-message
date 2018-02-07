<template>
  <el-main>
    <el-row>
      <el-col :span="4">
        <tab></tab>
      </el-col>
      <el-col :span="20">
        <!--<transition name="fade" mode="out-in">-->
        <router-view/>
        <!--</transition>-->
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
  import Tab from '@/components/base/Tab/Tab'

  export default {
    data() {
      return {}
    },
    methods: {},
    components: {
      Tab
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to,
  .fade-leave {
    opacity: 1;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: .3s;
  }

  .right-enter {
    transform: translate3d(-100%, 0, 0);
  }

  .right-leave-to {
    transform: translate3d(100%, 0, 0);
  }

  .right-enter-to,
  .right-leave {
    transform: translate3d(0, 0, 0);
  }

  .right-enter-active,
  .right-leave-active {
    transition: .5s;
  }
</style>
