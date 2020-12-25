<template>
    <el-container style="height:100%;">
        <el-aside :width="isCollapse ? '70px' : '200px'" class="ysl-leftBar">
            <div class="ysl-logo">{{isCollapse ? 'Long' : 'LongYsuai的小作坊'}}</div>
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
                <el-menu-item index="/video">
                    <i class="el-icon-video-camera"></i>
                    <span slot="title">我的视频</span>
                </el-menu-item>
                <el-menu-item index="/videoAll">
                    <i class="el-icon-video-camera"></i>
                    <span slot="title">所有视频</span>
                </el-menu-item>
                <el-menu-item index="/uploadVideo">
                    <i class="el-icon-upload"></i>
                    <span slot="title">上传视频</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>
                <i class="ysl-collapse" :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
                @click="handleSpread"
                ></i>
            </el-header>
            <el-main><router-view /></el-main>
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
.ysl-leftBar{
  height: 100%;
  transition: width 0.3s ease;
  background: #fff;
}
.ysl-logo{
    height: 64px;
    line-height: 64px;
    padding: 0 15px;
    color: #333;
}
.ysl-menu{
    border-right: none;
}
.ysl-collapse{
    font-size: 30px;
    line-height: 64px;
}
</style>