<template>
  <div class="yslg-contentMain">
    <el-form ref="form" :model="form" label-width="80px" class="ysl-questionForm">
      <el-form-item label="类型">
        <el-select v-model="form.type" placeholder="请选择类型" @change="changeValue">
          <el-option v-for="item in typeList" :key="item.id" :label="item.typeName" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="图片url">
        <el-input v-model="form.pic"></el-input>
      </el-form-item>
      <el-form-item label="文章">
        <mavon-editor v-model="form.content" :toolbars="toolbars" style=""/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from "axios";
import api from "../router/api.js";

export default {
  data() {
    return {
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        mark: true, // 标记
        superscript: true, // 上角标
        quote: true, // 引用
        ol: true, // 有序列表
        ink: true, // 链接
        imagelink: true, // 图片链接
        help: true, // 帮助
        code: true, // code
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        /* 1.3.5 */
        undo: true, // 上一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true // 导航目录
      },
      typeList: [],
      form: {
        type: '',
        title: '',
        pic: '',
        content: ''
      }
    }
  },
  mounted() {
    let url = api.API + "/type/getList";
    axios.get(url).then((response) => {
      this.typeList = response.data.result
    })
  },
  methods: {
    changeValue(e) {
      this.form.type = e
    },
    onSubmit() {
      let url = api.API + "/articles/create";
      axios.post(url, {
        type: this.form.type,
        title: this.form.title,
        picUrl: this.form.pic,
        content: this.form.content
      })
          .then((response) => {
            if (response.data.code === 200) {
              this.$message.success('添加成功')
              this.form.type = ''
              this.form.title = ''
              this.form.pic = ''
              this.form.content = ''
            } else {
              this.$message.error(response.data.message)
            }
          });
    }
  }
}
</script>
<style scoped>
.ysl-questionForm .el-input,
.el-select,
.el-textarea {
  width: 410px;
}
</style>