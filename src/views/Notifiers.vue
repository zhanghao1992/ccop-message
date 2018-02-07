<template>
  <el-container>
    <el-main>
      <el-button type="primary" style="margin-bottom: 22px;" @click="dialogAddNotifierVisible = true">添加通知人</el-button>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="通知人姓名"
          width="">
        </el-table-column>
        <el-table-column
          prop="name"
          label="手机"
          width="">
        </el-table-column>
        <el-table-column
          prop="name"
          label="邮箱"
          width="">
        </el-table-column>
        <el-table-column
          prop="name"
          label="微信"
          width="">
        </el-table-column>
        <el-table-column
          prop=""
          label="查看/修改">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleModify(scope.$index, scope.row)">查看/修改
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

      <el-dialog title="添加通知人" :visible.sync="dialogAddNotifierVisible">
        <el-form :model="addNotiferForm">
          <el-form-item label="通知人名称:" :label-width="formLabelWidth">
            <el-input placeholder="请输入宏名称" v-model="addNotiferForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话:" :label-width="formLabelWidth">
            <el-input placeholder="请输入电话" v-model="addNotiferForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱:" :label-width="formLabelWidth">
            <el-input placeholder="请输入邮箱" v-model="addNotiferForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="微信:" :label-width="formLabelWidth">
            <el-input placeholder="请输入微信" v-model="addNotiferForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="钉钉:" :label-width="formLabelWidth">
            <el-input placeholder="请输入钉钉" v-model="addNotiferForm.name" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogAddNotifierVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogAddNotifierVisible = false">创建</el-button>
        </div>
      </el-dialog>

      <el-dialog title="查看／修改通知人" :visible.sync="dialogModifyNotiferVisible">
        <el-form :model="ModifyNotifer">
          <el-form-item label="通知人名称:" :label-width="formLabelWidth">
            <el-input placeholder="请输入宏名称" v-model="ModifyNotifer.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话:" :label-width="formLabelWidth">
            <el-input placeholder="请输入电话" v-model="ModifyNotifer.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱:" :label-width="formLabelWidth">
            <el-input placeholder="请输入邮箱" v-model="ModifyNotifer.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="微信:" :label-width="formLabelWidth">
            <el-input placeholder="请输入微信" v-model="ModifyNotifer.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="钉钉:" :label-width="formLabelWidth">
            <el-input placeholder="请输入钉钉" v-model="ModifyNotifer.name" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogModifyNotiferVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogModifyNotiferVisible = false">修改</el-button>
        </div>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
  import data from '@/data.js'

  export default {
    data() {
      return {
        tableData: data,
        page: {
          currentPage: 5,
          total: 100
        },
        dialogAddNotifierVisible: false,
        dialogModifyNotiferVisible: false,
        addNotiferForm: {
          name: '',
          xx: '',
          content: ''
        },
        ModifyNotifer: {
          name: '',
          xx: '',
          content: ''
        },
        formLabelWidth: '90px'
      }
    },
    methods: {
      handleModify() {
        this.dialogModifyNotiferVisible = true
      }
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
