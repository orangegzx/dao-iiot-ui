<template>
  <div id="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- first page -->
      <swiper-slide
        :style="{ 'background-image': `url('${ bgImage}')`}"
        class="swiper-slide1">
        <div class="first">
          <!-- header -->
          <el-container>
            <el-header class="header">
              <article class="header-top">
                <div class="header-main">
                  <div class="header-logo">
                    <img :src="logoImage"/>
                  </div>
                  <div class="header-nav">
                    <el-menu
                      :default-active="activeIndex"
                      class="el-menu-demo"
                      background-color="rgba(0,0,0,0.7)"
                      text-color="#fff"
                      active-text-color="#ffd04b"
                      mode="horizontal">
                      <el-menu-item index="1">
                        <a href="http://58.56.27.130:6705" target="_blank">IOT解决方案</a>
                      </el-menu-item>
                      <el-menu-item index="2">
                        <a href="http://117.50.19.70:31982" target="_blank">ERP解决方案</a>
                      </el-menu-item>
                      <el-menu-item index="3">
                        <a href="http://117.50.19.70:32416" target="_blank">MES解决方案</a>
                      </el-menu-item>
                      <el-menu-item index="4">
                        <a href="http://117.50.19.70:32651/#/notebook/2DTJZT5Y7" target="_blank">大数据解决方案</a>
                      </el-menu-item>
                    </el-menu>
                  </div>
                  <div class="header-tools">
                    <el-menu
                      class="el-menu-demo"
                      background-color="rgba(0,0,0,0.7)"
                      text-color="#fff"
                      active-text-color="#fafafa"
                      mode="horizontal">
                      <el-menu-item index="1">
                        <a href="https://106.75.120.241" target="_blank">控制台</a>
                      </el-menu-item>
                      <el-menu-item index="2" >
                        <a href="#" target="_blank">登录</a>
                      </el-menu-item>
                      <el-menu-item index="3">
                        <a href="#" target="_blank">注册</a>
                      </el-menu-item>
                    </el-menu>
                  </div>
                </div>
              </article>
            </el-header>
          <!-- content -->
            <el-main class="content">
              <div class="content-container">
                <div class="content-title">
                  <span>工业互联网解决方案</span>
                </div>
              </div>
            </el-main>
          </el-container>
        </div>
      </swiper-slide>

      <!-- second page-->
      <swiper-slide class="swiper-slide2">
        <div class="solution">
          <div class="solution-container">
            <div class="solution-title">
              <div class="solution-title-container">
              <p>行业解决方案</p>
              <p>Daoloud多样化的工业互联网解决方案</p>
            </div>
            </div>
            <div class="solution-introduce">
              <el-carousel trigger="click" type="card" height= "80%" @change="shadeSlide" >
                <el-carousel-item
                  v-for="item in solutionsItems"
                  :key="item.name"
                  :style="{'background-image':`url('${item.imgURL}')`}">
                  <div class="solution-shade">
                    <p> {{ item.shadeTitle }}</p>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>3
        </div>
      </swiper-slide>

      <swiper-slide class="swiper-footer">
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </swiper-slide>

      <!-- 定位导航 -->
      <div class="swiper-pagination points" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
      <!-- 下一页 -->
      <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- 滚动条 -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script src="./swiper.js"></script>

<style lang="scss" scoped>
@import './swiper.scss'
</style>
