import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'github-markdown-css';
import App from './App.vue';
import router from './router';
import './assets/css/g.css';
import axios from 'axios';
import mditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import store from './store/store'


// 全局路由构造函数，判断是否登录和要跳转到页面
router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.requireAuth)) {    // 需要登录
    if(window.localStorage.token && window.localStorage.isLogin === '1'){
      next()
    } else if (to.path !== '/login') {
      let token = window.localStorage.token;
      if (token === 'null' || token === '' || token === undefined){
        next({path: '/login'})
        this.$message.error('检测到您还未登录,请登录后操作！')
      }
    } else {
      next()
    }
  } else {   // 不需要登录
    next()
  }
})
//添加请求拦截器
axios.interceptors.request.use(
    config =>{
      if(store.state.token){
        config.headers.common['token'] =store.state.token
      }
      return config;
    },
    error =>{
      //对请求错误做什么
      return Promise.reject(error);
    })

//http reponse响应拦截器
axios.interceptors.response.use(
    response =>{
      return response;
    },
    error=>{
      if(error.response){
        switch(error.response.status){
          case 100:
            localStorage.removeItem('token');
            router.replace({
              path: '/views/login',
              query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
            })
        }
      }
    })


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(mditor)
Vue.prototype.axios = axios
//请求在到达服务器之前，先会调用use中的这个回调函数来添加请求头信息
axios.interceptors.request.use(config => {
  //为请求头对象，添加token验证的Authorization字段
  config.headers.token = window.localStorage.getItem("token")
  return config
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
