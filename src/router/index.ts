import Vue from 'vue'
import VueRouter, { RawLocation }  from 'vue-router'
import Login from '../views/Login/index.vue'
import Home from '../views/Home/index.vue'

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location: RawLocation) {
  return (<any>(routerPush.call(this, location))).catch((error: any)=> error)
}

Vue.use(VueRouter)

// 公共路由，全部角色均具有该部分路由权限
const routes = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: Login
  },
  {
    path: '/',
    component: Home,
    redirect: '/dashboard',
    name: '',
    iconCls: 'el-icon-s-help',
    leaf: true,
    children: [
      {
        path: '/dashboard',
        name: '首页',
        component: () => import('../views/Dashboard/index.vue')
      }
    ]
  }, 
  {
    path: '/',
    component: Home,
    name: '',
    iconCls: 'el-icon-star-on',
    leaf: true,
    hidden: true,  // 路由是否在侧边导航栏中显示
    children: [
      {
        name: '404页面',
        path: '/404',
        component: () => import('../views/ErrorPage/404.vue')
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
