<template>
  <!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"-->
  <!--style="width: 100%;">-->
  <!--<el-menu-item index="1">-->
  <!--<router-link tag="div" :to="{ path: 'panel' }" active-class="tab-item-active">监控看板</router-link>-->
  <!--</el-menu-item>-->
  <!--<el-menu-item index="2">-->
  <!--<router-link tag="div" :to="{ path: 'alerm-item' }" active-class="tab-item-active">报警项列表</router-link>-->
  <!--</el-menu-item>-->
  <!--<el-menu-item index="3">-->
  <!--<router-link tag="div" :to="{ path: 'projects' }" active-class="tab-item-active">项目列表</router-link>-->
  <!--</el-menu-item>-->
  <!--<el-menu-item index="4">-->
  <!--<router-link tag="div" :to="{ path: 'nbaotifiers' }" active-class="tab-item-active">通知人列表</router-link>-->
  <!--</el-menu-item>-->
  <!--<el-menu-item index="5">-->
  <!--<router-link tag="div" :to="{ path: 'jhonhurisdiction' }" active-class="tab-item-active">权限列表</router-link>-->
  <!--</el-menu-item>-->
  <!--<el-menu-item index="6">-->
  <!--<router-link tag="div" :to="{ path: 'macro' }" active-class="tab-item-active">宏限列表</router-link>-->
  <!--</el-menu-item>-->
  <!--</el-menu>-->
  <el-main>
    <el-menu
      id="menu"
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      background-color="rgb(48, 65, 86)"
      text-color="#fff"
      active-text-color="rgb(64, 158, 255)">
      <el-menu-item v-for="item in tabMap" :index="item.index" :key="item.index">
        <router-link tag="div" :to="{ path: item.url }" active-class="tab-item-active" exact>
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </router-link>
      </el-menu-item>
    </el-menu>
  </el-main>
</template>

<script>
  export default {
    data() {
      return {
        tabMap: [
          {
            url: '/index/panel',
            index: '1',
            icon: 'el-icon-location',
            title: '监控看板'
          },
          {
            url: '/index/alerm-item',
            index: '2',
            icon: 'el-icon-warning',
            title: '报警项列表'
          },
          {
            url: '/index/projects',
            index: '3',
            icon: 'iconfont icon-Fill',
            title: '项目列表'
          },
          {
            url: '/index/notifiers',
            index: '4',
            icon: 'iconfont icon-tongzhilianxiren',
            title: '通知人列表'
          },
          {
            url: '/index/jhonhurisdiction',
            index: '5',
            icon: 'iconfont icon-permission',
            title: '权限列表'
          },
          {
            url: '/index/macro',
            index: '6',
            icon: 'iconfont icon-weibiaoti-',
            title: '宏列表'
          }
        ],
        activeIndex: '1'
      }
    },
    mounted() {
      this._setActiveIndex()
    },
    watch: {
      $route() {
        this._setActiveIndex()
      }
    },
    methods: {
      _setActiveIndex() {
        this.tabMap.forEach(it => {
          if (this.$route.path.indexOf(it.url) !== -1) {
            this.activeIndex = it.index
          }
        })
      }
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../../assets/css/iconfont.css";

  #menu {
    background-color: rgb(48, 65, 86) !important;
  }

  /*.tab-item-active {*/
  /*background-color: rgb(48, 65, 86) !important;*/
  /*}*/

  .el-menu-item:hover {
    background-color: rgb(38, 52, 69) !important;
  }
</style>
