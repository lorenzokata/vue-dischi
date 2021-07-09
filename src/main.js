import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// inizializzo un autobus di dati
export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
