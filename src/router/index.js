import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      title: "首页"
    }
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/out_stock',
    component: () => import('@/views/home/index.vue'),
    children: [
      {
        path: '/out_stock',
        name: 'demo',
        component: () => import('@/views/home/demo.vue'),
      }, {
        path: '/in_stock',
        name: 'demo2',
        component: () => import('@/views/home/demo2.vue'),
      }
    ]
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: () => import('../views/schedule/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
