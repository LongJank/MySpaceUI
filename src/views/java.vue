<template>
  <el-row :gutter="12">
    <el-col :span="6" v-for="o in list" :key="o">
      <el-card class="box-card" shadow="hover" @click.native = "checkDetails(o.id)">
        <div slot="header" class="clearfix">
          <span>{{ o.style }}</span>
        </div>
        <div class="text item">
          {{ o.detailed }}
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style>
.text {
  font-size: 14px;
}

.box-card {
  width: 400px;
  height: 300px;
  margin-bottom: 10px;
}
</style>

<script>
import axios from "axios";
import api from "../router/api.js";

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