import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import UserList from '@/pages/UserList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/userlist',
      name: 'UserList',
      component: UserList
    }
  ]
})
