import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/**
 * Socket Stuff
 */
Vue.use(new VueSocketIO({
   connection: 'http://192.168.193.50:8001',
}));

/**
 * Font awesome stuff
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

library.add(faPaperPlane)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
