<template>
  <div class="first">
          <!-- header -->
          <el-container>
            <el-header class="header">
              <article class="header-top">
                <div class="header-main">
                  <el-row type="flex">

                    <el-col class="logo-container header-item" :xs="8" :sm="8" :md="3" :lg="4" :xl="5">
                        <div class="header-logo">
                          <img :src="logoImage"/>
                        </div>
                    </el-col>

                    <el-col class="nav-container header-item" :xs="2" :sm="2" :md="15" :lg="14" :xl="12">
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
                          </el-menu>
                        </div>

                        <div class="nav-icon" style="display:none">
                          <i class="el-icon-menu"></i>
                        </div>
                    </el-col>

                    <el-col class="console-container header-item" :xs="14" :sm="14" :md="6" :lg="6" :xl="5">
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
                    </el-col>
                  </el-row>
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
</template>

<script>
export default {
  props: {
    navList: { type: Array, default: () => [] },
    navConsole: { type: Array, default: () => [] },
    logoImage: { type: String, default: () => '' }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
 .first{
    color: #fafafa;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    display: block;

    .el-container{
      height: 100%;
      .header {
        width: 100%;
        padding: 0;
        height: 3.5rem !important; // 修复elementUIheader组件默认的60px
        background-color: rgba(0, 0, 0, 0.7);
        display: inline-block;

        .header-top {
          width: 100%;
          height: 3.5rem;

          .header-main {

            // nav and console
            .header-item {
              display: flex;

              // header-nav and header-tools
              .header-nav,
              .header-tools {
                ul.el-menu {
                  height: 3.5rem;
                  border: 0;

                  li.el-menu-item {
                    height: 3.5rem;
                    font-size: 1rem;
                    font-weight: bolder
                  }

                  .el-menu-item:hover {
                    background-color: rgba(255, 255, 255, 0) !important;
                  }

                }
              }
            }

            // logo - container
            .logo-container {
              align-items: center;
              justify-content: center;

              .header-logo {
                height: 3.5rem;
                float: left;
                width: 12.5rem;
                line-height: 3.5rem;

                img {
                  width: 10rem;
                  height: auto;
                }

                height: 3.5rem;
              }

            }
            // nav-container
            .nav-container {
              // justify-content: center;
              align-content: center;
              .nav-icon {
                line-height: 3.5rem;
              }
            }

            // console-contaier
            .console-container {
              justify-content: center;
              align-content: center;

              .console-icon {
                line-height: 3.5rem;
              }

              // header-nav
              .header-nav {
                float: left;
                height: 3.5rem;
                width: auto;
              }

              // header-tools
              .header-tools {
                width: auto;
                justify-content: flex-end;

                // 去掉elementUI默认的下滑条
                ul.el-menu--horizontal>.el-menu-item.is-active {
                  border: 0;
                }

                ul.el-menu--horizontal>.el-menu-item {
                  border: 0;
                }

                // 注册按钮style
                ul.el-menu--horizontal {
                  &> :last-child {
                    a {
                      display: inline-block;
                      width: 3rem;
                      height: 2rem;
                      line-height: 2rem;
                      border: 1px solid white;
                      border-radius: 0.5rem;
                    }
                  }
                }

              }

            }

          }
        }
      }
    }

    // content
    .content{
      display: block;
      padding: 0;
      width: 100%;
      height: 100%;

      .content-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .content-title {
          height: 10rem;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            display: inline-block;
            font-size: 7.5em;
          }
        }

      }
    }
  }
</style>
