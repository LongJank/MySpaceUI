<template>
  <div class="ysl-home">
    <div class="long-home">
      <div class = "login-title">登录</div>
      <div class="login">
        <el-input placeholder="请输入用户名" v-model="username" clearable style="width:80%">
          <i slot="prefix" class="el-input__icon el-icon-user"></i>
        </el-input>
        <el-input placeholder="请输入密码" v-model="password" show-password style="width:80%;margin-top:20px">
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-input>
        <el-button @click="goHome" type="primary" style="width:80%;margin-bottom:30px;margin-top:20px">登录</el-button>
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
  overflow-y: scroll;
}
.long-home {
  background: #ffffff;
  box-shadow: 0px 2px 16px 0px rgba(0, 86, 144, 0.12);
  border-radius: 4px;
  text-align: center;
  width: 20%;
  height: 50%;
  margin: 0 auto;
  margin-top: 200px;
  padding-top: 3%;
}
.login {
  margin-top: 30%;
}
</style>