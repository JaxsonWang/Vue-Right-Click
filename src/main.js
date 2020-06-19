import Vue from 'vue'
import App from './App.vue'
import VueRightClick from './index'

Vue.config.productionTip = false

Vue.use(VueRightClick, {
  menuListClass: 'app-menu-class',
  menuItemClass: 'menu-item-class',
  menuDisableClass: 'menu-item-class-disable'
})

window.vm = new Vue({
  render: h => h(App)
}).$mount('#app')
