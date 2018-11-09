import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Index from '@/pages/index/index.vue'
import Swiper from '@/pages/swiper/swiper.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Swiper',
      component: Swiper,
      redirect: ''
    }
  ]
})
