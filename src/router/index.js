import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
// import Login from '@/views/login'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

Vue.use(VueRouter)
Vue.use(VideoPlayer)
export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
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
            path: '/java',
            component: Layout,
            children: [
                {
                    path: 'qt',
                    component: () => import('@/views/java/java-qt.vue')
                },
                {
                    path: 'by',
                    component: () => import('@/views/java/java-by.vue')
                },
                {
                    path: 'hj',
                    component: () => import('@/views/java/java-hj.vue')
                },
                {
                    path: 'bj',
                    component: () => import('@/views/java/java-bj.vue')
                },
                {
                    path: 'zs',
                    component: () => import('@/views/java/java-zs.vue')
                },
                {
                    path: 'xy',
                    component: () => import('@/views/java/java-xy.vue')
                },
                {
                    path: 'wz',
                    component: () => import('@/views/java/java-wz.vue')
                }
            ]
        },
        {
            path: '/python',
            component: Layout,
            redirect: '/python/list',
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
        },
        {
            path: '/user',
            component: Layout,
            redirect: '/user/alluser',
            children: [
                {
                    path: 'alluser',
                    component: () => import('@/views/user.vue')
                }
            ]
        }
    ]
})