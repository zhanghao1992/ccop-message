<template>
  <el-container>
    <el-main>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="">
          <el-select v-model="formInline.region" placeholder="项目搜索">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">搜索</el-button>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="formInline.user" placeholder=""></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">搜索</el-button>
          <el-button type="primary" @click="dialogAddMonitorVisible=true">添加新监控</el-button>
        </el-form-item>
      </el-form>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="序号"
          width="">
        </el-table-column>
        <el-table-column
          prop="date"
          label="名称"
          width="">
        </el-table-column>
        <el-table-column
          prop="date"
          label="通知人"
          width="">
        </el-table-column>
        <el-table-column
          prop=""
          label="通知方式"
          width="">
          <el-table-column
            prop=""
            label="短信"
            width="">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.value"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="开"
                inactive-text="关"
                @change="switchChange(scope.row)">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column
            prop=""
            label="微信"
            width="">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.value"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="开"
                inactive-text="关"
                @change="switchChange(scope.row)">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column
            prop=""
            label="邮箱"
            width="">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.value"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="开"
                inactive-text="关"
                @change="switchChange(scope.row)">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column
            prop=""
            label="钉钉"
            width="">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.value"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="开"
                inactive-text="关"
                @change="switchChange(scope.row)">
              </el-switch>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop=""
          label="通知模板"
          width="">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="addTemplateShow(scope.$index, scope.row)">添加
            </el-button>
            <!--<el-button-->
            <!--size="mini"-->
            <!--type="danger"-->
            <!--@click="showDialogModifyMonitor(scope.$index, scope.row)">修改-->
            <!--</el-button>-->
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="报警方式"
          width="">
        </el-table-column>
        <el-table-column
          prop="name"
          label="级别"
          width="">
        </el-table-column>
        <el-table-column
          prop=""
          label="详情">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="showDialogModifyMonitor(scope.$index, scope.row)">查看/修改
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop=""
          label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="deleteItem(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination id="page"
                     background
                     style="margin-top: 20px;"
                     :current-page.sync="page.currentPage"
                     :page-size="10"
                     layout="prev, pager, next, jumper"
                     :total="page.total">
      </el-pagination>
      <dialog-add-monitor :visible.sync="dialogAddMonitorVisible" @ok="addMonitor"></dialog-add-monitor>
      <dialog-modify-monitor :visible.sync="dialogModifyMonitorVisible" @ok="modifyMonitor"></dialog-modify-monitor>
      <dialog-add-template :visible.sync="dialogAddTemplateVisible" @ok="modifyTemplate"></dialog-add-template>
    </el-main>
  </el-container>
</template>

<script>
  import dialogAddMonitor from '@/views/AlarmItem/dialogAddMonitor.vue'
  import dialogModifyMonitor from '@/views/AlarmItem/dialogModifyMonitor.vue'
  import dialogAddTemplate from '@/views/AlarmItem/dialogAddTemplate.vue'
  import data from '@/data.js'
  //  import $ from 'jquery'

  export default {
    data() {
      return {
        tableData: data,
        formInline: {
          user: '',
          region: ''
        },
        page: {
          currentPage: 5,
          total: 100
        },
        dialogAddMonitorVisible: false,
        dialogModifyMonitorVisible: false,
        dialogAddTemplateVisible: false
      }
    },
    mounted() {
      // console.log($('#page'))
    },
    methods: {
      addMonitor(form) {
        console.log(form)
        this.dialogAddMonitorVisible = false
      },
      switchChange(row) {
      },
      showDialogModifyMonitor(row) {
        console.log(row)
        this.dialogModifyMonitorVisible = true
      },
      modifyMonitor(form) {
        console.log(form)
        this.dialogModifyMonitorVisible = false
      },
      addTemplateShow(row) {
        this.dialogAddTemplateVisible = true
      },
      modifyTemplate(from) {
      },
      deleteItem(row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
//          this.$message({
//            type: 'info',
//            message: '已取消删除'
//          })
        })
      }
    },
    components: {
      dialogAddMonitor,
      dialogModifyMonitor,
      dialogAddTemplate
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-table__header .has-gutter .el-table_1_column_4_column_8 {
    border-right: 1px solid #ebeef5 !important;
  }
</style>
