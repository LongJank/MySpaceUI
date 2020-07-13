<template>
    <div id="index">
        <!-- mode：导航栏模式：horizontal：横;vertical:竖(默认);-->
        <!-- background-color:导航栏背景颜色，默认#ffffff-->
        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2">主页新闻</el-menu-item>
            <el-menu-item index="3">消息中心</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
        </el-menu>
        <div class="line"></div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                //默认选择
                activeIndex: '1'
            };
        },
        methods: {
            handleSelect(key) {
                this.$message(key)
            }
        },
        props: {
            messgae: String
        }
    }

</script>

<style scoped>

</style>