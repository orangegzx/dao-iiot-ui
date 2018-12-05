import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'

import bgImage from '@/assets/images/bg.jpg'
import logoImage from '@/assets/images/daocloud.png'
import soluImage1 from '@/assets/images/case-bg-dongfeng.jpg'
import soluImage2 from '@/assets/images/case-bg-opg.jpg'
import soluImage3 from '@/assets/images/saic-bg.jpg'
import ModuleSolution from '@/components/solution/ModuleSolution.vue'

export default {
  components: {
    swiper,
    swiperSlide,
    ModuleSolution
  },
  name: 'carrousel',
  data () {
    return {
      bgImage,
      logoImage,
      activeIndex: '1',
      navList: [
        {
          index: 1,
          value: 'revolution-iot',
          name: 'IOT解决方案',
          url: 'http://58.56.27.130:6705',
          childrenItem: [
            {
              index: 1 - 1,
              value: 'iot',
              name: 'one',
              url: '#'
            },
            {
              index: 1 - 2,
              value: 'iot',
              name: 'two',
              url: '#'
            }
          ]
        },
        {
          index: 2,
          value: 'revolution-erp',
          name: 'ERP解决方案',
          url: 'http://117.50.19.70:31982'
        },
        {
          index: 3,
          value: 'revolution-mes',
          name: 'MES解决方案',
          url: 'http://117.50.19.70:32416'
        },
        {
          index: 4,
          value: 'revolution-bigData',
          name: '大数据解决方案',
          url: 'http://117.50.19.70:32651/#/notebook/2DTJZT5Y7'
        },
        {
          index: 5,
          value: 'revolution-docs',
          name: '文档中心',
          url: '#'
        }
      ],
      navConsole: [
        {
          index: 1,
          value: 'console',
          name: '控制台',
          url: 'https://106.75.120.241'
        },
        {
          index: 2,
          value: 'login-in',
          name: '登录',
          url: '#'
        },
        {
          index: 3,
          value: 'login-up',
          name: '注册',
          url: '#'
        }
      ],
      swiperOption: {
        // autoplay: 1000,
        // autoplay: true, // 可选选项，自动滑动
        direction: 'vertical',
        // effect: 'fade',
        // grabCursor: true, // 开启鼠标的抓手形状
        mousewheel: true,
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，
        // 组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，
        // 假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
        observeParents: true,
        // 分页导航
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 点击分页器的指示点分页器会控制Swiper切换
        },
        // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        paginationClickable: true,
        // prevButton: { // 上一张
        //   el: '.swiper-button-prev'
        // },
        nextButton: { // 下一张
          el: '.swiper-button-next'
        },

        preventClicksPropagation: true, // 阻止click冒泡。拖动Swiper时阻止click事件。
        preventClicks: false, // 默认true 当swiper在触摸时阻止默认事件（preventDefault），用于防止触摸时触发链接跳转
        parallax: true, // 视觉差
        scrollbar: {
          el: '.swiper-scrollbar'
        }, // 滚动条
        speed: 1000,
        // Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到
        setWrapperSize: true
        // zoom: true // 焦距功能，双击slide放大/缩小。手机端可以双指触摸播放 需要结合swiper-zoom-container使用
      },
      solutionsItems: [{
        name: 'first',
        imgURL: soluImage1,
        shadeTitle: 'title',
        shadeContent: 'text text text text'
      }, {
        name: 'second',
        imgURL: soluImage2,
        shadeTitle: 'title',
        shadeContent: 'text text text text'
      }, {
        name: 'three',
        imgURL: soluImage3,
        shadeTitle: 'title',
        shadeContent: 'text text text text'
      }],
      swiperSlides: [{
        id: 1,
        name: 'swiper-slide',
        class: 'swiper-slide1'
      }, {
        id: 2,
        name: 'swiper-slide',
        class: 'swiper-slide2'
      }, {
        id: 3,
        name: 'swiper-slide',
        class: 'swiper-slide3'
      }, {
        id: 4,
        name: 'swiper-slide',
        class: 'swiper-slide4'
      }, {
        id: 5,
        name: 'swiper-slide',
        class: 'swiper-slide5'
      }]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // setInterval(() => {
    //   console.log('simulate async data')
    //   if (this.swiperSlides.length < 10) {
    //     this.swiperSlides.push(this.swiperSlides.length + 1)
    //   }
    // }, 3000)
  },
  methods: {
    shadeSlide () {
      // const vm = this
      // console.log()
    }
  }
}
