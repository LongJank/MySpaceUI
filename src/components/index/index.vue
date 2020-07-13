<template>
    <div id="index">
        <el-row class="tac">
            <el-col :span="3">
                <h5>LongYsuai</h5>
                <el-menu
                        :default-active="activeIndex"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                    <el-menu-item index="1">
                        <i class="el-icon-user"></i>
                        <span slot="title">账号中心</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-document"></i>
                        <span slot="title">文章管理</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-collection"></i>
                        <span slot="title">类型管理</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">其他设置</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
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