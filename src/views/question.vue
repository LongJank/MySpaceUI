<template>
    <div class="yslg-contentMain">
        <el-form ref="form" :model="form" label-width="80px" class="ysl-questionForm">
            <el-form-item label="类型">
                <el-select v-model="form.region" placeholder="请选择类型">
                <el-option label="Java" value="1"></el-option>
                <el-option label="HTML" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="问题">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="答案">
                <el-input type="textarea" v-model="form.desc"></el-input>
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
          region: '',
          desc: ''
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