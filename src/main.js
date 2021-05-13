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
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
