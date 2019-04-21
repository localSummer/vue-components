import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.less';
import Toast from '@/components/toast/main';

Vue.config.productionTip = false
Vue.prototype.$toast = Toast;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
