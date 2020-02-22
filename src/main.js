import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import store from '@/packages/vuex'

Vue.use(store)

new Vue({
  render: h => h(App),
}).$mount('#app')
