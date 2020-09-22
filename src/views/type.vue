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
import axios from "axios";
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
        let url = "http://localhost:8999/type/addType";
        axios.post(url,{
          typeName:this.form.name
        })
        .then((response) => {
          if (response.data.errorCode == 200){
            this.$message.success('添加成功')
            this.form.name = ''
          }else {
            this.$message.error(response.data.message)
          }
        });
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