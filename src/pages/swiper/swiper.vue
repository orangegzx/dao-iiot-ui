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
                  <el-row type="flex">
                    <el-col class="logo-container header-item" :xs="5" :sm="5" :md="4" :lg="4" :xl="4">
                        <div class="header-logo">
                          <img :src="logoImage"/>
                        </div>
                    </el-col>
                    <el-col class="nav-container header-item" :xs="17" :sm="17" :md="12" :lg="12" :xl="12">
                        <div class="header-nav">
                          <el-menu
                            :default-active="activeIndex"
                            class="el-menu-demo"
                            background-color="rgba(0,0,0,0.7)"
                            text-color="#fff"
                            active-text-color="#ffd04b"
                            mode="horizontal">
                            <el-menu-item
                              v-for="item in navList"
                              :key="item.value"
                              :index="item.index">
                              <a :href="item.url" target="_blank">
                                {{ item.name }}
                              </a>
                            </el-menu-item>
                            <!-- <el-submenu index="2">
                              <template slot="title">我的工作台</template>
                              <el-menu-item index="2-1">选项1</el-menu-item>
                            </el-submenu> -->

                          </el-menu>
                      </div>
                    </el-col>
                    <el-col class="console-container header-item" :xs="2" :sm="2" :md="8" :lg="8" :xl="8">
                        <div class="header-tools">
                          <el-menu
                            class="el-menu-demo"
                            background-color="rgba(0,0,0,0.7)"
                            text-color="#fff"
                            active-text-color="#fafafa"
                            mode="horizontal">
                            <el-menu-item
                              v-for="item in navConsole"
                              :key="item.value"
                              :index="item.index">
                              <a :href="item.url" target="_blank">{{ item.name }}</a>
                            </el-menu-item>
                          </el-menu>
                        </div>
                        <div class="console-icon" style="display:none">
                          <i class="el-icon-menu"></i>
                          <!-- <el-button  icon="el-icon-menu"> -->
                          <!-- </el-button> -->
                        </div>
                    </el-col>
                  </el-row>
                  <!-- <div class="header-logo">
                    <img :src="logoImage"/>
                  </div> -->
                  <!-- navList -->
                  <!-- <div class="header-nav">
                    <el-menu
                      :default-active="activeIndex"
                      class="el-menu-demo"
                      background-color="rgba(0,0,0,0.7)"
                      text-color="#fff"
                      active-text-color="#ffd04b"
                      mode="horizontal">
                      <el-menu-item
                        v-for="item in navList"
                        :key="item.value"
                        :index="item.index">
                        <a :href="item.url" target="_blank">
                          {{ item.name }}
                        </a>
                      </el-menu-item>
                    </el-menu>
                  </div> -->

                  <!-- console -->
                  <!-- <div class="header-tools">
                    <el-menu
                      class="el-menu-demo"
                      background-color="rgba(0,0,0,0.7)"
                      text-color="#fff"
                      active-text-color="#fafafa"
                      mode="horizontal">
                      <el-menu-item
                        v-for="item in navConsole"
                        :key="item.value"
                        :index="item.index">
                        <a :href="item.url" target="_blank">{{ item.name }}</a>
                      </el-menu-item>
                    </el-menu>
                  </div> -->
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
          </div>
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
