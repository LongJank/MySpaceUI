<template>
  <div class="container">
    <div class="content">
      <div class="markdown-body">
        <Docu/>
      </div>
    </div>
  </div>
</template>

<script>
import Docu from './docu/README.md'
import 'highlight.js/styles/github.css'
// 其他元素使用 github 的样式
import 'github-markdown-css'

export default {
  components: {
    Docu
  }
}
</script>

<style>
.container {
  height: 100%;
  background: #f1f1f1;
}

.content {
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px 50px;
  background: #fff;
}
</style>
