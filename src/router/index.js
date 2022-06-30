import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/demo',
    component: () => import('@/views/home/index.vue'),
    children: [{
      path: '/demo',
      name: 'demo',
      component: () => import('@/views/home/demo.vue'),
    }]
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
