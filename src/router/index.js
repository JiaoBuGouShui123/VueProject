import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/Login/index.vue'
import Home from '../views/home/index.vue'
import UserInfo from '../views/userinfo/index.vue'
import GradeView from '../views/Grade/index.vue'
import NotisDetail from '../views/noticedetail/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: UserInfo,
    },
    {
      path: '/grade',
      name: 'grade',
      component: GradeView,
    },
    {
      path: '/noticedetail/:id',
      name: 'noticedetail',
      component: NotisDetail,
    }

  ],
})

// router.beforeEach((to, from) => {
//   let user = localStorage.getItem('user')
//   if (!user && to.fullPath != "/login") {
//     return { path: '/login' }
//   }
//   if (user && to.fullPath == "/login") {
//     return { path: '/home' }
//   }
//   return true
// })




export default router
