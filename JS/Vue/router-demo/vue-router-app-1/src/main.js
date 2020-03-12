import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Users from './Users.vue'
import Home from './Home.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { 
    path: '/users/:age/:weight', 
    name: 'USERS',
    props: true,
    component: Users 
  },
  { 
    path: '/', 
    name: 'HOME sweet HOME',
    component: Home 
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
