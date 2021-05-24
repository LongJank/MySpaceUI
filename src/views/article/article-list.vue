<template>
  <div class="yslg-contentMain">
    <div class="header">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="作者：">
          <el-input size="small" v-model="formInline.user" placeholder="作者"></el-input>
        </el-form-item>
        <el-form-item label="类型：">
          <el-select size="small" v-model="formInline.type" placeholder="请选择类型" @change="changeValue">
            <el-option key="" label="所有" value=""></el-option>
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
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <p v-if="scope.row.status === 0">正常</p>
            <p v-if="scope.row.status === 1">删除</p>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" />
        <el-table-column fixed="right" label="操作" width="130">
          <template slot-scope="scope">
            <el-button size="mini" type="success" icon="el-icon-reading" circle v-if="scope.row.status === 0"
              @click="view(scope.row.id)"></el-button>
            <el-button size="mini" type="primary" icon="el-icon-edit-outline" circle v-if="scope.row.status === 1"
              @click="edit(scope.row.id)"></el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete" circle v-if="scope.row.status === 0"
              @click="deleteOrRestoreArticle(scope.row)"></el-button>
            <el-button size="mini" type="warning" icon="el-icon-refresh-right" circle v-if="scope.row.status === 1"
              @click="deleteOrRestoreArticle(scope.row)"></el-button>
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
          status: "所有"
        }, {
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
        this.$router.push({
          path: '/article/view',
          query: {
            id: id
          }
        })
      },
      edit(id) {
        console.log(id)
      },
      deleteOrRestoreArticle(row) {
        let status = row.status === 0 ? 1 : 0;
        let url = api.API + "/articles/deleteOrRestore/" + row.id + "/" + status;
        axios.get(url).then((response) => {
          if (response.data.code === 200) {
            this.$message.success("操作成功")
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