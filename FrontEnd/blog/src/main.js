import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//import vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import 'bootstrap'

import Login from './components/Login'
import Register from './components/Register'

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

const router = new VueRouter({
  mode:'history',
  routes 
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
