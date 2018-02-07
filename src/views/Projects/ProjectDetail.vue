<template>
  <el-container>
    <el-main>
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
          prop="name"
          label="报警状态"
          width="">
        </el-table-column>
        <el-table-column
          prop="name"
          label="报警类型"
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
      <el-pagination
        background
        style="margin-top: 20px;"
        :current-page.sync="page.currentPage"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="page.total">
      </el-pagination>
      <dialog-modify-monitor :visible="dialogModifyMonitorVisible" @close="dialogModifyMonitorVisible=false"
                             @ok="modifyMonitor"></dialog-modify-monitor>
    </el-main>
  </el-container>
</template>

<script>
  import dialogModifyMonitor from '@/views/AlarmItem/dialogModifyMonitor.vue'

  export default {
    data() {
      return {
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            value: true
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            value: true
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            value: true
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            value: true
          }
        ],
        formInline: {
          user: '',
          region: ''
        },
        page: {
          currentPage: 5,
          total: 100
        },
        dialogModifyMonitorVisible: false,
        dialogNotificationTemplateVisible: true
      }
    },
    methods: {
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
      deleteItem(row) {
      }
    },
    components: {
      dialogModifyMonitor
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
