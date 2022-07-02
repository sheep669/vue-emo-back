import Vue from 'vue'
import VueRouter from 'vue-router'
import { getMenuData } from "@/utils/http";
import store from '@/store/index.js'


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, resolve, reject) {
  if (resolve || reject) return originalPush.call(this, location, resolve, reject)
  return originalPush.call(this, location).catch((e) => { console.log(e) })
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    redirect: '',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: "首页"
    },
    children: []
  },
  // {
  //   path: '/schedule',
  //   name: 'schedule',
  //   component: () => import('../views/schedule/index.vue'),
  //   meta: {
  //     title: "首页"
  //   },
  //   children: []
  // }
]

// getMenuData("/get_menu_data").then((res) => {
//   console.log("resr", res);
//   res.data.forEach(v => {
//     routes.push({
//       path: v.path,
//       redirect: v.redirect,
//       name: v.name,
//       component: () => import("../views" + v.component + "/index.vue"),
//       meta: v.meta
//     })

//   });
//   console.log(routes);
// });


const router = new VueRouter({
  routes,
})


//路由拦截
router.beforeEach(async (to, from, next) => {
  if (store && store.state.nav.length == 0) {
    //异步请求，拿到数据后再处理
    // 发送请求
    let res = await getMenuData("/get_menu_data");
    console.log('res.data', res.data)
    // 动态添加
    let dynamicRoutes = addR(res.data);
    router.addRoutes(dynamicRoutes)//动态添加路由
    //缓存数据
    store.dispatch('SETNAV', res.data);
    //跳转
    next({ ...to, replace: true })
  } else {
    next();
  }
})

function addR(data) {
  data.forEach(v => {
    console.log("=>", v)
    routes.push({
      path: v.path,
      redirect: v.redirect,
      name: v.name,
      component: () => import("../views" + v.component + "/index.vue"),
      meta: { title: v.title }
    })
  })
  return routes
}



export default router
