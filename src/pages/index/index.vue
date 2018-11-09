<template>
  <div id="index">
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts">
        <div class="page-1 page">
          <p class="part-1" v-animate="{value: 'bounceInLeft'}">vue-fullpage1</p>
        </div>
        <div class="page-2 page">
          <p class="part-2" v-animate="{value: 'bounceInRight'}">vue-fullpage2</p>
        </div>
        <div class="page-3 page">
          <p class="part-3" v-animate="{value: 'bounceInLeft'}">vue-fullpage3</p>
        </div>
      </div>
    </div>
    <!-- <div class="page-container">
      <div v-page="opts" class="page-wp">
        <div class="page page1">
          <p class="part part1" v-animate="'slideIn'">
          vue-fullpage
          </p>
        </div>
        <div class="page page2">
          <p class="part part2" v-animate="'slideIn'">
          vue-fullpage2
          </p>
        </div>
        <div class="page page3">
          <p class="part part3" v-animate="'slideIn'">
          vue-fullpage3
          </p>
        </div>
        <div class="page page4">
          <p class="part part4" v-animate="'fadeIn'">
          vue-fullpage4
        </p>
        </div>
      </div>
    </div> -->

  </div>
</template>

<script>

export default {
  data () {
    return {
      opts: {
        start: 0,
        dir: 'v',
        duration: 500,
        beforeChange: function (prev, next) {
        },
        afterChange: function (prev, next) {
        }
      }
    }
  }
}
</script>

<style lang="scss">
  .page-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
</style>
