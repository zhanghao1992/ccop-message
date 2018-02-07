<template>
  <el-container>
    <el-main>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="">
          <el-input v-model="formInline.user" placeholder=""></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">名称搜索</el-button>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="formInline.region" placeholder="项目搜索">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">项目搜索</el-button>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="formInline.region" placeholder="级别搜索">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">级别搜索</el-button>
        </el-form-item>
      </el-form>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="序号">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称">
        </el-table-column>
        <el-table-column
          prop="address"
          label="通知人">
        </el-table-column>
        <el-table-column
          prop="date"
          label="报警时间">
        </el-table-column>
        <el-table-column
          prop="date"
          label="报警类型">
        </el-table-column>
        <el-table-column
          prop="date"
          label="报警状态">
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
        }
      }
    },
    methods: {},
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
