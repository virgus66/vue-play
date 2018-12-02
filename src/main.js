// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import vueResource from 'vue-resource'

// for routing import to main js
import Users from './components/Users'
import Test from './components/Test'


Vue.config.productionTip = false

Vue.use(vueResource);
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Users},
    {path: '/test', component: Test}
  ]
});

/* eslint-disable no-new */
/* new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
}) */

// for routing: 
new Vue({
  router,
  template: `
    <div id="app">
      <ul>
        <li><router-link to="/">Users</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
      </ul>

      <router-view></router-view>
    </div>  
  `,
}).$mount('#app')
