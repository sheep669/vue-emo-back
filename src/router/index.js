/*
 * @Author: sheep669
 * @Description: 路由文件
 * @Date: 2022-06-26 21:46:01
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { getMenuData } from "@/utils/http"
import store from '@/store/index.js'
import Layout from '@/components/layout/index.vue'
import EmoLogin from '@/views/login/index.vue'
import EmoRegister from '@/views/register/index.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '',
    component: Layout,
    children: []
  },
  {
    path: '/login',
    component: EmoLogin
  },
  {
    path: '/register',
    component: EmoRegister
  }
]


const router = new VueRouter({
  routes,
})

//路由拦截
router.beforeEach(async (to, from, next) => {
  if (store && store.state.nav.length == 0) {
    //异步请求，拿到数据后再处理
    // 发送请求
    let res = await getMenuData("/get_menu_data");
    // console.log('res.data', res.data)
    // 动态添加
    let dynamicRoutes = addR(res.data);
    router.addRoutes(dynamicRoutes); //动态添加路由
    // console.log('routes', routes)
    //缓存数据
    store.dispatch('SETNAV', res.data);
    //跳转
    next({ ...to })
  } else {
    next();
  }
})

function addR(data) {
  data.forEach(v => {
    // console.log("=>", v)
    routes[0].children.push({
      path: v.path,
      name: v.name,
      component: () => import("../views" + v.component + "/index.vue"),
      meta: { title: v.title }
    })
  })
  return routes
}

export default router
