<template>
  <el-row :gutter="12">
    <el-col :span="3" v-for="item in list" :key="item.id">
      <el-card class="box-card" shadow="hover" @click.native = "checkDetails(item.id)">
        <div class="clearfix">
          <span>{{ item.style }}</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style>
.box-card {
  width: 200px;
  margin-bottom: 10px;
}
</style>

<script>
import axios from "axios";
import api from "../../router/api.js";

export default {
  data() {
    return {
      list: [],
      currentDate: new Date()
    };
  },
  mounted() {
    let url = api.API + "/java/getList";
    axios.get(url).then((reponse) => {
      this.list = reponse.data.result
    })
  },
  methods: {
    checkDetails(id) {
      console.log(id)
    }
  }
}
</script>