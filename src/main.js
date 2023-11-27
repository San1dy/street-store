// main.js
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Catalog from './components/Catalog.vue'
import Cart from './components/Cart.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/catalog', component: Catalog },
  { path: '/cart', component: Cart }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
