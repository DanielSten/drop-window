import Vue from 'vue'
import App from './App.vue'
import VueDraggable from 'vuedraggable'
import * as VueMenu from '@hscmap/vue-menu'






Vue.config.productionTip = false




new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VueDraggable)
Vue.use(VueMenu)