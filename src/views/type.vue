<template>
    <div class="yslg-contentMain">
        <el-form ref="form" :model="form" label-width="80px" class="ysl-questionForm">
            <el-form-item label="分类名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">添加</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style scoped>
/* .ysl-questionForm  .el-form-item{
    width: 50%;
} */
.ysl-questionForm 
    .el-input,
    .el-select,
    .el-textarea {
        width: 410px;
    }
</style>