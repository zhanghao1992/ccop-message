<template>
  <div id="app">
    <el-container>
      <el-header>
        中棋监控平台
        <div class="loginOut" v-if="user">
          <span>管理员：{{user.username}}</span>
          <a href="javascript:void(0)" @click="exitHandle">退出</a>
        </div>
      </el-header>
      <router-view/>
    </el-container>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'app',
    computed: {
      ...mapGetters(['user'])
    },
    methods: {
      exitHandle() {
        this.exit()
        this.$http.post('/node_common/exit').then((json) => {
          const res = json.data
          if (res.code === 0) {
            this.$router.push('/')
          }
        })
      },
      ...mapActions(['exit'])
    }
  }
</script>

<style lang="scss">
  html {
    min-height: 100%;
  }

  body {
    height: 100%;
    /*background-color: #e4e4e4;*/
  }

  /*头部样式*/
  .el-header {
    background-color: rgb(48, 65, 86);
    color: #fff;
    font: {
      size: 24px;
      weight: 700;
    }
    line-height: 60px;
    padding-left: 80px;
    position: relative;
  }

  /*表格文字居中*/
  .el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell {
    text-align: center;
  }

  /*表格行高度，默认小switch显示不全*/
  .el-table .cell {
    line-height: 24px;
  }

  /*表格横向滚动条*/
  .el-table__body, .el-table__footer, .el-table__header {
    table-layout: auto !important;
  }

  .el-dialog__body {
    padding: 10px 20px;
  }

  .loginOut {
    position: absolute;
    right: 100px;
    top: 0;
    bottom: 0;
    line-height: 60px;
    font-size: 20px;
    font-weight: 400;
    a {
      margin-left: 30px;
      color: #fff;
      font-size: 16px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
