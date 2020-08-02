import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'

Vue.use(VueRouter)
export default new VueRouter({
    routes: [
      {
        path: '/', //后台默认主页面
        component: Layout,
        redirect: '/home',
        children: [
          {
            path: 'home', //欢迎页
            component: () => import('@/views/home.vue'),
          }
        ],
      },
      {
        path: '/question',
        component: Layout,
        redirect: '/question/questionAdd',
        children: [
          {
            path: 'questionAdd',
            component: () => import('@/views/question.vue')
          }
        ],
      },
      {
        path: '/type',
        component: Layout,
        redirect: '/type/typeAdd',
        children: [
          {
            path: 'typeAdd',
            component: () => import('@/views/type.vue')
          }
        ],
      },
      {
        path: '/setting',
        component: Layout,
        redirect: '/setting/system',
        children: [
          {
            path: 'system',
            component: () => import('@/views/setting.vue')
          }
        ],
      }
    ]
})