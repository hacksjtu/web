<template>
  <div class="wrap">
    <div v-if="!isMobile">
      <div v-if="showMask" class="mask clickable" @click="showMask = false">
        <p class="prompt" v-html="$t('address')"></p>
      </div>

      <iframe width='560' height='400' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='http://f.amap.com/2KCql_0732CwW'></iframe>

    </div>

    <div v-else>
      <div class="map-mobile">
        <p class="prompt" v-html="$t('address')"></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-map',
    props: ['isMobile'],
    data () {
      return {
        showMask: true
      }
    }
  }

</script>

<style scoped>
  .wrap {
    position: relative;
  }

  .mask {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 80%;
    height: 402px;
    top: 0;
    left: 10%;
  }

  .prompt {
    color: #fff;
    position: absolute;
    font-size: 25px;
    line-height: 50px;
    bottom: 5px;
    width: 100%;
  }

  .map-mobile {
    width: 100%;
    min-height: 300px;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('../assets/map.jpg')
  }

  @media screen and (min-width: 600px) {
    .prompt {
      font-size: 25px;
      line-height: 50px;
    }
  }

  @media screen and (max-width: 600px) {
    .prompt {
      font-size: 17px;
      line-height: 25px;
    }
  }

</style>
