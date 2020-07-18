import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Users from '@/components/Users'
import Album from '@/components/Album'
import Posts from '@/components/Posts'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/album',
    name: 'Album',
    component: Album
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  }
]

const router = new VueRouter({
  routes
})

export default router
