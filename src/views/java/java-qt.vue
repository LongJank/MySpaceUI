<template>
  <div class="content">
    <div class="infinite-list-wrapper">
      <ul class="list"
          v-infinite-scroll="load"
          infinite-scroll-disabled="disabled">
        <li v-for="i in count" class="liList" v-bind:key="i">{{ i }}</li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 10,
      loading: false
    }
  },
  computed: {
    noMore() {
      return this.count >= 20
    },
    disabled() {
      return this.loading || this.noMore
    }
  },
  methods: {
    load() {
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
.content{
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  color: #333;
}
.liList {
  width: 100%;
  height: 100px;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
  /*边框合并*/
  margin: 0 0 -1px -1px;
  position: relative;
  z-index: 0;

}
</style>