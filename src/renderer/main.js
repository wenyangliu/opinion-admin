import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VCharts from 'v-charts'
import VueSocketio from 'vue-socket.io'

Vue.use(ElementUI)
Vue.use(VCharts)
// Vue.use(VueSocketio, 'http://118.123.14.36:3000')
Vue.use(new VueSocketio({
    debug: true,
    connection: 'http://118.123.14.36:3000'
}))

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
