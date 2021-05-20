<template>
  <div class="yslg-contentMain">
    <div class="header">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="作者：">
          <el-input size="small" v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="类型：">
          <el-select size="small" v-model="formInline.type" placeholder="请选择类型" @change="changeValue">
            <el-option v-for="item in typeList" :key="item.id" :label="item.typeName" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select size="small" v-model="formInline.status" placeholder="请选择状态" @change="changeStatus">
            <el-option v-for="item in statusList" :key="item.id" :label="item.status" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="tableClass">
      <el-table :data="tableData" style="width: 100%" height="90%">
        <el-table-column prop="type" label="类型" min-width="100" />
        <el-table-column prop="author" label="作者" min-width="100" />
        <el-table-column prop="title" label="标题" min-width="600" />
        <el-table-column prop="status" label="状态" />
        <el-table-column prop="createTime" label="创建时间" />
        <el-table-column fixed="right" label="操作" width="130">
          <template slot-scope="scope">
            <el-button @click="view(scope.row.id)" type="text" size="small">查看</el-button>
            <el-button @click="edit(scope.row.id)" type="text" size="small">编辑</el-button>
            <el-button @click="deleteArticle(scope.row.id)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :page-sizes="[10, 20, 50, 100]" :page-size="10" layout="total, sizes, prev, pager, next, jumper"
          :total=this.total>
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import api from "../../router/api.js";

  export default {
    name: "article-newlist",
    data() {
      return {
        tableData: [],
        total: 0,
        typeList: [],
        statusList: [{
          id: 0,
          status: "正常"
        }, {
          id: 1,
          status: "删除"
        }],
        formInline: {
          user: '',
          type: '',
          status: ''
        }
      }
    },
    mounted() {
      this.getArticles()
      this.getTypeList()
    },
    methods: {
      getTypeList() {
        let url = api.API + "/type/getList";
        axios.get(url).then((response) => {
          this.typeList = response.data.result
        })
      },
      onSubmit() {
        this.getArticles()
      },
      getArticles() {
        let url = api.API + "/articles/getList";
        axios.post(url, {
          pageNo: this.pageNo,
          pageSize: this.pageSize,
          user: this.formInline.user,
          type: this.formInline.type,
          status: this.formInline.status
        }).then((response) => {
          if (response.data.code === 200) {
            this.tableData = response.data.result.list
            this.total = response.data.result.total
          } else {
            this.$message.error(response.data.message)
          }
        })
      },
      handleSizeChange(val) {
        this.pageSize = val
        this.getArticles()
      },
      handleCurrentChange(val) {
        this.pageNo = val
        this.getArticles()
      },
      changeValue(e) {
        this.formInline.type = e
      },
      changeStatus(e) {
        this.formInline.status = e
      },
      view(id) {
        console.log(id)
      },
      edit(id) {
        console.log(id)
      },
      deleteArticle(id) {
        let url = api.API + "/articles/delete/" + id;
        axios.get(url).then((response) => {
          if (response.data.code === 200) {
            this.$message.success("删除成功")
          } else {
            this.$message.error(response.data.message)
          }
        })
        this.getArticles()
      }
    },
  }
</script>

<style scoped>
  .header {
    height: 10%;
  }

  .tableClass {
    height: 90%;
  }

  .tableClass .block {
    height: 5%;
  }
</style>