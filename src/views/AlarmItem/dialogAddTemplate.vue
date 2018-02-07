<template>
  <el-dialog title="通知模板" :visible="visible" @close="closeDialog">
    <el-form :model="createMonitorForm">
      <h4>通用模板：</h4>
      <el-form-item label="" :label-width="formLabelWidth">
        <el-input placeholder="请填写标题（有标题的通知方式，使用此标题）" v-model="createMonitorForm.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="" :label-width="formLabelWidth">
        <el-input type="textarea" placeholder="请输入通知内容" v-model="createMonitorForm.content"
                  auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <el-form :model="createMonitorForm">
      <h4>邮件模板：</h4>
      <el-form-item label="" :label-width="formLabelWidth">
        <el-input placeholder="请填写标题（有标题的通知方式，使用此标题）" v-model="createMonitorForm.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="" :label-width="formLabelWidth">
        <el-input type="textarea" placeholder="请输入通知内容" v-model="createMonitorForm.content"
                  auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancelHandle">取消</el-button>
      <el-button type="primary" @click="okHandle">添加</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        createMonitorForm: {
          name: '',
          xx: '',
          content: ''
        },
        formLabelWidth: '0px'
      }
    },
    methods: {
      cancelHandle() {
        this.$emit('update:visible', false)
      },
      okHandle() {
        this.$emit('ok', this.createMonitorForm, true)
      },
      closeDialog() {
        this.$emit('update:visible', false)
      }
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
