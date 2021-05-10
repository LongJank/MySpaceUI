import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'github-markdown-css';
import App from './App.vue';
import router from './router'
import './assets/css/g.css';
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.axios = axios
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
