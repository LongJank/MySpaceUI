<template>
    <div class="yslg-contentMain">
        <p>标题：{{ this.title }}</p>
        <p>作者：{{ this.author }}</p>
        <p>创建时间：{{ this.createTime }}</p>
        <p>文章内容：{{ this.content }}</p>
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
        mounted() {
            this.getViewById();
        },
        methods: {
            getParams() {
                // 取到路由带过来的参数
                var routerParams = this.$route.query.id;
                // 将数据放在当前组件的数据内
                this.param.id = routerParams;
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
            }
        },
        watch: {
            // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
            '$route': 'getParams'
        }
    }
</script>