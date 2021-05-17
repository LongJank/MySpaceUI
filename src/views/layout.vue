<template>
  <el-container style="height:100%;">
    <el-aside :width="isCollapse ? '70px' : '200px'" class="ysl-leftBar">
      <div class="ysl-logo">{{ isCollapse ? 'Long' : 'LongYsuai的小作坊' }}</div>
      <el-menu class="ysl-menu" router :collapse="isCollapse">
        <el-menu-item index="/home">
          <i class="el-icon-user"></i>
          <span slot="title">账号中心</span>
        </el-menu-item>
        <el-menu-item index="/question">
          <i class="el-icon-document"></i>
          <span slot="title">文章管理</span>
        </el-menu-item>
        <el-menu-item index="/type">
          <i class="el-icon-collection"></i>
          <span slot="title">类型管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">其他设置</span>
        </el-menu-item>
        <el-menu-item index="/python">
          <i class="el-icon-video-camera"></i>
          <span slot="title">PYTHON</span>
        </el-menu-item>
        <el-menu-item index="/uploadVideo">
          <i class="el-icon-upload"></i>
          <span slot="title">上传视频</span>
        </el-menu-item>
        <el-menu-item index="/user">
          <i class="el-icon-user"></i>
          <span slot="title">用户中心</span>
        </el-menu-item>
        <el-submenu index="/article">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>文章管理</span>
          </template>
          <el-menu-item index="/article/add">
            <i class="el-icon-document"></i>
            <span slot="title">新增文章</span>
          </el-menu-item>
          <el-menu-item index="/article/list">
            <i class="el-icon-document"></i>
            <span slot="title">文章列表</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="/java">
          <template slot="title">
            <i class="el-icon-hot-water"></i>
            <span>JAVA</span>
          </template>
          <el-menu-item index="/java/qt"><i class="el-icon-video-camera"></i>
            <span slot="title">青铜</span>
          </el-menu-item>
          <el-menu-item index="/java/by"><i class="el-icon-video-camera"></i>
            <span slot="title">白银</span>
          </el-menu-item>
          <el-menu-item index="/java/hj"><i class="el-icon-video-camera"></i>
            <span slot="title">黄金</span>
          </el-menu-item>
          <el-menu-item index="/java/bj"><i class="el-icon-video-camera"></i>
            <span slot="title">铂金</span>
          </el-menu-item>
          <el-menu-item index="/java/zs"><i class="el-icon-video-camera"></i>
            <span slot="title">钻石</span>
          </el-menu-item>
          <el-menu-item index="/java/xy"><i class="el-icon-video-camera"></i>
            <span slot="title">星耀</span>
          </el-menu-item>
          <el-menu-item index="/java/wz"><i class="el-icon-video-camera"></i>
            <span slot="title">王者</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <i class="ysl-collapse" :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
           @click="handleSpread"></i>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'Layout',
  data() {
    return {
      isCollapse: false,
    }
  },
  methods: {
    //左侧菜单伸缩按钮点击事件
    handleSpread() {
      this.isCollapse = !this.isCollapse
    },
  }
}
</script>
<style lang="css" scoped>
.ysl-leftBar {
  height: 100%;
  transition: width 0.3s ease;
  background: #fff;
}

.ysl-logo {
  height: 64px;
  line-height: 64px;
  padding: 0 15px;
  color: #333;
}

.ysl-menu {
  border-right: none;
}

.ysl-collapse {
  font-size: 30px;
  line-height: 64px;
}
</style>