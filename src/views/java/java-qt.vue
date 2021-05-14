<template>
  <div class="yslg-contentMain">
    <div class="infinite-list leftContent">
      <ul class="list"
          v-infinite-scroll="load"
          infinite-scroll-disabled="disabled">
        <li v-for="item in articlesList" class="liList" v-bind:key="item.id" @click="liClick(item)">
          <div class="header">
            {{ item.title.length > 26 ? item.title.slice(0, 26) + "..." : item.title }}
          </div>
          <div class="mid">
            <el-row>
              <el-col :span="8">{{ item.type }}</el-col>
              <el-col :span="8">{{ item.author }}</el-col>
              <el-col :span="8">{{ item.createTime }}</el-col>
            </el-row>
          </div>
        </li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
    <div class="rightContent">
      <h2>{{ this.right.title }}</h2>
      <el-image
          style="width: 100%; height: 200px"
          :src="this.right.picUrl">
      </el-image>
      <div v-html="this.right.content" class="markdown-body"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import api from "../../router/api.js";
import marked from 'marked';
import 'github-markdown-css'

export default {
  data() {
    return {
      count: 10,
      loading: false,
      articlesList: [],
      pageNo: 1,
      pageSize: 10,
      total: '',
      right: {
        title: '',
        content: '',
        picUrl: ''
      }
    }
  },
  computed: {
    noMore() {
      return this.pageSize >= this.total
    },
    disabled() {
      return this.loading || this.noMore
    }
  },
  mounted() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      let url = api.API + "/articles/getList";
      axios.post(url, {
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }).then((response) => {
        if (response.data.code === 200) {
          this.articlesList = response.data.result.list
          this.total = response.data.result.total
        } else {
          this.$message.error(response.data.message)
        }
      })
    },
    load() {
      this.loading = true
      setTimeout(() => {
        this.pageSize += 2
        this.getArticles();
        this.loading = false
      }, 1000)
    },
    liClick(item) {
      this.right.title = item.title
      this.right.content = marked(item.content)
      this.right.picUrl = item.picUrl
    }
  }
}
</script>

<style scoped>
.leftContent {
  float: left;
  width: 28.2%;
  height: 99%;
  overflow-y: scroll;
}

.leftContent::-webkit-scrollbar, .rightContent::-webkit-scrollbar {
  display: none; /*隐藏滚动条*/
}

.liList {
  width: 100%;
  height: 80px;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
  margin: 0 0 -1px -1px;
  position: relative;
  z-index: 0;
  padding-top: 15px;
}

.header:hover {
  color: #0099ff;
}

.mid {
  margin-top: 10px;
  font-size: 12px;
  color: #C2C2C2;
}

.rightContent {
  float: right;
  width: 71.8%;
  height: 99%;
  overflow-y: scroll;
  padding: 10px;
}
</style>