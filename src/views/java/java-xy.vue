<template>
    <div class="yslg-contentMain">
        <div @mouseover="mouseOver" @mouseleave="mouseLeave" style="cursor: pointer;">
            <p ref="acp"><i class="el-icon-back" />我是内容</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        data() {
            return {};
        },
        methods: {
            // 移入
            mouseOver() {
                var acps = this.$refs.acp
                acps.style.color = "red"
            },
            // 移出
            mouseLeave() {
                this.active = "";
                this.$refs.acp.style = ''
            }
        }
    };
</script>