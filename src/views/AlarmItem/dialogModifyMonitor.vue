<template>
  <div></div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<template>
  <el-dialog title="查看/修改详情" :visible="visible" @close="closeDialog">
    <el-form :model="createMonitorForm">
      <el-form-item label="序号:" :label-width="formLabelWidth">
        <el-input placeholder="请输入序号" v-model="createMonitorForm.name" auto-complete="off" disabled></el-input>
      </el-form-item>
      <el-form-item label="名称:" :label-width="formLabelWidth">
        <el-input placeholder="请输入名称" v-model="createMonitorForm.name" auto-complete="off" disabled></el-input>
      </el-form-item>
      <el-form-item label="所属项目:" :label-width="formLabelWidth">
        <el-select v-model="createMonitorForm.name" placeholder="请选择所属项目" auto-complete="off" style="width: 100%;"
                   disabled>
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
        <el-select v-model="createMonitorForm.name" placeholder="请选报警类型" auto-complete="off" style="width: 100%;"
                   disabled>
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="报警级别:" :label-width="formLabelWidth">
        <el-select v-model="createMonitorForm.name" placeholder="请选择报警级别" auto-complete="off" style="width: 100%;"
                   disabled>
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="报警历史:" :label-width="formLabelWidth">
        <vue-scrollbar classes="my-scrollbar" ref="Scrollbar" style="height: 260px;overflow: hidden;">
          <ul>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
          </ul>
        </vue-scrollbar>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancelHandle">取消</el-button>
      <el-button type="primary" @click="okHandle">修改</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import VueScrollbar from 'vue2-scrollbar'
  import 'vue2-scrollbar/dist/style/vue2-scrollbar.css'

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
        this.$emit('update:visible', false)
      },
      okHandle() {
        this.$emit('ok', this.createMonitorForm, true)
      },
      closeDialog() {
        this.$emit('update:visible', false)
      }
    },
    components: {
      VueScrollbar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
