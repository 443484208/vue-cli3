import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import hy from "vue-hy"
import VueOccupy from 'vue-occupy'
Vue.use(hy);
Vue.use(VueOccupy);
Vue.config.productionTip = false;
// 引入自定义组件。index.js是组件的默认入口
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
