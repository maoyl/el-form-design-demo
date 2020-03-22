import Vue from 'vue'
import VueRouter from 'vue-router'
import formdesignpage from '../views/formdesignpage.vue'
import showpage from '../views/showpage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'formdesignpage',
    component: formdesignpage
  },
  {
    path: '/showpage',
    name: 'showpage',
    component: showpage
  }
]

const router = new VueRouter({
  routes
})

export default router
