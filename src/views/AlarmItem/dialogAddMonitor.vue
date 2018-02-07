<template>
  <el-dialog title="添加新监控" :visible="visible" @close="closeDialog">
    <el-form :model="createMonitorForm">
      <el-form-item label="序号:" :label-width="formLabelWidth">
        <el-input placeholder="请输入序号" v-model="createMonitorForm.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="名称:" :label-width="formLabelWidth">
        <el-input placeholder="请输入名称" v-model="createMonitorForm.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="所属项目:" :label-width="formLabelWidth">
        <el-select v-model="createMonitorForm.name" placeholder="请选择所属项目" auto-complete="off" style="width: 100%;">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="通知人:" :label-width="formLabelWidth">
        <el-select v-model="createMonitorForm.name" placeholder="请选择通知人" auto-complete="off" style="width: 100%;">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="报警类型:" :label-width="formLabelWidth">
        <el-select v-model="createMonitorForm.name" placeholder="请选报警类型" auto-complete="off" style="width: 100%;">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="报警级别:" :label-width="formLabelWidth">
        <el-select v-model="createMonitorForm.name" placeholder="请选择报警级别" auto-complete="off" style="width: 100%;">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="通知内容:" :label-width="formLabelWidth">
        <el-input type="textarea" placeholder="请输入通知内容" :autosize="{ minRows: 3}" v-model="createMonitorForm.content"
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
        formLabelWidth: '100px'
      }
    },
    methods: {
      cancelHandle() {
        // this.$emit('close', false)
        this.$emit('update:visible', false)
      },
      okHandle() {
        this.$emit('ok', this.createMonitorForm, true)
      },
      closeDialog() {
        // this.$emit('close', false)
        this.$emit('update:visible', false)
        // this.visible = false
      }
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
