<template>
    <div class="yslg-contentMain">
        <el-form ref="form" :model="form" label-width="80px" class="ysl-questionForm">
            <el-form-item label="类型">
                <el-select v-model="form.region" placeholder="请选择类型" @change="changeValue">
                <el-option v-for="item in typeList" :key="item.typeId" :label="item.typeName" :value="item.typeId"></el-option>
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
  import axios from "axios";

  export default {
    data() {
      return {
        typeList:[],
        form: {
          name: '',
          region: '',
          desc: ''
        }
      }
    },
    mounted(){
        let url = "http://localhost:8999/type/getTypeList";
        console.log(url)
        axios.get(url).then((reponse) =>{
          this.typeList = reponse.data.result
        })
    },
    methods: {
      changeValue(e){
        this.form.region = e
      },
      onSubmit() {
        let url = "http://localhost:8999/question/addQuestion";
        axios.post(url,{
          questionName:this.form.name,
          answer:this.form.desc,
          typeId:this.form.region
        })
        .then((response) => {
          if (response.data.errorCode == 200){
            this.$message.success('添加成功')
            this.form.name = ''
            this.form.desc = ''
            this.form.region = ''
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