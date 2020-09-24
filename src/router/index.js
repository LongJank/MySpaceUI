import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import Login from '@/views/login'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Login,
    },
    {
      path: '/home', //后台默认主页面
      component: Layout,
      redirect : '/home/welcome',
      children: [
        {
          path: 'welcome', //欢迎页
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