<template>
  <div class="ysl-home">
    <div class="homeBox">
      <div class="long-img"></div>
      <div class="long-home">
        <div class="login-title">登录账号</div>
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
          <el-button @click="goHome" type="primary" style="width:80%;margin-top:30px">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
  import api from "../router/api.js";
  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      goHome() {
        if (this.username === "" || this.password === "") {
          this.$message.error("请输入用户名或密码！")
        } else {
          let url = api.API + "/admin/login";
          axios.post(url, {
            userName: this.username,
            password: this.password
          }).then((response) => {
            if (response.data.code === 200) {
              var tokenHead = response.data.result.tokenHead;
              var token = response.data.result.token;
              window.localStorage.setItem("token", tokenHead + token);
              this.$message.success('登陆成功！')
              this.$router.push("/home");
            } else {
              this.$message.error(response.data.message)
            }
          });
        }
      },
    },
  };
</script>
<style scoped>
  .ysl-home {
    width: 100%;
    height: 100%;
    padding-top: 10%;
    text-align: center;
  }

  .homeBox {
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
  }

  .long-img {
    width: 50%;
    height: 350px;
    background: url('../assets/loginImg.jpg') no-repeat;
    background-size: 100% 100%;
  }

  .long-home {
    background: #ffffff;
    box-shadow: 0px 2px 16px 0px rgba(0, 86, 144, 0.12);
    border-radius: 4px;
    text-align: center;
    width: 50%;
    height: 350px;
    padding-top: 40px;
  }

  .login {
    margin-top: 30px;
  }

  .login-title {
    font-size: 24px;
  }
</style>