<template>
  <div class="ysl-home">
    <div class="long-home">
      <div>登录</div>
      <div class="login">
        <el-input placeholder="请输入用户名" v-model="username" clearable>
          <i slot="prefix" class="el-input__icon el-icon-user"></i>
        </el-input>
        <el-input placeholder="请输入密码" v-model="password" show-password>
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-input>
        <el-button @click="goHome" type="primary" style="width:100%;margin-bottom:30px;">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      password1: "",
    };
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
  },
};
</script>
<style scoped>
.ysl-home {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 30px;
  overflow-y:scroll;
}
.long-home {
  border-radius: 1%;
  text-align: center;
  width: 20%;
  height: 50%;
  margin: 0 auto;
  margin-top: 200px;
}
.login {
  margin-top: 30%;
}
</style>