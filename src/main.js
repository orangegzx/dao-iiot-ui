// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueFullPage from 'vue-fullpage'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'vue-fullpage/vue-fullpage.css'
import 'swiper/dist/css/swiper.css'
// import './assets/styles/reset.scss'
import './assets/styles/index'
import 'animate.css'

Vue.use(ElementUI)
Vue.use(VueFullPage)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
