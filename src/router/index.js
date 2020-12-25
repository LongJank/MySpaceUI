import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import Login from '@/views/login'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

Vue.use(VueRouter)
Vue.use(VideoPlayer)
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Login,
    },
    {
      path: '/home', //后台默认主页面
      component: Layout,
      redirect: '/home/welcome',
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
    },
    {
      path: '/video',
      component: Layout,
      redirect: '/video/videoList',
      children: [
        {
          path: 'videoList',
          component: () => import('@/views/video.vue')
        }
      ]
    },
    {
      path: '/videoAll',
      component: Layout,
      redirect: '/videoAll/list',
      children: [
        {
          path: 'list',
          component: () => import('@/views/list.vue')
        }
      ]
    },
    {
      path: '/uploadVideo',
      component: Layout,
      redirect: '/uploadVideo/upload',
      children: [
        {
          path: 'upload',
          component: () => import('@/views/upload.vue')
        }
      ]
    }
  ]
})