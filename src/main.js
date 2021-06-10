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
  render: h => h(App),
}).$mount('#app')
