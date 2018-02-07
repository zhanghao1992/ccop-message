<template>
  <el-container>
    <el-main>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="">
          <el-input v-model="formInline.user" placeholder=""></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">搜索</el-button>
          <el-button type="primary" @click="dialogCreateMacroVisible = true">创建宏</el-button>
        </el-form-item>
      </el-form>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="宏名称"
          width="">
        </el-table-column>
        <el-table-column
          prop="name"
          label="宏描述"
          width="">
        </el-table-column>
        <el-table-column
          prop=""
          label="宏内容">
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

      <el-dialog title="创建宏" :visible.sync="dialogCreateMacroVisible">
        <el-form :model="createMacroForm">
          <el-form-item label="名称:" :label-width="formLabelWidth">
            <el-input placeholder="请输入宏名称" v-model="createMacroForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="宏描述:" :label-width="formLabelWidth">
            <el-input type="textarea" placeholder="请输入宏描述" :autosize="{ minRows: 2}" v-model="createMacroForm.xx"
                      auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="宏内容:" :label-width="formLabelWidth">
            <el-input type="textarea" placeholder="请输入宏内容" :autosize="{ minRows: 3}" v-model="createMacroForm.content"
                      auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogCreateMacroVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogCreateMacroVisible = false">创建</el-button>
        </div>
      </el-dialog>

      <el-dialog title="查看／修改宏" :visible.sync="dialogModifyMacroVisible">
        <el-form :model="ModifyMacroForm">
          <el-form-item label="名称:" :label-width="formLabelWidth">
            <el-input placeholder="请输入宏名称" v-model="ModifyMacroForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="宏描述:" :label-width="formLabelWidth">
            <el-input type="textarea" placeholder="请输入宏描述" :autosize="{ minRows: 2}" v-model="ModifyMacroForm.xx"
                      auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="宏内容:" :label-width="formLabelWidth">
            <el-input type="textarea" placeholder="请输入宏内容" :autosize="{ minRows: 3}"
                      v-model="ModifyMacroForm.content"
                      auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogModifyMacroVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogModifyMacroVisible = false">修改</el-button>
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
        formInline: {
          user: '',
          region: ''
        },
        page: {
          currentPage: 5,
          total: 100
        },
        dialogCreateMacroVisible: false,
        dialogModifyMacroVisible: false,
        createMacroForm: {
          name: '',
          xx: '',
          content: ''
        },
        ModifyMacroForm: {
          name: '',
          xx: '',
          content: ''
        },
        formLabelWidth: '60px'
      }
    },
    methods: {
      handleModify() {
        this.dialogModifyMacroVisible = true
      }
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
