import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css';
import Print from 'vue-print-nb'
Vue.use(Print);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
