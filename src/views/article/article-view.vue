<template>
    <div class="yslg-contentMain">
        <div class="daohang">
            <el-row>
                <el-col :span="12">
                    <el-button size="mini" type="primary" icon="el-icon-back" style="cursor: pointer" @click="back">返回列表
                    </el-button>
                </el-col>
                <el-col :span="12" style="text-align: right">
                    <el-button-group>
                        <el-button size="mini" type="primary" icon="el-icon-arrow-left" @click="previous">上一篇
                        </el-button>
                        <el-button size="mini" type="primary" @click="next">下一篇 <i class="el-icon-arrow-right" />
                        </el-button>
                    </el-button-group>
                </el-col>
            </el-row>
        </div>
        <div class="header">
            <h2>{{ this.title }}</h2>
            <div class="author">
                <el-row>
                    <el-col :span="12">{{ this.author }}</el-col>
                    <el-col :span="12">{{ this.createTime }}</el-col>
                </el-row>
            </div>
        </div>
        <div class="view">
            <mavon-editor defaultOpen="preview" :toolbarsFlag="false" :subfield="false" :preview="true"
                :boxShadow="false" v-model="this.content" />
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    import api from "../../router/api.js";
    export default {
        name: "article-newlist",
        data() {
            return {
                param: {
                    id: ''
                },
                title: '',
                author: '',
                createTime: '',
                content: ''
            }
        },
        created() {
            this.getParams();
        },
        methods: {
            getParams() {
                // 取到路由带过来的参数
                var routerParams = this.$route.query.id;
                // 将数据放在当前组件的数据内
                this.param.id = routerParams;
                this.getViewById();
            },
            getViewById() {
                let url = api.API + "/articles/view/" + this.param.id;
                axios.get(url).then((response) => {
                    if (response.data.code === 200) {
                        this.title = response.data.result.title
                        this.author = response.data.result.author
                        this.createTime = response.data.result.createTime
                        this.content = response.data.result.content
                    } else {
                        this.$message.error(response.data.message)
                    }
                })
            },
            back() {
                this.$router.push({
                    path: '/article/list'
                })
            },
            previous() {
                let url = api.API + "/articles/previous/" + this.param.id;
                axios.get(url).then((response) => {
                    if (response.data.code === 200) {
                        this.$router.push({
                            path: '/article/view',
                            query: {
                                id: response.data.result
                            }
                        })
                    } else {
                        this.$message.error("没有更多了")
                    }
                })
            },
            next() {
                let url = api.API + "/articles/next/" + this.param.id;
                axios.get(url).then((response) => {
                    if (response.data.code === 200) {
                        this.$router.push({
                            path: '/article/view',
                            query: {
                                id: response.data.result
                            }
                        })
                    } else {
                        this.$message.error("没有更多了")
                    }
                })
            }
        },
        watch: {
            // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
            '$route': 'getParams'
        }
    }
</script>

<style scoped>
    .daohang {
        width: 100%;
        height: 5%;
    }

    .header {
        width: 100%;
        height: 10%;
    }

    .header .author {
        padding: 10px;
        color: #A8A8A8;
        font-size: 12px;
    }

    .view {
        width: 100%;
        height: 85%;
        overflow-y: scroll;
        white-space: nowrap;
    }

    ::-webkit-scrollbar {
        width: 0 !important;
    }

    ::-webkit-scrollbar {
        width: 0 !important;
        height: 0;
    }

    .bt1 {
        color: royalblue;
    }
</style>