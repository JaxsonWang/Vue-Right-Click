import Vue from 'vue'
import App from './App.vue'
import VueRightClick from './index'

Vue.config.productionTip = false

Vue.use(VueRightClick)

window.vm = new Vue({
  render: h => h(App)
}).$mount('#app')
