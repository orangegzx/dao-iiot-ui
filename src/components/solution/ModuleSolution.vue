<template>
  <div class="solution-container">

    <el-row
      class="solution-row"
      :gutter="10"
      type="flex"
      justify="center">

      <el-col
        class="solution-content-col"
        :xs="22"
        :sm="22"
        :md="22"
        :lg="22"
        :xl="22">

        <!-- title -->
        <div class="solution-title-container">
          <p class="solution-title">行业解决方案</p>
          <p class="solution-description">Daoloud多样化的工业互联网解决方案</p>
        </div>

        <!-- content -->
        <div class="grid-content bg-purple solution-content-container">
          <el-carousel
            class="solution-content-wrap"
            trigger="click"
            type="card"
            height="calc(100% - 12rem)">
            <el-carousel-item
              v-for="item in solutionsItems"
              :key="item.name"
              :style="{'background-image':`url('${item.imgURL}')`}">
              <div class="solution-mask">
                <p> {{ item.shadeTitle }}</p>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    solutionsItems: { type: Array, default: () => [] }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.solution-container {
  width: 100%;
  height: 100%;

  .solution-row {
    align-items: center;
    flex-wrap: wrap;
    height: 100%;

    // content
    .solution-content-col {
      height: 100%;

      // title
      .solution-title-container {
        // background-color: rosybrown;
        margin: 2rem 0;

        p {
          line-height: 2em;
        }
        p.solution-title {
          font-size: 1.875em;
        }
        p.solution-description {
          font-size: 1rem;
        }
      }

      // content
      .solution-content-container {
        height: 100%;

        .el-carousel  {
          height: 100%;

          .el-carousel__container {
            .el-carousel__item {
              background-color: floralwhite;
              background-position: center center; /* 背景图垂直水平居中*/
              background-repeat: no-repeat;
              background-size: 140%; /* 基于容器大小伸缩*/
              transition: all 0.5s ease-in-out;

              & >:hover{
                // background-color: rgba(0, 0, 0, 0.3);
                transform: scale(1.2)
              }
              &:hover{
                background-size: 120%;
              }

              // 遮罩
              .solution-mask {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                transition: all 0.5s ease-in-out;
                p {
                  height: 3rem;
                  max-height: 3.5rem;
                  transition: all 0.5s ease-in-out;
                  width: 100%;
                  font-size: 1.675rem;
                  background-color: rgba(0, 0, 0, 0.5)
                }
              }

            }
          }
        }

      }

    }
  }
}
</style>
